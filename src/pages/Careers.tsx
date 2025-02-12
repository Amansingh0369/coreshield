import React from 'react';
import { Code, Layout, Database, Brain, BarChart as ChartBar, Shield, Cog } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: 'Full Stack Developer',
      icon: Code,
      description: 'Develop full-stack web applications to support AI-powered defense solutions.',
      requirements: [
        'Experience with React, Node.js, and TypeScript',
        'Understanding of cloud platforms',
        'Knowledge of security best practices',
      ],
    },
    {
      title: 'UI Developer',
      icon: Layout,
      description: 'Develop user-friendly interfaces for AI-driven defense applications.',
      requirements: [
        'Expertise in modern frontend frameworks',
        'Strong UI/UX design skills',
        'Experience with responsive design',
      ],
    },
    {
      title: 'Solution Architect',
      icon: Shield,
      description: 'Lead the design and implementation of AI-driven defense solutions.',
      requirements: [
        'Experience in system architecture',
        'Knowledge of defense technology',
        'Leadership skills',
      ],
    },
    {
      title: 'Python Backend Developer',
      icon: Database,
      description: 'Build and optimize backend systems for AI-driven defense applications using Python.',
      requirements: [
        'Python expertise',
        'Experience with ML frameworks',
        'Database knowledge',
      ],
    },
    {
      title: 'AI Specialist',
      icon: Brain,
      description: 'Design and implement AI models for advanced defense applications.',
      requirements: [
        'Deep learning expertise',
        'Experience with TensorFlow/PyTorch',
        'Understanding of computer vision',
      ],
    },
    {
      title: 'Data Scientist',
      icon: ChartBar,
      description: 'Analyze defense data to develop predictive models and generate strategic insights.',
      requirements: [
        'Statistical analysis skills',
        'Machine learning expertise',
        'Data visualization experience',
      ],
    },
    {
      title: 'Site Reliability Engineer',
      icon: Cog,
      description: 'Ensure the reliability and security of AI platforms for defense solutions.',
      requirements: [
        'DevOps experience',
        'Security knowledge',
        'Monitoring and optimization skills',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a dynamic team dedicated to innovation and excellence in defense technology solutions.
            We're looking for passionate individuals who want to make a difference in India's defense sector.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-black rounded-2xl p-8 mb-16 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Why Join Coreshield?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">Work with cutting-edge technologies and shape the future of defense.</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-300">Continuous learning and career development programs.</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Meaningful Impact</h3>
              <p className="text-gray-300">Contribute to India's defense capabilities and national security.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position) => {
            const IconComponent = position.icon;
            return (
              <div key={position.title} className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-bold text-white">{position.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Application Process */}
        <div className="mt-16 bg-black p-8 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Apply Online</h3>
              <p className="text-gray-300">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Initial Review</h3>
              <p className="text-gray-300">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Interviews</h3>
              <p className="text-gray-300">Technical and cultural fit interviews</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold text-white mb-2">Offer</h3>
              <p className="text-gray-300">Welcome to the team!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;