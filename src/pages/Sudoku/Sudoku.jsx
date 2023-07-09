// import React, { useEffect, useState } from 'react';
// import './Sudoku.css';
// import { Link } from 'react-router-dom';
// import { makepuzzle, solvepuzzle } from 'sudoku';

// function Sudoku() {
//   const [sudokuBoard, setSudokuBoard] = useState(null);
//   const [newSudokuBoard, setNewSudokuBoard] = useState(null);
//   const [winnerMessage, setWinnerMessage] = useState('');
//   const [result, setResult] = useState('');

//   useEffect(() => {
//     setSudokuBoard(makepuzzle());
//   }, []);

//   const handleInputChange = (event, index) => {
//     // const newBoard = [...sudokuBoard];
//     newSudokuBoard[index] = Number(event.target.value);
//     // setNewSudokuBoard(newBoard);
//   };

//   const renderCell = (number, index) => {
//     // const originalNumber = number === sudokuBoard[index] && number !== null;

//     if (number === sudokuBoard[index] && number !== null) {
//       return (
//         <div className="sudoku-cell-original" key={index}>
//           {number}
//         </div>
//       );
//     }
//     if (number) {
//       return (
//         <div className="sudoku-cell" key={index}>
//           {number}
//         </div>
//       );
//     }
//     return (
//       <input
//         key={index}
//         type="number"
//         className="sudoku-cell"
//         min="1"
//         max="9"
//         // disabled={originalNumber}
//         onChange={(event) => handleInputChange(event, index)}
//         // onChange={(event) => number = event.target.value}
//       />
//     );
//   };

//   function checkSudoku() {
//     // Comprobamos si solved es truthy, y sudokuBoard está correctamente solucionado
//     const solved = solvepuzzle(sudokuBoard);
//     console.log('Solved', solved);
//     console.log('Original', sudokuBoard);
//     console.log('New', newSudokuBoard);
//     if (JSON.stringify(solved) === JSON.stringify(newSudokuBoard)) {
//       setWinnerMessage('Resuelto, enhorabuena');
//       setResult(true);
//     } else {
//       setWinnerMessage('Erróneo');
//       setResult(false);
//     }
//   }

//   function newGame() {
//     setSudokuBoard(null);
//     setSudokuBoard(makepuzzle());
//     // setNewSudokuBoard(null);
//     // setNewSudokuBoard([...sudokuBoard]);
//   }

//   useEffect(() => {
//     setNewSudokuBoard(sudokuBoard);
//   }, [newGame]);

//   // Función encargada de volver a poner el mensaje del ganador vacío
//   function closeWinnerMessage() {
//     setWinnerMessage('');
//   }

//   function resolveSudoku() {
//     setNewSudokuBoard(solvepuzzle(sudokuBoard));
//     closeWinnerMessage();
//   }

//   return (
//     sudokuBoard &&
//     newSudokuBoard && (
//       <div className="gm-sudoku">
//         <article className="gm-sudoku-game">
//           <h1>Sudoku</h1>

//           <div id="gm-sudoku-board" className="gm-sudoku-board">
//             {newSudokuBoard.map((number, index) => {
//               return renderCell(number, index);
//             })}
//           </div>
//           <button type="button" onClick={() => checkSudoku()}>
//             <p>Comprobar</p>
//           </button>
//         </article>
//         <button type="button" onClick={() => newGame()}>
//           <p>Nueva partida</p>
//         </button>
//         <Link to="/">Volver</Link>
//         {/* Lanzamos el mensaje cuando haya ganador */}
//         {winnerMessage && (
//           <div className="gm-hangman-winner">
//             <p>{winnerMessage}</p>
//             {!result && (
//               <button type="button" onClick={resolveSudoku}>
//                 <p>Ver la solución</p>
//               </button>
//             )}
//             <button type="button" onClick={closeWinnerMessage}>
//               <p>{result ? 'Cerrar' : 'Seguir intentándolo'}</p>
//             </button>
//           </div>
//         )}
//       </div>
//     )
//   );
// }

// export default Sudoku;

import React, { useEffect, useState } from 'react';
import './Sudoku.css';
import { Link } from 'react-router-dom';
import { makepuzzle, solvepuzzle } from 'sudoku';

function Sudoku() {
  const [sudokuBoard, setSudokuBoard] = useState('');
  const [originalSudokuBoard, setOriginalSudokuBoard] = useState('');
  const [winnerMessage, setWinnerMessage] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    setSudokuBoard(makepuzzle());
    setOriginalSudokuBoard(sudokuBoard)
  }, []);

  const handleInputChange = (event, index) => {
    const newBoard = [...sudokuBoard];
    newBoard[index] = Number(event.target.value);
    setSudokuBoard(newBoard);
  };

  const renderCell = (number, index) => {
    const originalNumber = number === sudokuBoard[index] && number !== null;

    if (originalNumber) {
      return (
        <div className="sudoku-cell-original" key={index}>
          {number}
        </div>
      );
    }
    if (number) {
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
        onChange={(event) => handleInputChange(event, index)}
      />
    );
  };

  function checkSudoku() {
    const solved = solvepuzzle(sudokuBoard);
    console.log('Solved', solved);
    console.log('Original', originalSudokuBoard);
    console.log('Actual', sudokuBoard);
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

  function closeWinnerMessage() {
    setWinnerMessage('');
  }

  function resolveSudoku() {
    setSudokuBoard(solvepuzzle(sudokuBoard));
    closeWinnerMessage();
  }

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
