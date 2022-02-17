import React from 'react';
import './style/Loader.scss';

export default function Loader() {
  return (
    <svg>
      <circle className="circle" cx="70" cy="70" r="50"></circle>
    </svg>
  );
}
