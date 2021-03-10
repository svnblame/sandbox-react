import React, { useState } from "react";
import {render} from "react-dom";
import './App.css';

function getFooter() {
  const currentYear = new Date().getFullYear();

  return (
      <>
          <h3>Your online supermarket</h3>
          <ul>
              <li>Contact</li>
              <li>Press</li>
              <li>About</li>
          </ul>
          <p>All rights reserved &copy; {currentYear}</p>
      </>
  );
}

function App() {
  const root = document.querySelector("#root");

  let element = getFooter();

  render(element, root);

  return (
    <div className="App">
      <header className="App-header">
        <div id="root"></div>
        <div id="payment-method"></div>
      </header>
    </div>
  );
}

export default App;
