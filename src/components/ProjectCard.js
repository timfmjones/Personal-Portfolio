import React from 'react';

const ProjectCard = ({ title, description, imageUrl, demoUrl, codeUrl, gameUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-800 m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {demoUrl && <a href={demoUrl} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Demo</a>}
        {gameUrl && <a href={gameUrl} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Play</a>}
        {codeUrl && <a href={codeUrl} className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Code</a>}
        
      </div>
    </div>
  );
};

export default ProjectCard;
