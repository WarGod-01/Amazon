import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Sign_Up from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


const promise = loadStripe('pk_test_51NtxzvSFgTBnpCIkHZ0AUxt5kh2ouCj3o2I11bhtgE8Pr45ff031QqErB44emy3rLfadcswc9rL4x4bVo6129ITM00g6p6hqgk');
function App() {
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('The User Is >>>',authUser);
      
      if(authUser){
          //loggedin
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      }else{
          //logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    } )
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/order" element={[<Header/>,<Orders/>]}/>
        <Route path="/login" element={[<Sign_Up/>]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path="/" element={[<Header/>,<Home/>]}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
