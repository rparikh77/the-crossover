import React, { useEffect } from 'react';
import './feed.css';

function Feed() {
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
    <div className="feed-container">
      <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Report: Dereck Lively is expected to play a limited bench role next season as the Mavs actively look to add another center, per <a href="https://twitter.com/TheAthletic?ref_src=twsrc%5Etfw">@TheAthletic</a> <a href="https://twitter.com/hashtag/MFFL?src=hash&amp;ref_src=twsrc%5Etfw">#MFFL</a> <a href="https://t.co/LNZTWHRJX8">pic.twitter.com/LNZTWHRJX8</a></p>&mdash; MFFL (@Mavs_FFL) <a href="https://twitter.com/Mavs_FFL/status/1674056256959414277?ref_src=twsrc%5Etfw">June 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
}

export default Feed;
