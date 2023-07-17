import React, { useState } from 'react';
import './TicTacToe.css';
import { Link } from 'react-router-dom';

// Creamos la función para el juego Tres en Raya
function TicTacToe() {
  // Creamos los estados para el juego
  const [player, setPlayer] = useState('');
  const [data, setData] = useState([null, null, null, null, null, null, null, null, null]);
  const [winnerMessage, setWinnerMessage] = useState('');

  // Añadimos las combinaciones ganadoras
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

  // Función encargada de seleccionar al jugador aleatoriamente
  function getRandomPlayer() {
    const players = ['❎', '🔴'];
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  // Función encargada de resetear las casillas de juego
  function newGame() {
    setData([null, null, null, null, null, null, null, null, null]);
    const game = document.querySelector('.gm-tictactoe-game');
    game.style.display = 'flex';
    setPlayer(getRandomPlayer());
  }

  // Función encargada de detectar cuando ha habido un ganador o empate
  function checkWinner() {
    // Check ganador
    winningCombinations.forEach((combination) => {
      const [index1, index2, index3] = combination;
      if (data[index1] === player && data[index2] === player && data[index3] === player) {
        setWinnerMessage(`¡El ganador es: ${player}!`);
        const game = document.querySelector('.gm-tictactoe-game');
        game.style.display = 'none';
      }
    });
    // Check empate
    if (data.every((cell) => cell !== null)) {
      setWinnerMessage('¡Empate!');
      const game = document.querySelector('.gm-tictactoe-game');
      game.style.display = 'none';
    }
  }

  // Función encargada de cerrar el mensaje que aparece cuando finaliza el juego
  function closeWinnerMessage() {
    setWinnerMessage('');
    newGame();
  }

  // Template del juego en cuestión
  return (
    <div className="gm-tictactoe">
      <h1>Tres en raya</h1>
      <article className="gm-tictactoe-game">
        <div id="gm-tictactoe-board" className="gm-tictactoe-board">
          {data.map((space, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                type="button"
                id={`gm-tictactoe-cell-${index}`}
                className="gm-tictactoe-cell"
                onClick={() => {
                  if (data[index] === null) {
                    // Lanzamos la lógica para meter el jugador en la casilla y cambiar entre ellos
                    data[index] = `${player}`;
                    setPlayer(player === '❎' ? 'X' : '❎');
                    checkWinner();
                  }
                }}
                // Desactiva el botón si la celda ya ha sido seleccionada
                disabled={data[index] !== null}
              >
                {space}
              </button>
            );
          })}
        </div>
        <h3>Turno: {player}</h3>
      </article>
      <article className="gm-tictactoe-buttons">
        <button
          type="button"
          id="gm-tictactoe-button-newGame"
          className="cta"
          onClick={() => newGame()}
        >
          Nueva partida
        </button>
        <button type="button" className="cta">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689611695/Hub%20de%20juegos/home_nn7sp1.png"
              alt="home"
              id="gm-button-home"
            />
          </Link>
        </button>
      </article>
      {/* Lanzamos el mensaje cuando haya un resultado */}
      {winnerMessage && (
        <div className="gm-tictactoe-winner window-winner">
          <h3>{winnerMessage}</h3>
          {/* <h3>{winnerMessage}</h3> */}
          <button
            type="button"
            // className="gm-tictactoe-button-closeWindow"
            className="cta"
            onClick={closeWinnerMessage}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
