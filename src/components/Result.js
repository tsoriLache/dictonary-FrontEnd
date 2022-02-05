import React from 'react';
import Meaning from './Meaning';

export default function Result({ res }) {
  return (
    <div id="result" className="result">
      <div className="word">
        <h3>{res.word}</h3>
        {/* <button onclick="playSound()">
            {' '}
            <i className="fas fa-volume-up"></i>
          </button> */}
      </div>
      <div className="details">
        <p>{res.pos}</p>
      </div>
      <Meaning definitions={res.definitions} />
    </div>
  );
}
