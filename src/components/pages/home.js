import React from 'react';
import './home.css';
import Intro from '../features/intro';
import Stat from '../features/stat';
import FreeAgent from '../features/freeagent';


function Home() {
  return (
    <div>
      <Intro />
      <Stat />
      <FreeAgent />
    </div>
  )
}

export default Home;
