// src/Game.js

import React, { useState, useEffect } from 'react';
import './Pacman.css';

const ROWS = 20;
const COLS = 20;
const INITIAL_PACMAN_POSITION = { row: 1, col: 1 };
const INITIAL_GHOST_POSITIONS = [
  { row: 18, col: 18 },
  { row: 18, col: 1 }
];

const createInitialMap = () => {
  const map = [
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  // Add initial fruits
  map[1][2] = 2;
  map[18][17] = 2;
  return map;
};

const getRandomEmptyCell = (map) => {
  let emptyCells = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (map[i][j] === 0) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }
  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

const Pacman = () => {
  const [map, setMap] = useState(createInitialMap);
  const [pacman, setPacman] = useState(INITIAL_PACMAN_POSITION);
  const [ghosts, setGhosts] = useState(INITIAL_GHOST_POSITIONS);
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  const movePacman = () => {
    setPacman((prev) => {
      let { row, col } = prev;
      switch (direction) {
        case 'UP':
          row = row > 0 ? row - 1 : ROWS - 1;
          break;
        case 'DOWN':
          row = row < ROWS - 1 ? row + 1 : 0;
          break;
        case 'LEFT':
          col = col > 0 ? col - 1 : COLS - 1;
          break;
        case 'RIGHT':
          col = col < COLS - 1 ? col + 1 : 0;
          break;
        default:
          break;
      }
      if (map[row][col] !== 1) {
        if (map[row][col] === 2) {
          setScore(score + 1);
          setMap(prevMap => {
            const newMap = [...prevMap];
            newMap[row][col] = 0;
            const newFruitPosition = getRandomEmptyCell(newMap);
            newMap[newFruitPosition.row][newFruitPosition.col] = 2;
            return newMap;
          });
        }
        return { row, col };
      }
      return prev;
    });
  };

  const moveGhosts = () => {
    setGhosts((prevGhosts) =>
      prevGhosts.map((ghost) => {
        let { row, col } = ghost;
        const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        switch (randomDirection) {
          case 'UP':
            row = row > 0 ? row - 1 : ROWS - 1;
            break;
          case 'DOWN':
            row = row < ROWS - 1 ? row + 1 : 0;
            break;
          case 'LEFT':
            col = col > 0 ? col - 1 : COLS - 1;
            break;
          case 'RIGHT':
            col = col < COLS - 1 ? col + 1 : 0;
            break;
          default:
            break;
        }
        if (map[row][col] !== 1) {
          return { row, col };
        }
        return ghost;
      })
    );
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    const intervalPacman = setInterval(movePacman, 200);
    const intervalGhosts = setInterval(moveGhosts, 500);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalPacman);
      clearInterval(intervalGhosts);
    };
  }, [direction, score]);

  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < ROWS; i++) {
      const row = [];
      for (let j = 0; j < COLS; j++) {
        let cellClass = 'pacman-cell';
        if (i === pacman.row && j === pacman.col) {
          cellClass = 'pacman-cell pacman';
        } else if (ghosts.some(ghost => ghost.row === i && ghost.col === j)) {
          cellClass = 'pacman-cell ghost';
        } else if (map[i][j] === 1) {
          cellClass = 'pacman-cell wall';
        } else if (map[i][j] === 2) {
          cellClass = 'pacman-cell fruit';
        }
        row.push(
          <div
            key={`${i}-${j}`}
            className={cellClass}
          />
        );
      }
      board.push(<div key={i} className="row">{row}</div>);
    }
    return board;
  };

  return (
    <div className="game-container">
      <h2>Score: {score}</h2>
      <div className="game-board">
        {renderBoard()}
      </div>
    </div>
  );
};

export default Pacman;
