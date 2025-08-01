import React from 'react';
import { Language } from '../../../data/developer';

interface LanguagesProps {
  languageItems: Language[];
}

function Languages(props: LanguagesProps) {
  const languageItem = (item: Language, index: number) => {
    return (
      <li key={index}>{item.name} <span className="lang-desc">({item.level})</span></li>
    );
  };

  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">Languages</h2>
      <ul className="list-unstyled interests-list">
        {props.languageItems.map(languageItem)}
      </ul>
    </div>
  );
}

export default Languages; 