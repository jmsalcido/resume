import React from 'react';
import { Skill } from '../../../data/resume';

interface SkillsProps {
  skillItems: Skill[];
}

function Skills(props: SkillsProps) {
  if (!props.skillItems || props.skillItems.length === 0) {
    return null;
  }

  let skills = props.skillItems.map((item, index) => {
    return (
      <div key={index} className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <span className="text-sm text-gray-500">{item.value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${item.value}%` }}
            role="progressbar" 
            aria-valuenow={item.value} 
            aria-valuemin={0} 
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3 text-xl">🚀</span>
        Skills &amp; Proficiency
      </h2>
      <div className="space-y-4">
        {skills}
      </div>
    </section>
  );
}

export default Skills; 