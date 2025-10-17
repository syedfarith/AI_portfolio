import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Developer Intern',
      company: 'Cloudmate Kat',
      period: 'Mar 2025 - Sep 2025',
      description: "Developed a RAG system using LangChain and integrated client-specific AI solutions. Managed PostgreSQL databases and supported scalable deployment of AI services.",
      current: false,
    },
    {
      role: 'AI Developer Intern',
      company: 'Cloudmate Kat',
      period: 'May 2024 - Oct 2024',
      description: "Worked in the AI team on the company's core product, gaining valuable experience in large language models (LLMs), machine learning (ML), artificial intelligence (AI), and natural language processing (NLP).",
      current: false,
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Reboot Incorporation',
      period: 'Jun 2023 - Oct 2023',
      description: 'Developed responsive web pages with HTML5, CSS, and Bootstrap. Created backend services using Django and Python, integrated APIs, and managed PostgreSQL databases for client projects.',
      current: false,
    },
  ];

  return (
    <section id="experience" className="pt-32 pb-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building expertise through hands-on experience in AI and full-stack development
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            {exp.role}
                            {exp.current && (
                              <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-normal">
                                Current
                              </span>
                            )}
                          </h3>
                          <p className="text-lg text-primary">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
