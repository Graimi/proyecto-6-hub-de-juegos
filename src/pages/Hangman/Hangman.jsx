import React, { useEffect, useState } from 'react';
import './Hangman.css';
import GameButtons from '../../components/GameButtons/GameButtons';

// Creamos la función para el juego El ahorcado
function Hangman() {
  // Creamos los estados para el juego
  const [word, setWord] = useState(null);
  const [lifes, setLifes] = useState('0');
  const [hint, setHint] = useState(null);
  const [winnerMessage, setWinnerMessage] = useState(null);

  // Creamos un string de palabras
  const words = [
    'ventana',
    'ornitorrinco',
    'complejo',
    'supermercado',
    'serpiente',
    'abogado',
    'electricidad',
    'formativo',
    'hospital',
    'ambulancia',
    'enfermedad',
    'estacionado',
    'solidaridad',
    'desierto'
  ];

  // Creamos un array para almacenar las imágenes según las vidas que falten
  const lifeImg = [
    {
      img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689790399/Hub%20de%20juegos/state1_vawdne.png'
    },
    {
      img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689790399/Hub%20de%20juegos/state2_hzn79h.png'
    },
    {
      img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689790399/Hub%20de%20juegos/state3_ajkkq6.png'
    },
    {
      img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689790398/Hub%20de%20juegos/state4_q98dmp.png'
    },
    {
      img: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1689790123/Hub%20de%20juegos/state5b_i19ele.png'
    }
  ];

  // Creamos un array con todas las letras del abecedario
  const vocabulary = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  // Creamos el siguiente useEffect para lanzar el mensaje de ganador cuando acierte el jugador
  useEffect(() => {
    if (word && hint === word.join('')) {
      setWinnerMessage(<h3>Enhorabuena, ¡te has librado!</h3>);
      const game = document.querySelector('.gm-hangman-game');
      game.style.display = 'none';
    }
  }, [hint]);

  // Creamos el siguiente useEffect para lanzar el mensaje de fallo cuando falle el jugador
  useEffect(() => {
    if (lifes === 0) {
      setWinnerMessage(
        <h3>
          Lo siento, has sido ahorcado
          <img src={lifeImg[0].img} alt="hangman" className="gm-hangman-logo" />
        </h3>
      );
      const game = document.querySelector('.gm-hangman-game');
      game.style.display = 'none';
    }
  }, [lifes]);

  // Función que se lanza cada vez que el jugador pincha en una de las letras del abecedario
  function vocabularyClick(letter, event) {
    // Una vez se clicka el botón lo deshabilitamos
    const letterButton = event.target;
    letterButton.disabled = true;

    // Si la letra se encuentra en la palabra le damos un estilo y en caso contrario otro para diferenciarlas
    if (word.includes(letter.toUpperCase())) {
      const newHint = hint
        .split('')
        .map((char, index) => (word[index] === letter ? letter : char))
        .join('');
      setHint(newHint);
      letterButton.classList.add('good');
    } else {
      setLifes(lifes - 1);
      letterButton.classList.add('bad');
    }
  }

  // Función encargada de visualizar el tablero del abecedario
  function vocabularyBoard() {
    return vocabulary.map((letter) => {
      return (
        <button
          type="button"
          key={letter}
          id={`gm-hangman-letter-${letter}`}
          className="gm-hangman-letter"
          onClick={(event) => {
            vocabularyClick(letter, event);
          }}
        >
          {letter}
        </button>
      );
    });
  }

  // Función encargada de seleccionar la palabra aleatoriamente
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex].toUpperCase().split('');
    const maskedWord = '_'.repeat(selectedWord.length);
    setWord(maskedWord);
    setHint(maskedWord);
    return selectedWord;
  }

  // Función encargada de restablecer el vocabulario
  function vocabularyDefault() {
    const vocabularyButtons = document.querySelectorAll('.gm-hangman-vocabulary button');
    vocabularyButtons.forEach((button) => {
      button.classList.remove('good');
      button.classList.remove('bad');
      button.classList.add('gm-hangman-letter');
      button.removeAttribute('disabled');
    });
  }

  // Función encargada de resetear el juego
  function newGame() {
    const game = document.querySelector('.gm-hangman-game');
    game.style.display = 'flex';
    setWord(getRandomWord());
    setLifes(4);
    vocabularyDefault();
  }

  // Función encargada de cerrar el mensaje que aparece cuando finaliza el juego
  function closeWinnerMessage() {
    setWinnerMessage('');
    newGame();
  }

  // Template del juego en cuestión
  return (
    <div className="gm-hangman">
      <h1>El ahorcado</h1>
      <article className="gm-hangman-game">
        <span className="gm-hangman-life">
          <p>{lifes}</p>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1689695739/Hub%20de%20juegos/corazon_i6fwxr.png"
            alt="life"
            className="gm-hangman-life-icon"
          />
        </span>
        <span className="gm-hangman-state">
          {/* <h3>Estado de vida: </h3> */}
          <img src={lifeImg[lifes].img} alt="life-state" />
        </span>
        <span className="gm-hangman-hint">
          <h3>Pista: </h3> <h3 id="hint">{hint}</h3>
        </span>
        <article className="gm-hangman-vocabulary">{vocabularyBoard()}</article>
      </article>
      {GameButtons(newGame)}
      {/* Lanzamos el mensaje cuando haya un resultado */}
      {winnerMessage && (
        <div className="gm-hangman-winner window-winner">
          {winnerMessage}
          <h2>{word}</h2>
          <button type="button" className="gm-cta" onClick={closeWinnerMessage}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default Hangman;
