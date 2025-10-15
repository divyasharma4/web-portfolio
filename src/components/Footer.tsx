import { Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Resume", href: "https://drive.google.com/file/d/1F_DTdJ107mNxatu1Cf3e_-WNVBQpvDTh/view?usp=sharing" },
    { label: "Projects", href: "#projects" },
    { label: "Blogs", href: "#blogs" },
    { label: "Email", href: "mailto:divyasharma41196@gmail.com?subject=Hey Divya!" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/divyasharma411/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:divyasharma41196@gmail.com?subject=Hey Divya!", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-12 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">Divya Sharma</h3>
            <p className="text-muted-foreground">
              Product Manager crafting solutions that solve real problems
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-[hsl(210_100%_60%)] transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(210_100%_60%)] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2025 Divya Sharma. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(210_100%_60%)] transition-smooth hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 transition-fast" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
