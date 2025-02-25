import Spline from '@splinetool/react-spline';
// import icon1 from "../../public/3d1.jpg"

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Full screen 3D model background */}
      <div className="absolute inset-2 w-full h-[70rem] blur-xs left-1/2 top-[220px]   -translate-x-1/2 -translate-y-1/2">
        <Spline scene="https://prod.spline.design/rvSGs12C7I1KQeix/scene.splinecode" />
      </div>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/100" />

      {/* Content overlay */}
      <div className="relative   flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tight font-extralight text-white space-y-2">
            <span className="block uppercase tracking-wider">The Future is Here</span>
          </h1>
          <p className="mt-6 text-base md:text-2xl leading-8 font-light text-gray-200 max-w-3xl mx-auto">
            Artificial Intelligence – Securing Tomorrow, Today.         
          </p>
        </div>
      </div>

      {/* Bottom right black box */}
      <div className="absolute bottom-0 right-0 bg-black w-[200px]    h-[200px] z-20" />
    </div>
  );
};

export default Hero;


