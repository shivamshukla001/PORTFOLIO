import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaTools,
  FaProjectDiagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaCogs,
  FaJava,
} from "react-icons/fa";
import { FaExternalLinkAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiTypescript,
  SiPostgresql,
  SiCplusplus,
  SiFirebase,
  SiDeno,
} from "react-icons/si";

import { FaHandshake, FaFilePdf } from "react-icons/fa";

import { Github, Linkedin, Twitter } from "lucide-react";
import ProjectsSection from "./components/ProjectSection";
import CertificateCarousel from "./components/CertificateCarousel";
// import ProjectsSection from './components/ProjectSection';

const services = [
  "Full Stack Web Development",
  "RESTful API Design",
  "Frontend Development",
  "UI/UX Design",
  "Backend Development",
  "Authentication Systems",
  "Responsive UI Design",
  "Deployment & Hosting",
  "Database Management",
  "Code Refactoring",
  "Debugging",
  "Version Control",
  "Web Design",
];

const skills = [
  { name: "HTML", icon: <FaHtml5 size={20} className="text-[#e34f26]" /> },
  { name: "CSS", icon: <FaCss3Alt size={20} className="text-[#1572b6]" /> },
  { name: "JavaScript", icon: <FaJs size={20} className="text-[#f7df1e]" /> },
  { name: "React", icon: <FaReact size={20} className="text-[#61dafb]" /> },
  { name: "Node.js", icon: <FaNodeJs size={20} className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress size={20} className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb size={20} className="text-[#47a248]" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={20} className="text-[#38b2ac]" />,
  },

  { name: "Python", icon: <FaPython size={20} className="text-[#3776AB]" /> },
  { name: "Git", icon: <FaGitAlt size={20} className="text-[#F05032]" /> },

  { name: "Redux", icon: <SiRedux size={20} className="text-[#764ABC]" /> },
  { name: "GraphQL", icon: <SiGraphql size={20} className="text-[#E535AB]" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={20} className="text-[#3178C6]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={20} className="text-[#336791]" />,
  },

  // New Skills
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={20} className="text-[#7952B3]" />,
  },
  { name: "Java", icon: <FaJava size={20} className="text-[#007396]" /> },
  { name: "C++", icon: <SiCplusplus size={20} className="text-[#00599C]" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={20} className="text-[#FFCA28]" />,
  },
  { name: "Deno", icon: <SiDeno size={20} className="text-[#000000]" /> },
  {
    name: "System Design",
    icon: <FaCogs size={20} className="text-[#7e21d4]" />,
  },
];

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen bg-black  text-[#9683ec]  text-sm font-sans overflow-hidden">
      {/* Section 1 - Profile, Services, Projects */}
      <div className="w-full md:w-1/3 h-auto md:h-full p-6 flex flex-col overflow-y-auto   scroll-smooth scrollbar-hide space-y-6">
        {/* Profile */}
        <div className="flex items-center space-x-4">
          <img
            src="https://media.tenor.com/HmFcGkSu58QAAAAM/silly.gif"
            alt="Profile"
            className="w-20 h-20 object-cover"
          />
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-400 font-medium">
              Available for work
            </span>
          </div>
        </div>

        {/* Name + Headline */}
        <div>
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shivam Shukla
          </motion.h1>
          <motion.p
            className="text-base mt-1 text-[#9683ec] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Backend Developer | MERN Stack Specialist | UI-Curious | DSA-Focused
            Problem Solver.
          </motion.p>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap gap-3 mt-2 animate-fade-in">
          <a
            href="https://github.com/shivamshukla001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded border border-[#9683ec] text-white hover:bg-[#7e21d4]/20 transition duration-300 hover:scale-105"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-shukla-118870249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded border border-[#9683ec] text-white hover:bg-[#7e21d4]/20 transition duration-300 hover:scale-105"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://x.com/bababebuniyad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded border border-[#9683ec] text-white hover:bg-[#7e21d4]/20 transition duration-300 hover:scale-105"
          >
            <Twitter size={16} /> Twitter
          </a>
        </div>

        {/* Services */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-white flex items-center mb-2">
            <FaTools className="mr-2" /> Services
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-slide space-x-4 w-max">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="min-w-[180px] bg-gray-900 p-3 rounded-xl text-center font-medium text-sm whitespace-nowrap"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <CertificateCarousel />
      </div>

      {/* Section 2 - Skills with logos and Footer */}
      <div className="w-full md:w-1/3 h-auto md:h-full mt-2 p-6 flex flex-col bg-black text-[#9683ec]">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center  justify-center">
          <FaCogs className="mr-2" /> My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4   scrollbar-thin  scrollbar-track-transparent max-h-[60vh] mb-4">
          {skills.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-[#2e1c4d] to-[#4a2f8f] hover:from-[#4a2f8f] hover:to-[#2e1c4d] transition cursor-default"
            >
              <span className="text-[#9683ec]">{icon}</span>
              <span className="text-white font-semibold">{name}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}

        <h2 className=" flex-1 text-lg font-bold text-white mb-2 mt-4  flex items-center py-2  justify-center">
          <FaCogs className="mr-2" /> CTA
        </h2>

        <div className="bg-gray-900 rounded-xl p-6 max-w-md mx-auto mt-4 shadow-md mb-4">
          {/* Friendship Icon at the top, centered */}
          <div className="flex justify-center mb-4 text-purple-600">
            <FaHandshake size={48} />
          </div>

          {/* Headlines */}
          <h3 className="text-xl font-semibold text-purple-800 text-center">
            Let&apos;s Build Something Great Together
          </h3>
          <p className="text-white mt-2 mb-6 text-center">
            Reach out to discuss projects, ideas, or opportunities!
          </p>

          {/* Buttons container */}
          <div className="flex justify-center gap-6">
            {/* Contact Me Button */}
            <a
              // href="mailto:your-email@example.com"
              href="https://www.linkedin.com/in/shivam-shukla-118870249/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Contact Me
            </a>

            {/* Resume Button */}
            <a
              href="https://res.cloudinary.com/dc9ae9bsh/image/upload/v1748447490/ldejbksrzjq28tqhsxh1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-purple-600 text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              <FaFilePdf className="mr-2" /> Resume
            </a>
          </div>
        </div>

        {/*  border-l border-[#9683ec] */}
        {/* Footer for Section 2 */}
        <footer className=" hidden md:block mt-auto pt-6 border-t-4 border-[#9683ec] bg-black text-center text-sm text-[#9683ec] px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2025 Shivam Shukla. All rights reserved.</p>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/shivam-shukla-118870249/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#9683ec] hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/shivamshukla001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#9683ec] hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/bababebuniyad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#9683ec] hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:shivamshukla6350@gmail.com"
                aria-label="Email"
                className="text-[#9683ec] hover:text-white transition"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Section 3 - Placeholder */}
      <div className="w-full md:w-1/3 h-auto md:h-full">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default App;
