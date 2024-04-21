// Home.jsx

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import '../../locomotive-scroll.css';
import Hero from '../Hero/Hero';
import Technologies from '../Technologies/Technologies';
import './Home.style.css';
import Projects from '../Projects/Projects';

const Home = () => {
  const scrollRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });

    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroll.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  const springConfig = { damping: 50, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <div ref={scrollRef} className='w-full h-[400h]'>
      <motion.div
        className='mouseFollower'
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          border: '2px solid white',
          borderRadius: '50%',
          backgroundColor: 'black',
          x: springX,
          y: springY,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      ></motion.div>
      <div className="home">
      <Hero />
      </div>
      <motion.div
        className='mouseFollower'
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          border: '2px solid white',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          x: springX,
          y: springY,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      ></motion.div>
      <div className="tech">
      <Technologies />
      </div>
      <div className="project">
     
        <Projects />
      </div>
    </div>
  );
};

export default Home;
