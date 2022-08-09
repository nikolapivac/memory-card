import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import Score from "./Score";
import Cards from "./Cards";
import people from "../characters.js" 

const Main = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [clickedCharacters, setClickedCharacters] = useState([]);
    
    const shuffle = (array) => {
            return [...array].sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        setCharacters(shuffle(people));
    }, [])

    const handleClick = (e) => {
        const name = e.target.parentNode.lastChild.textContent;
        playRound(name);
        setCharacters(shuffle(characters));
    }

    const playRound = (name) => {
        if (clickedCharacters.includes(name)) {
            resetGame();
        } else {
            const score = currentScore + 1;
            if (score > highScore) setHighScore(score);
            setCurrentScore(score);
            setClickedCharacters((prevState) => [...prevState, name])
        }
    }

    const resetGame = () => {
        setClickedCharacters([]);
        setCurrentScore(0);
    }

    return(
        <>
            <Score currentScore={currentScore} highScore={highScore}/>
            <Cards characters={characters} handleClick={handleClick} />
        </>

    )
}

export default Main;