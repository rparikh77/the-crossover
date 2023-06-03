import React from 'react';
import Ticker from '../features/ticker';
import Score from '../features/score';
import Search from '../features/searchBar';
import Favorites from '../features/favorites';

const Home = () => {
  return (
    <div>
        <Ticker /> 
        <Score />
        <Search />
        <Favorites />
    </div>
  );
};

export default Home;