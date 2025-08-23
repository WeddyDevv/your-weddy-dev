import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Users, 
  Gift, 
  MapPin, 
  Calendar, 
  Camera, 
  MessageCircle, 
  Smartphone,
  Crown,
  Sparkles
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Custom Wedding Website Design",
    description: "Bespoke designs tailored to your unique love story and wedding theme",
    features: ["Personalized color schemes", "Custom typography", "Responsive design", "SEO optimized"],
    price: "Starting at $299"
  },
  {
    icon: Users,
    title: "RSVP & Guest Management",
    description: "Seamless invitation and guest management system with automated reminders",
    features: ["Digital RSVPs", "Guest tracking", "Meal preferences", "Plus-one management"],
    price: "Starting at $149"
  },
  {
    icon: Gift,
    title: "Registry Integration",
    description: "Connect multiple gift registries in one elegant, easy-to-navigate interface",
    features: ["Multiple registry links", "Gift tracking", "Thank you automation", "Wishlist display"],
    price: "Starting at $99"
  },
  {
    icon: MapPin,
    title: "Venue Information Pages",
    description: "Detailed venue information with maps, directions, and accommodation guides",
    features: ["Interactive maps", "Hotel recommendations", "Transportation info", "Local attractions"],
    price: "Starting at $79"
  },
  {
    icon: Calendar,
    title: "Wedding Timeline & Events",
    description: "Interactive timeline showcasing your wedding weekend events and schedule",
    features: ["Event schedule", "Countdown timers", "Weather integration", "Calendar sync"],
    price: "Starting at $129"
  },
  {
    icon: Camera,
    title: "Photo Gallery & Sharing",
    description: "Beautiful galleries for engagement photos and live wedding photo sharing",
    features: ["Secure photo uploads", "Guest photo sharing", "Professional galleries", "Download options"],
    price: "Starting at $199"
  }
]

const premiumFeatures = [
  { icon: Crown, text: "Priority Support" },
  { icon: Sparkles, text: "Premium Templates" }, 
  { icon: MessageCircle, text: "Live Chat Integration" },
  { icon: Smartphone, text: "Mobile App Access" }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-navy-elegant/10 rounded-full px-4 py-2">
              <Sparkles className="w-5 h-5 text-navy-elegant" />
              <span className="text-sm font-medium text-navy-elegant">Our Services</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-elegant mb-4">
            Wedding Website Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From custom design to comprehensive guest management, we provide everything you need for your perfect wedding website
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index}
                className="p-8 shadow-soft hover:shadow-card transition-all duration-300 border-0 bg-white group hover:bg-gradient-elegant"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-rose-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-gold/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-rose-gold-dark" />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-navy-elegant mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-rose-gold-dark rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy-elegant">{service.price}</span>
                  <Button variant="outline" size="sm" className="border-rose-gold-dark text-rose-gold-dark hover:bg-rose-gold hover:text-navy-elegant">
                    Learn More
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Premium Package */}
        <Card className="p-8 bg-gradient-navy text-white shadow-elegant border-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-gold text-navy-elegant px-4 py-2 text-sm font-semibold">
            Most Popular
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Complete Wedding Package
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Everything you need for a luxury wedding website experience, including all services plus premium features.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {premiumFeatures.map((feature, idx) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={idx} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-rose-gold" />
                      <span className="text-white/90">{feature.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="mb-4">
                <span className="text-4xl font-playfair font-bold text-rose-gold">$899</span>
                <span className="text-white/70 ml-2">complete package</span>
              </div>
              <p className="text-white/80 mb-6">Save $200 compared to individual services</p>
              <Button variant="hero" size="lg" className="bg-rose-gold text-navy-elegant hover:bg-rose-gold-dark">
                Get Started Today
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Services