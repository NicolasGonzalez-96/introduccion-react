// MyCard.jsx
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageSrc, name, description, tags }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <div className="card-body">
        <h6><b>{name}</b></h6>
        <p>{description}</p>
        <Tags {...tags} />
      </div>
    </div>
  );
};

export default MyCard;
