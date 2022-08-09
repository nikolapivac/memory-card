import React from "react";
import "../styles/Card.css";

const Card = ( {character, handleClick } ) => {
    return(
        <div className="card" onClick={handleClick}>
            <img className="image" src={character.image} alt={character.name} />
            <h1 className="name">{character.name}</h1>
        </div>
    )
}

export default Card;