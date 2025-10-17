import { FileText, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      type: 'Research Paper',
      title: 'Optimizing Large Language Models in Production: Techniques and Best Practices',
      venue: 'ICT ACADEMY',
      link: 'https://zenodo.org/records/13882400',
    },
    {
      type: 'Journal Article',
      title: 'Context-Aware Machine Learning: A Hybrid Approach Integrating LLMs and Traditional ML',
      venue: 'International Journal of All Research Education and Scientific Methods (IJARESM)',
      link: 'https://www.ijaresm.com/uploaded_files/document_file/Dr._C_._Sunitha_srod.pdf',
    },
    {
      type: 'Research Paper',
      title: 'Synthetic dataset generator using language model',
      venue: 'International Conference on Emerging Trends in Science and Technology',
      link: null,
    },
    {
      type: 'Research Paper',
      title: 'HealthSync: An AI Powered Medical Platform',
      venue: 'International Conference on Emerging Trends and Technology',
      link: null,
    },
    {
      type: 'Conference Paper',
      title: 'Prompt engineering techniques and future prospects',
      venue: 'International conference on innovations in intelligent computing and biological sciences',
      link: 'hhttps://drive.google.com/file/d/1SblsEaznhz-arikXEd8SB9mHkmQd_z5_/view?usp=drive_web',
    },
    {
      type: 'Conference Paper',
      title: 'Digital Smart Parking System using IoT',
      venue: '11th International conference on Intelligent computing',
      link: null,
    },
    {
      type: 'Conference Paper',
      title: 'Review on Data Analytics Tools',
      venue: 'Coimbatore Institute of Information Technology',
      link: 'https://drive.google.com/file/d/1BOtOXRXT1l0q99Rr1Symmc-CWSdRZk0k/view?pli=1',
    },
    {
      type: 'Journal Article',
      title: 'Comparative Study of Traditional vs. AI-Enhanced A/B Testing for UX Optimization',
      venue: 'International Journal for Research in Applied Science & Engineering Technology',
      link: 'https://doi.org/10.22214/ijraset.2025.74411',
    },
    {
      type: 'Book Chapter',
      title: 'Impact of Artificial Intelligence on Workforce Dynamics: A Multidisciplinary Review',
      venue: 'Bhumi Publishing, India',
      link: 'https://zenodo.org/records/17248131',
    },
     {
      type: 'Conference Paper',
      title: 'AI-Powered Conversational Assistant for the Hearing and Speech Impaired Using Sign Language and Avatar Interfaces',
      venue: '4th International Conference on Enhanced Techniques in Real-Time Applications',
      link: null,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research Paper':
        return 'bg-primary/20 text-primary';
      case 'Conference Paper':
        return 'bg-accent/20 text-accent';
      case 'Journal Article':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="publications" className="pt-32 pb-24 scroll-mt-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award className="text-primary" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Publications & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contributing to AI research through published papers and conference presentations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-smooth group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                      <FileText className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <Badge className={`${getTypeColor(pub.type)} mb-2`}>
                          {pub.type}
                        </Badge>
                        <h3 className="font-semibold leading-tight group-hover:text-primary transition-smooth">
                          {pub.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pub.venue}
                      </p>
                      {pub.link && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="w-full"
                          asChild
                        >
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            View Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              My research explores practical applications of AI and LLMs, with focus on optimization techniques,
              context-aware systems, synthetic data generation, and real-world AI implementations across healthcare,
              workforce dynamics, and user experience optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
