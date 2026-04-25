import React from 'react';
import ReactMarkdown from 'react-markdown';
import { UserRound } from 'lucide-react';

interface SummaryProps {
  text: string;
}

function Summary(props: SummaryProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 flex items-center gap-3 font-display text-2xl text-[var(--text-main)]">
        <UserRound aria-hidden="true" size={20} strokeWidth={1.5} />
        Career profile
      </h2>
      <div className="leading-8 text-[var(--text-muted)]">
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </div>
    </section>
  );
}

export default Summary;
