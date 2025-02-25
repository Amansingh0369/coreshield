import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhatWeDo = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={containerRef} className="bg-black text-white py-20 md:py-44 relative overflow-hidden ">
      {/* Animated Neon Gradient Background */}
      {/* <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-blue-500/20 via-blue-400/10 to-transparent 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,150,255,0.1),transparent_70%)] animate-glow" />
      </motion.div> */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute w-[10rem] h-[12rem] md:w-[28rem] md:h-[32rem] -top-24 md:-top-48 -right-24 md:-right-48 border-[30px] md:border-[40px] border-neutral-700 rotate-25" />
        <div className="absolute w-[10rem] h-[12rem]  md:w-[28rem] md:h-[32rem] -bottom-24 md:-bottom-48 -left-24 md:-left-48 border-[30px] md:border-[40px]  border-neutral-700  rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12">
            WHAT WE DO
          </h2>
          <div className="w-24 h-1 bg-white mx-auto" />
        </motion.div>

        <motion.div 
          style={{ y }}
          className="flex flex-col items-center gap-24 md:gap-32 max-w-6xl mx-auto"
        >
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-4xl font-extralight leading-relaxed">
              At Coreshield, we harness the power of artificial intelligence to develop cutting-edge defense 
              and crisis management solutions tailored for military, aviation, and critical infrastructure protection.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 text-center relative"
          >
            <ul className="space-y-8 text-xl md:text-3xl font-extralight inline-block text-left">
              {[
                "AI-driven large language models for secure communication",
                "Advanced video and audio analytics for real-time threat detection",
                "Predictive analytics for crisis management"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <span className="w-3 h-3 mt-3 mr-4 bg-white flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-4xl font-extralight leading-relaxed">
              By integrating cutting-edge technologies, we create adaptive, scalable, and future-ready 
              security solutions that bridge existing gaps and enhance both military defense and civil security.
            </p>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg md:text-2xl font-medium italic">
              Our commitment goes beyond mitigating risks—we pioneer innovations that empower responders, 
              fortify national security, and redefine modern warfare strategies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
