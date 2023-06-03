import React from 'react';
import './favorites.css';
import data from '../data/player.json';

function Favorites() {
    const player = data[0];

  return (
    <>
        <div className='favorites-box'>
            <h1 className='favorites-text'>Favorites</h1>
            <div className='circles'>
                <a href='/player'>
                    <div className='circle1'></div>
                </a>
                <a href='/home'>
                    <div className='circle2' />
                </a>
                <a href='/home'>
                    <div className='circle3' />
                </a>
                <a href='/home'>
                    <div className='circle4' />
                </a>
                <a href='/home'>
                    <div className='circle5' />
                </a>
            </div>
        </div>
    </>
  );
}

export default Favorites;
