import React from "react";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import HorizontalRule from "./HorizontalRule.js";
import Footer from "./Footer.js"
import './App.css';

function Notifications(props) {
  const value = props.data.count - 1;
  return <h3>You have {value} unread notifications.</h3>
}

function App() {
  const notifications = {
    count: 10
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
        <Container>
            <Link href="https://react-tutorial.app"><h3>React Tutorial</h3></Link><br />
            <Notifications data={notifications} />
            <Input placeholder="Enter Your Full Name" name="full_name" />&nbsp;<Button>Login</Button>
            <HorizontalRule />
            <Footer />
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
