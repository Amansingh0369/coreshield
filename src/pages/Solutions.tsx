import { Shield, Eye, Brain, Bot, Command } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      name: 'DRISHTI',
      icon: Eye,
      description: 'Advanced video surveillance system tailored for the Indian defense forces, offering real-time, high-definition monitoring with robust security measures.',
    },
    {
      name: 'SIDDHI',
      icon: Brain,
      description: 'AI-driven analytical platform that converts raw data into actionable intelligence, leveraging sophisticated AI algorithms for prompt decision-making.',
    },
    {
      name: 'SARATHI',
      icon: Bot,
      description: 'Advanced LLM chatbot platform providing seamless intelligence and operational support through real-time analytics across various media, ensuring data confidentiality and critical insights.',
    },
    {
      name: 'PULSE',
      icon: Command,
      description: 'AI-driven command and control platform for real-time crisis and law enforcement management, combining predictive analytics and real-time tracking for coordinated action.',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As a premier defense technology enterprise based in India, we specialize in advanced video surveillance
            and modern warfare analytics for the Indian defense forces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.name}
                className="bg-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-black rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Coreshield?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">✓</span>
              <span>DPIIT recognized startup with a focus on excellence</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">✓</span>
              <span>Cutting-edge AI and ML technologies</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3 mt-1">✓</span>
              <span>Dedicated to India's defense sector</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions;