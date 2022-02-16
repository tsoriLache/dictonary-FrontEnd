import React from 'react';
import './style/ChoosePart.scss';
import axios from 'axios';
import serverDomain from '../env_config';

export default function ChoosePart({ parts, searchInput, setData }) {
  const handleClick = async (part) => {
    const pos = part.slice(0, -1);
    const result = await axios.get(`${serverDomain}${searchInput}/${pos}`);
    setData({ res: { ...result.data } });
  };
  return (
    <div className="button-group">
      {parts.map((part, i) => {
        return i % 2 === 0 ? (
          <button
            onClick={() => {
              handleClick(part);
            }}
            key={i}
            className="btn e-mg-b--md bg--blue-grad"
          >
            {part}
          </button>
        ) : (
          <button
            onClick={() => {
              handleClick(part);
            }}
            key={i}
            className="btn e-mg-b--md bg--purple-grad"
          >
            {part}
          </button>
        );
      })}
    </div>
  );
}
