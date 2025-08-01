import React from 'react';

interface ProfileProps {
  name: string;
  tagline: string;
}

function Profile(props: ProfileProps) {
  return (
    <div className="profile-container">
      <img src='/images/developer.png' width={100} height={100} alt="logo" />
      <h1 className="name">{props.name}</h1>
      <h3 className="tagline">{props.tagline}</h3>
    </div>
  );
}

export default Profile; 