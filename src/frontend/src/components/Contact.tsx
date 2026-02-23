import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-laser-orange/10 border border-laser-orange/30 rounded-sm mb-4">
              <span className="text-laser-orange font-medium tracking-widest text-sm">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 font-industrial">
              Start Your Project Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Contact us for a consultation and quote on your laser cutting or custom gift project.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-industrial-border rounded-sm p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-industrial">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-laser-orange/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="text-laser-orange" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground font-medium">info@lasereraa.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-laser-orange/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="text-laser-orange" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-laser-orange/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-laser-orange" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">Industrial District, Your City</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-laser-orange/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="text-laser-orange" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Business Hours</p>
                      <p className="text-foreground font-medium">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-laser-orange/10 border-2 border-laser-orange/30 rounded-sm p-6">
                <h4 className="text-lg font-bold text-foreground mb-2 font-industrial">
                  Visit Our Website
                </h4>
                <p className="text-muted-foreground mb-4">
                  Explore our full range of services and capabilities online
                </p>
                <a
                  href={`https://lasereraa.com/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'lasereraa-app')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-laser-orange font-bold text-lg hover:underline"
                >
                  lasereraa.com
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card border-2 border-industrial-border rounded-sm p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-industrial">
                Request a Quote
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need industrial laser cutting services or custom gift items, we're here to help. 
                Share your project details and we'll provide a competitive quote within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 border border-industrial-border rounded-sm">
                  <p className="text-sm font-medium text-foreground mb-2">What We Need:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-laser-orange rounded-full" />
                      Material type and thickness
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-laser-orange rounded-full" />
                      Design files or specifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-laser-orange rounded-full" />
                      Quantity required
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-laser-orange rounded-full" />
                      Timeline expectations
                    </li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-laser-orange hover:bg-laser-orange-dark text-white font-medium tracking-wide"
                  size="lg"
                >
                  CONTACT US NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center p-8 bg-gradient-to-r from-laser-orange/5 via-laser-orange/10 to-laser-orange/5 border-2 border-laser-orange/30 rounded-sm">
            <h3 className="text-xl font-bold text-foreground mb-2 font-industrial">
              Ready to Experience Precision?
            </h3>
            <p className="text-muted-foreground">
              Join hundreds of satisfied clients who trust Lasereraa for their laser cutting needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
