// Tags.jsx
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './tags.css';

const Tags = ({ text, bgColor }) => {
  return <Badge className="custom-tag" bg={bgColor}>{text}</Badge>;
};

export default Tags;
