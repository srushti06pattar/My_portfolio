import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaLinkedin, FaInstagram, FaDribbble, FaBehance,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaTwitter
} from "react-icons/fa";
import profileImage from "./assets/img.jpg";
import projectImage1 from "./assets/project1.jpg"; // Import project images
import projectImage2 from "./assets/project2.jpg"; // Import project images
import bgImage from "./assets/bg.jpg"

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <motion.section
          key="about"
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-screen h-screen flex items-center justify-center bg-indigo-50 px-6 py-10 bg-gradient-to-br from-purple-900 to-blue-50"
        >
          <div className="max-w-4xl text-center bg-white p-10 rounded-xl shadow-xl">
            <h2 className="text-5xl font-bold text-indigo-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed space-y-4">
              <span className="block mb-4">
                Hi! I’m <span className="font-semibold text-indigo-700">Srushti Pattar</span>, a passionate and creative developer who loves blending technology with design.
              </span>
              <span className="block mb-4">
                I'm currently a student with a strong interest in web development, UI/UX design, and creating beautiful digital experiences.
              </span>
              <span className="block mb-4">
                I thrive on challenges and enjoy learning new tools that help me bring ideas to life.
              </span>
              <span className="block mb-4">
                Whether it's building a responsive website or experimenting with animation and interactivity, I always aim to craft something unique and user-friendly.
              </span>
            </p>
          </div>
        </motion.section>
        

        );

      case "projects":
        return (
          <motion.section
            key="projects"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-100 px-4 bg-gradient-to-br from-purple-900 to-blue-50"
           
          >
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-indigo-800 mb-6">Projects</h2>
            </div>
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={projectImage1}
                  alt="Project 1"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Project 1</h3>
                <p className="text-lg text-gray-700 mb-4">This is Travel Booking website,using React,Tailwind,etc</p>
                <a
                  href="https://github.com/srushti06pattar/travel-booking_front-end.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project on GitHub
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={projectImage2}
                  alt="Project 2"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Project 2</h3>
                <p className="text-lg text-gray-700 mb-4">This is my minor project,which rellated to Block chain.</p>
                <a
                  href="https://github.com/srushti06pattar/miniproject.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project on GitHub
                </a>
              </div>

              {/* Add more projects as needed */}
            </div>
          </motion.section>
        );

      case "skills":
        return (
          <motion.section
            key="skills"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-50 px-4 bg-gradient-to-br from-purple-900 to-blue-50"
          >
            <h2 className="text-4xl font-bold text-indigo-800 mb-8">Skills</h2>
            <div className="flex flex-wrap justify-center gap-10 text-5xl text-indigo-600">
              {[FaHtml5, FaCss3Alt, FaJsSquare, FaReact,FaJava].map((Icon, index) => (
                <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform p-4 border-4 border-indigo-600 shadow-lg rounded-lg">
                  <Icon />
                </div>
              ))}
            </div>
          </motion.section>
        );

      default:
        return (
          <motion.section
            key="home"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen grid md:grid-cols-3  px-8 py-12 bg-green-50"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="col-span-2 flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-red-900 mb-4">
                <br /> Srushti Pattar
              </h1>
              <p className="text-lg text-white mb-6">
                My world ,with some design and colors!!!
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveSection("portfolio")}
                  className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
                >
                  view in LinkdIN
                </button>
                <button
                  onClick={() => setActiveSection("about")}
                  className="bg-gray-200 text-indigo-700 px-6 py-3 rounded hover:bg-gray-300 transition"
                >
                  About Me
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center">
              {/* Move Profile Image Up */}
              <img
                src={profileImage}
                alt="Profile"
                className="w-80 h-80 object-cover rounded-full border-8 border-black-600 shadow-lg mb-6"
              />
              {/* Social Media Icons */}
              <div className="flex gap-4 text-indigo-600 text-2xl">
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </motion.section>
        );
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-gradient-to-b from-black-550 to-blue-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4  shadow-md w-full">
        <div
          className="text-2xl font-bold text-indigo-700 cursor-pointer"
          onClick={() => setActiveSection("home")}
        >
          My Portfolio
        </div>
        <ul className="flex space-x-6 text-indigo-700 font-medium bg-gradient-to-b from-black-550 to-blue-10">
          <li><button onClick={() => setActiveSection("home")}>Home</button></li>
          <li><button onClick={() => setActiveSection("about")}>About</button></li>
          <li><button onClick={() => setActiveSection("projects")}>Projects</button></li>
          <li><button onClick={() => setActiveSection("skills")}>Skills</button></li>
        </ul>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Hire Me</button>
      </nav>

      {/* Main Section with Transitions */}
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
}
