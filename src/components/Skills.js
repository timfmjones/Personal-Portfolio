import React from 'react';
import SkillBadge from './SkillBadge';
import {  DiScrum } from 'react-icons/di';
import { FaProjectDiagram } from "react-icons/fa";
import { PiKanbanBold } from "react-icons/pi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { LiaConnectdevelop } from "react-icons/lia";

import TechnicalSkills from './TechnicalSkills';

const softSkills = [
  { name: 'Scrum', icon: <DiScrum /> },
  { name: 'Project Management', icon: <FaProjectDiagram /> },
  { name: 'Kanban', icon: < PiKanbanBold /> },
  { name: 'Agile', icon: <LiaConnectdevelop /> },
  { name: 'Communication', icon: <GiSatelliteCommunication /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-50">
      <TechnicalSkills />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Other Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;


