import React from 'react';
import { Language } from '../../../data/developer';

interface LanguagesProps {
  languageItems: Language[];
}

function Languages(props: LanguagesProps) {
  const languageItem = (item: Language, index: number) => {
    return (
      <li key={index} className="mb-1 text-sm text-[var(--text-muted)]">
        {item.name} <span className="text-[var(--text-muted)]/62">({item.level})</span>
      </li>
    );
  };

  return (
    <div className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-[var(--text-main)]">Languages</h3>
      <ul className="space-y-1">
        {props.languageItems.map(languageItem)}
      </ul>
    </div>
  );
}

export default Languages;
