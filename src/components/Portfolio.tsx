import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Heart, Star, Award, ArrowRight } from "lucide-react"
import portfolioImage from "@/assets/portfolio-gallery.jpg"

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    couple: "Sarah & Michael",
    style: "Classic Romance",
    image: portfolioImage,
    features: ["Custom RSVP System", "Guest Registry", "Photo Gallery", "Gift Registry"],
    color: "Rose Gold & Navy"
  },
  {
    id: 2, 
    title: "Luxury Vineyard Celebration",
    couple: "Emma & James",
    style: "Sophisticated Elegance",
    image: portfolioImage,
    features: ["Interactive Timeline", "Venue Maps", "Accommodation Guide", "Live Updates"],
    color: "Champagne & Burgundy"
  },
  {
    id: 3,
    title: "Coastal Beach Romance", 
    couple: "Isabella & David",
    style: "Bohemian Chic",
    image: portfolioImage,
    features: ["Mobile Responsive", "Social Media Integration", "Weather Updates", "Transportation"],
    color: "Coral & Teal"
  },
  {
    id: 4,
    title: "Metropolitan Glamour",
    couple: "Sophia & Alexander", 
    style: "Modern Luxury",
    image: portfolioImage,
    features: ["Guest Messaging", "Digital Guestbook", "Live Streaming Info", "Menu Selection"],
    color: "Black & Gold"
  },
  {
    id: 5,
    title: "Rustic Country Charm",
    couple: "Olivia & Lucas",
    style: "Vintage Rustic",
    image: portfolioImage,
    features: ["Story Timeline", "Family Trees", "Playlist Requests", "Parking Info"],
    color: "Sage & Cream"
  },
  {
    id: 6,
    title: "Royal Palace Affair",
    couple: "Victoria & William",
    style: "Regal Elegance", 
    image: portfolioImage,
    features: ["Multilingual Support", "Dress Code Guide", "Gift Tracking", "Thank You Notes"],
    color: "Royal Blue & Silver"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-rose-gold/20 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-rose-gold-dark" />
              <span className="text-sm font-medium text-navy-elegant">Our Work</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-elegant mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of stunning wedding websites, each uniquely crafted to tell a couple's love story
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-elegant/0 group-hover:bg-navy-elegant/20 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-gold text-navy-elegant text-xs font-semibold px-3 py-1 rounded-full">
                    {item.style}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="hero" className="rounded-full">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-navy-elegant">
                    {item.title}
                  </h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-rose-gold-dark fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-rose-gold-dark font-medium mb-2">{item.couple}</p>
                <p className="text-sm text-muted-foreground mb-4">Theme: {item.color}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm text-navy-elegant">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-rose-gold-dark" fill="currentColor" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="elegant" size="lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio