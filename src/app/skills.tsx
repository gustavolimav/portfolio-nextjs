import React from 'react';
import { useTheme } from '@material-tailwind/react'; // Assuming correct import

const skillsData = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'Kotlin', 'JavaScript', 'TypeScript', 'NodeJS'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring', 'OSGI', 'React', 'JUnit', 'Mockito', 'Playwright'],
  },
  {
    title: 'Tools',
    skills: ['Gradle', 'Maven', 'CSS', 'Docker', 'Git', 'Jenkins'],
  },
  {
    title: 'Cloud',
    skills: ['AWS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch'],
  },
  {
    title: 'Project',
    skills: ['Scrum', 'Kanban', 'TDD', 'BDD'],
  },
  {
    title: 'Others',
    skills: ['GraphQL', 'REST API design', 'Data Structures & Algorithms', 'CI/CD tools (Jenkins)'],
  },
];

function Skills() {
  const theme = useTheme();

  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.title} className="dark:bg-black rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-2">{skillCategory.title}</h2>
            <ul className="list-disc space-y-2">
              {skillCategory.skills.map((skill) => (
                <li key={skill} className="text-white dark:text-gray-200">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
