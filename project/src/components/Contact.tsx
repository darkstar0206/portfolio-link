import React from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'udayvarma0206@gmail.com',
      link: 'mailto:udayvarma0206@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91-9821249856',
      link: 'tel:+919821249856',
      color: 'green'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'darkstar0206',
      link: 'https://github.com/darkstar0206',
      color: 'gray'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'uday-varma-0a4838320',
      link: 'https://www.linkedin.com/in/uday-varma-0a4838320',
      color: 'blue'
    }
  ];

  const hobbies = [
    { name: 'Basketball', icon: '🏀' },
    { name: 'Reading', icon: '📚' },
    { name: 'Coding', icon: '💻' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200',
      green: 'hover:bg-green-50 hover:text-green-600 hover:border-green-200',
      gray: 'hover:bg-gray-50 hover:text-gray-600 hover:border-gray-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's connect! I'm always open to discussing new opportunities, 
              collaborations, or just having a chat about technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl transition-all duration-300 ${getColorClasses(info.color)} transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="text-gray-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {info.label}
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Personal Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
                    >
                      <span className="text-lg">{hobby.icon}</span>
                      <span className="font-medium">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-blue-600" />
                  <span>New Delhi, India</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={20} className="text-purple-600" />
                  <span>Available for new opportunities</span>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 mb-4">
                    I'm currently looking for exciting opportunities in software development, 
                    data science, and full-stack engineering roles.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether you have a project in mind, want to collaborate, or just want to 
                    connect, I'd love to hear from you!
                  </p>
                  <a
                    href="mailto:udayvarma0206@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                  >
                    <Send size={18} />
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;