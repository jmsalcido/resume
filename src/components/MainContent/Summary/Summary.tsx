import React from 'react';
import ReactMarkdown from 'react-markdown';

interface SummaryProps {
  text: string;
}

function Summary(props: SummaryProps) {
  return (
    <section className="section summary-section">
      <h2 className="section-title"><span className="icon-holder"><i className="section-icon fa fa-user"></i></span>Career Profile</h2>
      <div className="summary">
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </div>
    </section>
  );
}

export default Summary; 