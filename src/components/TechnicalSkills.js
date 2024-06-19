import React from 'react';
import SkillBadge from './SkillBadge';
import { DiJavascript1, DiReact, DiNodejs, DiJava, DiPython, DiHtml5, DiLinux } from 'react-icons/di';

const skills = [
  { name: 'JavaScript', icon: <DiJavascript1 /> },
  { name: 'React', icon: <DiReact /> },
  { name: 'Node.js', icon: <DiNodejs /> },
  { name: 'Java', icon: <DiJava /> },
  { name: 'HTML', icon: <DiHtml5 /> },
  { name: 'Python', icon: <DiPython /> },
  { name: 'Linux', icon: <DiLinux /> },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default TechnicalSkills;


