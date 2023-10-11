import React,{useContext,useEffect} from 'react';
import './App.css';
import Login from "./Pages/Login"
import Signup from './Components/SiginUp/SignUp';
import Home from './Pages/Home';
import { auth } from "./firebase/config";
import Post from './store/Postcontext';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {AuthContext} from "./store/firebaseContext"
import Create from './Components/Creat/Creare';
import View from './Pages/View';



function App() {
  const {setUser}=useContext(AuthContext)
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
    setUser(user)
   })
  },[])
  return (
    <Post>
      
      <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/SignUp' element={<Signup/>} />
           <Route path='/login' element={<Login/>} />
           <Route path="/Create" element={<Create/>}/>
           <Route path="/view" element={<View/>}/>
        </Routes>
        </Router>
    </Post>
    );
}

export default App;
