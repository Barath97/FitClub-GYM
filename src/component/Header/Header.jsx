import React from 'react';
import './Header.css';
import Logo from "../../assets/logo.png";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
     <div className="header">
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            
        </ul>
     </div>
  )
}

export default Header;