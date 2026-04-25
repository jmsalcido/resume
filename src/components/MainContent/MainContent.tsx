import React from 'react';
import Summary from './Summary/Summary';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import { Experience as ExperienceType, Projects as ProjectsType, Skill as SkillType } from '../../data/resume';

interface MainContentProps {
  summary: string;
  experience: ExperienceType[];
  projects: ProjectsType;
  skills: SkillType[];
}

function MainContent(props: MainContentProps) {
  return (
    <div className="flex-1 rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 p-6 shadow-[var(--shadow-card)]">
      <Summary text={props.summary} />
      <Experience experienceItems={props.experience}/>
      <Projects projectItems={props.projects.items} header={props.projects.header}/>
      <Skills skillItems={props.skills} />
    </div>
  );
}

export default MainContent;
