import React, { useState } from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom';

function TicTacToe() {
  const [isStarted, setIsStarted] = useState(Boolean);
  const [player, setPlayer] = useState('❎');

  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  // const cells = document.querySelectorAll('.cell');

  // Datos para el tablero
  let data = [null, null, null, null, null, null, null, null, null];

  // // Actualizar los valores de las celdas
  // cells.forEach((cell, index) => {
  //   <button type="button" className="cell"></button>;
  //   // cell.textContent = data[index];
  // });

  return (
    <div>
      <h1>TicTacToe</h1>

      {/* <button type="reset"><p>Nueva partida</p></button> */}
      <div id="board" className="board">
        {data.map((space, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              type="button"
              className={`cell-${index}`}
              onClick={() => {
                const cell = document.querySelector(`.cell-${index}`);
                data[index] = `${player}`;
                cell.innerHTML = `${player}`;
                setPlayer(player === '❎' ? '🔴' : '❎');
                console.log(data);
              }}
            >
              {space}
            </button>
          );
        })}
        {/* <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <button type="button" className="cell"></button> */}
      </div>
      <button
        type="button"
        onClick={() => (data = [null, null, null, null, null, null, null, null, null])}
      >
        <p>Nueva partida</p>
      </button>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default TicTacToe;
