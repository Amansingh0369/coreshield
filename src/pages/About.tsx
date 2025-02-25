import {  Lightbulb, Heart, Eye } from 'lucide-react';
import ContactFooter from '@/components/Contact';
import BackedBy from '@/components/Backedby';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: "At our core, we believe in pushing boundaries. We are committed to introducing new ideas, methods, and products that revolutionize the defense sector. For us, innovation is not just about technology; it's about a mindset that constantly seeks to improve, evolve, and lead.",
    },
    {
      icon: Heart,
      title: 'Ingenuity',
      description: "Our strength lies in our ability to think differently. We approach challenges with a unique perspective, finding clever and original solutions that set us apart. Ingenuity is our promise to always find a way, even when the path isn't clear.",
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'In all that we do, we uphold the highest standards of honesty and ethical behavior. We recognize the immense responsibility that comes with our work, and we commit to acting with transparency, trustworthiness, and moral fortitude. Our word is our bond, and our actions reflect our commitment to the nation and its guardians.',
    },
  ];

  
  return (
    <div>
      {/* Hero Section - Black */}
      <div className="bg-black text-white py-24 md:py-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl font-extralight mb-8 uppercase tracking-tight">About Coreshield</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Based in Bangalore and founded by visionaries from IIM Bangalore, Coreshield Technology
            is committed to excellence, innovation, and security in defense technology.
          </p>
        </div>
      </div>

      {/* Core Values Section - White */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-black text-center mb-16 uppercase tracking-tight">III Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="bg-black/5 backdrop-blur-lg p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-all">
                  <IconComponent className="h-12 w-12 text-black mb-6" />
                  <h3 className="text-2xl font-extralight text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-xl font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vision Section - Black */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-center mb-16 uppercase tracking-tight">Our Vision</h2>
          <div className="text-xl font-light text-gray-300 max-w-4xl mx-auto space-y-6">
            <p>In the heart of India's defense evolution, we stand as the vanguard of change. We're not just a startup; we're a revolution. With every technological challenge that our nation faces, we see an opportunity to innovate, to lead, to inspire.</p>
            <p>Our commitment goes beyond filling gaps; it's about creating bridges to a future where our armed forces are equipped with the world's most advanced AI tools. From the skies above to the digital realms below, our solutions are the heartbeat of a new defense era.</p>
            <p>Guided by integrity and driven by innovation, we're not just aiming for self-reliance; we're forging a legacy. A legacy where every soldier is backed by AI, every strategy is data-driven, and every mission is a testament to India's technological prowess.</p>
            <p>Join us as we redefine defense, one innovation at a time.</p>
            <p className="italic mt-8">United by our vision and foundational values, we carve out our unique identity, charting a path that seeks to transform the landscape of defense in India.</p>
          </div>
        </div>
      </div>

      {/* Recognitions Section - White */}
     <BackedBy/>

      {/* Team Section - Black */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-extralight text-center mb-16 uppercase tracking-tight">Our Team</h2>
          <div className="text-xl font-light text-gray-300 max-w-7xl mx-auto mb-20 text-center">
            <p>Established by graduates of IIM Bangalore, our team is driven by a shared ambition to question the norm, venture into novel domains, and craft solutions that redefine potential. Leading the way, our members offer a distinctive fusion of vast industry knowledge and entrepreneurial zeal. Our startup's essence celebrates diversity, comprising not just colleagues, but a cohesive family that ranges from seasoned industry experts to dynamic newcomers ready to leave an imprint.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center">
              <div className="w-32 h-32 bg-gray-400 border rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-extralight mb-2">C S Rathore</h3>
              <p className="text-gray-400 text-xl font-light mb-2">SQUADRON LEADER IAF</p>
              <p className="text-gray-400 text-lg font-light mb-2">Alumnus NDA, IIM Bangalore</p>
              <p className="text-gray-400 text-lg font-light">Founder / CEO</p>
            </div>
            <div className="bg-white backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center">
              <div className="w-32 h-32 bg-gray-400  border rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-extralight mb-2">R Navin</h3>
              <p className="text-gray-400 text-xl font-light mb-2">Principal Technologist</p>
              <p className="text-gray-400 text-lg font-light mb-2">Alumnus IIM Bangalore</p>
              <p className="text-gray-400 text-lg font-light">Founder/CTO</p>
            </div>
            <div className="bg-white backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center">
              <div className="w-32 h-32 bg-gray-400  border rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-extralight mb-2">Bhavya K</h3>
              <p className="text-gray-400 text-xl font-light mb-2">Head Of Engineering</p>
              <p className="text-gray-400 text-lg font-light mb-2">Alumnus DSCE Bangalore</p>
              <p className="text-gray-400 text-lg font-light">Partner/CIO</p>
            </div>
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </div>
  );
};

export default About;