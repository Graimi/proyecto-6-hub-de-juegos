import React, { useEffect, useState } from 'react';
import './Sudoku.css';
import { Link } from 'react-router-dom';
import { makepuzzle, solvepuzzle, ratepuzzle } from 'sudoku';

function Sudoku() {
  const [sudokuBoard, setSudokuBoard] = useState(null);

  useEffect(() => {
    setSudokuBoard(makepuzzle());
  }, []);

  const renderCell = (number, index) => {
    if (number !== null) {
      return <div className="sudoku-cell">{number}</div>;
    }
    return (
      <input
        type="number"
        className="sudoku-cell"
        min="1"
        max="9"
        onChange={(event) => handleInputChange(event, index)}
      />
    );
  };

  console.log(sudokuBoard);

  return (
    sudokuBoard && (
      <div>
        <h1>Sudoku</h1>
        <div id="gm-sudoku-board" className="gm-sudoku-board">
          {sudokuBoard.map((number, index) => {
            return renderCell(number, index);
          })}
        </div>
        <Link to="/">Volver</Link>
      </div>
    )
  );
}

export default Sudoku;
