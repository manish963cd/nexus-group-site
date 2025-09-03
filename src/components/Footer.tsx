import { Link } from 'react-router-dom';
import { Building2, Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">GroupCorp</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              A diversified business group committed to excellence in real estate development 
              and social impact through our NGO initiatives.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted hover:text-background cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted hover:text-background cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Estate Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>Estate Division</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/estate" className="text-muted hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/estate/about" className="text-muted hover:text-background transition-colors">About Estate</Link></li>
              <li><Link to="/estate/projects" className="text-muted hover:text-background transition-colors">Projects</Link></li>
              <li><Link to="/estate/contact" className="text-muted hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* NGO Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>NGO Division</span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/ngo" className="text-muted hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/ngo/about" className="text-muted hover:text-background transition-colors">About NGO</Link></li>
              <li><Link to="/ngo/programs" className="text-muted hover:text-background transition-colors">Programs</Link></li>
              <li><Link to="/ngo/donate" className="text-muted hover:text-background transition-colors">Donate</Link></li>
              <li><Link to="/ngo/news" className="text-muted hover:text-background transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-muted" />
                <span className="text-muted text-sm">123 Business Avenue, Corporate City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted" />
                <span className="text-muted text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted" />
                <span className="text-muted text-sm">info@groupcorp.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear} GroupCorp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted hover:text-background text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted hover:text-background text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;