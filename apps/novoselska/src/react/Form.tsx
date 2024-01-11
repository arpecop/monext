import { gql } from '@apollo/client';
import type { Session } from '@auth/core/types';
import { getSession } from "auth-astro/client";
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import client from '../lib/client';
import { useLocalStorage } from '../lib/useStorage';
console.log(getSession);


type Message = {
  message: string;
  msgid: string;
};
const MY_QUERY = gql`
subscription MyQuery($userid: String = "", $channel: Int = 1000) {
  chat_history(limit: 30, where: {userid: {_eq: $userid}, channel: {_eq: $channel}}, order_by: {id: asc}) {
    message
    id
    threadid
    msgid
  }
}
`;
function Form({ topic, session }: { topic: number, session: Session }) {
  const [user] = useLocalStorage("user", { id: '1', name: 'Medeia', picture: '/avatar.jpg' })
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [numRows, setNumRows] = useState(1);
  const [minheight, setMinheight] = useState(26);

  const [responseReceived, setResponseReceived] = useState(false);
  const [threadid, setThreadId] = useState(null);
  const [loading, setLoading] = useState(false);

  const preRef = useRef(null);


  const messagesEndRef = useRef<HTMLDivElement>(null);
  window.addEventListener('storage', function (event) {
    if (event.key === 'user') {

      // setUser(JSON.parse(event.newValue ?? '{}'));
      setResponseReceived(true);
    }
  });



  const handleSendMessage = () => {
    setMessage('');
    setMinheight(26);
    setNumRows(1);
    setLoading(true);
    setMessages((prevMessages) => [...prevMessages, { message, msgid: 'user' }]);


    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, userid: user?.id, threadid, topic })
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);

        setResponseReceived(true);
        setLoading(false);
        if (json.error) {
          setMessages((prevMessages) => [...prevMessages, { message: json.error, msgid: 'system' }]);
        }
      });
    });
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }


  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setResponseReceived(true);
    client.subscribe({ query: MY_QUERY, variables: { userid: user?.id } }).subscribe({
      next(data) {
        const { chat_history } = data.data;
        console.log(chat_history);

        if (chat_history.length === 0) {
          return;
        }
        const lastMessage = chat_history[0];
        // setMessages((prevMessages) => [...prevMessages, { message: lastMessage.chunk, system: true }]);

        setMessages(chat_history)
        setThreadId(lastMessage.threadid);
      },
      error(err) { console.error('err', err) },
      complete() { console.log('complete') },
    })
  }, [user?.id]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    calculateLines();
  };
  const calculateLines = debounce(() => {
    if (preRef.current) {
      const lh = (preRef.current as HTMLPreElement).scrollHeight;
      const lines = Math.min(Math.max(message.split('\n').length, Math.round(lh / 26)), 7);
      setNumRows(lines);
    }
  }, 300);

  useEffect(() => {
    calculateLines();
  }, [message]);

  return (
    <div className='flex flex-col w-full grow justify-center items-center'>

      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0 grow-0">
        {loading && <div className='absolute flex justify-center left-4 -mt-12'>
          <img src='/type.gif' alt="" className='h-10' />
        </div>}
        <div className="absolute w-full z-0"
        >
          <pre ref={preRef} className="text-gray-400 px-2 py-1 rounded-md max-w-screen-md whitespace-pre-wrap break-words text-transparent" style={{ minHeight: minheight }}
          >{message}.</pre>
        </div>
        <form className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4 z-10" method='post' onSubmit={handleSendMessage}>
          <textarea
            name="message"
            maxLength={250}
            rows={numRows}
            autoFocus
            placeholder={!user?.id ? 'Влезте с Google, за да започнете да пишете' : 'Напишете съобщение'}
            spellCheck="false"
            className="w-full pr-10 focus:outline-none"
            value={message}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyPress}
            disabled={!responseReceived || !user?.id}
          />
          <button
            className={numRows > 3 ? "absolute inset-y-0 right-8 bottom-0 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all bg-green-500 hover:bg-green-600" : "absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all bg-green-500 hover:bg-green-600"}
            onClick={handleSendMessage}
            disabled={!responseReceived}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white" strokeWidth="2">
              <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
      {messages.map((msg, index) => (
        <div
          key={index}
          className="grow-0 flex w-full items-center justify-center border-b border-gray-200 py-2"
          style={{ minHeight: 60, backgroundColor: msg.msgid === 'system' ? '#f5f5f5' : 'white' }}
        >
          <div
            className="flex   w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0"
          >
            <div className="relative">
              <img src={msg.msgid === 'system' ? "/avatar.jpg" : user?.picture} className="w-8 sm:w-14 rounded-full" />
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div className="prose mt-1 w-full  prose-p:leading-relaxed">
              {msg.message}
            </div>
          </div>
        </div>
      ))}
      <div className='grow' />
      <div id="bottom" ref={messagesEndRef} className="flex w-full h-20  grow-0" />
    </div>
  );
}



export default Form;


