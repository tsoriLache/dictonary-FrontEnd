import React from 'react';

export default function Result() {
  const word = 'hello';
  const partOfSpeech = 'n.';
  const definition = 'greating word in english also mean peace';
  return (
    <div id="result" class="result">
      <div class="word">
        <h3>{word}</h3>
        {/* <button onclick="playSound()">
            {' '}
            <i class="fas fa-volume-up"></i>
          </button> */}
      </div>
      <div class="details">
        <p>{partOfSpeech}</p>
      </div>
      <p class="word-meaning">{definition}</p>
    </div>
  );
}
