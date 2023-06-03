import React from 'react'
import './ticker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ticker from '../data/ticker.json';

function Ticker() {
  return (
    <div className="ticker">
        <div className='theme'>
          {ticker.filter(item => item.player === "Stephen Curry").map((item, index) => ( // filter the news array by the player name and map over the filtered array
            <div key={item.player} className='text' style={{animationDelay: `${index * 2}s`}}> 
              <img src={item.image} alt={item.player + "photo"} className='image'/> 
              <h1>{item.text}</h1> 
            </div>
          ))}
        </div>
    </div>
  );
};

export default Ticker;
