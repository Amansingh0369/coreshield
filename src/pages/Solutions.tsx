import { Shield, Eye, Brain, Bot, Command } from 'lucide-react';
import ContactFooter from '@/components/Contact';
import BackedBy from '@/components/Backedby';

const Solutions = () => {
  const solutions = [
    {
      name: 'DRISHTI',
      subtitle: 'Dynamic Response & Integrated Surveillance Technology Interface',
      icon: Eye,
      description: 'Its an advanced video surveillance systems tailored for the Indian defense forces, ensuring timely and precise intelligence gathering. Our solutions offer real-time, high-definition monitoring, backed by robust security measures, including advanced encryption. More than just surveillance tools, we provide a holistic security ecosystem that meets the highest standards of defense and data protection.',
      features: [
        'Real-time monitoring',
        'High-definition surveillance',
        'Advanced encryption',
        'Holistic security ecosystem'
      ]
    },
    {
      name: 'SIDDHI',
      subtitle: 'Strategic Interface for Defence Data Handling and Insights',
      icon: Brain,
      description: 'An advanced AI-driven analytical platform tailored for the defense sector. More than just a data processor, S.I.D.D.H.I. is crafted as a strategic tool that converts raw data into actionable intelligence. Prioritizing data security, it leverages sophisticated AI algorithms to distill complex defense data into clear insights, fostering prompt and informed decision-making. In the dynamic realm of defense, where swift data interpretation is crucial, S.I.D.D.H.I. stands as a pivotal ally for defense entities.',
      features: [
        'AI-driven analytics',
        'Strategic data processing',
        'Defense-grade security',
        'Real-time insights'
      ]
    },
    {
      name: 'SARATHI',
      subtitle: 'Situational awareness and real time analytics tool for holistic insights',
      icon: Bot,
      description: 'SARATHI is an advanced LLM chatbot platform developed for the Indian armed forces, delivering seamless intelligence and operational support through real-time analytics across text, image, audio, and video. Beyond situational awareness, SARATHI offers on-demand access to training and orientation materials, enhancing skill readiness for all ranks. With secure, on-premise deployment and rank-based access controls, SARATHI ensures data confidentiality while empowering users with critical, actionable insights. Its intuitive, conversational interface enables instant access to intelligence, predictive threat analysis, and continuous learning resources, turning complex data into proactive decisions for enhanced battlefield effectiveness.',
      features: [
        'Multi-modal analytics',
        'Rank-based access control',
        'On-premise deployment',
        'Training & orientation support'
      ]
    },
    {
      name: 'PULSE',
      subtitle: 'Predictive Unified Law enforcement system for emergencies',
      icon: Command,
      description: 'PULSE is a powerful, AI-driven command and control platform for real-time crisis and law enforcement management. Built to unify response actions across agencies, it combines predictive analytics, real-time tracking, and automated SOPs to ensure swift, coordinated action. With a centralized dashboard for command centers and mobile access for field agents, PULSE enhances situational awareness, enabling proactive decision-making and rapid response. Its encrypted evidence handling and AI-driven insights empower teams to act decisively, safeguarding lives and critical assets.',
      features: [
        'Unified response system',
        'Predictive analytics',
        'Mobile accessibility',
        'Encrypted evidence handling'
      ]
    }
  ];

  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Section - Black */}
        <div className="bg-black text-white py-24 md:pt-44 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-7xl font-extralight mb-8 uppercase tracking-tight">Our Solutions</h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Our technology integrates AI-driven threat detection, predictive analytics, and IoT-based asset monitoring to enhance situational awareness and proactive crisis management system. With real-time video, audio, and data intelligence, we empower very responder.
            </p>
          </div>
        </div>

        {/* Solutions Overview - White */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-extralight text-black text-center mb-16 uppercase tracking-tight">
              Defense Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <div key={solution.name} 
                    className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl border border-black/10 
                      hover:border-black/20 transition-all">
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-10 w-10 text-black mr-4" />
                      <div>
                        <h3 className="text-2xl font-extralight">{solution.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{solution.subtitle}</p>
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-100 mb-6 rounded-lg"></div>
                    <p className="text-gray-700 text-xl font-light mb-6">{solution.description}</p>
                    <div className="space-y-4">
                      <h4 className="font-extralight text-xl">Key Features:</h4>
                      <ul className="space-y-2 text-gray-700">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-lg font-light">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      
      </div>
      <BackedBy/>
      <ContactFooter />
    </div>
  );
};

export default Solutions;