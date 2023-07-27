import React from 'react';
import { Helmet } from 'react-helmet';
import './allhighlights.css';

function AllHighlights() {
  return (
    <>
      <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Helmet>
      <h1 className='allhigh'>All Highlights</h1>
      <div className='highlights'>
        <div className="elfsight-app-d695b5ff-d081-444b-8c0d-6408469ea27e"></div>
      </div>
    </>
  )
}

export default AllHighlights;
