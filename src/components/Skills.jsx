import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../constants';

import cplus from '../assets/tech/cplus.png';
import git from '../assets/tech/git.png';
import html from '../assets/tech/html.png';
import javascript from '../assets/tech/javascript.png';
import python from '../assets/tech/python.png';
import react from '../assets/tech/react.png';
import tailwind from '../assets/tech/tailwind.png';

const Skills = () => {
  return (
    <div className="bg-black text-white h-1/2 flex flex-col items-center justify-center md:h-full mb-80">
      <div className="max-w-4xl w-full px-4">
        <div className="flex-col items-left text-left">
          <p className={styles.subText}>My experience with technologies</p>
          <h2 className={styles.headText}>Tech.</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={cplus} alt="C++ logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={git} alt="Git logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={html} alt="HTML logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={javascript} alt="JavaScript logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={python} alt="Python logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={react} alt="React logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
          <div className="m-4">
            <motion.div whileHover={{ scale: 1.5 }}>
              <img src={tailwind} alt="Tailwind logo" className="w-20 h-20 mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
