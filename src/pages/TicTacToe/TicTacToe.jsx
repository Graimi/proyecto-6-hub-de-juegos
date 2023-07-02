import React from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom';

function TicTacToe() {
  return (
    <div>
      <h1>TicTacToe</h1>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default TicTacToe;
