import React from 'react';
import { Language } from '../../../data/developer';

interface LanguagesProps {
  languageItems: Language[];
}

function Languages(props: LanguagesProps) {
  const languageItem = (item: Language, index: number) => {
    return (
      <li key={index} className="text-gray-300 text-sm mb-1">
        {item.name} <span className="text-gray-400">({item.level})</span>
      </li>
    );
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
      <ul className="space-y-1">
        {props.languageItems.map(languageItem)}
      </ul>
    </div>
  );
}

export default Languages; 