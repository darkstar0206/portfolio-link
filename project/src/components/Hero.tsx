import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Mechanical Engineer | Full-Stack Developer | Python & Java Enthusiast';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UV
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Uday Varma
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 h-8 mb-8">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Driven Mechanical Engineering student with a passion for software development, 
            data analysis, and full-stack application development. Building practical solutions 
            that solve real-world problems while continuously expanding expertise in software 
            engineering and emerging technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            <a
              href="mailto:udayvarma0206@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://github.com/darkstar0206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              View Work
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;