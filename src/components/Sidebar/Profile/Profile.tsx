import React from 'react';

interface ProfileProps {
  name: string;
  tagline: string;
}

function Profile(props: ProfileProps) {
  return (
    <div className="p-8 bg-gray-900 text-center">
      <img src='/images/developer.png' width={100} height={100} alt="logo" className="mx-auto mb-4 rounded-full" />
      <h1 className="text-3xl font-bold text-white mb-2">{props.name}</h1>
      <h3 className="text-lg text-gray-300">{props.tagline}</h3>
    </div>
  );
}

export default Profile; 