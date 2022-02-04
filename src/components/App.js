import Result from './Result';
import './style/App.css';

function App() {
  return (
    <div class="wrapper">
      <audio id="sound"></audio>
      <div class="container">
        <div class="search-box">
          <input
            type="text"
            placeholder="Type the word here..."
            id="inp-word"
          />

          <button id="search-btn">Search</button>
        </div>
        <Result />
      </div>
    </div>
  );
}

export default App;
