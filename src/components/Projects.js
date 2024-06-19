import React from 'react';
import ProjectCard from './ProjectCard';

import NetworkMusicImg from './assets/NNmusic.webp';
import PathFindingImg from './assets/pathFindingImg.webp';
import FutblImg from './assets/futbl.webp';
import SortingAlgoImg from './assets/sortingAlgoImg.webp';
import PortfolioImg from './assets/portfolioImg.webp';

const projects = [
  {
    title: 'Music Generator',
    description: 'Generate piano msuic using a LSTM Neural Network.',
    imageUrl: NetworkMusicImg,
    demoUrl: 'https://github.com/timfmjones',
    codeUrl: 'https://github.com/timfmjones',
  },
  {
    title: 'Path Finding Visualizer',
    description: 'Create a maze and visualize different path finding algorithms.',
    imageUrl: PathFindingImg,
    demoUrl: 'https://github.com/timfmjones/Pathfinding-Algorithm-Visualizer',
    codeUrl: 'https://github.com/timfmjones/Pathfinding-Algorithm-Visualizer',
  },
  {
    title: 'Fubo',
    description: 'Soccer player guessing game.',
    imageUrl: FutblImg,
    demoUrl: 'https://github.com/timfmjones/Futbl',
    codeUrl: 'https://github.com/timfmjones/Futbl',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description: 'Visualize sorting alogirthms.',
    imageUrl: SortingAlgoImg,
    demoUrl: 'https://github.com/timfmjones/Sorting-Algorithm-Visualizer',
    codeUrl: 'https://github.com/timfmjones/Sorting-Algorithm-Visualizer',
  },
  {
    title: 'Personal Developer Portfolio',
    description: 'This webapp!',
    imageUrl: PortfolioImg,
    demoUrl: '/',
    codeUrl: 'https://github.com/timfmjones/Personal-Portfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
