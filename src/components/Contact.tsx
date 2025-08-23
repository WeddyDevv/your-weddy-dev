import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Heart,
  Clock,
  Star
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Monday - Friday, 9AM - 6PM PST"
  },
  {
    icon: Mail,
    title: "Email Us", 
    value: "hello@eternalmoments.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available Now",
    description: "Get instant support online"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "San Francisco, CA",
    description: "By appointment only"
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-rose-gold/20 rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-rose-gold-dark" fill="currentColor" />
              <span className="text-sm font-medium text-navy-elegant">Get In Touch</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-elegant mb-4">
            Let's Start Your Dream Wedding Website
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something beautiful together? We'd love to hear your story and discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-0 bg-gradient-elegant">
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-navy-elegant mb-2">
                Tell Us About Your Wedding
              </h3>
              <p className="text-muted-foreground">
                Share your vision and we'll create a personalized proposal just for you.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partner1" className="text-navy-elegant font-medium">Partner 1 Name</Label>
                  <Input 
                    id="partner1"
                    placeholder="Enter your name"
                    className="border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner2" className="text-navy-elegant font-medium">Partner 2 Name</Label>
                  <Input 
                    id="partner2"
                    placeholder="Enter partner's name"
                    className="border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy-elegant font-medium">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-navy-elegant font-medium">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="wedding-date" className="text-navy-elegant font-medium">Wedding Date</Label>
                <Input 
                  id="wedding-date"
                  type="date"
                  className="border-rose-gold/30 focus:border-rose-gold-dark"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="venue" className="text-navy-elegant font-medium">Wedding Venue (Optional)</Label>
                <Input 
                  id="venue"
                  placeholder="Venue name and location"
                  className="border-rose-gold/30 focus:border-rose-gold-dark"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-navy-elegant font-medium">Website Budget Range</Label>
                <select className="w-full px-3 py-2 border border-rose-gold/30 rounded-md focus:outline-none focus:border-rose-gold-dark">
                  <option value="">Select your budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="over-2000">$2,000+</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy-elegant font-medium">Tell Us Your Vision</Label>
                <Textarea 
                  id="message"
                  placeholder="Describe your dream wedding website, style preferences, special requirements, or any questions you have..."
                  rows={4}
                  className="border-rose-gold/30 focus:border-rose-gold-dark"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Our Love Story
                <Heart className="w-5 h-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours with a personalized proposal
              </p>
            </form>
          </Card>
          
          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card 
                    key={index}
                    className="p-6 shadow-soft hover:shadow-card transition-all duration-300 border-0 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-gold/20 rounded-xl flex items-center justify-center group-hover:bg-rose-gold/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-rose-gold-dark" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-navy-elegant mb-1">
                          {item.title}
                        </h4>
                        <p className="text-rose-gold-dark font-medium mb-1">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
            
            {/* Quick CTA */}
            <Card className="p-8 bg-gradient-navy text-white shadow-elegant border-0 text-center">
              <Calendar className="w-12 h-12 text-rose-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold mb-2">
                Book a Free Consultation
              </h3>
              <p className="text-white/90 mb-6">
                Schedule a 30-minute call to discuss your vision and get expert guidance on your wedding website.
              </p>
              <Button variant="hero" size="lg" className="bg-rose-gold text-navy-elegant hover:bg-rose-gold-dark">
                Schedule Call
                <Clock className="w-5 h-5" />
              </Button>
            </Card>
            
            {/* Trust Indicator */}
            <Card className="p-6 border-0 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-semibold text-navy-elegant mb-1">
                    Join 500+ Happy Couples
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Trusted by couples worldwide
                  </p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold-dark fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact