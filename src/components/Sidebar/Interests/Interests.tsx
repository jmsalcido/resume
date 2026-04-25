import React from 'react';

interface InterestsProps {
  interestItems: string[];
}

function Interests(props: InterestsProps) {
  return (
    <div className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--text-main)]">Interests</h3>
      <ul className="space-y-1">
        {props.interestItems.map((item, index) => (
          <li key={index} className="text-sm text-[var(--text-muted)]">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
