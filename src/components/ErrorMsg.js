import React from 'react';
import './style/errorMsg.css';
export default function ErrorMsg({ err }) {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>{err.statusCode}</span>
        <p class="p-a">{err.message}</p>
      </div>
    </div>
  );
}
