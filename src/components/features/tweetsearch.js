import React from 'react';
import './tweetsearch.css';
import { NavLink } from 'react-router-dom';

function TweetSearch() {
  return (
    <div className='bar-container'>
      <div className='woj'>
          <NavLink exact activeClassName='active' className='woj-title' to='/woj'>
            Woj
          </NavLink>
      </div>

      <div className='shams'>
          <NavLink exact activeClassName='active' className='shams-title' to='/shams'>
            Shams
          </NavLink>
      </div>
      <div className='stein'>
          <NavLink exact activeClassName='active' className='stein-title' to='/stein'>
            Stein
          </NavLink>
      </div>
      <div className='mffl'>
          <NavLink exact activeClassName='active' className='mffl-title' to='/mffl'>
            MFFL
          </NavLink>
      </div>

    </div>
  );
}

export default TweetSearch;
