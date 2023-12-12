import { React, useState } from 'react';
import { Input } from './Input';

type AuthSection = 'signin' | 'signup' | 'forgot' | 'codeconfirm' | 'changepassword';

interface AuthProps {
  section: AuthSection;
}

const AuthForm: React.FC = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <form className="w-full max-w-xs mx-auto mt-20 space-y-3 mb-3" onSubmit={handleSubmit}>
    <h1>{title}</h1>
    {children}
  </form>
);

const Auth: React.FC<AuthProps> = () => {
  const [section, setSection] = useState<AuthSection>('signin');
  // error state
  const [error, setError] = useState<string | null>(null);


  // onSubmit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // iterate over form elements and get their values , only input elements
    const formElements = event.currentTarget.elements;
    const formData: { [key: string]: string } = {};
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      formData[element.name] = element.value;
    }
    console.log(formData);
    // fecch api '/api/auth' with form data
    const response = fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    //




    alert('Submitting Form')

  };


  // Render different components based on the section state
  switch (section) {
    case 'signin':
      return (

        <form className="w-full max-w-xs mx-auto  space-y-3 mb-3" onSubmit={handleSubmit} method="post">
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
          <Input
            label=""
            type="hidden"
            name="type"
            placeholder=""
            icon=""
            value="signin"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 mt-3"
          >
            Sign In
          </button>

          <a
            type="button"
            onClick={() => setSection('signup')}
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Don't have an account? Sign Up
          </a>
        </form>
      );
    case 'signup':
      return <AuthForm title="Sign Up" />;
    case 'forgot':
      return <AuthForm title="Forgot Password" />;
    case 'codeconfirm':
      return <AuthForm title="Code Confirmation" />;
    case 'changepassword':
      return <AuthForm title="Change Password" />;
    default:
      return null;
  }
};


export default Auth;
