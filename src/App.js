import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="app">
    <Switch>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/login">
        <h1>Login Page</h1>
      </Route>

      <Route path="/Returns">
        <Header />
        <h1>Unfortunately, you have no order history</h1>
        <h2>Happy Shopping</h2>
      </Route>

      <Route path="/ContactUs">
        <Header />
        <h1>Contact us via:</h1>
        <h2>Phone:9920xxxxxxx</h2>
        <h2>E-mail: customercare@tatacliq.com</h2>
      </Route>

      <Route path="/">
        <Header />
        <Home />
       </Route>

    </Switch>
  </div>
  </Router>
);
}

export default App;
