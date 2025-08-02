import React from 'react';

interface InterestsProps {
  interestItems: string[];
}

function Interests(props: InterestsProps) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Interests</h3>
      <ul className="space-y-1">
        {props.interestItems.map((item, index) => (
          <li key={index} className="text-gray-300 text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests; 