import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart } from "lucide-react"
import heroImage from "@/assets/hero-wedding.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-elegant/80 via-navy-elegant/60 to-navy-elegant/40" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
         <div className="absolute top-20 left-10 w-5 h-20 bg-rose-gold rounded-full animate-pulse opacity-60" />
        <div className="absolute top-32 right-16 w-10 h-10 bg-champagne rounded-full animate-pulse opacity-80" />
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-rose-gold/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-60 right-32 w-20 h-20 bg-champagne/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 shadow-elegant">
              <Star className="w-5 h-5 text-rose-gold" fill="currentColor" />
              <span className="text-sm font-medium tracking-wide">Luxury Wedding Invitation Websites</span>
              <Star className="w-5 h-5 text-rose-gold" fill="currentColor" />
            </div>
          </div>
          
         <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="block leading-tight">Designing Your</span>
            <span className="block text-rose-gold bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent drop-shadow-lg">
              Perfect Wedding Invitation
            </span>
            <span className="block leading-tight">Website Experience</span>
          </h1>
          
         <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/95 font-light leading-relaxed animate-fade-in-up max-w-4xl mx-auto px-4">
            We craft elegant, personalized wedding invitation websites that capture the beauty of your love story. 
            From modern designs to seamless RSVP integration, we make your special day unforgettable online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-16">
            <Button 
              variant="hero" 
              size="xl"
              className="group shadow-elegant hover:shadow-soft"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:+918855888965" >
            <Button 
              variant="luxury" 
              size="xl"
              className="shadow-elegant hover:shadow-soft"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
               Get Started
              <Heart className="w-5 h-5" />
            </Button>
            </a>
          </div>
          
          {/* Stats - Mobile Responsive */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-rose-gold mb-2">500+</div>
              <div className="text-sm text-white/90 tracking-wide">Dream Weddings Created</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-rose-gold mb-2">98%</div>
              <div className="text-sm text-white/90 tracking-wide">Happy Couples</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-playfair font-bold text-rose-gold mb-2">5★</div>
              <div className="text-sm text-white/90 tracking-wide">Average Rating</div>
            </div>
          </div> */}
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