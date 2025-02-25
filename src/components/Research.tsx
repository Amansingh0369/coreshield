import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Research = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scaleY = useTransform(progress, [0, 1], ['0%', '100%']);

  const researchAreas = [
    {
      title: 'LLMs',
      subtitle: 'Secure Communication', 
      description:
        'We are advancing specialized LLMs tailored for secure communication, operational planning, and strategic decision-making in defense environments.'
    },
    {
      title: 'Video Analytics',
      subtitle: 'Real-time Monitoring',
      description:
        'Our advanced video processing solutions deliver live monitoring, threat identification, and actionable insights for complex environments.'
    },
    {
      title: 'Audio Intelligence',
      subtitle: 'Pattern Recognition',
      description:
        'We develop audio analytics that support different communication channels, voice pattern recognition, and sound-based anomaly detection.'
    },
    {
      title: 'Image AI Models',
      subtitle: 'Threat Detection',
      description:
        'Our state-of-the-art image recognition solutions enable accurate surveillance, threat detection, and situational intelligence.'
    },
    {
      title: 'Predictive Analytics',
      subtitle: 'Resource Allocation',
      description:
        'Transforming raw data into actionable intelligence, our predictive analytics empower proactive resource allocation and response strategies.'
    },
    {
      title: 'IoT Integration',
      subtitle: 'Asset Monitoring',
      description:
        'By combining AI with IoT ecosystems, we create real-time situational awareness and dynamic asset monitoring systems.'
    }
  ];

  return (
    <div className="relative bg-white min-h-screen">
      {/* Header */}
      <div className="relative z-10 bg-white pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-centre pt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-light tracking-tight text-center uppercase text-black"
          >
            Research
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        {/* Progress Bar - Only visible on larger screens and within content area */}
        <div className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-40 flex-col items-center gap-4">
          <div className="text-sm font-mono text-black">
            {String(currentIndex + 1).padStart(2, '0')}
          </div>
          <div className="h-48 w-1 bg-black/10 rounded-full overflow-hidden">
            <motion.div
              style={{ height: `${(currentIndex + 1) / researchAreas.length * 100}%`, transformOrigin: 'top' }}
              className="w-full bg-blue-500 rounded-full transition-all duration-300"
            />
          </div>
          <div className="text-sm font-mono text-black/50">
            {String(researchAreas.length).padStart(2, '0')}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="h-[calc(100vh-5rem)] overflow-y-scroll snap-y snap-mandatory"
          onScroll={(e) => {
            const element = e.currentTarget;
            const index = Math.round(element.scrollTop / element.clientHeight);
            setCurrentIndex(index);
          }}
        >
          {researchAreas.map((area, index) => (
            <div 
              key={index}
              className="h-[700px] snap-start relative flex items-center"
            >
              <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 100 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  <div className="space-y-6">
                    <div className="space-y-0">
                      <h2 className="text-3xl md:text-5xl font-light text-blue-600 tracking-tight">
                        {area.title}
                      </h2>
                      <p className="text-xl text-black/70">{area.subtitle}</p>
                    </div>
                    <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 100 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative group"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-white rounded-2xl 
                      flex items-center justify-center overflow-hidden border border-blue-200
                      transition-all duration-300 group-hover:border-blue-400/50">
                      <span className="text-blue-600/50 group-hover:text-blue-600 transition-colors duration-300">
                        {area.title} Visual
                      </span>
                    </div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 
                      group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Research;
