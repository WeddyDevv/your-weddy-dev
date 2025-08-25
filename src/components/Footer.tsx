import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-navy-elegant text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="text-rose-gold w-8 h-8" fill="currentColor" />
              <span className="font-playfair text-2xl font-semibold">Weddy Dev</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Creating beautiful, custom wedding websites that capture the essence of your unique love story. 
              Trusted by couples worldwide for luxury wedding experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-gold/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-gold/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-gold/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-rose-gold">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-rose-gold transition-colors">Custom Website Design</a></li>
              {/* <li><a href="#" className="hover:text-rose-gold transition-colors">RSVP Management</a></li> */}
              {/* <li><a href="#" className="hover:text-rose-gold transition-colors">Registry Integration</a></li> */}
              <li><a href="#" className="hover:text-rose-gold transition-colors">Photo Galleries</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Map Integration</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Brilliant images</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-rose-gold">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 8855888965</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>weddyDevv@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mallepally, Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/60 text-sm">
            <p>&copy; 2025 Weddy Dev. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-white/60 text-sm">
            Made with <Heart className="w-4 h-4 inline text-rose-gold" fill="currentColor" /> for love stories
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer