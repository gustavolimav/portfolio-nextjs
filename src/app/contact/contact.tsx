import React from 'react';

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold mb-4">Contacts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-center space-x-2">
          <a
            href="http://leetcode.com/gugalvm/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-700 hover:underline"
          >
            Leetcode
          </a>
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
          <span>
            Email: gustavolvma@gmail.com
          </span>
        </li>

        <li className="flex items-center space-x-2">
          <a
            href="https://github.com/gustavolimav"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-700 hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
