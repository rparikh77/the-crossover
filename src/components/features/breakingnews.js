import React from 'react';
import './breakingnews.css';
import News from '../assets/statImages/dame.png';

function BreakingNews() {
  return (
    <>
      <h1 className='breaking-title'>BREAKING NEWS</h1>
      <a href="https://www.espn.com/nba/story/_/id/37944471/sources-trail-blazers-star-damian-lillard-requests-trade">
        <div className='news-box'>
            <div className='breaking-text'>
                <p>Trail Blazers Star <span className='highlighted'>Damian Lillard</span> Requests Trade</p>
            </div>
          <img className='news-image' src={News} alt='dame'/>
        </div>
      </a>
    </>
  )
}

export default BreakingNews;
