import React from "react";
import Card from "./Card";
import "../styles/Cards.css";

const Cards = ({ characters, handleClick }) => {
    const cards = characters.map((character) => (
        <Card key={character.id} character={character} handleClick={handleClick} />
    ))

    return(
        <div className="cards_container">
            {cards}
        </div>
    )
}

export default Cards;