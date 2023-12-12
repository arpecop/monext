import React from 'react';

interface SearchProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  icon: string;
  value?: string | number;
}

export const Input: React.FC<SearchProps> = ({ label, type, name, placeholder, icon, value }) => {
  return (<>
    <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-white">
      {label}
    </label>
    <div className="relative mb-6">
      <div className="absolute flex items-center pt-2 pl-2.5 pointer-events-none">
        <span
          aria-hidden="true"
          className="material-symbols-outlined w-4 h-4 text-gray-500">{icon}</span>
      </div>
      <input
        type={type}
        name={name}
        value={value || ''}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-black"
        placeholder={placeholder}
      />
    </div>
  </>
  );
}
