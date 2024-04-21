import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";
import "./Technologies.style.css";

const Technologies = () => {
  const technologies = [
    { name: "JavaScript", icon: "https://cdn.svgporn.com/logos/javascript.svg" },
    { name: "React", icon: "https://cdn.svgporn.com/logos/react.svg" },
    { name: "Redux", icon: "https://cdn.svgporn.com/logos/redux.svg" },
    { name: 'Nextjs', icon: 'https://cdn.svgporn.com/logos/nextjs.svg' },
    { name: "MongoDb", icon: "https://cdn.svgporn.com/logos/mongodb.svg" },
    { name: "Node.js", icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
    { name: "Express", icon: "https://cdn.svgporn.com/logos/express.svg" },
    { name: 'tailwind', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg' },
  ];
  const smallTechnologies = [
      { name: 'tailwind', icon: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg' },
    { name: "JavaScript", icon: "https://cdn.svgporn.com/logos/javascript.svg" },
    { name: "Redux", icon: "https://cdn.svgporn.com/logos/redux.svg" },
    { name: 'CSS', icon: 'https://cdn.svgporn.com/logos/css-3.svg' },
    { name: 'HTML', icon: 'https://cdn.svgporn.com/logos/html-5.svg' },
    { name: "Node.js", icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
    { name: 'github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg' },
    { name: 'firebase', icon: 'https://cdn.svgporn.com/logos/firebase.svg' },
    { name: 'react-native', icon: 'https://cdn.svgporn.com/logos/react.svg' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);



  return (
    <motion.div
      ref={ref}
      data-scroll-speed="2"
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      exit={{ opacity: 0, y: -50 }}
      className="w-full h-screen relative bg-gradient-to-t from-[#2980B9] to-[#f0f0f0]  flex flex-col items-center justify-center px-4"
    >

      <div className="flex flex-wrap justify-center items-center">
        {technologies.map((tech, index) => (
          <div key={index} className="m-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{ opacity: 0.5, y: 0, scale: 0.5 }}
              whileHover={{ scale: 1.10, rotate: 2, transition: { duration: 0.1 } }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
   
              style={{
                backdropFilter: 'blur(1.5px)',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                width: '200px',
                textAlign: 'center',
              }}
              className="rounded-3xl flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img src={tech.icon} alt={tech.name} className="h-32 mb-4" />
              <p className="text-lg font-semibold text-gray-800">{tech.name}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
