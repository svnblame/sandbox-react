import React, { useState } from "react";
import {render} from "react-dom";
import './App.css';

function App() {
  let reactVersion = React.version;
  console.info(reactVersion);
  const element = document.createElement("h2");
  document.body.appendChild(element);
  console.dir(element);

  const root = document.querySelector("#root");
  render(React.createElement("h2", {}, "React Version: " + reactVersion), root);
  // render(React.Element("p", {}, "Hello World"), root);

  return (
    <div className="App">
      <header className="App-header">
        <h3 id="react-version">React Version: {reactVersion}</h3>
      </header>
    </div>
  );
}

export default App;
