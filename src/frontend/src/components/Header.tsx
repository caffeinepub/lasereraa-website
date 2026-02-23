import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-industrial-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/lasereraa-logo.dim_400x400.png" 
              alt="Lasereraa Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-foreground font-industrial">
                LASERERAA
              </span>
              <span className="text-xs text-laser-orange font-medium tracking-wider">
                lasereraa.com
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              CONTACT
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-laser-orange hover:bg-laser-orange-dark text-white font-medium tracking-wide"
              size="sm"
            >
              GET QUOTE
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-industrial-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide py-2"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide py-2"
              >
                PRODUCTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide py-2"
              >
                CONTACT
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-laser-orange hover:bg-laser-orange-dark text-white font-medium tracking-wide w-full"
                size="sm"
              >
                GET QUOTE
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
