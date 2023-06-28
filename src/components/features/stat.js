import React from 'react';
import './stat.css';
import Logo from '../assets/Logo.png';
import Nikola from '../assets/statImages/jokic.png';

function Stat() {
  return (
    <div className='box-container'>
      <div className='box-title'>
        <h1 className='box-text'>Stat of the Day</h1>
        <img className='box-logo' src={Logo} alt="logo" />
      </div>
      <div className='box'>
        <h1 className='stat-info'>Nikola Jokic is the first player in NBA history to record a 23 PTS / 17 REB / 12 AST / 3 STL stat line in a playoff game.</h1>
        <img className='stat-image' src={Nikola} alt='Nikola' />
      </div>
    </div>
  );
}

export default Stat;
