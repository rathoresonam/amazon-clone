import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login'
import {auth} from './firebase'
import Payment from './Payment';
import {useStateValue} from './StateProvider'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51N9AcUSIOdLB3331KtKNI9jQFJmuIenczIyxsxHVIDxRRr2IrfYi2YFNRkcJDbWuOq4ZOchChDxUjjKaBV1fdOGa006kSwIzuZ');

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The user is', authUser);
        if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
            
        }else{
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
    <Routes>
    <Route path = '/' element = {[<Header/>, <Home/>]}/>
    <Route path = '/checkout' element = {[<Header/>, <Checkout/>]}/>
    <Route path = '/payment' element = {[<Header/>, <Elements stripe = {promise}> <Payment/> </Elements>]}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/orders' element = {<Orders/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
