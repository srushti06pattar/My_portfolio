import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className="fixed top-0 right-0 w-full bg-indigo-600 text-white z-50 shadow-md">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex space-x-8">
          <a href="#about" className="text-white text-lg hover:text-indigo-300">About</a>
          <a href="#projects" className="text-white text-lg hover:text-indigo-300">Projects</a>
          <a href="#skills" className="text-white text-lg hover:text-indigo-300">Skills</a>
          <a href="#contact" className="text-white text-lg hover:text-indigo-300">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
