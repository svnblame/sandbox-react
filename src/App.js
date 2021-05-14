import React, {useState} from "react";
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
import CountDown from "./CountDown.js";
import Grades from "./Grades.js";
import Wallet from "./Wallet.js";
import Wallet2 from "./Wallet2";
import OrderInsurance from "./OrderInsurance.js";
import OrderQuantity from "./OrderQuantity.js";
import RegisterForm from "./RegisterForm.js";
import NameForm from "./NameForm.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  const [name, setName] = useState("");

  const [settings, setSettings] = useState({
    dark_theme: true
  });

  const theme = settings.dark_theme ? 'dark' : 'light';

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

  function handleToggleThemeClick() {
    setSettings({...settings, dark_theme: !settings.dark_theme});
  }

  function handleNameChange(event) {
    setName(event.target.value);

    return ;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="root" className={theme}>
        <Container>
            <Link className="ui-link" href="https://react-tutorial.app"><h3>React Tutorial</h3></Link><br />
            <h3>Theme: {theme}</h3>
            <button className="ui-button" onClick={handleToggleThemeClick}>Toggle Theme</button>
            <Notifications notifications={notifications} />
            <Input placeholder="Enter Your Full Name" name="full_name" />&nbsp;<Button>Login</Button>
            <AddToCart />
            <div className="display-block {theme}">
              <Clock />
              <Counter mode="increment" />
              <Counter mode="decrement" />
            </div>
            <div className="display-block">
              <ConfigurableCounter incrementBy={1} />
              <ConfigurableCounter incrementBy={2} />
              <ConfigurableCounter incrementBy={5} />
            </div><br />
            <div className="display-block">
              <Admin userType="admin" />
              <Admin userType="client" />
              <hr />
              <Dashboard loggedIn={true} />
              <Dashboard loggedIn={false} />
            </div>
            <div className="display-block">
              <CountDown />
              <hr />
              <Grades grades={[8, 18, 10, 7, 14]} />
            </div>
            <div className="display-block">
              <Wallet />
              <hr />
              <Wallet2 />
            </div>
            <OrderInsurance />
            <OrderQuantity />
            <RegisterForm />
            <div>
              <h3>Hello {name}</h3>
              <NameForm name={name} onNameChange={handleNameChange} />
            </div>
            <Footer />
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
