import React from 'react';
import TweetBar from '../features/tweetsearch.js';
import Goats from '../features/tweetgoats.js';
import ESPN from '../features/ESPN.js';


function Feed() {
  

  return (
    <div>
      <Goats />
      <TweetBar />
      <ESPN />


    </div>
  )
}

export default Feed;
