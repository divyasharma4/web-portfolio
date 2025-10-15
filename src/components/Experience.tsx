import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SAP",
      role: "Product Manager",
      period: "Jul 2023 – Present",
      description: "Leading Customer Lifecycle Experience initiatives and AI-driven product development to enhance enterprise solutions",
    },
    {
      company: "Deloitte",
      role: "Analyst",
      period: "Aug 2018 – Mar 2021",
      description: "Drove Core Business Operations optimization and delivered Digital & SaaS transformation projects for enterprise clients",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">
            Past Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 p-8 card-hover shadow-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(210_100%_60%)]/20 transition-smooth">
                  <Building2 className="h-8 w-8 text-primary group-hover:text-[hsl(210_100%_60%)] transition-smooth" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-heading group-hover:text-[hsl(210_100%_60%)] transition-smooth">{exp.company}</h3>
                    <p className="text-xl text-primary">{exp.role}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
