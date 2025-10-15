import { Card } from "@/components/ui/card";
import { Target, Sparkles, TrendingUp, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "User-Centric Product Strategy",
      description: "Designing products by understanding real user needs through research and data-driven insights",
    },
    {
      icon: Sparkles,
      title: "AI & Automation Integration",
      description: "Co-driving AI features to simplify workflows and enhance user experiences",
    },
    {
      icon: TrendingUp,
      title: "Growth & Engagement",
      description: "Improving onboarding, acquisition, and retention through strategic initiatives",
    },
    {
      icon: Users,
      title: "Collaboration & Leadership",
      description: "Leading cross-functional teams for impactful outcomes and seamless execution",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">
            How I Drive Product Success & Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 p-8 card-hover shadow-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-[hsl(210_100%_60%)]/20 transition-smooth">
                  <skill.icon className="h-7 w-7 text-primary group-hover:text-[hsl(210_100%_60%)] transition-smooth" />
                </div>
                <h3 className="text-2xl font-bold font-heading group-hover:text-[hsl(210_100%_60%)] transition-smooth">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
