import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../constants';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <motion.div variants={textVariant()} className="flex flex-col items-left">
          <p className={styles.subText}>Introduction</p>
          <h2 className={styles.headText}>Overview.</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 text-secondary text-lg max-w-3xl leading-[30px] text-left text-white'>
          I'm a skilled software developer with experience in TypeScript and JavaScript, 
          and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner 
          and collaborate closely with clients to create efficient, scalable, and user-friendly 
          solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="flex justify-center mt-4">
        <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 2.0, rotate: 360 }}
          >
            <motion.img
              src={ github }
              alt="GitHub"
              className="w-20 h-20 mx-4 cursor-pointer"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 2.0, rotate: 360 }}
          >
            <motion.img
              src={ linkedin }
              alt="LinkedIn"
              className="w-20 h-20 mx-4 cursor-pointer"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;