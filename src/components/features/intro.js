import React from 'react';
import './intro.css';
import marvelIntro from '../assets/marvel-intro.GIF';


function Intro() {
  return (
    <div>
        <img className='marvel-intro' src={marvelIntro} alt="Marvel Intro GIF" />
    </div>
  )
}

export default Intro;
