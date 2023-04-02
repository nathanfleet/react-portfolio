import React from 'react';
import { styles } from '../constants';
import { motion } from 'framer-motion';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const About = () => {
  return (
    <div id="about" className="w-full h-screen flex items-center justify-center mb-20">
      <div className="max-w-4xl w-full px-4">
        <div className="flex-col items-left">
          <p className={styles.subText}>Introduction</p>
          <h2 className={styles.headText}>Overview.</h2>
        </div>

        <p className='mt-4 text-secondary text-lg max-w-3xl leading-[30px] text-left text-white'>
          I'm a computer science student at Kent State University, currently enrolled in the honors 
          college program. My academic interests lie in programming languages such as Python, JavaScript, 
          and C++, and I enjoy using them to solve real-world problems. I'm passionate about software 
          development and continuously strive to enhance my skills through hands-on experience and challenging 
          coursework. I'm committed to developing innovative solutions that contribute to the betterment of society,
           and I'm excited about the opportunities that lie ahead as I continue to pursue my academic and professional goals.
        </p>

        <div className="flex justify-center mt-4">
          <motion.a
            href="https://github.com/nathanfleet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5, rotate: 360 }}
          >
            <motion.img
              src={ github }
              alt="GitHub"
              className="w-20 h-20 mx-4 cursor-pointer"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nathan-fleet-555897217/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5, rotate: 360 }}
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