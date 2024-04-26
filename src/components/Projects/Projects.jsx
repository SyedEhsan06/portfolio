import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
// import "./Technologies.style.css";

const Projects = () => {
  const [hoverImage, setHoverImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoverTech, setHoverTech] = useState(null);
  const [showTechPopup, setShowTechPopup] = useState(false);
  // const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const handleMouseEnterTech = (tech) => {
    // console.log(tech);
    setShowTechPopup(true);
    setHoverTech(tech);
  };
  const handleMouseLeaveTech = () => {
    setHoverTech(null);
    setShowTechPopup(false);
  };
  const handleMouseEnter = (icon) => {
    setShowPopup(true);
    setHoverImage(icon);
  };
  const [hideTimeout, setHideTimeout] = useState(null);

  // Function to handle mouse leave event with a slight delay
  const handleMouseLeave = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setHideTimeout(setShowPopup(false));
  };
  const techIcons = [
    {
      name: "Javascript",
      icon: "https://cdn.svgporn.com/logos/javascript.svg",
    },
    { name: "React", icon: "https://cdn.svgporn.com/logos/react.svg" },
    { name: "Redux", icon: "https://cdn.svgporn.com/logos/redux.svg" },
    { name: "Nextjs", icon: "https://cdn.svgporn.com/logos/nextjs.svg" },
    { name: "MongoDb", icon: "https://cdn.svgporn.com/logos/mongodb.svg" },
    { name: "Node.js", icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
    { name: "Express", icon: "https://cdn.svgporn.com/logos/express.svg" },
    {
      name: "Tailwind",
      icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
    },
  ];

  const technologies = [
    {
      name: "Simple Test",
      icon: "/SimpleTestLogo.png",
      link: "https://siutest.vercel.app/",
      fullimage: "/simpletesthome2.png",
      github: "https://github.com/SyedEhsan06/TestApp",
      tech: ["React", "Redux", "Tailwind", "Node.js", "MongoDb", "Express"],
    },
    {
      name: "Surasa Life",
      icon: "surasa_logo.png",
      link: "https://surasalife.com/",
      fullimage: "/SurasaLifeProduct.png",
      tech: ["Nextjs", "Tailwind", "Redux"],
    },
    {
      name: "Beaze",
      icon: "https://beaze-app.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75",
      link: "https://beaze-app.vercel.app/",
      fullimage: "/BeazeAppScreen.png",
      tech: ["Nextjs", "Tailwind", "Redux"],
    },
    {
      name: "Siu Commerce",
      icon: "/Ecommercelogo.png",
      link: "https://ecommerce-swart-sigma.vercel.app/",
      github: "https://github.com/SyedEhsan06/Ecommerce",
      fullimage: "/Ecommercescreen.png",
      tech: ["React", "Redux", "Tailwind", "Node.js", "MongoDb", "Express"],
    },
    {
      name: "Bubble Game",
      icon: "/Bubblegamescreen.png",
      insta: "https://www.instagram.com/p/Cx41ts0xryl/?img_index=1",
      github: "https://github.com/SyedEhsan06/BubbleGame",
      fullimage: "/Bubblegamescreen.png",
      link: "https://bubblegamesiu.netlify.app/",
      tech:["Javascript", "HTML", "CSS"],
    },
    {
      name: "Social Media",
      icon: "/socialmediascreena.png",
      github: "https://github.com/SyedEhsan06/Social-Media",
      fullimage: "/socialmediascreena.png",
      tech: ["Nextjs", "Tailwind", "Redux", "Node.js", "MongoDb", "Express"],
    },
    // { name: "Express", icon: "https://cdn.svgporn.com/logos/express.svg" },
    
  ];
  const smallTechnologies = [
    {
      name: "tailwind",
      icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.svgporn.com/logos/javascript.svg",
    },
    { name: "Redux", icon: "https://cdn.svgporn.com/logos/redux.svg" },
    { name: "CSS", icon: "https://cdn.svgporn.com/logos/css-3.svg" },
    { name: "HTML", icon: "https://cdn.svgporn.com/logos/html-5.svg" },
    { name: "Node.js", icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
    { name: "github", icon: "https://cdn.svgporn.com/logos/github-icon.svg" },
    { name: "firebase", icon: "https://cdn.svgporn.com/logos/firebase.svg" },
    { name: "react-native", icon: "https://cdn.svgporn.com/logos/react.svg" },
  ];

  const navigate = useNavigate();
  const handleSelectProject = (project) => {
    if (selectedProject?.name === project.name) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };
  return (
    <>
      <div className="w-[100%] h-[120vh]  pt-12 relative bg-gradient-to-b from-[#2980B9] to-[#2b29b9]   flex flex-row items-center justify-center px-4">
        <div className="flex w-[60%] flex-wrap justify-center items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="m-4">
              <div
                onMouseEnter={() => handleMouseEnter(tech.icon)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSelectProject(tech)}
                style={{
                  backdropFilter: "blur(1.5px)",
                  padding: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  width: "230px",
                  objectFit: "cover",

                  objectPosition: "center",
                  backgroundColor:
                    selectedProject?.name === tech.name
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(255,255,255,0.01)",
                  textAlign: "center",
                }}
                className="rounded-3xl flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-28 mb-4
                object-contain object-center
              "
                />
                <p className="text-lg font-semibold text-gray-800">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="preview_window w-[40%] flex justify-center flex-col items-center">
          {selectedProject && (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-white">
                {selectedProject.name}
              </h1>
              <div
                className="flex justify-center items-center"
                style={{
                  overflow: "auto",
                }}
              >
                {selectedProject?.tech?.map((item, index) => {
                  const techIcon = techIcons.find((tech) => tech.name === item);
                  return (
                    <div key={index} className="m-3">
                      {techIcon && (
                        <div
                          onMouseEnter={() => handleMouseEnterTech(techIcon)}
                          onMouseLeave={handleMouseLeaveTech}
                          className="flex items-center justify-center flex-wrap"
                          style={{
                            backdropFilter: "blur(1.5px)",
                            padding: "1px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                            width: "80px",

                            objectFit: "cover",
                            objectPosition: "center",
                            backgroundColor:
                              selectedProject?.name === techIcon.name
                                ? "rgba(255,255,255,0.2)"
                                : "rgba(255,255,255,0.01)",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={techIcon.icon}
                            alt={techIcon.name}
                            className="h-8"
                          />
                          {/* <p className="text-white">{item}</p> */}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {hoverImage && (
            <img
              src={selectedProject?.fullimage}
              alt="preview"
              className="h-[100%] w-[100%]"
            />
          )}
          {selectedProject && (
            <div className="flex justify-evenly  m-3 w-full items-center">
              {selectedProject.link && (
                <div className="bg-green-700 px-6 cursor-pointer py-2 rounded-lg text-white  flex justify-center items-center">
                  <FaExternalLinkAlt size={20} />
                  <a href={selectedProject.link} target="_blank" className="">
                    Visit
                  </a>
                </div>
              )}
              {selectedProject.github && (
                <>
                  <div className="bg-black px-6 py-2 cursor-pointer rounded-lg text-white  flex justify-center items-center">
                    <FaGithub size={20} />
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className=""
                    >
                      Github
                    </a>
                  </div>
                </>
              )}
              {selectedProject.insta && (
                <>
                  <div className="bg-pink-500 px-6 py-2 cursor-pointer rounded-lg text-white  flex justify-center items-center">
                    <FaInstagram size={20} />
                    <a
                      href={selectedProject.insta}
                      target="_blank"
                      className=""
                    >
                      Instagram
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {showTechPopup && (
        <div
          style={{
            position: "fixed",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            backdropFilter: "blur(4px)",
            padding: "1px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
            // padding: "20px",
          }}
          onClick={handleMouseLeaveTech}
        >
          <img
            src={hoverTech?.icon}
            onMouseEnter={() => handleMouseEnterTech(hoverTech)}
            alt="popup"
            className="m-auto max-w-[90%] max-h-[90%]"
          />
          <p className="text-white text-center">{hoverTech?.name}</p>
        </div>
      )}
    </>
  );
};

export default Projects;
