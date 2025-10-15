import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(271_76%_53%/0.05),transparent_50%)]" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">
            Let's Build Impactful Products Together
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I combine data, empathy, and collaboration to create scalable solutions that drive real results. 
            Let's discuss how I can help grow your business.
          </p>
          
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-foreground text-background hover:bg-[hsl(210_100%_60%)] hover:text-white transition-smooth hover:shadow-blue hover:scale-105"
            asChild
          >
            <a href="mailto:divyasharma41196@gmail.com?subject=Hey Divya!">
              <Mail className="mr-2 h-5 w-5 transition-fast" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
