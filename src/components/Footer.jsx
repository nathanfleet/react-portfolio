import React from 'react';
import { motion } from 'framer-motion';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-20 h-20 mr-4" />
          <p className="text-white mr-2">
            Nathan Fleet
          </p>
        </div>
        <div className="flex items-center">
          <motion.a 
          href="https://www.linkedin.com/in/nathan-fleet-555897217/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale:1.5}}>
              <motion.img src={linkedin} alt="Linkedin" className="w-10 h-10 mx-2 md:mx-4 cursor-pointer"/>
          </motion.a>
          <motion.a 
          href="https://github.com/nathanfleet03"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{scale:1.5}}>
              <motion.img src={github} alt="GitHub" className="w-10 h-10 mx-2 md:mx-4 cursor-pointer"/>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer