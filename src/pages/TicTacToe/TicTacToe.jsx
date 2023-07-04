import React, { useState } from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom';

function TicTacToe() {
  // const [isStarted, setIsStarted] = useState(false);
  const [player, setPlayer] = useState('');
  const [data, setData] = useState([null, null, null, null, null, null, null, null, null]);

  const winningCombinations = [
    // Combinaciones horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Combinaciones verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Combinaciones diagonales
    [0, 4, 8],
    [2, 4, 6]
  ];

  function getRandomPlayer() {
    const players = ['❎', '🔴'];
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  function resetData() {
    setData([null, null, null, null, null, null, null, null, null]);
    const board = document.querySelector('.none');
    board.style.display = 'flex';
    setPlayer(getRandomPlayer());
  }

  function checkWinner() {
    winningCombinations.forEach((combination) => {
      const [index1, index2, index3] = combination;
      if (data[index1] === player && data[index2] === player && data[index3] === player) {
        console.log(`Ganador: ${player}`);
        resetData();
      }
    });
  }

  return (
    <div className="gm-tictactoe">
      <h1>Tres en raya</h1>
      <div className="none">
        <div id="board" className="gm-tictactoe-board">
          {data.map((space, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                type="button"
                id="cell"
                className={`cell-${index}`}
                onClick={() => {
                  // const updatedData = [...data];
                  // updatedData[index] = player;
                  // setData(updatedData);
                  data[index] = `${player}`;
                  setPlayer(player === '❎' ? '🔴' : '❎');
                  console.log(data);
                  checkWinner();
                }}
              >
                {space}
              </button>
            );
          })}
        </div>
        <h3>Turno: {player}</h3>
      </div>
      <button type="button" onClick={() => resetData()}>
        <p>Nueva partida</p>
      </button>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default TicTacToe;
