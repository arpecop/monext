import React, { useEffect, useRef, useState } from 'react';
import SignIn from './SignIn';

function Form({ cookie, url }: { url: string; cookie: { value: string } }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ message: string; system: boolean }[]>([]);
  const strUser = localStorage.getItem('user') || '{}';
  const [user, setUser] = useState(JSON.parse(strUser));
  const [responseReceived, setResponseReceived] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    if (e.key === 'Enter') {
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
    // is last message is from the system
    const lastMessage = messages[messages.length - 1];
    console.log(lastMessage);


    if (lastMessage && !lastMessage.system) {
      setTimeout(() => {
        setMessages([...messages, { message: 'system response', system: true }]);
        setResponseReceived(true);
        scrollToBottom();
      }, 1000);
    }
  }, [messages]);

  return (
    <>
      {!user.id && <SignIn cookie={cookie} url={url} />}
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
            onKeyPress={handleKeyPress}
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
      </div >
      <div ref={messagesEndRef} />

    </>
  );
}
// dd
export default Form;
