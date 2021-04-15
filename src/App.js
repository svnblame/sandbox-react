import React from "react";
import Link from "./Link.js";
import Notifications from "./Notifications.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import AddToCart from "./AddToCart.js";
import Clock from "./Clock.js";
import Counter from "./Counter.js";
import ConfigurableCounter from "./ConfigurableCounter";
import Admin from "./Admin.js";
import Dashboard from "./Dashboard.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  const notifications = [{
      id: 1,
      text: "Welcome to our supermarket"
    }, {
      id: 2,
      text: "Your order has shipped"
    }, {
      id: 3,
      text: "Your order has shipped"
  }];

  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
        <Container>
            <Link className="ui-link" href="https://react-tutorial.app"><h3>React Tutorial</h3></Link><br />
            <Notifications notifications={notifications} />
            <Input placeholder="Enter Your Full Name" name="full_name" />&nbsp;<Button>Login</Button>
            <AddToCart />
            <div style={{display: 'inline-block'}}>
              <Clock />
              <Counter mode="increment" />
              <Counter mode="decrement" />
            </div>
            <div style={{display: 'inline-block'}}>
              <ConfigurableCounter incrementBy={1} />
              <ConfigurableCounter incrementBy={2} />
              <ConfigurableCounter incrementBy={5} />
            </div><br />
            <div style={{display: 'inline-block'}}>
              <Admin userType="admin" />
              <Admin userType="client" />
              <Dashboard loggedIn={true} />
              <Dashboard loggedIn={false} />
            </div>
            <Footer />
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
