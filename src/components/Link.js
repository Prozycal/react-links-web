// src/components/Link.js
import React from 'react';
import './Link.css';

const Link = ({ title, url }) => {
  return (
    <div className="link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

export default Link;
