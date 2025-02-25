import WhoWeAre from '@/components/whoWeAre';
import Hero from '../components/Hero';
import WhatWeDo from '@/components/whatWeDo';
import Research from '@/components/Research';
import ContactFooter from '@/components/Contact';
import BackedBy from '@/components/Backedby';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <main>
        <section className="relative z-20">
          <Hero />
        </section>
        <section className="relative z-20">
          <WhoWeAre/>
        </section>
        <section className="relative z-20">
          <WhatWeDo/>
        </section>
        <section className="relative z-10">
          <Research />
        </section>
        <section className="relative z-10">
          <BackedBy/>
        </section>
        <section className="relative z-10">
          <ContactFooter />
        </section>
      </main>
    </div>
  );
};

export default Home;