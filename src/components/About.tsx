import { Brain, Code, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep knowledge in machine learning algorithms, neural networks, and AI model optimization',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end AI solutions from model training to production deployment',
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Constantly exploring cutting-edge AI technologies and pushing the boundaries',
    },
  ];

  return (
    <section id="about" className="pt-32 pb-24 scroll-mt-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI/ML Developer and Data Scientist with expertise in Large Language Models, Machine Learning Algorithms, Multi-Modal AI Systems, Agentic AI Systems and Production AI.
              I transform complex AI research into practical, scalable solutions that solve real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-smooth group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <highlight.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
               An aspiring AI Developer and Computer Science student pursuing an M.Sc. Software Systems at Sri Krishna Arts and Science College, Coimbatore. My passion for technology drives me to explore the intersection of AI, full-stack development, and machine learning, transforming ideas into impactful solutions.              </p>
              <p className="text-muted-foreground leading-relaxed">
                I’ve interned at Cloudmate Kat and Reboot Incorporated, where I built AI-powered chat systems, web platforms, and data-driven applications. I’ve also presented seven research papers, including three international ones, and earned two Best Paper Awards. My projects like HealthSync and Kryon-AI reflect my goal to create intelligent systems that make technology more human-centered and accessible.
                              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
