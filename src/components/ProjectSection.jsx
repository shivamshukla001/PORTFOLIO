
import React, { useState } from "react";
import { FaExternalLinkAlt,FaProjectDiagram, FaGithub, FaArrowLeft,FaCogs, FaArrowRight } from "react-icons/fa";
import images from './images.jpeg';
import images1 from './images1.jpeg';
const projects = [
  {
    title: "Zerodha Clone",
    description: "A Zerodha-like app built with MERN Stack supporting real-time quotes, orders, and authentication.",
    image: "https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?uid=R133964181&ga=GA1.1.682549157.1748341605&semt=ais_hybrid&w=740",
    tech: ["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://nextgen-trading.vercel.app/",
    githubLink: "https://github.com/shivamshukla001/NextGen-Trade",
  },
  {
    title: "PortFolio",
    description: "A Practice portfolio project to showcase my skills and projects.",
    image: "data:image/jpeg;base64,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",
    tech: ["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://my-portfoli0-nhoi.vercel.app/",
    githubLink: "https://github.com/shivamshukla001/real-PortFolio",
  },
  {
    title: "Coffee Heaven",
    description: "A coffee ordering website with smooth UI, product menu, and elegant design.",
    image: images1,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://coffee-heaven.live",
    githubLink: "https://github.com/shivamshukla001/Coffee-Heaven/tree/main/cofeee",
  },
   {
    title: "Job Portal",
    description: "A full-featured job portal where recruiters can post jobs and candidates can apply.",
    image: images,
    tech: ["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://your-live-jobportal.com",
    githubLink: "https://github.com/your-github/job-portal",
  },
  {
    title: "Agent Portal",
    description: "A full-featured job portal where recruiters can post jobs and candidates can apply.",
    image: "https://img.freepik.com/premium-photo/cybersecurity-data-protection-concepts-internet-technology-data-privacy_49059-978.jpg?uid=R133964181&ga=GA1.1.682549157.1748341605&semt=ais_hybrid&w=740",
    tech: ["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://your-twitter-clone.live",
    githubLink: "https://github.com/your-github/twitter-clone",
  },
  {
    title: "Twitter Clone",
    description: "A Twitter-like app built with MERN Stack supporting real-time tweets, likes, and authentication.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGedl-zqQoB26L1iWnTMUOL051Vgo4LHQI5w&st=0&source=webapp2x",
    tech:["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://your-twitter-clone.live",
    githubLink: "https://github.com/your-github/twitter-clone",
  },
  {
    title: "Uber Clone",
    description: "A Ride Booking app built with MERN Stack supporting real-time quotes, orders, and authentication.",
    image: "https://img.freepik.com/free-photo/close-up-finger-pointing-phone-screen_23-2148264018.jpg?uid=R133964181&ga=GA1.1.682549157.1748341605&semt=ais_hybrid&w=740",
    tech: ["Reactjs", "Express","MongoDb", "Nodejs"],
    liveLink: "https://your-twitter-clone.live",
    githubLink: "https://github.com/your-github/twitter-clone",
  },
 
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="bg-black text-white p-6  h-50% rounded-lg shadow-lg  justify-between"
      style={{ minHeight: "500px" }}
    >
       <h2 className="text-lg font-bold text-white mb-4 flex items-center  justify-center">
                  <FaProjectDiagram className="mr-2" /> Projects
                </h2>
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 md:h-56 object-cover rounded-md mb-4 mt-2"
        loading="lazy"
      />

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-purple-800 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-2">
        <button
          onClick={prevProject}
          className="p-2 bg-purple-700 hover:bg-purple-800 rounded-md transition-colors"
          aria-label="Previous Project"
        >
          <FaArrowLeft className="text-white" />
        </button>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
        >
          Live Demo <FaExternalLinkAlt className="inline ml-1" />
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md transition"
        >
          GitHub <FaGithub className="inline ml-1" />
        </a>

        <button
          onClick={nextProject}
          className="p-2 bg-purple-700 hover:bg-purple-800 rounded-md transition-colors"
          aria-label="Next Project"
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
