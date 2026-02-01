import { FileText, Calendar, CheckCircle, Download } from "lucide-react";

function Admissions() {
  const steps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the admission form with required details"
    },
    {
      icon: FileText,
      title: "Submit Documents",
      description: "Provide birth certificate, previous school records, and photographs"
    },
    {
      icon: Calendar,
      title: "Entrance Test",
      description: "Attend the entrance examination (for grades 6 and above)"
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive admission confirmation and complete fee payment"
    }
  ];

  const requirements = [
    "Original Birth Certificate",
    "Transfer Certificate from previous school",
    "Mark sheets of previous classes",
    "4 passport size photographs",
    "Caste/Category certificate (if applicable)",
    "Address proof (Utility bill/Ration card)",
    "Parent/Guardian ID proof",
    "Medical fitness certificate"
  ];

  return (
    <section id="admissions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Admissions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Admissions are now open for the academic year 2026-27. 
            Join our esteemed institution and be part of a legacy of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-accent p-8 rounded-lg">
            <h3 className="mb-6">Important Dates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Application Start</span>
                <span className="font-medium">February 1, 2026</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Application Deadline</span>
                <span className="font-medium">March 31, 2026</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Entrance Test</span>
                <span className="font-medium">April 15, 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Result Declaration</span>
                <span className="font-medium">April 30, 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg">
            <h3 className="mb-6">Fee Structure</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
                <span>Primary (1st - 5th)</span>
                <span className="font-medium">₹5,000/year</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
                <span>Middle (6th - 8th)</span>
                <span className="font-medium">₹7,500/year</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
                <span>Secondary (9th - 10th)</span>
                <span className="font-medium">₹10,000/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Senior Secondary (11th - 12th)</span>
                <span className="font-medium">₹12,000/year</span>
              </div>
            </div>
            <p className="text-sm mt-4 opacity-90">
              * Fee waivers and scholarships available for meritorious and economically weaker students
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center">Admission Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-border p-6 rounded-lg text-center h-full">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h3 className="mb-6">Required Documents</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{req}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Application Form
            </button>
            <button className="bg-white border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors flex items-center gap-2">
              <FileText className="w-5 h-5" />
              View Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Admissions;