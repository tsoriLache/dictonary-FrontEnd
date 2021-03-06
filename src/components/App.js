import { useState } from 'react';
import './style/App.css';
import axios from 'axios';
import Display from './Display';
import SERVER_DOMAIN from '../env_config';
import { Link } from 'react-router-dom';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    searchInput !== ''
      ? setData((await axios.get(`${SERVER_DOMAIN}${searchInput}`)).data)
      : setData({});
  };

  const handleClickedSearch = async (input) => {
    const cleanInput = input.replace(/\W/g, '');
    const result = await axios.get(`${SERVER_DOMAIN}${cleanInput}`);
    setData(result.data);
    setSearchInput(cleanInput);
  };

  return (
    <div className="wrapper">
      <Link className="rand-btn" to="part-of-speech">
        Click to learn new Words
      </Link>
      <div className="container">
        <form className="search-box" onSubmit={(e) => handleSearch(e)}>
          <input
            onChange={({ target }) => setSearchInput(target.value)}
            value={searchInput}
            type="text"
            placeholder="Type the word here..."
            id="inp-word"
          />
          <button type="submit" id="search-btn">
            ➡
          </button>
        </form>

        <Display
          data={data}
          setData={setData}
          searchInput={searchInput}
          handleSearch={handleClickedSearch}
        />
      </div>
    </div>
  );
}

export default App;
