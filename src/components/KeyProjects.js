import React from 'react';
import ProjectCard from './ProjectCard';

import NetworkMusicImg from './assets/NNmusic.webp';
import PathFindingImg from './assets/pathFindingImg.webp';
import FutblImg from './assets/futbl.webp';

const keyProjects = [
  {
    title: 'Euro 2024 Player Pursuit',
    description: 'Soccer player guessing game.',
    imageUrl: FutblImg,
    demoUrl: 'http://www.euroguessinggame.ca',
    codeUrl: 'https://github.com/timfmjones/EURO-2024-Player-Pursuit',
  },
  {
    title: 'Music Generator',
    description: 'Generate piano msuic using a LSTM Neural Network.',
    imageUrl: NetworkMusicImg,
    demoUrl: 'http://example.com/demo1',
    codeUrl: 'https://github.com/username/project-one',
  },
  {
    title: 'Path Finding Visualizer',
    description: 'Create a maze and visualize different path finding algorithms.',
    imageUrl: PathFindingImg,
    demoUrl: 'http://example.com/demo1',
    codeUrl: 'https://github.com/username/project-one',
  },
];

const KeyProjects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Projects</h2>
        <div className="flex flex-wrap justify-center">
          {keyProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProjects;
