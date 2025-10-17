import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: [
        'Large Language Models',
        'Multi-Modal AI',
        'Llama',
        'Gemini',
        'OpenAI',
        'Claude',
        'Groq API',
        'Prompt Engineering',
        'sKlearn',  
        'Model Deployment',
      ],
    },
    {
      category: 'Deep Learning & Frameworks',
      skills: [
        'PyTorch',
        'TensorFlow',
        'TensorFlow.js',
        'Keras',
        'Vision Models',
        'Speech-to-Text',
        'NLP',
        'Transformers',
        'Neural Networks',
        'Hugging Face',


      ],
    },
    {
      category: 'Programming & Development',
      skills: [
        'Python',
        'JavaScript',
        'Flask',
        'Django',
        'React',
        'FastAPI',
        'Streamlit',
        'HTML5',
        'CSS',
        'Bootstrap',

      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'SQL',
        'NoSQL',
        'Vector Databases',
        'Dataset Generation',
        'Data Analytics',
        'API Integration',
        'Git',
      ],
    },
    {
      category: 'Specialized Domains',
      skills: [
        'AI Agents',
        'Healthcare AI',
        'Geospatial AI',
        'Voice Recognition',
        'Computer Vision',
        'Synthetic Data',
        'Model Evaluation',
      ],
    },
    {
      category: 'Web & GIS Technologies',
      skills: [
        'Leaflet',
        'OpenLayers',
        'Web GIS',
        'Voice-Enabled Apps',
        'Offline AI',
        'GPU/NPU Optimization',
      ],
    },
  ];

  return (
    <section id="skills" className="pt-32 pb-24 scroll-mt-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise in AI development, from LLMs to production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-smooth"
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Constantly exploring cutting-edge AI technologies and staying updated with the latest developments
              in LLMs, multi-modal systems, and production AI deployment strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
