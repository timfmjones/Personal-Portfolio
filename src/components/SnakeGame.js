import React, { useState, useEffect, useRef } from "react";
import "./SnakeGame.css";

const canvasSize = { width: 400, height: 400 };
const initialSnake = [{ x: 10, y: 10 }];
const initialFood = { x: 15, y: 15 };
const scale = 20;
const directions = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState(directions.ArrowRight);
  const [gameOver, setGameOver] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        moveSnake();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    if (directions[e.key]) {
      setDirection(directions[e.key]);
    }
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    if (checkCollision(head)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * (canvasSize.width / scale)),
        y: Math.floor(Math.random() * (canvasSize.height / scale)),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    if (
      head.x < 0 ||
      head.x >= canvasSize.width / scale ||
      head.y < 0 ||
      head.y >= canvasSize.height / scale
    ) {
      return true;
    }
    for (let segment of snake) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  };

  const drawGame = (context) => {
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
    context.fillStyle = "green";
    snake.forEach((segment) => {
      context.fillRect(segment.x * scale, segment.y * scale, scale, scale);
    });
    context.fillStyle = "red";
    context.fillRect(food.x * scale, food.y * scale, scale, scale);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawGame(context);
  }, [snake, food, gameOver]);

  const restartGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection(directions.ArrowRight);
    setGameOver(false);
  };

  return (
    <div className="game-board">
        <div className="snake-game">
            <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} className="snake-canvas"/>
            {gameOver && <div className="game-over">Game Over</div>}
            {gameOver && <button onClick={restartGame} className="restart-button">Restart Game</button>}
        </div>
    </div>
    
  );
};

export default SnakeGame;
