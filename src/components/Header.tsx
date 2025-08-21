import { Heart, Star, Users, PenTool, Calendar, Gift, MapPin, MessageCircle, Phone, Mail } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="text-rose-gold-dark w-8 h-8" />
          <span className="font-playfair text-2xl font-semibold text-navy-elegant">Eternal Moments</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className="text-foreground hover:text-rose-gold-dark transition-all duration-300 font-medium relative group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#portfolio" 
            className="text-foreground hover:text-rose-gold-dark transition-all duration-300 font-medium relative group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#services" 
            className="text-foreground hover:text-rose-gold-dark transition-all duration-300 font-medium relative group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:text-rose-gold-dark transition-all duration-300 font-medium relative group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-rose-gold-dark transition-all duration-300 font-medium relative group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-dark transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header