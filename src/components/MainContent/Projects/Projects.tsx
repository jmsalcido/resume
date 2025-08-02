import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Project } from '../../../data/resume';

interface ProjectsProps {
  projectItems: Project[];
  header: string;
}

function Projects(props: ProjectsProps) {
  let header = null;
  if (props.header) {
    header = (
      <div className="mb-6 text-gray-700 leading-relaxed">
        <ReactMarkdown>{props.header}</ReactMarkdown>
      </div>
    );
  }

  if (!props.projectItems || props.projectItems.length === 0) {
    return null;
  }

  let projects = props.projectItems.map((item, index) => {
    return (
      <div className="mb-4" key={index}>
        <span className="font-semibold text-blue-600 hover:text-blue-800">
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
        </span> - <span className="text-gray-700">{item.description}</span>
      </div>
    );
  });

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3 text-xl">📁</span>
        Projects
      </h2>
      {header}
      {projects}
    </section>
  );
}

export default Projects; 