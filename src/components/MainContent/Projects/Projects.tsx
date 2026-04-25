import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FolderGit2 } from 'lucide-react';
import { Project } from '../../../data/resume';

interface ProjectsProps {
  projectItems: Project[];
  header: string;
}

function Projects(props: ProjectsProps) {
  let header = null;
  if (props.header) {
    header = (
      <div className="mb-6 leading-8 text-[var(--text-muted)]">
        <ReactMarkdown>{props.header}</ReactMarkdown>
      </div>
    );
  }

  if (!props.projectItems || props.projectItems.length === 0) {
    return null;
  }

  const projects = props.projectItems.map((item, index) => {
    return (
      <div className="mb-4" key={index}>
        <span className="font-semibold text-[var(--primary-soft)] hover:text-[var(--text-main)]">
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
        </span> - <span className="text-[var(--text-muted)]">{item.description}</span>
      </div>
    );
  });

  return (
    <section className="mb-8">
      <h2 className="mb-6 flex items-center gap-3 font-display text-2xl text-[var(--text-main)]">
        <FolderGit2 aria-hidden="true" size={20} strokeWidth={1.5} />
        Projects
      </h2>
      {header}
      {projects}
    </section>
  );
}

export default Projects;
