import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HRVFoDabjo4E8a5cxHkiVLMxg4G9KKHY29D79WmrV2mrRhsJkOBb87jb1P3tk3b5odikwYyBXHfFkytIF89EkmI00iwbKKvpE");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    //Code will only run once when the App component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>', authUser)

      if (authUser){
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
