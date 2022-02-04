import { useState } from 'react';
import ChoosePart from './ChoosePart';
import Result from './Result';
import './style/App.css';
import axios from 'axios';

function App() {
  const serverDomain = 'http://localhost:8000/';
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchInput);
    const res = await axios.get(`${serverDomain}${searchInput}`);
    console.log(res);
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
        {/* <Result /> */}
        {/* <ChoosePart /> */}
      </div>
    </div>
  );
}

export default App;
