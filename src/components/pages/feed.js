import React from 'react';
import TweetBar from '../features/tweetsearch.js';
import Goats from '../features/tweetgoats.js';
import BreakingNews from '../features/breakingnews.js';



function Feed() {
  

  return (
    <div>
      <Goats />
      <TweetBar />
      <BreakingNews />



    </div>
  )
}

export default Feed;
