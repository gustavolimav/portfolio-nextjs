// src/components/Projects.tsx

import { link } from 'fs';
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies?: string[]; // Optional array of strings for technologies used
  startDate?: string; // Optional start date
  endDate?: string; // Optional end date
  client?: string; // Optional client name
  link?: string; // Optional link to the project (if applicable)
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  startDate,
  endDate,
  client,
  link,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {client && <p className="text-gray-500 mb-2">Client: {client}</p>}
      {startDate && endDate && (
        <p className="text-gray-500 mb-2">
          {startDate} - {endDate}
        </p>
      )}
      <p className="text-gray-700 mb-2">{description}</p>
      {technologies && technologies.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="text-gray-500 px-2 py-1 rounded-md bg-gray-200">
              {tech}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a href={link} target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">
          View Project
        </a>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Hive Project",
      description:
        "Project carried out in the first period with the theme: “How can we improve the control of materials inside CESAR School classrooms?”",
      startDate: "Fev 2020",
      endDate: "Jun 2020",      
      technologies: ["Python"],
      link: "https://drive.google.com/file/d/13TeBVfBEmRHgs2AuibJrCPpCcOQwI_i_/view",
    },
    {
      title: "Bubbles Project",
      description:
        "Second period project with the objective of improving the health and quality of life of the population through the maintenance of the environment, hygiene and home organization.",
      startDate: "July 2020",
      endDate: "Dez 2020",
      technologies: ["Python", "C", "MySQL"],
      link: "https://www.canva.com/design/DAEN4TRWcxU/0JV6u4zzks6RSqKEeYNNNQ/edit?utm_content=DAEN4TRWcxU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Production alert system",
      client: "Metalúrgica Gerdau",
      startDate: "Fev 2021",
      endDate: "Jun 2021",
      description:
        "The PIN Project aimed to create an efficient reporting system for a rolling mill at Metalúrgica Gerdau. As a customer, Gerdau took on this challenge to make it more efficient in terms of failures in the rolling process.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://www.canva.com/design/DAEddx54XYQ/QZOxy-cA971C14ui-nH8Xg/edit?utm_content=DAEddx54XYQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Salus Project",
      client: "FOZ center for innovation in health and education",
      description:"The SALUS project aims to improve the monitoring and use of data from the FOZ incubator, within the incubation programs.",
      technologies: ["Python"],
      startDate: "July 2021",
      endDate: "Dez 2021",
      link: "https://www.canva.com/design/DAEwg_Ha94o/k_VVbJRNYMPq0Z7hczj1eQ/edit?utm_content=DAEwg_Ha94o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "SOS vestibulandos",
      description: "Project created to help pre-university students with handouts from all areas of knowledge charged at Enem.",
      technologies: [""],
      startDate: "Jan 2020", 
      endDate: "Jan 2022", 
      link: "https://www.instagram.com/sos.vestibulando?utm_medium=copy_link",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
