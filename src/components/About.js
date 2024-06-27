import React from 'react';
import HologramEffect from './Hologram';

const generateRaindrops = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className="raindrop"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      ></div>
    ));
  };

const About = () => {
  return (
    <section className="bg-[#2a2c31] text-white text-center  relative overflow-hidden top-0">
        <div className="raindrop-container absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }}>
          {generateRaindrops(100)}
        </div>
        <div className="max-w-4xl mx-auto mt-10 p-4">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">About Me</h2>
          <p className="text-md text-gray-700">
           Software developer with a track record of crafting dynamic web applications, managing databases, and architecting robust cloud infrastructures. Dedicated to staying at the forefront of technological advancements, with a passion for innovation.
          </p>
          </div>
      
          <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-center mt-8 mb-4 text-black">Education</h2>
            <p className="text-md text-gray-700">
              <b>University of Waterloo</b>, Waterloo, Ontario <br />
              <b>Major:</b> Management Engineering with Computing, Honours, Co-operative Program <br />
              <b>Relevant Coursework:</b> Advanced Machine Learning (Python), Search Engines (Go), Principles of Software Engineering, Data Structures and Algorithms (Java), Databases and Software Design (SQL), Analytics and User Experience (R).
            </p>
          </div>
      
          <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-center mt-8 mb-4 text-black">Experience</h2>
            <div className="grid gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
                <div className="font-semibold text-gray-700">Evertz</div>
                <div className="text-sm text-gray-600">April 2024 – Current</div>
                <div className="text-sm text-gray-600">Project Engineer</div>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <div className="font-semibold text-gray-700">Weather Network</div>
                <div className="text-sm text-gray-600">Sept 2022 – Dec 2022 (co-op)</div>
                <div className="text-sm text-gray-600">Software Developer - Data</div>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <div className="font-semibold text-gray-700">UKG</div>
                <div className="text-sm text-gray-600">Sept 2022 – Dec 2022 (co-op)</div>
                <div className="text-sm text-gray-600">Software Developer - Data</div>
              </div>

              <div className="border border-gray-300 p-4 rounded-lg">
                <div className="font-semibold text-gray-700">RVezy</div>
                <div className="text-sm text-gray-600">Sept 2022 – Dec 2022 (co-op)</div>
                <div className="text-sm text-gray-600">Software Developer - Data</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
