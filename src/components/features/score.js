import React, { useEffect, useState } from "react";
import './score.css';
import scoreboardData from '../data/scoreboard.json';

function Score() {
    const homeTeam = scoreboardData[0].homeTeam;
    const awayTeam = scoreboardData[1].awayTeam;
    const homeTeamImage = scoreboardData[0].image;
    const awayTeamImage = scoreboardData[1].image;
    const homeRecordW = scoreboardData[0].wins;
    const homeRecordL = scoreboardData[0].losses;
    const awayRecordW = scoreboardData[1].wins;
    const awayRecordL = scoreboardData[1].losses;
    const homeScore = scoreboardData [0].score;
    const awayScore = scoreboardData [0].score;
    const provider = scoreboardData[2].abc;
    const day = scoreboardData[3].sunday;
    const time = scoreboardData[4].time;
  
    return (
        <div className="scorebox">
            <div className="provider">
                <img className="provider-image" src={provider} alt={provider}></img>
            </div>

            <h1 className="day">{day}</h1>
            <h1 className="time">{time}</h1>

            <div className="home-team-container">
                <div className="home-team">
                    <img className="home-image" src={homeTeamImage} alt={homeTeam} />
                </div>
                <h1 className="home-team-name">{homeTeam}</h1>
                <p className="home-team-record">{homeRecordW}-{homeRecordL}</p>
                <h1 className="home-score">{homeScore}</h1>
            </div>
            <div className="away-team-container">
                <div className="away-team">
                    <img className="away-image" src={awayTeamImage} alt={awayTeam} />
                </div>
                <h1 className="away-team-name">{awayTeam}</h1>
                <p className="away-team-record">{awayRecordW}-{awayRecordL}</p>
                <h1 className="away-score">{awayScore}</h1>
            </div>
        </div>
    );
}

export default Score;
