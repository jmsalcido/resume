import React from 'react';
import ReactMarkdown from 'react-markdown';

interface SummaryProps {
  text: string;
}

function Summary(props: SummaryProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-3 text-xl">👤</span>
        Career Profile
      </h2>
      <div className="text-gray-700 leading-relaxed">
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </div>
    </section>
  );
}

export default Summary; 