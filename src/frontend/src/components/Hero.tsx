import { Zap, Layers, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/laser-cutting-hero.dim_1200x600.png"
          alt="Laser Cutting in Action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-laser-orange/10 border border-laser-orange/30 rounded-sm mb-6">
              <span className="text-laser-orange font-medium tracking-widest text-sm">
                PRECISION MANUFACTURING
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 font-industrial">
              Industrial Laser
              <br />
              <span className="text-laser-orange">Cutting Excellence</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Advanced laser cutting services for metal, MDF, and acrylic materials. 
            Delivering precision-engineered solutions and custom gift items with unmatched accuracy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-laser-orange hover:bg-laser-orange-dark text-white font-medium tracking-wide text-base px-8 py-6"
            >
              REQUEST QUOTE
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              size="lg"
              variant="outline"
              className="border-2 border-industrial-border hover:bg-accent font-medium tracking-wide text-base px-8 py-6"
            >
              VIEW SERVICES
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card border border-industrial-border rounded-sm">
              <Zap className="text-laser-orange" size={24} />
              <span className="text-sm font-medium tracking-wide">High Precision</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card border border-industrial-border rounded-sm">
              <Layers className="text-laser-orange" size={24} />
              <span className="text-sm font-medium tracking-wide">Multi-Material</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card border border-industrial-border rounded-sm">
              <Award className="text-laser-orange" size={24} />
              <span className="text-sm font-medium tracking-wide">Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-laser-orange to-transparent opacity-50" />
    </section>
  );
}
