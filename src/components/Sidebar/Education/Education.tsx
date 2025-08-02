import React from 'react';
import { Education as EducationType } from '../../../data/developer';

interface EducationProps {
  educationItems: EducationType[];
}

function Education(props: EducationProps) {
  const educationItem = (item: EducationType, index: number) => {
    return (
      <div key={index} className="mb-4">
        <h4 className="text-white font-semibold text-sm">{item.degree}</h4>
        <h5 className="text-gray-300 text-sm">{item.school}</h5>
        <div className="text-gray-400 text-xs">{item.time}</div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
      {props.educationItems.map(educationItem)}
    </div>
  );
}

export default Education; 