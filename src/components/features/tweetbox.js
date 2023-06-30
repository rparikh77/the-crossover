import React, { useEffect } from 'react';
import './tweetbox.css';

function TweetBox() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  <>
    <div className="tweet-holder">

      
      <a
        className="twitter-timeline"
        data-theme="dark"
        href="https://twitter.com/wojespn?ref_src=twsrc%5Etfw"
        to='/woj'
      >
        Tweets by wojespn
      </a>
      

      
    </div>
  </>
  );
  
}

export default TweetBox;
