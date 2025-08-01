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
      <div className="intro">
        <ReactMarkdown>{props.header}</ReactMarkdown>
      </div>
    );
  }

  if (!props.projectItems || props.projectItems.length === 0) {
    return null;
  }

  let projects = props.projectItems.map((item, index) => {
    return (
      <div className="item" key={index}>
        <span className="project-title"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></span> - <span className="project-tagline">{item.description}</span>
      </div>
    );
  });

  return (
    <section className="section projects-section">
      <h2 className="section-title"><span className="icon-holder"><i className="section-icon fa fa-archive"></i></span>Projects</h2>
      {header}
      {projects}
    </section>
  );
}

export default Projects; 