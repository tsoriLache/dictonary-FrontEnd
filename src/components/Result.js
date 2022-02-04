import React from 'react';

export default function Result() {
  const word = 'hello';
  const partOfSpeech = 'n.';
  const definition = 'greating word in english also mean peace';
  return (
    <div id="result" className="result">
      <div className="word">
        <h3>{word}</h3>
        {/* <button onclick="playSound()">
            {' '}
            <i className="fas fa-volume-up"></i>
          </button> */}
      </div>
      <div className="details">
        <p>{partOfSpeech}</p>
      </div>
      <p className="word-meaning">{definition}</p>
    </div>
  );
}
