import { faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm('');
    alert(`Submitting Name ${searchTerm}`);
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`https://img.userz.net/embed?text=${searchTerm}&token=eyJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXVzZXItaWQiOiIxMTU0NzkxMTY3MjYxNDM2NTUzMjUiLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJwdWJsaWMiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInB1YmxpYyJdfSwiaWF0IjoxNzAzMzYwMzMwfQ.Jex6YnFP3cWuhX3MfjN_eZmOakyPMIURTlMKQitKXJQ`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      id="marketing-banner"
      tabIndex={-1}
      className="backdrop-blur-md bg-black/30 sticky z-20 flex flex-row justify-between py-4 top-0"
    >
      <div className="flex mb-3 flex-row grow items-center">
        <img
          src="/ailogo.png"
          className="h-20 w-20 mt-3"
          alt="Flowbite Logo"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <form className="w-full flex-grow flex items-center" onSubmit={handleSubmit}>
        <div className="relative flex-grow">
          <div
            className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <FontAwesomeIcon icon={faComment} />
          </div>
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="search"
            id="default-search"
            className="block p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" // Updated width to take the whole width
            placeholder="Ask me anything..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
      <div className="flex items-center flex-shrink-0">
        <button
          data-dismiss-target="#marketing-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-0 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            ></path>
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}

