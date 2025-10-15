import { Button } from "@/components/ui/button";
import { Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/divyasharma411/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:divyasharma41196@gmail.com?subject=Hey Divya!", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(210_100%_56%/0.05),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight">
              Hi, I'm <span className="text-primary">Divya Sharma</span>
            </h1>
            <p className="text-3xl md:text-4xl font-heading text-accent">
              Crafting Products that Solve Real Problems
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Product Manager with 7 years of experience in SaaS, healthcare,
              and enterprise domains
            </p>
          </div>

          <div
            className="flex justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-border hover:border-[hsl(210_100%_60%)] hover:bg-[hsl(210_100%_60%)]/10 hover:text-[hsl(210_100%_60%)] transition-smooth hover:shadow-blue"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 transition-fast" />
                </a>
              </Button>
            ))}
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-foreground text-background hover:bg-[hsl(210_100%_60%)] hover:text-white transition-smooth hover:shadow-blue hover:scale-105"
              asChild
            >
              <a href="https://drive.google.com/file/d/1F_DTdJ107mNxatu1Cf3e_-WNVBQpvDTh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5 transition-fast" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
