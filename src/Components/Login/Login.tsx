import React,{FormEvent,useState,useContext} from 'react';
import {useNavigate } from 'react-router-dom'
import {firebaseContext} from "../../store/firebaseContext"
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { log } from 'console';

const Login: React.FC = () => {
  const navigate=useNavigate()
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const{db,auth}=useContext(firebaseContext)
  const handleLogin=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,Email,Password).then((Userdata)=>{
      console.log(Userdata.user.uid);
      alert("logged In")
      navigate('/')
    }).catch((error)=>{
      if ("auth/invalid-email" === error.code) {
        console.log(error);
        alert(error.message)
      }
     
      
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleLogin} >
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href="#">Signup</a>
      </div>
    </div>
  );
};

export default Login;
