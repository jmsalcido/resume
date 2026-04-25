import React from 'react';
import { Education as EducationType } from '../../../data/developer';

interface EducationProps {
  educationItems: EducationType[];
}

function Education(props: EducationProps) {
  const educationItem = (item: EducationType, index: number) => {
    return (
      <div key={index} className="mb-4">
        <h4 className="text-sm font-semibold text-[var(--text-main)]">{item.degree}</h4>
        <h5 className="text-sm text-[var(--text-muted)]">{item.school}</h5>
        <div className="text-xs text-[var(--text-muted)]/62">{item.time}</div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--text-main)]">Education</h3>
      {props.educationItems.map(educationItem)}
    </div>
  );
}

export default Education;
