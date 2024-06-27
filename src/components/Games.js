import React from 'react';
import ProjectCard from './ProjectCard';

import MinesweeperImg from './assets/minesweeper.jpg';
import SnakeGameImg from './assets/snakegame.webp';
import PathFindingImg from './assets/pathFindingImg.webp';
import FutblImg from './assets/futbl.webp';
import SortingAlgoImg from './assets/sortingAlgoImg.webp';
import PacmanImg from './assets/pacman.webp';

const games = [
  {
    title: 'Snake',
    description: 'Eat fruit to grow your snake in class Snake',
    imageUrl: SnakeGameImg,
    gameUrl: '/games/snake',
  },
  {
    title: 'Pac-Man',
    description: 'Avoid ghosts and eat fruit in classic Pacman',
    imageUrl: PacmanImg,
    gameUrl: '/games/pacman',
  },
  {
    title: 'Minesweeper',
    description: 'Clear all the mines in classic minesweeper',
    imageUrl: MinesweeperImg,
    gameUrl: '/games/minesweeper',
  },
  {
    title: 'EURO 2024 Player Pursuit',
    description: 'Soccer player guessing game for EURO 2024.',
    imageUrl: FutblImg,
    gameUrl: 'http://www.euroguessinggame.ca',
    codeUrl: 'https://github.com/timfmjones/EURO-2024-Player-Pursuit',
  },
  
];

const Games = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mini Games</h2>
        <div className="flex flex-wrap justify-center">
          {games.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
