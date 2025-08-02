import React from 'react';
import ReactMarkdown from 'react-markdown';
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
        <p className="font-semibold text-gray-700 mb-2">Technologies:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {item.technologies.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };

  const experienceItem = (item: ExperienceType, index: number) => {
    return (
      <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{item.position}</h3>
            <div className="text-sm text-gray-500 sm:text-right">{item.time}</div>
          </div>
          <div className="text-lg text-gray-600 font-medium">{item.company}, {item.location}</div>
        </div>
        <div className="text-gray-700 leading-relaxed">
          <ReactMarkdown>{item.description}</ReactMarkdown>
          {item.description_extra ? <ReactMarkdown>{item.description_extra}</ReactMarkdown> : null}
          {technologies(item)}
        </div>
      </div>
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3 text-xl">💼</span>
        Experiences
      </h2>
      {props.experienceItems ? props.experienceItems.map(experienceItem) : null}
    </section>
  );
}

export default Experience; 