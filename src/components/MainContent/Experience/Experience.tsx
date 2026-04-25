import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BriefcaseBusiness } from 'lucide-react';
import { Experience as ExperienceType } from '../../../data/resume';

interface ExperienceProps {
  experienceItems: ExperienceType[];
}

function Experience(props: ExperienceProps) {
  const technologies = (item: ExperienceType) => {
    if (!item.technologies) {
      return null;
    }

    return (
      <div className="mt-4">
        <p className="mb-2 font-semibold text-[var(--text-main)]">Technologies:</p>
        <ul className="list-inside list-disc space-y-1 text-[var(--text-muted)]/78">
          {item.technologies.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };

  const experienceItem = (item: ExperienceType, index: number) => {
    return (
      <div key={index} className="mb-8 border-b border-[var(--border-subtle)] pb-8 last:border-b-0">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <h3 className="font-display text-xl text-[var(--text-main)]">{item.position}</h3>
            <div className="text-sm text-[var(--text-muted)]/68 sm:text-right">{item.time}</div>
          </div>
          <div className="text-lg font-medium text-[var(--accent-sand)]">{item.company}, {item.location}</div>
        </div>
        <div className="leading-8 text-[var(--text-muted)]">
          <ReactMarkdown>{item.description}</ReactMarkdown>
          {item.description_extra ? <ReactMarkdown>{item.description_extra}</ReactMarkdown> : null}
          {technologies(item)}
        </div>
      </div>
    );
  };

  return (
    <section className="mb-8">
      <h2 className="mb-6 flex items-center gap-3 font-display text-2xl text-[var(--text-main)]">
        <BriefcaseBusiness aria-hidden="true" size={20} strokeWidth={1.5} />
        Experiences
      </h2>
      {props.experienceItems ? props.experienceItems.map(experienceItem) : null}
    </section>
  );
}

export default Experience;
