import React, { useState } from 'react';
import './Hangman.css';
import { Link } from 'react-router-dom';

function Hangman() {
  const [word, setWord] = useState(null);
  const [lifes, setLifes] = useState(0);

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
    }
  ];

  // Función encargada de seleccionar la palabra aleatoriamente
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }

  // Función encargada de resetear el juego
  function resetData() {
    setWord(null);
    // const board = document.querySelector('.none');
    // board.style.display = 'flex';
    setWord(getRandomWord());
    setLifes(3);
  }

  return (
    <div className="gm-hangman">
      <article className="gm-hangman-game">
        <h1>Hangman</h1>
        <h3>Vidas restantes: {lifes}</h3>
        <h3>Estado de vida: {lifeImg[lifes].img}</h3>
        <h3>{word}</h3>
        <h3>Pista: </h3>
        <p>Input de abecedario</p>
      </article>
      <button type="button" onClick={() => resetData()}>
        Nueva partida
      </button>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Hangman;
