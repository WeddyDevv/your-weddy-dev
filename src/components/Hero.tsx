import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart } from "lucide-react"
import heroImage from "@/assets/hero-wedding.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-elegant/60" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
              <Star className="w-5 h-5 text-rose-gold" fill="currentColor" />
              <span className="text-sm font-medium">Luxury Wedding Websites</span>
              <Star className="w-5 h-5 text-rose-gold" fill="currentColor" />
            </div>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Creating Your
            <span className="block text-rose-gold">Perfect Love Story</span>
            Online
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed animate-fade-in-up max-w-3xl mx-auto">
            We design breathtaking, custom wedding websites that capture the essence of your unique love story. From elegant invitations to seamless RSVP management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="luxury" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Quote
              <Heart className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold">500+</div>
              <div className="text-sm text-white/80">Dream Weddings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold">98%</div>
              <div className="text-sm text-white/80">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-playfair font-bold text-rose-gold">5★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero