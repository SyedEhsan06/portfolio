import React from 'react';
import './Hero.style.css';
import { motion,stagger } from 'framer-motion';

const Hero = () => {
  return (
    <div className="main">
      <div className="centered">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5}}
          
          className="nameText
            
          "
        >
          <h1 style={{ fontFamily: "smooch, cursive" } } className='textNameh'>Syed <span>Ehsan</span></h1>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="fullStack"
        >
          <h3 className='font-serif'>Full-Stack Developer</h3>
        </motion.div>
        {/* <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="icon"
        >
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
