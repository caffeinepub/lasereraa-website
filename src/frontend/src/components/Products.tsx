import { Gift, Briefcase, Star, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Products() {
  const productCategories = [
    {
      icon: Briefcase,
      title: 'Corporate Gift Items',
      description: 'Elevate your brand with premium laser-engraved corporate gifts. Perfect for client appreciation, employee recognition, and business events.',
      items: [
        'Engraved Metal Plaques',
        'Custom Acrylic Awards',
        'Branded Desk Accessories',
        'Executive Gift Sets'
      ]
    },
    {
      icon: Gift,
      title: 'Customizable Gifts',
      description: 'Personalized gifts for any occasion. From weddings to birthdays, create memorable keepsakes with precision laser engraving.',
      items: [
        'Personalized Photo Frames',
        'Custom Wooden Boxes',
        'Engraved Jewelry Boxes',
        'Decorative Wall Art'
      ]
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'High-end materials and flawless finishing'
    },
    {
      icon: Package,
      title: 'Bulk Orders',
      description: 'Competitive pricing for large quantities'
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-laser-orange/10 border border-laser-orange/30 rounded-sm mb-4">
            <span className="text-laser-orange font-medium tracking-widest text-sm">
              GIFT SOLUTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 font-industrial">
            Custom Gift Items
          </h2>
          <p className="text-lg text-muted-foreground">
            Precision-crafted gifts that leave a lasting impression
          </p>
        </div>

        {/* Main Product Image */}
        <div className="relative overflow-hidden rounded-sm border-2 border-industrial-border mb-16 max-w-5xl mx-auto">
          <img
            src="/assets/generated/corporate-gifts.dim_800x600.png"
            alt="Corporate Gift Items"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-industrial">
              Laser-Engraved Excellence
            </h3>
            <p className="text-muted-foreground">
              Transform ordinary items into extraordinary gifts with precision laser engraving
            </p>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 border-industrial-border hover:border-laser-orange/50 transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-laser-orange/10 rounded-sm flex items-center justify-center mb-4">
                    <Icon className="text-laser-orange" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight font-industrial">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-muted/30 rounded-sm border border-industrial-border/50">
                        <div className="w-1.5 h-1.5 bg-laser-orange rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-6 bg-card border-2 border-industrial-border rounded-sm">
                <div className="w-12 h-12 bg-laser-orange/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Icon className="text-laser-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 font-industrial">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
