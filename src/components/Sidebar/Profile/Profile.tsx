import React from 'react';

interface ProfileProps {
  name: string;
  tagline: string;
}

function Profile(props: ProfileProps) {
  return (
    <div className="border-b border-[var(--border-subtle)] p-6 text-center">
      <img src='/images/developer.jpeg' width={100} height={100} alt="Jose Salcido" className="mx-auto mb-4 rounded-[8px]" />
      <h1 className="mb-2 font-display text-3xl text-[var(--text-main)]">{props.name}</h1>
      <h3 className="text-base leading-7 text-[var(--text-muted)]">{props.tagline}</h3>
    </div>
  );
}

export default Profile;
