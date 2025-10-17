import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Syed Farith C. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
