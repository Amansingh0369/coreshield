import React from 'react';
import { Eye, Brain, Bot, Command } from 'lucide-react';

const ProductTrials = () => {
  const products = [
    {
      name: 'DRISHTI',
      icon: Eye,
      description: 'Advanced video surveillance system with real-time monitoring capabilities.',
      features: [
        'High-definition video monitoring',
        'Real-time threat detection',
        'Secure data transmission',
        'Advanced analytics dashboard',
      ],
    },
    {
      name: 'SIDDHI',
      icon: Brain,
      description: 'AI-powered analytical platform for intelligent decision making.',
      features: [
        'Data processing and analysis',
        'Predictive intelligence',
        'Custom AI models',
        'Real-time insights',
      ],
    },
    {
      name: 'SARATHI',
      icon: Bot,
      description: 'Advanced LLM chatbot platform for operational support and intelligence.',
      features: [
        'Natural language processing',
        'Multi-media analysis',
        'Secure communication',
        'Real-time response system',
      ],
    },
    {
      name: 'PULSE',
      icon: Command,
      description: 'Command and control platform for crisis management.',
      features: [
        'Real-time tracking',
        'Predictive analytics',
        'Incident management',
        'Resource optimization',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Product Trials</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our defense technology solutions firsthand.
            Request a trial to see how our products can enhance your defense capabilities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.name} className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <IconComponent className="h-10 w-10 text-indigo-400 mr-4" />
                  <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                </div>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="h-2 w-2 bg-indigo-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Request Trial
                </button>
              </div>
            );
          })}
        </div>

        {/* Trial Process */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Trial Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Request</h3>
              <p className="text-gray-300">Submit your trial request</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Consultation</h3>
              <p className="text-gray-300">Discuss your requirements</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Setup</h3>
              <p className="text-gray-300">Product deployment</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold text-white mb-2">Evaluation</h3>
              <p className="text-gray-300">Test and assess</p>
            </div>
          </div>
        </div>

        {/* Trial Request Form */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Request a Trial</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your organization"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-1">
                Product of Interest
              </label>
              <select
                id="product"
                name="product"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your requirements"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Submit Trial Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductTrials;