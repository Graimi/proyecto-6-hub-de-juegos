import React from 'react';
import './Sudoku.css';
import { Link } from 'react-router-dom';

function Sudoku() {
  return (
    <div>
      <h1>Sudoku</h1>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Sudoku;
