import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/crossover-logo.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <a href='/home'>
          <img src={Logo} alt='Logo Image' />
        </a>
      </div>

      <div className={`navigation ${navOpen ? 'open' : ''}`}>
        <div className='home-button'>
          <NavLink exact activeClassName='active' className='home-text' to='/home'>
            Home
          </NavLink>
        </div>
        <div className='feed-button'>
          <NavLink exact activeClassName='active' className='feed-text' to='/news'>
            News 
          </NavLink>
        </div>
        <div className='team-button'>
          <NavLink exact activeClassName='active' className='team-text' to='/highlights'>
            Highlights 
          </NavLink>
        </div>

        
      </div>

      <div className='hamburger' onClick={handleClick}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
