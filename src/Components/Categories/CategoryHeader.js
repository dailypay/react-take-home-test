import './styles.header.css';
import React from 'react';

export default function CategoryHeader(props) {
  return (
    <h1 className="category-header">
      {props.title}
    </h1>
  );
}
