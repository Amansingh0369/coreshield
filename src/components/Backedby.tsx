interface Recognition {
  title: string;
  img: string;
}

const recognitions: Recognition[] = [
  {
    title: 'IDEX Winner',
    img: "../../public/idex.avif"
  },
  {
    title: 'FITT IIT Delhi', 
    img: "../../public/fiit.avif"
  },
  {
    title: 'Indian Army',
    img: "../../public/army.avif"
  },
  {
    title: 'DPIIT Recognized',
    img: "../../public/startup.avif"
  },
  {
    title: 'Northern Command',
    img: "../../public/northern.avif"
  },
  {
    title: 'Google Cloud Platform',
    img: "../../public/googlecloud.avif"
  },
  {
    title: 'Amazon Web Services',
    img: "../../public/aws.avif"
  },
  {
    title: 'ISTART',
    img: "../../public/istart.avif"
  }
];

const BackedBy = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-6xl font-extralight text-black text-center mb-16 uppercase tracking-tight">Backed By</h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-24 animate-marquee-left">
            {[...recognitions, ...recognitions].map((recognition, index) => (
              <div 
                key={`${recognition.title}-${index}`} 
                className="flex-shrink-0 flex flex-col items-center"
              >
                <div className="h-40 w-40 mb-4 overflow-hidden rounded-lg group/item hover:scale-110 transition-transform duration-300">
                  <img 
                    src={recognition.img} 
                    alt={recognition.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xl text-black">{recognition.title}</p>
              </div>
            ))}
          </div>        
        </div>
      </div>
    </div>
  );
};

export default BackedBy;
