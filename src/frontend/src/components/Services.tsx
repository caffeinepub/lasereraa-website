import { Wrench, Box, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Metal Laser Cutting',
      description: 'Precision cutting of steel, aluminum, stainless steel, and other metals with tolerances up to ±0.1mm. Perfect for industrial components, brackets, enclosures, and custom metal fabrication.',
      features: ['Steel & Stainless Steel', 'Aluminum & Brass', 'Up to 25mm Thickness', 'Complex Geometries']
    },
    {
      icon: Box,
      title: 'MDF Laser Cutting',
      description: 'High-quality cutting and engraving of MDF materials for signage, displays, decorative panels, and architectural models. Ideal for prototyping and production runs.',
      features: ['Clean Edge Finish', 'Intricate Patterns', 'Custom Thickness', 'Fast Turnaround']
    },
    {
      icon: Sparkles,
      title: 'Acrylic Laser Cutting',
      description: 'Crystal-clear cuts on acrylic sheets for displays, awards, signage, and decorative items. Polished edges and precise engraving for professional results.',
      features: ['Polished Edges', 'Multiple Colors', 'Detailed Engraving', 'UV Resistant']
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-laser-orange/10 border border-laser-orange/30 rounded-sm mb-4">
            <span className="text-laser-orange font-medium tracking-widest text-sm">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 font-industrial">
            Laser Cutting Services
          </h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art laser cutting technology for diverse materials and applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 border-industrial-border hover:border-laser-orange/50 transition-all duration-300 bg-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-laser-orange/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-laser-orange/20 transition-colors">
                    <Icon className="text-laser-orange" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight font-industrial">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-laser-orange rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="relative overflow-hidden rounded-sm border-2 border-industrial-border group">
            <img
              src="/assets/generated/acrylic-precision.dim_800x600.png"
              alt="Precision Acrylic Cutting"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-industrial">
                Precision Engineering
              </h3>
              <p className="text-sm text-muted-foreground">
                Micron-level accuracy for the most demanding projects
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm border-2 border-industrial-border group">
            <img
              src="/assets/generated/facility-background.dim_1920x1080.png"
              alt="Modern Facility"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-industrial">
                Advanced Equipment
              </h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art laser cutting machinery and technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
