import React from 'react';
import './ESPN.css';

function ESPN() {
  return (
    <div className='espn-channel'>
        <h1 className='featured-text'>Featured Video</h1>
        <iframe className="video1" width="630" height="315" src="https://www.youtube.com/embed/wO1TbL6vyFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default ESPN;
