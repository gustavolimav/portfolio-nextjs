// src/components/Articles.tsx

import React from 'react';

interface ArticleProps {
  title: string;
  excerpt: string;
  link?: string; // Optional link to the article (if applicable)
  publicationDate?: string; // Optional publication date
}

const Article: React.FC<ArticleProps> = ({ title, excerpt, link, publicationDate }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {publicationDate && (
        <p className="text-gray-500 mb-2">Published on: {publicationDate}</p>
      )}
      <p className="text-gray-700">{excerpt}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">
          Read Article
        </a>
      )}
    </div>
  );
};

const Articles: React.FC = () => {
  const articles = [
    {
      title: "O conceito de dívida técnica",
      excerpt: "Um pequeno artigo contextualizando o que é dívida técnica",
      link: "https://medium.com/@gustavolvma/o-conceito-de-d%C3%ADvida-t%C3%A9cnica-7706b9096c0d", // Optional link
      publicationDate: "2024-04-23",
    },
    {
      title: "Article Title 2",
      excerpt: "Another article summary to showcase your writing skills.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
