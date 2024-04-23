// src/components/Contact.tsx (assuming /src folder)
import React from 'react';

interface DescriptionProps { } // Optional interface for props

const Description: React.FC<DescriptionProps> = () => {
  return (
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold md:text-5xl mb-4">Gustavo Lima</h1>
        <h2 className="text-xl font-medium mb-4">
          ENGENHEIRO DE SOFTWARE
        </h2>
        <p className="text-lg font-medium mb-4">
          Engenheiro de software com mais de 3 anos de experiência em desenvolvimento web full stack, especializado em Java, Javascript, Mysql e Elasticsearch. Especialista nas áreas de plataformas de pesquisa e CRM como resultado do trabalho no produto de pesquisa do Liferay DXP e na plataforma de CRM.
        </p>
      </div>
  );
};

export default Description;
