import React from 'react';
import './GameButtons.css';
import { Link } from 'react-router-dom';

function GameButtons(newGame) {
  return (
    <article className="gm-buttons">
      <button
        type="button"
        className="gm-cta"
        onClick={() => {
          newGame();
        }}
      >
        <p>Nueva partida</p>
      </button>
      <Link to="/">
        <button type="button" className="gm-cta">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689611695/Hub%20de%20juegos/home_nn7sp1.png"
            alt="home"
            className="gm-button-home"
          />
        </button>
      </Link>
    </article>
  );
}

export default GameButtons;
