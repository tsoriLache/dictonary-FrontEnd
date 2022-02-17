import React from 'react';
import './style/ErrorPage.css';
export default function ErrorPage() {
  return (
    <div className="cont">
      <h1 className="h1">404</h1>
      <p className="p">Oops! Something is wrong.</p>
      <a class="button" href="/">
        Go back to initial page, it's better.
      </a>
    </div>
  );
}
