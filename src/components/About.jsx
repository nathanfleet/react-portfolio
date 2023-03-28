import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../constants'

const About = () => {
  return (
    <div className="w-full h-screen ml-4 mt-4 ">
      <motion.div variants={textVariant()}
      className="flex flex-col">
          <p className={styles.subText}>Introduction</p>
          <h2 className={styles.headText}>Overview.</h2>
        </motion.div>

        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-white'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </div>
  );
};

export default About;
