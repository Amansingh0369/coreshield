import React from 'react';
import { Shield, Lightbulb, Heart, Eye } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with new ideas and products',
    },
    {
      icon: Heart,
      title: 'Ingenuity',
      description: 'Approaching challenges with unique perspectives and solutions',
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'Upholding honesty and ethical behavior in all operations',
    },
  ];

  const researchAreas = [
    'Specialized LLMs',
    'Object identification in video and audio streaming',
    'Image AI models',
    'Predictive analytics',
    'AI-driven IoT integration',
  ];

  const recognitions = [
    'IDEX Winner',
    'FITT IIT Delhi',
    'Indian Army',
    'DPIIT Recognized',
    'Northern Command',
    'Google Cloud Platform',
    'Amazon Web Services',
    'ISTART',
  ];

  const team = [
    {
      name: 'Squadron Leader C S Rathore',
      role: 'Founder/CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    },
    {
      name: 'R Navin',
      role: 'Founder/CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    },
    {
      name: 'Bhavya K',
      role: 'Partner/CIO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">About Coreshield</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Based in Bangalore and founded by visionaries from IIM Bangalore, Coreshield Technology
            is committed to excellence, innovation, and security in defense technology.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div key={value.title} className="text-center p-6 bg-gray-900 rounded-xl shadow-lg">
                <IconComponent className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Vision */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to play a pivotal role in India's defense evolution, equipping our armed forces
            with advanced AI tools and redefining defense through innovation.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area) => (
              <div key={area} className="bg-gray-900 p-4 rounded-lg shadow flex items-center">
                <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></span>
                <span className="text-gray-300">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recognitions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Backed By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recognitions.map((recognition) => (
              <div key={recognition} className="bg-gray-900 p-4 rounded-lg shadow text-center">
                <span className="text-gray-300">{recognition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;