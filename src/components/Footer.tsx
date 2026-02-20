import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Abdeali Gangardiwala
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/abdeali-main" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:abdealixmain07@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
