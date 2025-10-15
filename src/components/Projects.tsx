import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pilgrim – Personalization Project",
      description: "Implemented advanced personalization features to enhance user experience and increase engagement through AI-driven recommendations",
      link: "https://drive.google.com/file/d/1hXD9QOzF92SiU1CVaDUYZdHMs-pHvonN/view?usp=sharing",
    },
    {
      title: "Improve User Acquisition for Wynk",
      description: "Developed strategic acquisition features that increased user sign-ups by optimizing onboarding flows and reducing friction",
      link: "https://drive.google.com/file/d/13v7NoOFmgpaE7H0wefg_dgyAmQFaDFAn/view?usp=sharing",
    },
    {
      title: "Retention & Monetization Feature for Twitter",
      description: "Designed and implemented features to improve user retention and unlock new revenue streams through premium offerings",
      link: "https://drive.google.com/file/d/1hrH3IT3XydTjD4tjG52akl0UkzAPz5Dy/view?usp=sharing",
    },
    {
      title: "Acquisition Features for Discord",
      description: "Created innovative features to drive community growth and improve new user conversion rates",
      link: "https://drive.google.com/file/d/1kIbEjYJTWrUk4FO8C2PkLyRoB6puiIMQ/view?usp=sharing",
    },
    {
      title: "Increase Engagement on Tiki",
      description: "Developed engaging features that boosted user interaction and increased session time.",
      link: "https://drive.google.com/file/d/1yKiCHtNde8CmNXx3O9f7_hU8Xi0k0LAm/view?usp=sharing",
    },
    {
      title: "Helping Laid-Off Users on Instahyre",
      description: "Built supportive platform features to foster community engagement and increase new user sign-ups.",
      link: "https://drive.google.com/file/d/1yaNQqIj13LMHRGoa9HJdAN4-TL--L78J/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 p-8 card-hover shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-[hsl(210_100%_60%)]/20 transition-smooth">
                  <FileText className="h-6 w-6 text-accent group-hover:text-[hsl(210_100%_60%)] transition-smooth" />
                </div>
                
                <h3 className="text-2xl font-bold font-heading group-hover:text-[hsl(210_100%_60%)] transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-[hsl(210_100%_60%)]"
                  asChild
                >
                  <a href={project.link} className="inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    View Presentation
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:text-[hsl(210_100%_60%)] transition-smooth" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
