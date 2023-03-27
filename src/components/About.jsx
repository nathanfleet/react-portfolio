import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => {
  return (
    <>
        <motion.div>
            <h2 className={"text-2xl mb-4"}>About</h2>
        </motion.div>
        <motion.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec massa vel tortor ultrices
        pellentesque. Suspendisse potenti. Sed non velit vel quam varius sodales. Nam et semper
        ante, at faucibus quam. Nullam in lacus vitae sapien eleifend ultrices.
        </motion.p>
    </>
  );
};

export default About;
