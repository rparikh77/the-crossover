import React, { useState } from 'react';
import Logo from '../assets/crossover-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='navbar'>
      <div className='logo'>
        <a href='/home'>
        <img src={Logo} alt='Logo Image' />
        </a>
      </div>

    </div>
  );
};

export default Navbar;