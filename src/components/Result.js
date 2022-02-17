import React from 'react';
import Meaning from './Meaning';

export default function Result({ res, handleSearch }) {
  return (
    <div id="result" className="result">
      <div className="word">
        <h3>{res.word}</h3>
      </div>
      <div className="details">
        <p>{res.pos}</p>
      </div>
      <Meaning
        definitions={res.definitions}
        word={res.word}
        handleSearch={handleSearch}
      />
    </div>
  );
}
