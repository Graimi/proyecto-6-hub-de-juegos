import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="gm-home">
      <h1>Pasatiempos</h1>
      <div className="gm-home-games">
        <Link to="tictactoe">
          <article className="gm-home-game" id="tictactoe">
            <div className="gm-home-game-text">
              <h3>Tres en raya</h3>
            </div>
            <img
              className="gm-home-game-icon"
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689539436/Hub%20de%20juegos/tic-tac-toe_im9zlu.png"
              alt="Tic Tac Toe"
            />
          </article>
        </Link>
        <Link to="hangman">
          <article className="gm-home-game" id="hangman">
            <div className="gm-home-game-text">
              <h3>El ahorcado</h3>
            </div>
            <img
              className="gm-home-game-icon"
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689539436/Hub%20de%20juegos/horca_dxmcry.png"
              alt="Hangman"
            />
          </article>
        </Link>
        <Link to="sudoku">
          <article className="gm-home-game" id="sudoku">
            <div className="gm-home-game-text">
              <h3>Sudoku</h3>
            </div>
            <img
              className="gm-home-game-icon"
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689539436/Hub%20de%20juegos/icons8-sudoku-96_m8ihjn.png"
              alt="Sudoku"
            />
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Home;
