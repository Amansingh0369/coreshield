import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const WhoWeAre = () => {
  const containerRef = useRef(null);
  const secondContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.4 1", "0.6 0.5"]
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: secondContainerRef,
    offset: ["0.7 1", "0.9 "]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 800, // Increased stiffness for faster response
    damping: 100,   // Reduced damping for quicker movement
    restDelta: 0.001, // Less precise stopping point for speed
    mass: 0.8,      // Reduced mass for faster movement
    bounce: 0       // Removed bounce for immediate response
  });

  const scaleX2 = useSpring(scrollYProgress2, {
    stiffness: 800,
    damping: 100, 
    restDelta: 0.001,
    mass: 0.8,
    bounce: 0
  });

  return (
    <section ref={containerRef} className="bg-white text-gray-900 py-20 md:py-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12">
            WHO ARE WE
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto" />
        </motion.div>

        <div className="flex flex-col items-center gap-16 md:gap-20 max-w-6xl mx-auto ">
          {/* First Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-4xl   font-extralight  leading-relaxed">
              Coreshield Technologies is redefining crisis response management through innovation 
              and indigenization. Headquartered in Research & Innovation Park IIT Delhi. Our mission: 
              Empower defense forces and civil organizations with indigenous, scalable, and future-ready 
              solutions that bridge critical gaps, enhance resilience, and redefine modern warfare strategies.
            </p>
          </motion.div>

          {/* First Progress Line */}
          <motion.div 
            className="w-[2px] h-32 bg-black origin-top"
            style={{ scaleY: scaleX }}
          />

          {/* Second Paragraph */}
          <motion.div
            ref={secondContainerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-4xl font-extralight leading-relaxed">
              Founded in 2023 by IIM Bangalore alumni, our leadership combines deep defense expertise 
              and advanced technology acumen. One co-founder, a former Indian Air Force pilot and NDA 
              alumnus, brings invaluable operational insight, while the other, a software and product 
              management expert in aviation, drives technological excellence.
            </p>
          </motion.div>

          {/* Second Progress Line */}
          <motion.div 
            className="w-[2px] h-32 bg-black origin-top"
            style={{ scaleY: scaleX2 }}
          />

          {/* Bottom Section - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-4xl font-extralight leading-relaxed ">
              We integrate AI, advanced software, and data-driven intelligence to create next-generation 
              crisis response management systems. For us, security is not just business; it's a strategic 
              commitment to create a safer future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
