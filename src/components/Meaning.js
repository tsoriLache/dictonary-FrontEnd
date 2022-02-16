import './style/Meaning.css';

import React, { useState, useEffect, createRef } from 'react';

export default function Meaning({ definitions }) {
  const [definitionsRefs, setDefinitionsRefs] = useState([]);
  const definitionsLength = definitions.length;

  useEffect(() => {
    // add or remove refs
    setDefinitionsRefs((definitionsRefs) =>
      Array(definitionsLength)
        .fill()
        .map((_, i) => definitionsRefs[i] || createRef())
    );
  }, []);

  useEffect(() => {
    showSlides(1);
    document.title = `Dictionary - ${word.toLowerCase()}`;
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let i;
    if (n >= definitionsRefs.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = definitionsRefs.length - 1;
    }
    for (i = 0; i < definitionsRefs.length; i++) {
      if (definitionsRefs[i].current) {
        definitionsRefs[i].current.style.display = 'none';
      }
    }
    if (definitionsRefs[slideIndex] && definitionsRefs[slideIndex].current) {
      definitionsRefs[slideIndex].current.style.display = 'block';
    }
  }
  return (
    <>
      <div className="slideshow-container">
        {definitions.map((definition, i) => {
          return (
            <div key={i} ref={definitionsRefs[i]} className="mySlides">
              <q>{definition}</q>
              <p className="author">
                - {i + 1}/{definitions.length} -
              </p>
            </div>
          );
        })}

        <button
          className="prev"
          onClick={() => {
            plusSlides(-1);
          }}
        >
          ❮
        </button>
        <button
          className="next"
          onClick={() => {
            plusSlides(1);
          }}
        >
          ❯
        </button>
      </div>
    </>
  );
}
