import React from 'react';
import './favorites.css';
import data from '../data/player.json';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Favorites() {
    const navigate = useNavigate();

    const handlePlayerClick = (index) => {
        const selectedPlayer = data[index];
        navigate(`/player/${selectedPlayer.playerId}`);
    }

  return (
    <>
        <h1 className='favorites-text'>Favorites</h1>
        <div className='favorites-box'>
            <div className='circles'>
                {/*<a href='/player'>*/}
                <Link to={`/player/${data[0].playerId}`}>
                    <div className='circle1' onClick={() => handlePlayerClick(0)} />
                </Link>
                {/*</a>*/}
                <Link to={`/player/${data[3].playerId}`}>
                    <div className='circle2' onClick={() => handlePlayerClick(3)} />
                </Link>
                <Link to={`/player/${data[2].playerId}`}>
                    <div className='circle3' onClick={() => handlePlayerClick(2)} />
                </Link>
                <Link to={`/player/${data[4].playerId}`}>
                    <div className='circle4' onClick={() => handlePlayerClick(4)} />
                </Link>
                <Link to={`/player/${data[1].playerId}`}>
                    <div className='circle5' onClick={() => handlePlayerClick(1)} />
                </Link>
            </div>
        </div>
    </>
  );
}

export default Favorites;
