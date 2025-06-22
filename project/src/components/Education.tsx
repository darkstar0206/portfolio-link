import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech Mechanical Engineering',
      institution: 'Netaji Subhas University of Technology, Dwarka, New Delhi',
      period: 'Current',
      type: 'degree'
    },
    {
      degree: 'Class 12',
      institution: 'Salwan Public School',
      period: 'Completed',
      type: 'school'
    },
    {
      degree: 'Class 10',
      institution: 'Blue Bells Model School',
      period: 'Completed',
      type: 'school'
    }
  ];

  const certifications = [
    {
      name: 'Frontend Development',
      issuer: 'One Roadmap Skill Certification',
      date: 'June 13, 2025',
      link: '#'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {item.institution}
                      </p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'degree' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gray-200'
                    }`}>
                      <GraduationCap 
                        size={20} 
                        className={item.type === 'degree' ? 'text-white' : 'text-gray-600'} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Award className="text-purple-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-purple-600 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Certified {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.link}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
                    >
                      Verify Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;