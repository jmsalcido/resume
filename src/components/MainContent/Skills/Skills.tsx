import React from 'react';
import { Sparkles } from 'lucide-react';
import { Skill } from '../../../data/resume';

interface SkillsProps {
  skillItems: Skill[];
}

function Skills(props: SkillsProps) {
  if (!props.skillItems || props.skillItems.length === 0) {
    return null;
  }

  const skills = props.skillItems.map((item, index) => {
    return (
      <div key={index} className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-[var(--text-main)]">{item.name}</h3>
          <span className="text-sm text-[var(--accent-sand)]">{item.value}%</span>
        </div>
        <div className="h-2 w-full rounded-[100px] bg-[rgba(207,211,210,0.12)]">
          <div
            className="h-2 rounded-[100px] bg-[var(--primary-soft)] transition-all duration-300"
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
      <h2 className="mb-6 flex items-center gap-3 font-display text-2xl text-[var(--text-main)]">
        <Sparkles aria-hidden="true" size={20} strokeWidth={1.5} />
        Skills &amp; Proficiency
      </h2>
      <div className="space-y-4">
        {skills}
      </div>
    </section>
  );
}

export default Skills;
