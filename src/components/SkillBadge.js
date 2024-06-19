import React from 'react';
import { IconContext } from "react-icons";

const SkillBadge = ({ skill, icon }) => {
  const iconStyles = { color: "rgb(59, 130, 246)", size: "1.5em" }; 

  return (
    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 mr-2 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
      <IconContext.Provider value={{ className: "inline-block mr-2", ...iconStyles }}>
        {icon}
      </IconContext.Provider>
      {skill}
    </div>
  );
};

export default SkillBadge;

