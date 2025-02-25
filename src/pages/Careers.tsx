import { Code, Layout, Database, Brain, BarChart as ChartBar, Shield, Cog } from 'lucide-react';
import ContactFooter from '@/components/Contact';
import meeting from "../asset/meeting.jpeg"
import BackedBy from '@/components/Backedby';

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
    <div>
      <div className="min-h-screen">
      {/* Hero Section - Black */}
      <div className="bg-black text-white py-24 md:py-44 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl font-extralight mb-8 uppercase tracking-tight">Join Our Team</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Be part of a dynamic team dedicated to innovation and excellence in defense technology solutions.
          </p>
        </div>
      </div>

      {/* Life at Coreshield Section - White */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-black text-center mb-16 uppercase tracking-tight">Life at Coreshield</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={meeting}
                alt="Work Marathon" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-extralight mb-2">Work Marathons</h3>
                  <p className="text-gray-200 font-light">Collaborative problem-solving sessions</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={meeting}
                alt="Team Lunch" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-extralight mb-2">Team Lunches</h3>
                  <p className="text-gray-200 font-light">Building bonds beyond work</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={meeting}
                alt="Innovation Lab" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-extralight mb-2">Innovation Lab</h3>
                  <p className="text-gray-200 font-light">Where ideas come to life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section - Black */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-center mb-16 uppercase tracking-tight">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position) => {
              const IconComponent = position.icon;
              return (
                <div key={position.title} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center mb-6">
                    <IconComponent className="h-10 w-10 text-white mr-4" />
                    <h3 className="text-2xl font-extralight">{position.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xl font-light mb-6">{position.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-extralight text-xl">Requirements:</h4>
                    <ul className="space-y-2 text-gray-300">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-lg font-light">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-8 w-full bg-white text-black py-3 px-6 rounded-lg font-extralight text-lg hover:bg-gray-100 transition-colors">
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Application Process Section - White */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-black text-center mb-16 uppercase tracking-tight">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {step: 1, title: 'Apply Online', desc: 'Submit your application and resume'},
              {step: 2, title: 'Initial Review', desc: 'Our team reviews your application'},
              {step: 3, title: 'Interviews', desc: 'Technical and cultural fit interviews'},
              {step: 4, title: 'Offer', desc: 'Welcome to the team!'}
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="h-16 w-16 bg-black text-white text-2xl font-extralight rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-extralight text-black mb-3">{item.title}</h3>
                <p className="text-xl text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <BackedBy/>
    <ContactFooter/>
    </div>
  );
};

export default Careers;