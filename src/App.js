import React, {useState, useEffect} from "react";
import useWelcomeGreeting from "./useWelcomeGreeting";
import useDocumentTitle from "./useDocumentTitle";
import Link from "./Link";
import Notifications from "./Notifications";
import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import AddToCart from "./AddToCart";
import Clock from "./Clock";
import Counter from "./Counter";
import ConfigurableCounter from "./ConfigurableCounter";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import CountDown from "./CountDown";
import Grades from "./Grades";
import Wallet from "./Wallet";
import Wallet2 from "./Wallet2";
import OrderInsurance from "./OrderInsurance";
import OrderQuantity from "./OrderQuantity";
import RegisterForm from "./RegisterForm";
import NameForm from "./NameForm";
import Stopwatch from "./Stopwatch";
import Count from "./Count";
import Users from "./Users";
import PostGrade from "./PostGrade";
import CurrencySelector from "./CurrencySelector";
import Footer from "./Footer";
import './App.css';

function App() {
    useWelcomeGreeting();
    useDocumentTitle('Welcome to the online store');

    const [name, setName] = useState("");
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem('settings');

        if (savedSettings) {
            return JSON.parse(savedSettings);
        } else {
            return {
                dark_theme: true
            }
        }
    });

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

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

    const [counter, setCounter] = useState(0);

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
            <Notifications notifications={notifications} user="Joe Schmoe"/>
            <Users />
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
            <div className="display-block">
              <h3>Hello {name}</h3>
              <NameForm name={name} onNameChange={handleNameChange} />
            </div>
            <div className="display-block">
              <h2>Counter</h2>
              <h3>{counter}</h3>
              <button className='ui-button' onClick={() => setCounter(prevCounter => prevCounter + 1)}>Add</button>
            </div>
            <div className="display-block">
              <Stopwatch />
              <Count />
            </div>
            <div className="display-block">
                <PostGrade />
                <CurrencySelector />
            </div>
            <Footer />
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
