import React, { FormEvent, useState ,useContext} from 'react';
import Logo from "../../olx-logo.png";
import './SignUp.css';
import { firebaseContext } from '../../store/firebaseContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc,collection,} from "firebase/firestore";
import {useNavigate } from 'react-router-dom'
 
const Signup: React.FC = () => {

  const navigate = useNavigate()

  const [Username,setUsername]=useState("")
  const [Email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [Password,stePassword]=useState("")
  const {auth,db } =useContext(firebaseContext)
const HandleSubmit=(e: FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  // console.log();
  createUserWithEmailAndPassword(auth, Email, Password).then((userCredential)=>{
    const user=userCredential.user;
    updateProfile(user,{displayName:Username}).then(()=>{
      console.log("success"); 

      addDoc(collection(db,"users"), {
        id: user.uid,
        username: Username,
        email:Email,
        password:Password,
        phone:phone

      }).then((docRef)=>{
        console.log("user added to firestore:",docRef.id);
        navigate("/login")
      }) 
    })
  })

}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={HandleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>stePassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
};

export default Signup;
