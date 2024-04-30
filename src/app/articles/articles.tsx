// src/components/Articles.tsx

import React from 'react';

interface ArticleProps {
  title: string;
  excerpt?: string;
  link: string;
  publicationDate: string;
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
      title: "Indicadores Comuns para a Identificação de Dívida Técnica em código",
      excerpt: "Alguns indicadores comuns para identificar dívida técnica em código",
      link: "https://medium.com/@gustavolvma/indicadores-comuns-para-a-identifica%C3%A7%C3%A3o-de-d%C3%ADvida-t%C3%A9cnica-3208a92b87f7",
      publicationDate: "2024-04-24",
    },
    {
      title: "Melhores práticas para a prevenção de débito técnico desde o início do projeto",
      excerpt: "Um pequeno artigo falando das melhores práticas para previnir Débito técnico de codigo",
      link: "https://medium.com/@gustavolvma/melhores-pr%C3%A1ticas-para-a-preven%C3%A7%C3%A3o-de-d%C3%A9bito-t%C3%A9cnico-desde-o-in%C3%ADcio-do-projeto-d868bbbafa5e",
      publicationDate: "2024-04-24",
    },
    {
      title: "Recomendações de Processos e Ferramentas de Apoio para Gerenciamento de Débito Técnico",
      excerpt: "Algumas Ferramentas para genrenciamento de débito técnico",
      link: "https://medium.com/@gustavolvma/recomenda%C3%A7%C3%B5es-de-processos-e-ferramentas-de-apoio-para-gerenciamento-de-d%C3%A9bito-t%C3%A9cnico-837d465752aa",
      publicationDate: "2024-04-24",
    },
    {
      title: "10 Melhores Práticas para Escrever APIs Node.js Como um Profissional",
      excerpt: "Recomendações para escrever APIs Node.js de qualidade",
      link: "https://medium.com/@gustavolvma/10-melhores-pr%C3%A1ticas-para-escrever-apis-node-js-como-um-profissional-0b35e1030272",
      publicationDate: "2024-04-29",
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
