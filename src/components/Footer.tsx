import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Abdeali Gangardiwala
      </p>
      <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/abdeali-main" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:abdealixmain07@gmail.com" className="text-muted-foreground hover:text-accent transition-colors duration-200">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
