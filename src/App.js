import React from "react";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import Footer from "./Footer.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
          <Container>
            <Link href="https://react-tutorial.app">React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
          </Container>

          <br /><hr /><br />
          <Link href="https://errandpoint.com" className="ui-link">ErrandPoint</Link>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
