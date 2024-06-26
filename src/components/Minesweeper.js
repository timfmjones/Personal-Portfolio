// src/Minesweeper.js
import React, { useState } from 'react';
import './Minesweeper.css';

const createBoard = (rows, cols, mines) => {
  let board = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null).map(() => ({
      isOpen: false,
      hasMine: false,
      neighborMines: 0,
    })));

  let mineCount = 0;
  while (mineCount < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!board[row][col].hasMine) {
      board[row][col].hasMine = true;
      mineCount++;
    }
  }

  return board;
};

const Minesweeper = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [mines, setMines] = useState(10);
  const [board, setBoard] = useState(createBoard(rows, cols, mines));
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (row, col) => {
    if (gameOver || board[row][col].isOpen) return;

    const newBoard = board.map(arr => arr.map(cell => ({ ...cell })));

    if (newBoard[row][col].hasMine) {
      setGameOver(true);
      newBoard[row][col].isOpen = true;
      setBoard(newBoard);
      alert('Game Over!');
      return;
    }

    const openCell = (r, c) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || newBoard[r][c].isOpen) return;

      newBoard[r][c].isOpen = true;

      let mines = 0;
      for (let rr = -1; rr <= 1; rr++) {
        for (let cc = -1; cc <= 1; cc++) {
          if (rr === 0 && cc === 0) continue;
          const newRow = r + rr;
          const newCol = c + cc;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && newBoard[newRow][newCol].hasMine) {
            mines++;
          }
        }
      }
      newBoard[r][c].neighborMines = mines;

      if (mines === 0) {
        for (let rr = -1; rr <= 1; rr++) {
          for (let cc = -1; cc <= 1; cc++) {
            openCell(r + rr, c + cc);
          }
        }
      }
    };

    openCell(row, col);
    setBoard(newBoard);
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            className={`cell ${cell.isOpen ? 'open' : ''}`}
          >
            {cell.isOpen && (cell.hasMine ? '💣' : cell.neighborMines > 0 ? cell.neighborMines : '')}
          </div>
        ))}
      </div>
    ));
  };

  const handleRestart = () => {
    setBoard(createBoard(rows, cols, mines));
    setGameOver(false);
  };

  return (
    <div className="minesweeper">
      <h1>Minesweeper</h1>
      <div className="controls">
        <label>
          Rows: {rows}
          <input
            type="range"
            min="5"
            max="20"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </label>
        <label>
          Columns: {cols}
          <input
            type="range"
            min="5"
            max="20"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
          />
        </label>
        <label>
          Mines: {mines}
          <input
            type="range"
            min="1"
            max={rows * cols - 1}
            value={mines}
            onChange={(e) => setMines(Number(e.target.value))}
          />
        </label>
        <button onClick={handleRestart}>Restart</button>
      </div>
      {renderBoard()}
    </div>
  );
};

export default Minesweeper;
