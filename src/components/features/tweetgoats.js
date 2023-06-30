import React from 'react'
import tweetLogo from '../assets/tweet.png';
import './tweetgoats.css';

function TweetGoats() {
  return (
    <div className='goat-container'>
      <h1 className='NBA'>NBA</h1>
      <img className='tweet-logo' src={tweetLogo} alt="Tweet Logo" />
      <h1 className='GOATS'>GOATS</h1>
    </div>
  )
}

export default TweetGoats;
