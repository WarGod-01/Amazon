import React, { useState } from 'react'
import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const[password,setpassword]=useState('');
  const signin =e =>{
    e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/');
        })
        .catch(error => alert(error.message))
    //firebase
  }
  const register =e =>{
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //created an new user

          if(auth){
            navigate('/');
          }
        })
        .catch(error => alert(error.message))
    //firebase
  }

  return (
    <div className='login'>
    <Link to='/'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Amazon_Comcast.png/640px-Amazon_Comcast.png' alt=''/>
    
    </Link>
    <div className='login_container'>
      <h1>Sign in</h1>
      <form>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setpassword(e.target.value)}/>
        <button type='submit' onClick={signin}
        className='login_signinbutton'>Sign In</button>
      </form>
      <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      <button onClick={register} className='login_signupbutton'>Create your Amazon account</button>
    </div>
    </div>
  )
}
export default Login
