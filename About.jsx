import { Award, Users, BookOpen, Trophy } from "lucide-react";

function About() {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2,500+" },
    { icon: BookOpen, label: "Qualified Teachers", value: "120+" },
    { icon: Award, label: "Years of Excellence", value: "50+" },
    { icon: Trophy, label: "Awards Won", value: "200+" },
  ];

  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Our School</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Established in 1975, Government High School has been a beacon of quality education, 
            nurturing young minds and preparing them for a bright future. We are committed to 
            providing comprehensive education that develops both academic excellence and character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="mb-6 text-center">Our Mission & Vision</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 text-primary">Mission</h4>
              <p className="text-muted-foreground">
                To provide quality education accessible to all, fostering holistic development 
                of students through innovative teaching methods, character building, and 
                creating responsible citizens who contribute positively to society.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-primary">Vision</h4>
              <p className="text-muted-foreground">
                To be a leading educational institution that empowers every student with 
                knowledge, skills, and values to excel in an ever-changing world while 
                maintaining the highest standards of academic excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;