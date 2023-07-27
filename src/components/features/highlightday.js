import React from 'react';
import './highlightday.css';

function DayHighlight() {
  return (
    <>
        <h1 className='hoftd'>Highlight of the Day</h1> 
        <div className='featuredvideo'>
            <iframe className='video1' width="900" height="500" src="https://www.youtube.com/embed/ucZZdf94LbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
        </div>     
    </>
  )
}

export default DayHighlight;
