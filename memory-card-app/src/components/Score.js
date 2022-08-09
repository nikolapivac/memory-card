import React from "react";
import "../styles/Score.css";

const Score = ({currentScore, highScore}) => {
    return(
        <div className="scoreboard">
            <div className="score">current score: {currentScore}</div>
            <div className="score">high score: {highScore}</div>
        </div>
    )
}

export default Score;