import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
        {
      title: 'Kryon AI Agent Framework',
      description: 'Modular multi-backend agent framework enabling intelligent agents with multiple LLM support, dynamic memory backends, and custom tool integration',
      tags: ['AI Agents', 'Python', 'OpenAI', 'Claude', 'Gemini', 'MongoDB'],
      type: 'Personal',
      github: 'https://github.com/syedfarith/kryon-ai',
      demo: 'https://pypi.org/project/kryon-ai/',
    },
    {
      title: 'EmbedFlow',
      description: 'EmbedFlow is an end-to-end embedding generation platform that connects to PostgreSQL or MySQL databases, transforms data into AI-ready vectors using Cohere, and provides downloadable results for RAG-based systems.',
      tags: ['AI', 'Embeddings', 'Cohere', 'PostgreSQL', 'MySQL', 'RAG'],
      type: 'Personal',
      github: 'https://github.com/syedfarith/EmbedFlow',
      demo: 'https://embedflow.syedfarith.in/',
    },
    {
      title: 'Groq Eval Score',
      description: 'Python package for evaluating LLM output relevance using Groq API. Computes relevance scores (0.0-1.0) for benchmarking AI model performance',
      tags: ['Python', 'LLM', 'Groq API', 'Evaluation', 'Python Package'],
      type: 'Personal',
      github: 'https://github.com/syedfarith/groq_eval',
      demo: 'https://pypi.org/project/groq-eval-score/',
    },
    {
      title: 'HealthSync',
      description: 'Comprehensive digital health platform integrating secure medical data storage, intelligent chatbot, medical data dashboard, and AI-powered diagnostic tool',
      tags: ['Python', 'LLM', 'Flask', 'Llama', 'Gemini', 'Healthcare AI'],
      type: 'Academic',
      github: 'https://github.com/syedfarith/HealthSync',
      demo: null,
    },
    {
      title: 'Multi-Modal AI System',
      description: 'Vision and Audio Query Interaction system integrating vision models and LLMs for image interaction via audio and text queries with webcam support',
      tags: ['Python', 'Streamlit', 'LLM', 'Llama', 'Vision Model', 'Speech-to-Text'],
      type: 'Personal',
      github: 'https://github.com/syedfarith/vision/blob/main/av.py',
      demo: 'https://vision-with-audio.streamlit.app/',
    },
    {
      title: 'MailQ',
      description: 'MailQ, an AI-powered email assistant built with Streamlit, Kryon AI, and Groq LLM. MailQ securely fetches your recent emails, filters relevant ones based on your queries, summarizes them in simple language, and even lets you chat with your inbox like ChatGPT — making email management faster, smarter, and effortless!',
      tags: ['Python', 'Streamlit', 'LLM', 'Llama', 'Email Automation', 'Groq API'],
      type: 'Personal',
      github: "https://github.com/syedfarith/MailQ",
      demo: "https://mailqog.streamlit.app/",
    },
    {
      title: 'Synthetic Dataset Generator',
      description: 'Synthetic dataset generator creating realistic conversations based on user-defined scenarios with integrated tools and function calls for AI training',
      tags: ['Python', 'LLM', 'Prompt Engineering', 'Dataset Generation', 'Llama'],
      type: 'Personal',
      github: 'https://github.com/syedfarith/Synthetic-data-generator',
      demo: 'https://synthetic-data-generators.streamlit.app/',

    },
    
  ];

  return (
    <section id="projects" className="pt-32 pb-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world AI solutions from healthcare platforms to multi-modal systems and synthetic data generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-smooth group flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="group-hover:text-primary transition-smooth text-lg">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 7).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 7 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 gradient-primary"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
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

export default Projects;
