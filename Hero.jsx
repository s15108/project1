import { ImageWithFallback } from "./figma/ImageWithFallback";

function Hero() {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1760510088582-3ca0631ad84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NzkyNzQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="School Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl mb-4">Welcome to Government High School</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl">
          Empowering minds, building futures. Quality education for every child.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="#admissions" 
            className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Apply Now
          </a>
          <a 
            href="#about" 
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;