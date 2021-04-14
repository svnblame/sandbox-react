import React from "react";
import Link from "./Link.js";
import Notifications from "./Notifications.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import AddToCart from "./AddToCart.js";
import Clock from "./Clock.js";
import Counter from "./Counter.js";
import ConfigurableCounter from "./ConfigurableCounter"
import Footer from "./Footer.js";
import './App.css';

function App() {
  const notifications = {
    count: 10
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
        <Container>
            <Link className="ui-link" href="https://react-tutorial.app"><h3>React Tutorial</h3></Link><br />
            <Notifications data={notifications} />
            <Input placeholder="Enter Your Full Name" name="full_name" />&nbsp;<Button>Login</Button>
            <AddToCart />
            <Clock />
            <Counter mode="increment" />
            <Counter mode="decrement" />
            <ConfigurableCounter incrementBy={1} />
            <ConfigurableCounter incrementBy={2} />
            <ConfigurableCounter incrementBy={5} />
            <Footer />
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
