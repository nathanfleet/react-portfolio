import React from 'react';

import cplus from '../assets/tech/cplus.png';
import git from '../assets/tech/git.png';
import html from '../assets/tech/html.png';
import javascript from '../assets/tech/javascript.png';
import python from '../assets/tech/python.png';
import react from '../assets/tech/react.png';
import tailwind from '../assets/tech/tailwind.png';

const Skills = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Things I Use</h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="m-4">
          <img src={cplus} alt="C++ logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={git} alt="Git logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={html} alt="HTML logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={javascript} alt="JavaScript logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={python} alt="Python logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={react} alt="React logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="m-4">
          <img src={tailwind} alt="Tailwind logo" className="w-16 h-16 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Skills;