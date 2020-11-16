import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe(
  "pk_test_51HesAHHA1IAmnFO8yR8ktnjs6Wx0zHZb7340Zsc49HFgI0sesZq2ufN71jRqFfsS0CHkci0PC5PQYWdlpclGsPxJ00oACU46Ol"
)

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if (authUser) {
        // user is logged in / user was logged in  

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
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
