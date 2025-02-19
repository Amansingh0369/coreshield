import { TextReveal } from "../components/magicui/text-reveal"
import Glow from "./glow"

export function TextRevealDemo() {
  return (
    <div className="relative z-10 flex min-h-[100vh] flex-col font-extralight font-sa items-center justify-start rounded-lg bg-black text-white ">
       <Glow className="top-[50px] left-[-280px]" />
       <Glow className="top-[500px] right-[-280px]" />
       <Glow className="top-[1000px] left-[-280px]" />
       <Glow className="top-[1500px] right-[-280px]" />

      <h1 className="text-7xl w-[40rem] h-[10rem] justify-center items-centre flex pt-12 uppercase">
        Our Story
      </h1>
      <div className="relative">
     
        <TextReveal 
          className="font-extralight pt-14 w-full " 
          text="Founded in the early stages of 2023, CoreShield was birthed from the shared vision of two classmates from the prestigious Indian Institute of Management Bangalore. United by their aspiration to play a pivotal role in the modernization and indigenization of the Indian defense forces, the duo embarked on a journey to bridge the technological gap within the defense sector."
          showProgressLine={true}
        />
        <TextReveal 
          className="font-extralight  " 
          text="At the helm are two distinguished individuals whose collective experience forms the cornerstone of CoreShield. One of our founders is a proud alumnus of the National Defence Academy and served as a pilot in the Air Force before retiring to pursue this venture. His extensive experience in the defense sector, coupled with an unyielding passion for serving the nation, laid the foundations of CoreShield's ethos."
          showProgressLine={true}
        />
        <TextReveal 
          className="font-extralight" 
          text="Our other founding member brings to the table a rich background in software development and product management within the aviation industry. His in-depth understanding of software technologies drives the innovative spirit of CoreShield, propelling us towards creating cutting-edge solutions."
          showProgressLine={true}
        />
        <TextReveal 
          className="font-extralight" 
          text="We're not just here to create solutions; we're here to set new standards in defense technology. As we continue to grow and evolve, our vision remains steadfast—to empower the Indian Defense Forces with modern, indigenously developed solutions that stand the test of time"
          showProgressLine={false}
        />
      </div>
    </div>
  );
}
