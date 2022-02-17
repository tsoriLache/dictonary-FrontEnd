import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Random from './components/Random';
import ErrorPage from './components/ErrorPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="part-of-speech" element={<Random />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
