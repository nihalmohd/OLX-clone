import React,{useContext} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/firebaseContext';
// import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate=useNavigate()
  const{user}=useContext(AuthContext)
  const {auth}=useContext(firebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            navigate("/login")
          }} >{user ? user.displayName : 'Login' }</span>
          <hr />
        </div>
        <span onClick={()=>{
          auth.signOut().then(()=>{
             navigate('/login')
          })
        }} >{user?"Logout":null}</span>
        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
