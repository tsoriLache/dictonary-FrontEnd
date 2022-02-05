import { useState } from 'react';
import './style/App.css';
import axios from 'axios';
import Display from './Display';
import serverDomain from '../env_config';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      const result = await axios.get(`${serverDomain}${searchInput}`);
      setData(result.data);
    } else {
      setData({});
    }
  };

  return (
    <div className="wrapper">
      <audio id="sound"></audio>
      <div className="container">
        <form className="search-box" onSubmit={(e) => handleSearch(e)}>
          <input
            onChange={({ target }) => setSearchInput(target.value)}
            defaultValue={searchInput}
            type="text"
            placeholder="Type the word here..."
            id="inp-word"
          />
          <button type="submit" id="search-btn">
            Search
          </button>
        </form>
        <Display data={data} setData={setData} searchInput={searchInput} />
      </div>
    </div>
  );
}

export default App;
