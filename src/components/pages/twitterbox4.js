import React, { useEffect } from 'react';
import './twitterbox.css';

function TwitterBox4()  {
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
          href="https://twitter.com/Mavs_FFL?ref_src=twsrc%5Etfw" 
        >

        </a>
        

      </div>
    </>
    );
    
  }

export default TwitterBox4;
