import React, { useEffect, useState } from 'react';
import './Sudoku.css';
import { Link } from 'react-router-dom';
import { makepuzzle, solvepuzzle } from 'sudoku';

function Sudoku() {
  const [sudokuBoard, setSudokuBoard] = useState('');
  const [newSudokuBoard, setNewSudokuBoard] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const newSudoku = makepuzzle();
    setSudokuBoard(newSudoku);
    setNewSudokuBoard(newSudoku);
  }, []);

  function newGame() {
    const newSudoku = makepuzzle();
    setSudokuBoard(newSudoku);
    setNewSudokuBoard(newSudoku);
  }

  function handleInputChange(event, index) {
    const newSudoku = [...newSudokuBoard];
    const inputValue = event.target.value === '' ? null : Number(event.target.value);

    // Validamos que el número ingresado esté entre 0 y 9
    if (inputValue !== null && (inputValue < 0 || inputValue > 9)) {
      alert('El número tiene que estar entre 0 y 9');
      return;
    }

    newSudoku[index] = inputValue;
    setNewSudokuBoard(newSudoku);
  }

  function renderCell(number, index) {
    const originalNumber = number === sudokuBoard[index] && number !== null;
    const value = number === null ? '' : number;

    return (
      <input
        key={index}
        id={index}
        type="number"
        className="sudoku-cell"
        value={value}
        disabled={originalNumber}
        min="0"
        max="9"
        onChange={(event) => handleInputChange(event, index)}
      />
    );
  }

  function checkSudoku() {
    const solved = solvepuzzle(sudokuBoard);
    if (solved.every((value, index) => value === newSudokuBoard[index])) {
      setWinnerMessage('Resuelto, enhorabuena');
      setResult(true);
    } else {
      setWinnerMessage('Erróneo');
      setResult(false);
    }
  }

  function closeWinnerMessage() {
    setWinnerMessage('');
  }

  function resolveSudoku() {
    setNewSudokuBoard(solvepuzzle(sudokuBoard));
    closeWinnerMessage();
  }

  return (
    sudokuBoard && (
      <div className="gm-sudoku">
        <article className="gm-sudoku-game">
          <h1>Sudoku</h1>
          <div id="gm-sudoku-board" className="gm-sudoku-board">
            {newSudokuBoard.map((number, index) => {
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
