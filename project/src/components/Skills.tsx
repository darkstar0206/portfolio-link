import React from 'react';
import { Code, Database, Smartphone, Globe, Brain, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'blue'
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
      color: 'green'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Django', 'MySQL', 'MongoDB', 'RESTful APIs'],
      color: 'purple'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['Flutter', 'Cross-platform Development', 'Mobile UI/UX'],
      color: 'orange'
    },
    {
      title: 'Data & AI',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Data Analysis', 'Computer Vision', 'NLP', 'TensorFlow'],
      color: 'pink'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'Database Design', 'Data Modeling'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} text-white mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium text-sm">
                        {skill}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              i < 4 
                                ? `bg-gradient-to-r ${getColorClasses(category.color)}` 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm constantly exploring new technologies and methodologies to stay current with 
                industry trends and best practices. Currently focusing on advanced AI/ML concepts 
                and modern web development frameworks.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['AI/ML', 'Advanced React', 'Cloud Technologies', 'DevOps', 'Microservices'].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;