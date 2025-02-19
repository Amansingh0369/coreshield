import Hero from '../components/Hero';
import { BentoDemo } from '../components/magicui/BentoDemo';
import { TextRevealDemo } from '../components/TextRevealDemo';
const Home = () => {
  return(
    <div>
      <Hero />
      <TextRevealDemo />
      <BentoDemo />
    </div>
  ) ;
};

export default Home;