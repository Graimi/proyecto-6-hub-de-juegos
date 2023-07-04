import React, { useState } from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom';

function TicTacToe() {
  // const [isStarted, setIsStarted] = useState(false);
  const [player, setPlayer] = useState('');
  const [data, setData] = useState([null, null, null, null, null, null, null, null, null]);

  function getRandomPlayer() {
    const players = ['❎', '🔴'];
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  function resetData() {
    setData([null, null, null, null, null, null, null, null, null]);
    const board = document.querySelector('.gm-tictactoe-board');
    board.style.display = 'grid';
    setPlayer(getRandomPlayer());
  }

  function checkWinner() {
    // const winningCombinations = [
    console.log(data[0], data[1], data[2]);
    // if ((data[0] === '🔴') & (data[1] === '🔴') & (data[2] === '🔴')) {
    if ((data[0] == data[1]) == data[2]) {
      console.log('ganador', { player });
      resetData();
    }
  }

  return (
    <div className="gm-tictactoe">
      <h1>Tres en raya</h1>
      {/* <button type="button">Empezar partida</button> */}
      {/* <button type="reset"><p>Nueva partida</p></button> */}
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
      <button type="button" onClick={() => resetData()}>
        <p>Nueva partida</p>
      </button>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default TicTacToe;
