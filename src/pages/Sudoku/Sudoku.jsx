import React, { useEffect, useState } from 'react';
import './Sudoku.css';
import { Link } from 'react-router-dom';
import { makepuzzle, solvepuzzle } from 'sudoku';

function Sudoku() {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    setSudokuBoard(makepuzzle());
  }, []);

  // const handleInputChange = (event, index) => {
  //   const newBoard = [...sudokuBoard];
  //   newBoard[index] = parseInt(event.target.value) || null;
  //   setSudokuBoard(newBoard);
  // };

  const renderCell = (number, index) => {
    if (number !== null) {
      return (
        <div className="sudoku-cell" key={index}>
          {number}
        </div>
      );
    }
    return (
      <input
        key={index}
        type="number"
        className="sudoku-cell"
        min="1"
        max="9"
        // onChange={(event) => handleInputChange(event, index)}
      />
    );
  };

  function checkSudoku() {
    // Comprobamos si solved es truthy, y sudokuBoard está correctamente solucionado
    const solved = solvepuzzle(sudokuBoard);
    console.log(solved);
    console.log(sudokuBoard);
    if (JSON.stringify(solved) === JSON.stringify(sudokuBoard)) {
      setWinnerMessage('Resuelto, enhorabuena');
      setResult(true);
    } else {
      setWinnerMessage('Erróneo');
      setResult(false);
    }
  }

  function newGame() {
    setSudokuBoard(makepuzzle());
  }

  // Función encargada de volver a poner el mensaje del ganador vacío
  function closeWinnerMessage() {
    setWinnerMessage('');
  }

  function resolveSudoku() {
    setSudokuBoard(solvepuzzle(sudokuBoard));
    closeWinnerMessage();
  }

  console.log(sudokuBoard);

  return (
    sudokuBoard && (
      <div className="gm-sudoku">
        <article className="gm-sudoku-game">
          <h1>Sudoku</h1>

          <div id="gm-sudoku-board" className="gm-sudoku-board">
            {sudokuBoard.map((number, index) => {
              return renderCell(number, index);
            })}
          </div>
          <button type="button" onClick={() => checkSudoku()}>
            <p>Comprobar</p>
          </button>
        </article>
        <button type="button" onClick={() => newGame()}>
          <p>Nueva partida</p>
        </button>
        <Link to="/">Volver</Link>
        {/* Lanzamos el mensaje cuando haya ganador */}
        {winnerMessage && (
          <div className="gm-hangman-winner">
            <p>{winnerMessage}</p>
            {!result && (
              <button type="button" onClick={resolveSudoku}>
                <p>Ver la solución</p>
              </button>
            )}
            <button type="button" onClick={closeWinnerMessage}>
              <p>{result ? 'Cerrar' : 'Seguir intentándolo'}</p>
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default Sudoku;
