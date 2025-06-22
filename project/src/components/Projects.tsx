import React from 'react';
import { ExternalLink, Github, Eye, Brain, BarChart3, MapPin, MessageSquare, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Object Detection',
      description: 'Developed an object detection model using computer vision techniques to identify objects in real-time video streams. Leveraged pre-trained models and fine-tuned them on custom datasets.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      icon: <Eye className="w-6 h-6" />,
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pet Data Analysis',
      description: 'Conducted data cleaning, visualization, and exploratory data analysis on pet-related datasets using Python, pandas, and matplotlib to extract meaningful insights.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      icon: <BarChart3 className="w-6 h-6" />,
      link: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Landmark Recognition Model',
      description: 'Built a deep learning model for landmark recognition using TensorFlow/Keras, applying data augmentation and image classification techniques.',
      technologies: ['TensorFlow', 'Keras', 'Deep Learning', 'Image Classification'],
      icon: <MapPin className="w-6 h-6" />,
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Generative AI Experimentation',
      description: 'Explored generative AI models for text generation and content creation, demonstrating practical applications of modern LLMs.',
      technologies: ['AI/ML', 'NLP', 'LLMs', 'Text Generation'],
      icon: <Brain className="w-6 h-6" />,
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Finance Chatbot Development',
      description: 'Created a finance-focused chatbot prototype using NLP, Python, and chatbot frameworks for interactive financial Q&A.',
      technologies: ['Python', 'NLP', 'Chatbot', 'Finance'],
      icon: <MessageSquare className="w-6 h-6" />,
      link: '#',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating expertise in AI, data analysis, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-medium group-hover:shadow-lg"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/darkstar0206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              <Github size={20} />
              View All Projects
              <Zap size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;