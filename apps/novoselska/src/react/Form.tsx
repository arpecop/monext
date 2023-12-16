import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
type Message = {
  message: string;
  system: boolean;
};
function Form({ cookie, url }: { url: string; cookie: { value: string } }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const strUser = localStorage.getItem('user') || '{}';
  const [user, setUser] = useState(JSON.parse(strUser));
  const [responseReceived, setResponseReceived] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const channelid = 'yourChannelId1';
  const socket = io('https://socket.kloun.lol', {
    query: { channelid }
  });

  useEffect(() => {
    // Disconnect the socket
    socket.disconnect();

    // Connect the socket again
    socket.connect();

    // on socket message received, add it to the messages array
    socket.on('message', (msg: string) => {
      const { response } = JSON.parse(msg);
      const message = response;
      setMessages((prevMessages: Message[]) => {

        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.system) {
          // Create a new message object with the updated message
          const updatedLastMessage = { ...lastMessage, message: lastMessage.message + message };
          // Replace the last message with the updated one
          return [...prevMessages.slice(0, -1), updatedLastMessage];

        } else {
          const systemMessageIndex = prevMessages.findIndex((msg) => msg.system);
          if (systemMessageIndex !== -1) {
            // Add null check for prevMessages[systemMessageIndex]
            const updatedSystemMessage = prevMessages[systemMessageIndex] ? { ...prevMessages[systemMessageIndex], message: (prevMessages[systemMessageIndex]?.message || '') + message } : null;
            // Replace the system message with the updated one
            return [...prevMessages.slice(0, systemMessageIndex), updatedSystemMessage, ...prevMessages.slice(systemMessageIndex + 1)] as Message[];
          } else {
            return [...prevMessages, { message, system: true }] as Message[];
          }
        }
      });

      scrollToBottom();

    });

    // Cleanup function
    return () => {
      // Disconnect the socket when the component is unmounted
      socket.disconnect();
    };
  }, []);



  window.addEventListener('storage', function (event) {
    if (event.key === 'user') {
      setUser(JSON.parse(event.newValue ?? '{}'));
    }
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (responseReceived) {
      setMessages([...messages, { message, system: false }]);
      setMessage('');
      setResponseReceived(false);
      scrollToBottom();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {

    const lastMessage = messages[messages.length - 1];
    console.log(lastMessage);


    if (lastMessage && !lastMessage.system) {
      // create dummy last   message  that is from the system
      setMessages([...messages, { message: '', system: true }]);

      fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: lastMessage.message })
      }).then((response) => {
        response.json().then(() => {
          setResponseReceived(true);
          scrollToBottom();
        });
      }
      );
    }
  }, [messages]);

  return (
    <>
      {!user.id && <GoogleLogin loginUrl={url} />}
      <div className="fixed bottom-0 flex w-full flex-col items-center space-y-3 bg-gradient-to-b from-transparent via-gray-100 to-gray-100 p-5 pb-3 sm:px-0">
        <form className="relative w-full max-w-screen-md rounded-xl border border-gray-200 bg-white px-4 pb-2 pt-3 shadow-lg sm:pb-3 sm:pt-4">
          <textarea
            required
            rows={1}
            autoFocus
            placeholder="Send a message"
            spellCheck="false"
            className="w-full pr-10 focus:outline-none"
            value={message}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyPress}
            disabled={!responseReceived}
          />
          <button
            className="absolute inset-y-0 right-3 my-auto flex h-8 w-8 items-center justify-center rounded-md transition-all bg-green-500 hover:bg-green-600"
            onClick={handleSendMessage}
            disabled={!responseReceived}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white" strokeWidth="2">
              <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
      <div className='mb-12 bg-black w-full'>
        {messages.map((msg, index) => (

          <div
            key={index}
            className={msg.system ? "flex w-full items-center justify-center border-b border-gray-200 py-2 bg-gray-100" : "flex w-full items-center justify-center border-b border-gray-200 py-2 bg-white"}
          >
            <div
              className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0"
            >
              <div className="p-1.5 text-white">
                <img src={msg.system ? "/avatar.jpg" : user.picture} className="w-14 rounded-full" />
              </div>

              <div className="prose mt-1 w-full break-words prose-p:leading-relaxed pr-6">
                <div className="text-xs text-slate-500">{msg.system ? "Medeia" : "Ти"}</div>
                {msg.message}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
}
// dd



function GoogleLogin({ loginUrl }: { loginUrl: string }) {
  const handleLoginClick = () => {
    window.open(loginUrl, '_blank', 'width=500,height=600');
  };
  return (
    <a
      href="#"
      onClick={handleLoginClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 flex"
    >
      <svg
        fill="#FFFFFF"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="icon w-6 h-6 inline-block mr-2"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"
        ></path>
      </svg>
      Продължи с Google
    </a>
  );
}

export default Form;
