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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Main Content */}
          <div className="text-white space-y-8">
            <div className="flex mb-6 animate-fade-in">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
                <Star className="w-4 h-4 text-rose-gold" fill="currentColor" />
                <span className="text-sm font-medium">Luxury Wedding Websites</span>
                <Star className="w-4 h-4 text-rose-gold" fill="currentColor" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                Designing Unforgettable,
                <span className="block text-rose-gold">Luxurious Weddings</span>
                <span className="block">Just for You</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed animate-fade-in-up max-w-2xl">
                Personalized websites for couples who expect magic on their big day. We craft bespoke digital experiences that tell your unique love story.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                variant="luxury" 
                size="xl"
                className="group bg-rose-gold text-navy-elegant hover:bg-rose-gold-dark transition-all duration-300 shadow-elegant"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Creations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="hero" 
                size="xl"
                className="group border-2 border-white/30 hover:border-rose-gold hover:bg-rose-gold/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Begin Your Luxury Journey
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 animate-fade-in">
              <p className="text-sm text-white/60 mb-4">Featured in luxury wedding publications</p>
              <div className="flex items-center space-x-8">
                <div className="text-white/80 font-semibold text-sm">BRIDES</div>
                <div className="text-white/80 font-semibold text-sm">MARTHA STEWART</div>
                <div className="text-white/80 font-semibold text-sm">VOGUE WEDDINGS</div>
                <div className="text-white/80 font-semibold text-sm">THE KNOT</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Stats */}
          <div className="lg:flex lg:justify-end">
            <div className="grid grid-cols-1 gap-8 lg:gap-12 animate-fade-in">
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-2">500+</div>
                <div className="text-sm text-white/80 font-medium">Dream Weddings Created</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-2">98%</div>
                <div className="text-sm text-white/80 font-medium">Happy Couples</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-2">5★</div>
                <div className="text-sm text-white/80 font-medium">Average Rating</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-rose-gold mb-2">24h</div>
                <div className="text-sm text-white/80 font-medium">Response Time</div>
              </div>
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