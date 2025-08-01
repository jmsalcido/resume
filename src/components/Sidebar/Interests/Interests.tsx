import React from 'react';

interface InterestsProps {
  interestItems: string[];
}

function Interests(props: InterestsProps) {
  return (
    <div className="interests-container container-block">
      <h2 className="container-block-title">Interests</h2>
      <ul className="list-unstyled interests-list">
        {props.interestItems.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default Interests; 