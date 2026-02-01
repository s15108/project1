import { ImageWithFallback } from "./figma/ImageWithFallback";

function Facilities() {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Nzk0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Classrooms",
      description: "Smart classrooms equipped with digital boards and audio-visual aids"
    },
    {
      image: "https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3Njc5NzkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Library",
      description: "Extensive collection of 15,000+ books and digital resources"
    },
    {
      image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njc5NzQ5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Science Labs",
      description: "State-of-the-art physics, chemistry, and biology laboratories"
    },
    {
      image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2ODAyNDk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Computer Lab",
      description: "80+ computers with high-speed internet connectivity"
    },
    {
      image: "https://images.unsplash.com/photo-1613466576585-a030f12d60da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc2ODAyNDk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sports Facilities",
      description: "Multiple playgrounds for cricket, football, basketball, and athletics"
    },
    {
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2Nzk0NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Auditorium",
      description: "500-seat auditorium for cultural events and assemblies"
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Facilities</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We provide world-class infrastructure to ensure the best learning environment 
            for our students. Our facilities are designed to support both academic and 
            extracurricular development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Facilities;