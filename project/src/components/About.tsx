import React from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analysis',
      description: 'Strong skills in data processing and visualization'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Experience with Flutter for cross-platform apps'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Technologies',
      description: 'Modern web development with React and Node.js'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am Uday Varma, a driven Mechanical Engineering student with a growing passion 
                for software development, data analysis, and full-stack application development. 
                Beyond my core engineering studies, I have developed strong programming skills 
                in Python and Java.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am proficient in full-stack development, working across both frontend and 
                backend technologies. I enjoy building practical projects that solve real-world 
                problems and continuously seek opportunities to expand my expertise in software 
                engineering, AI, and emerging technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My goal is to leverage my diverse skill set to contribute to innovative teams 
                and challenging projects that drive real impact.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Mechanical Engineering Student</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Full-Stack Developer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Python & Java Enthusiast</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>AI & ML Explorer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;