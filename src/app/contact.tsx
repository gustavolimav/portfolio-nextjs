// src/components/Contact.tsx (assuming /src folder)
import React from 'react';

interface ContactProps { } // Optional interface for props

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold mb-4">Contacts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 15a2 2 0 0 1 2-2h6m6 0a2 2 0 0 1 2 2h6m-12 6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h9.01M15 13a2 2 0 0 0 2-2v-3c0-1.38-.75-2.5-2-2.5s-2 1.12-2 2.5v3a2 2 0 0 0 2 2z"></path>
          </svg>
          <span className="text-gray-700">
            Email: gustavolvma@gmail.com
          </span>
        </li>

        <li className="flex items-center space-x-2">
          <a
            href="http://leetcode.com/gugalvm/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blank hover:underline"
          >
            Number: +55 81 993036331
          </a>
        </li>

        <li className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-blue-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M16 8c0 4-2 7-5 7s-5-3-5-7 2-7 5-7 5 3 5 7zM22 8c0 7-4 12-11 12s-11-5-11-12 4-12 11-12 11 5 11 12z"></path>
          </svg>
          <a
            href="https://linkedin.com/in/gustavolimav/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-700 hover:underline"
          >
            Linkedin
          </a>
        </li>

        <li className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M15 11.313l-7-4 1.4-1.4L18.6 13.7l-7 4zM5 14v3l3-3z"
            ></path>
          </svg>
          <a
            href="http://leetcode.com/gugalvm/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blank hover:underline"
          >
            Leetcode
          </a>
        </li>

        <li className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-blank"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3v14a8 8 0 1 0 8-8zM5 11H3V8h2v3zM18 11h-2V8h2v3zM14 11h-2V8h2v3z"
            ></path>
          </svg>
          <a
            href="https://github.com/gustavolimav"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blank hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
