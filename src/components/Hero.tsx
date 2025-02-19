import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="relative bg-black h-screen ">
      {/* Full screen 3D model background */}
      <div className="absolute inset-2 w-full h-[70rem] blur-xs left-1/2 top-[14rem] -translate-x-1/2 -translate-y-1/2">
        <Spline scene="https://prod.spline.design/rvSGs12C7I1KQeix/scene.splinecode" />
        {/* <Spline scene="https://prod.spline.design/Kr3BU2TA0C4nsQ9Y/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/v3UObxWHD07c8AZh/scene.splinecode" /> */}



      </div>
      <div className='absolute bottom-0 right-0 bg-black w-[200px] mb-6 mr-2 h-[100px] z-20'></div>

      {/* Content overlay positioned at bottom center */}
      <div className="absolute inset-0 flex pt-[16rem]  justify-center text-center px-6 z-10">
        <div className="max-w-4xl">
          <h1 className='text-6xl md:text-7xl lg:text-9xl tracking-tight font-light text-white'>

          
          Empowering  
         
          
          Indian Defense    
          </h1>
          <p className="mt-6 text-lg leading-8 font-light text-gray-300">
            Leveraging AI Innovation and Strategic Insights for Future-Ready Defense Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;


