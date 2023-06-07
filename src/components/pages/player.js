import React from 'react';
import './player.css';
import data from '../data/player.json';
import SeasonBar from '../features/seasonBar';
import StatsTable from '../features/statsTable';
import { useParams } from 'react-router-dom';

const Player = () => {
  const { playerId } = useParams();
  const player = data.find((p) => p.playerId.toString() === playerId);

  if (!player) {
    return <div>No player found</div>;
  }

  // Determine if the player is circle3
  const isCircle2 = player.playerId === data[3].playerId;

  // Determine if the player is circle3
  const isCircle3 = player.playerId === data[2].playerId;

  // Determine if the player is circle4
  const isCircle4 = player.playerId === data[4].playerId;

   // Determine if the player is circle5
   const isCircle5 = player.playerId === data[1].playerId;

  return (
    <div className='player'>
      <div>
        <SeasonBar playerId={player.playerId} />
      </div>

      <div className='player-image'>
        <img
          className='round-image'
          src={player.image}
          alt={`${player.firstName} ${player.lastName}`}
        />
      </div>
      <div className='name-container'>
        <h1 className='name'>
          {player.firstName} {player.lastName}
        </h1>
      </div>
      <div className='team-container'>
        <h2 className='team'>{player.teamName}</h2>
      </div>
      <div className='height-container'>
        <p className='height'>
          Height: <span className='black-text'>{player.height}</span>
        </p>
      </div>
      <div className='weight-container'>
        <p className='weight'>
          Weight: <span className='black-text'>{player.weight}</span>
        </p>
      </div>
      <div className='age-container'>
        <p className='age'>
          Age: <span className='black-text'>{player.age}</span>
        </p>
      </div>
      <div className='contract-container'>
        <p className='contract'>
          Contract: <span className='black-text'>{player.contract}</span>
          <span className='status'>{player.status}</span>
        </p>
      </div>
      <div className={`number-container ${isCircle2?  'circle2-number' : ''} ${isCircle3?  'circle3-number' : ''} ${isCircle4? 'circle4-number' : ''} ${isCircle5? 'circle5-number' : ''}`}>
        <p className='number'>
          # <span className='black-text'>{player.playerNum}</span>
        </p>
      </div>
      <div className='position-container'>
        <p className='position'>
          <span className='pos-text'>{player.position}</span>
        </p>
      </div>

      <div><StatsTable /></div>

    </div>
  );
};

export default Player;
