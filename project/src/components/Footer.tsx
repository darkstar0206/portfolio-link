import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Uday Varma
              </div>
              <p className="text-gray-400 mb-4">
                Mechanical Engineer turned Full-Stack Developer, passionate about creating 
                innovative solutions and exploring the frontiers of technology.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/darkstar0206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/uday-varma-0a4838320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:udayvarma0206@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Education', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'React', 'Node.js', 'MongoDB', 'Django', 'Flutter', 'Machine Learning'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500" /> by Uday Varma © {currentYear}
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;