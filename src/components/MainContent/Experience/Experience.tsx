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
      <div>
        <p><b>Technologies:</b></p>
        <ul>
          {item.technologies.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };

  const experienceItem = (item: ExperienceType, index: number) => {
    return (
      <div key={index} className="item">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{item.position}</h3>
            <div className="time">{item.time}</div>
          </div>
          <div className="company">{item.company}, {item.location}</div>
        </div>
        <div className="details">
          <ReactMarkdown>{item.description}</ReactMarkdown>
          {item.description_extra ? <ReactMarkdown>{item.description_extra}</ReactMarkdown> : null}
          {technologies(item)}
        </div>
      </div>
    );
  };

  return (
    <section className="section experiences-section">
      <h2 className="section-title"><span className="icon-holder"><i className="section-icon fa fa-briefcase"></i></span>Experiences</h2>
      {props.experienceItems ? props.experienceItems.map(experienceItem) : null}
    </section>
  );
}

export default Experience; 