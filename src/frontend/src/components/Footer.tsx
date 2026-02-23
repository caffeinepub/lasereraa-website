import { SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-industrial-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/generated/lasereraa-logo.dim_400x400.png" 
                alt="Lasereraa Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-foreground font-industrial">
                LASERERAA
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Leading provider of precision laser cutting services for metal, MDF, and acrylic materials. 
              Specializing in industrial solutions and custom gift items.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Visit us at:</span>
              <a
                href={`https://lasereraa.com/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'lasereraa-app')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-laser-orange font-bold hover:underline"
              >
                lasereraa.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 tracking-wider font-industrial">
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Metal Laser Cutting</li>
              <li>MDF Laser Cutting</li>
              <li>Acrylic Laser Cutting</li>
              <li>Custom Engraving</li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 tracking-wider font-industrial">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Corporate Gifts</li>
              <li>Custom Awards</li>
              <li>Personalized Items</li>
              <li>Decorative Pieces</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8 pb-8 border-b border-industrial-border">
          <a
            href="#"
            className="w-10 h-10 bg-muted hover:bg-laser-orange/20 border border-industrial-border rounded-sm flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook className="text-muted-foreground hover:text-laser-orange" size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-muted hover:bg-laser-orange/20 border border-industrial-border rounded-sm flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram className="text-muted-foreground hover:text-laser-orange" size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-muted hover:bg-laser-orange/20 border border-industrial-border rounded-sm flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="text-muted-foreground hover:text-laser-orange" size={18} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Lasereraa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <span className="text-laser-orange">❤</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'lasereraa-app')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
