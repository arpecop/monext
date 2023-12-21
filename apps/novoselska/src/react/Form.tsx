import { gql } from '@apollo/client';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import client from '../lib/client';

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


function Form({ url, topic }: { topic: number, url: string; cookie?: { value: string } }) {
  const strUser = localStorage.getItem('user') || '{}';
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState<Message[]>([]);
  const [numRows, setNumRows] = useState(1);
  const [minheight, setMinheight] = useState(26);
  const [user, setUser] = useState(JSON.parse(strUser));
  const [responseReceived, setResponseReceived] = useState(false);
  const [threadid, setThreadId] = useState(null);
  const [loading, setLoading] = useState(false);

  const preRef = useRef(null);


  const messagesEndRef = useRef<HTMLDivElement>(null);
  window.addEventListener('storage', function (event) {
    if (event.key === 'user') {
      setUser(JSON.parse(event.newValue ?? '{}'));
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
      body: JSON.stringify({ message, userid: user.id, threadid, topic })
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

    if (e.key === 'Enter' && e.shiftKey) {


    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      // const newlines = message.split('\n').length;
      // setMinheight(Math.max(newlines * 26 + 26, 26)); // Ensure  
      // setMessage(message);
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
    client.subscribe({ query: MY_QUERY, variables: { userid: user.id } }).subscribe({
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
  }, [user.id]);

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
      {!user.id && <GoogleLogin loginUrl={url} />}
      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0 grow-0">
        {loading && <div className='absolute flex justify-center left-4 -mt-12'>
          <img src='/type.gif' alt="" className='h-10' />
        </div>}
        <div className="absolute w-full z-0"
        >
          <pre ref={preRef} className="text-gray-400 px-2 py-1 rounded-md max-w-screen-md whitespace-pre-wrap break-words text-transparent" style={{ minHeight: minheight }}
          >{message}.</pre>
        </div>
        <form className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4 z-10" method='post' onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}>

          <textarea
            required
            maxLength={250}
            rows={numRows}
            autoFocus
            placeholder={!user.id ? 'Влезте с Google, за да започнете да пишете' : 'Напишете съобщение'}
            spellCheck="false"
            className="w-full pr-10 focus:outline-none"
            value={message}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyPress}
            disabled={!responseReceived || !user.id}
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
          className={msg.msgid === 'system' ? "grow-0 flex w-full items-center justify-center border-b border-gray-200 py-2 bg-gray-100" : "flex w-full items-center justify-center border-b border-gray-200 py-2 bg-white grow-0"}
        >
          <div
            className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0"
          >
            <div className="p-1.5 text-white">
              <img src={msg.msgid === 'system' ? "/avatar.jpg" : user.picture} className="w-14 rounded-full" />
            </div>
            <div className="prose mt-1 w-full break-words prose-p:leading-relaxed pr-6">
              <div className="text-xs text-slate-500">{msg.msgid === 'system' ? "Medeia" : user.name}</div>
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

function GoogleLogin({ loginUrl }: { loginUrl: string }) {
  return (
    <a
      href={loginUrl}
      className="py-2 pr-4 rounded-md  flex border border-gray-200 hover:border-gray-300 h-10 bg-white items-center justify-center space-x-2 relative text-sm text-gray-700 pl-10 shadow-md overflow-hidden w-1/3 max-w-xs"
    >
      <div className="bg-blue-500 hover:bg-blue-600   flex absolute left-0 top-0 h-10 px-1.5   items-center rounded-l-md">
        <svg
          fill="#FFFFFF"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-6 h-6"
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"
          ></path>
        </svg>
      </div>
      Продължи с Google
    </a>
  );
}

export default Form;


