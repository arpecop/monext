import React, { useState } from 'react';
import { Input } from './Input';

type AuthSection = 'signin' | 'signup' | 'forgot' | 'codeconfirm' | 'changepassword';

interface AuthProps {
  section: AuthSection;
}



const Auth: React.FC<AuthProps> = () => {
  const [section, setSection] = useState<AuthSection>('signin');
  // error state
  const [error, setError] = useState<string | null>(null);


  // onSubmit handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // iterate over form elements and get their values , only input elements
    const formElements = event.currentTarget.elements;
    const formData: { [key: string]: string } = {};
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      formData[element.name] = element.value;
    }
    // filter out empty values reduce the object to only the values that are not empty
    const filteredData = Object.keys(formData).reduce((acc: { [key: string]: string }, key) => {
      if (formData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});



    const form = new URLSearchParams();
    for (const key in filteredData) {
      form.append(key, String(filteredData[key]));
    }

    const response = await fetch('/api/auth', {
      method: 'POST',
      body: form,
    });
    const data = await response.json();
    console.log(data);


    // alert('Submitting Form')

  };


  // Render different components based on the section state
  switch (section) {
    case 'signin':
      return (

        <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <Input
            label="@username"
            type="text"
            name="username"
            placeholder="elonmusk"
            icon="badge"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            icon="lock"
          />
          <input
            type="hidden"
            name="action"
            value="signin"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 mt-3"
          >
            Login
          </button>

          <a

            onClick={() => setSection('signup')}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Don't have an account? Sign Up
          </a>
        </form>
      );
    case 'signup':
      return (
        <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Input
            label="@username"
            type="text"
            name="username"
            placeholder="elonmusk"
            icon="badge"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            icon="lock"
          />
          <input
            type="hidden"
            name="action"
            value="signin"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 mt-3"
          >
            Register
          </button>

          <a

            onClick={() => setSection('signin')}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Already have an account? Sign In
          </a>
        </form>
      );
    case 'forgot':
      return <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit} method="post" />;
    case 'codeconfirm':
      return <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit} method="post" />;
    case 'changepassword':
      return <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit} method="post" />;
    default:
      return null;
  }
};


export default Auth;
