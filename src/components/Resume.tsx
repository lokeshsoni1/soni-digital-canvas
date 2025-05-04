
import { Button } from "@/components/ui/button";
import { Download, Calendar, School, Briefcase } from "lucide-react";

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Dronacharya College of Engineering",
      duration: "2023 - Present",
      description: "First-year student focusing on core CS concepts and web development technologies."
    }
  ];

  const experience = [
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2023 - Present",
      description: "Building and designing websites for small businesses and individuals."
    },
    {
      position: "UI/UX Designer",
      company: "Self-Employed",
      duration: "2023 - Present",
      description: "Creating user interfaces and experience designs for web and mobile applications."
    }
  ];

  const certificates = [
    {
      title: "Web Development Fundamentals",
      issuer: "Coursera",
      date: "2023"
    },
    {
      title: "UI/UX Design Essential Training",
      issuer: "Udemy",
      date: "2023"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/20">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">Resume</h2>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <School className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="card-base hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.duration}
                      </span>
                      <h4 className="text-lg font-bold mt-1">{item.degree}</h4>
                      <h5 className="text-primary font-medium">{item.institution}</h5>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="card-base hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.duration}
                      </span>
                      <h4 className="text-lg font-bold mt-1">{item.position}</h4>
                      <h5 className="text-primary font-medium">{item.company}</h5>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6 text-primary"
              >
                <rect width="18" height="14" x="3" y="4" rx="2" />
                <line x1="12" x2="12" y1="4" y2="18" />
                <path d="M19 4v7" />
                <path d="M3 4v7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Certificates</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="card-base hover:shadow-md flex flex-col">
                <h4 className="text-lg font-bold">{cert.title}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-primary font-medium">{cert.issuer}</span>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
