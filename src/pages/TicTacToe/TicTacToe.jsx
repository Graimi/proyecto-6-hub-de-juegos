import React, { useState } from 'react';
import './TicTacToe.css';
import GameButtons from '../../components/GameButtons/GameButtons';

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
    const players = [
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689618926/Hub%20de%20juegos/cerrar_pab7p3.png',
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689619473/Hub%20de%20juegos/circulo_sbn0mx.png'
    ];
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
        setWinnerMessage(
          <h3>
            ¡El ganador es:
            <img src={player} alt="player" className="gm-tictactoe-window-player" />!
          </h3>
        );
        const game = document.querySelector('.gm-tictactoe-game');
        game.style.display = 'none';
      }
    });
    // Check empate
    if (data.every((cell) => cell !== null)) {
      setWinnerMessage(<h3>¡Empate!</h3>);
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
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                type="button"
                id={`gm-tictactoe-cell-${index}`}
                className="gm-tictactoe-cell"
                onClick={() => {
                  if (data[index] === null) {
                    // Lanzamos la lógica para meter el jugador en la casilla y cambiar entre ellos
                    data[index] = `${player}`;
                    setPlayer(
                      player ===
                        'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689618926/Hub%20de%20juegos/cerrar_pab7p3.png'
                        ? 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689619473/Hub%20de%20juegos/circulo_sbn0mx.png'
                        : 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689618926/Hub%20de%20juegos/cerrar_pab7p3.png'
                    );
                    checkWinner();
                  }
                }}
                // Desactiva el botón si la celda ya ha sido seleccionada
                disabled={data[index] !== null}
              >
                {space === null ? '' : <img src={space} alt="player" />}
              </button>
            );
          })}
        </div>
        <h3>
          Turno: <img src={player} alt="player" className="gm-tictactoe-player" />
        </h3>
      </article>
      {GameButtons(newGame)}
      {/* Lanzamos el mensaje cuando haya un resultado */}
      {winnerMessage && (
        <div className="window-winner">
          {winnerMessage}
          {/* <h3>{winnerMessage}</h3> */}
          <button type="button" className="gm-cta" onClick={closeWinnerMessage}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
