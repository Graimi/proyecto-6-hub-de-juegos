import React, { useEffect, useState } from 'react';
import './Hangman.css';
import { Link } from 'react-router-dom';

function Hangman() {
  const [word, setWord] = useState(null);
  const [lifes, setLifes] = useState(0);
  const [hint, setHint] = useState(null);

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

  const lifeImg = [
    {
      img: '0'
    },
    {
      img: '1'
    },
    {
      img: '2'
    },
    {
      img: '3'
    },
    {
      img: '4'
    },
    {
      img: '5'
    }
  ];

  const vocabulary = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // Función encargada de seleccionar la palabra aleatoriamente
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    // setWord(words[randomIndex].toUpperCase());
    // setHint('_ '.repeat(word.length));
    // setHint(word);
    const selectedWord = words[randomIndex].toUpperCase();
    const maskedWord = '_'.repeat(selectedWord.length);
    setWord(maskedWord);
    setHint(maskedWord);
    return words[randomIndex].toUpperCase();
  }

  function vocabularyDefault() {
    const vocabularyButtons = document.querySelectorAll('.gm-hangman-vocabulary button');
    vocabularyButtons.forEach((button) => {
      button.classList.remove('check');
      button.classList.add('gm-hangman-letter');
      button.removeAttribute('disabled');
    });
  }

  // Función encargada de resetear el juego
  function newGame() {
    // setWord(null);
    // const board = document.querySelector('.none');
    // board.style.display = 'flex';
    setWord(getRandomWord());
    // getRandomWord();
    setLifes(5);
    vocabularyDefault();
  }

  // useEffect(() => {
  //   setHint(word);
  // }, [word]);

  function vocabularyClick(letter) {
    console.log('Letter', letter);
    if (word.includes(letter)) {
      const newHint = hint
        .split('')
        .map((char, index) => (word[index] === letter ? letter : char))
        .join('');
      setHint(newHint);
    }
  }

  return (
    <div className="gm-hangman">
      <article className="gm-hangman-game">
        <h1>Hangman</h1>
        <h3>Vidas restantes: {lifes}</h3>
        <h3>Estado de vida: {lifeImg[lifes].img}</h3>
        <h3>{word}</h3>
        <h3>Pista: {hint}</h3>
        <article className="gm-hangman-vocabulary">
          {vocabulary.map((letter) => {
            return (
              <button
                type="button"
                id={`gm-hangman-letter-${letter}`}
                className="gm-hangman-letter"
                onClick={(event) => {
                  const letterButton = event.target;
                  letterButton.disabled = true;
                  letterButton.className = 'check';
                  vocabularyClick(letter);
                }}
              >
                <p>{letter}</p>
              </button>
            );
          })}
        </article>
      </article>
      <button type="button" onClick={() => newGame()}>
        Nueva partida
      </button>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Hangman;
