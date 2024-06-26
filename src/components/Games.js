import React from 'react';
import ProjectCard from './ProjectCard';

import MinesweeperImg from './assets/minesweeper.jpg';
import SnakeGameImg from './assets/snakegame.webp';
import PathFindingImg from './assets/pathFindingImg.webp';
import FutblImg from './assets/futbl.webp';
import SortingAlgoImg from './assets/sortingAlgoImg.webp';
import PortfolioImg from './assets/portfolioImg.webp';

const games = [
  {
    title: 'Snake',
    description: 'Generate piano msuic using a LSTM Neural Network.',
    imageUrl: SnakeGameImg,
    demoUrl: '/Personal-Portfolio/snake-game',
  },
  {
    title: 'Minesweeper',
    description: 'Create a maze and visualize different path finding algorithms.',
    imageUrl: MinesweeperImg,
    demoUrl: '/Personal-Portfolio/minesweeper-game',
  },
  {
    title: 'Euro 2024 Player Pursuit',
    description: 'Soccer player guessing game.',
    imageUrl: FutblImg,
    demoUrl: 'http://www.euroguessinggame.ca',
    codeUrl: 'https://github.com/timfmjones/EURO-2024-Player-Pursuit',
  },
  
];

const Games = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
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
