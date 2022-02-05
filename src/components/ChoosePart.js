import React from 'react';
import './style/ChoosePart.scss';
export default function ChoosePart({ parts }) {
  return (
    <div className="button-group">
      {parts.map((part, i) => {
        return i % 2 === 0 ? (
          <button className="e-mg-b--md bg--blue-grad">{part}</button>
        ) : (
          <button className="e-mg-b--md bg--purple-grad">{part}</button>
        );
      })}
    </div>
  );
}
