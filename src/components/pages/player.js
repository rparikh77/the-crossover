import React from 'react';
import './player.css';
import data from '../data/player.json';

const Player = () => {
  const player = data[0];

  return (
    <div className='player'>
      <div className='player-image'>
        <img className='round-image' src={player.image} alt={`${player.firstName} ${player.lastName}`} />
      </div>
      <div className='name-container'>
        <h1 className='name'>{player.firstName} {player.lastName}</h1>
      </div>
      <div className='team-container'>
        <h2 className='team'>{player.teamName}</h2>
      </div>
      <div className='height-container'>
        <p className='height'>Height: <span className='black-text'>{player.height}</span></p>
      </div>
      <div className='weight-container'>
        <p className='weight'>Weight: <span className='black-text'>{player.weight}</span></p>
      </div>
      <div className='age-container'>
        <p className='age'>Age: <span className='black-text'>{player.age}</span></p>
      </div>
      <div className='contract-container'>
        <p className='contract'>Contract: <span className='black-text'>{player.contract}</span><span className='status'>{player.status}</span></p>
      </div>
      <div className='number-container'>
        <p className='number'># <span className='black-text'>{player.playerNum}</span></p>
      </div>
      <div className='position-container'>
        <p className='position'><span className='pos-text'>{player.position}</span></p>
      </div>
    </div>
  );
};

export default Player;