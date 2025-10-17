import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 isolate">
      {/* Background with Gradient */}
      <div className="absolute inset-0 z-0 contain-strict">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Syed Farith C
            </h1>
            <p className="text-3xl md:text-4xl font-semibold">
              <span className="gradient-text">AI/ML Developer & Data Scientist</span>
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in Large Language Models, Multi-Modal AI Systems, Agentic AI and Production-Ready AI Solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary text-lg px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/syedfarith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/syedfarithc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:syedfarith1351@gmail.com"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
