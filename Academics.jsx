import { GraduationCap, FlaskConical, Calculator, Globe, Palette, Music } from "lucide-react";

function Academics() {
  const departments = [
    {
      icon: BookOpen,
      name: "Languages",
      description: "English, Hindi, and Regional Languages with focus on communication skills"
    },
    {
      icon: FlaskConical,
      name: "Sciences",
      description: "Physics, Chemistry, Biology with well-equipped laboratories"
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Comprehensive curriculum from basics to advanced concepts"
    },
    {
      icon: Globe,
      name: "Social Sciences",
      description: "History, Geography, Civics, and Economics"
    },
    {
      icon: Palette,
      name: "Arts",
      description: "Drawing, Painting, and Creative Arts programs"
    },
    {
      icon: Music,
      name: "Music & Sports",
      description: "Extracurricular activities for holistic development"
    }
  ];

  return (
    <section id="academics" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Academic Programs</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to meet national educational standards 
            while providing students with a well-rounded education that prepares them for 
            higher studies and future careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              className="bg-white border border-border p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <dept.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="mb-2">{dept.name}</h3>
              <p className="text-muted-foreground">{dept.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent p-8 rounded-lg">
          <h3 className="mb-6 text-center">Class Structure</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">Primary (1st - 5th)</h4>
              <p className="text-muted-foreground">
                Foundation building with focus on basic literacy and numeracy
              </p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">Middle (6th - 8th)</h4>
              <p className="text-muted-foreground">
                Subject specialization begins with qualified subject teachers
              </p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h4 className="mb-2">Secondary (9th - 12th)</h4>
              <p className="text-muted-foreground">
                Board exam preparation with science and commerce streams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BookOpen = GraduationCap;
export default Academics;