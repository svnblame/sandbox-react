import React from "react";
import Button from "./Button.js";
import Link from "./Link.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
          <Button /><br />
          <Button /><br />
          <Link /><br /><hr /><br />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
