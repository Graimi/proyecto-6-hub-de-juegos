import React from 'react';
import './Hangman.css';
import { Link } from 'react-router-dom';

function Hangman() {
  return (
    <div>
      <h1>Hangman</h1>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Hangman;
