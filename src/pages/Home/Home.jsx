import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Juegos</h1>
      <article>
        <Link to="tictactoe">Tres en raya</Link>
        <Link to="hangman">Ahorcado</Link>
        <Link to="sudoku">Sudoku</Link>
      </article>
    </div>
  );
}

export default Home;
