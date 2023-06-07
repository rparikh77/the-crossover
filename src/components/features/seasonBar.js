import React from 'react';
import './seasonBar.css';
import szndata from '../data/seasonStats.json';

const SeasonBar = ({ playerId }) => {
  const stat = szndata.find((data) => data.playerId === playerId);

  if (!stat) {
    return <div>No season stats available</div>;
  }

  const { points, rebounds, assists, fieldGoal } = stat;

  return (
    <div className='bar-season'>
      <div className='year-text'>
        <h1>2022-2023 SEASON STATS</h1>
      </div>
      <div className='stat-box'>
        <div className='box1'>
          <div className='points-container'>
            <h1 className='points-name'>PTS</h1>
            <h1 className='points'>{points}</h1>
          </div>
        </div>
        <div className='box2'>
          <div className='rebounds-container'>
            <h1 className='rebounds-name'>REB</h1>
            <h1 className='rebounds'>{rebounds}</h1>
          </div>
        </div>
        <div className='box3'>
          <div className='assists-container'>
            <h1 className='assists-name'>AST</h1>
            <h1 className='assists'>{assists}</h1>
          </div>
        </div>
        <div className='box4'>
          <div className='field-goal-container'>
            <h1 className='fg-name'>FG%</h1>
            <h1 className='fg'>{fieldGoal}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonBar;
