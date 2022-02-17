import React, { useState, useRef } from 'react';
import ChoosePart from './ChoosePart';
import posDict from '../helpers/part-of-speech-dict';
import Select from 'react-select';
import './style/Random.css';
import Display from './Display';
import axios from 'axios';
import SERVER_DOMAIN from '../env_config';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf({
  duration: 1000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      background: 'red',
      duration: 2000,
      dismissible: true,
    },
  ],
});

// Display an error notification

const options = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
  { value: 'c', label: 'C' },
  { value: 'd', label: 'D' },
  { value: 'e', label: 'E' },
  { value: 'f', label: 'F' },
  { value: 'g', label: 'G' },
  { value: 'h', label: 'H' },
  { value: 'i', label: 'I' },
  { value: 'j', label: 'J' },
  { value: 'k', label: 'K' },
  { value: 'l', label: 'L' },
  { value: 'm', label: 'M' },
  { value: 'n', label: 'N' },
  { value: 'o', label: 'O' },
  { value: 'p', label: 'P' },
  { value: 'q', label: 'Q' },
  { value: 'r', label: 'R' },
  { value: 's', label: 'S' },
  { value: 't', label: 'T' },
  { value: 'u', label: 'U' },
  { value: 'v', label: 'V' },
  { value: 'w', label: 'W' },
  { value: 'x', label: 'X' },
  { value: 'y', label: 'Y' },
  { value: 'z', label: 'Z' },
];

export default function Random() {
  const parts = Object.keys(posDict);
  const [selectedOption, setSelectedOption] = useState({ value: '' });
  const [data, setData] = useState({});
  const loader = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async (part) => {
    loader.current.style.display = 'block';
    setData({
      res: (
        await axios.get(
          `${SERVER_DOMAIN}/part-of-speech/${part}?letter=${selectedOption.value}`
        )
      ).data,
    });
    loader.current.style.display = 'none';
  };

  const handleClickedSearch = async (input) => {
    console.log(input);
    const cleanInput = input.replace(/\W/g, '');
    setSearchInput(cleanInput);
    const result = await axios.get(`${SERVER_DOMAIN}${cleanInput}`);
    result.data.err ? notyf.error('Not Found') : setData(result.data);
  };

  return (
    <div className="rand-container">
      <div className="svg" ref={loader}>
        <Loader />
      </div>
      <div className="btns-group">
        <Link className="rand-btn" to="/">
          Back to main page
        </Link>
        <Link
          className="rand-btn"
          onClick={() => window.location.reload()}
          to=""
        >
          Click to try again
        </Link>
      </div>
      {data.res || data.pos ? (
        <Display
          data={data}
          setData={setData}
          searchInput={searchInput}
          handleSearch={handleClickedSearch}
        />
      ) : (
        <>
          <Select
            className="selector"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <ChoosePart
            parts={parts}
            searchInput={selectedOption}
            onClick={handleSearch}
          />
        </>
      )}
    </div>
  );
}
