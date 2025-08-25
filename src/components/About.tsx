import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Award, Sparkles, ArrowRight, Star } from "lucide-react"

const teamMembers = [
  {
    name: "Alexandra Sterling",
    role: "Creative Director & Founder",
    bio: "With over 10 years in luxury event design, Alexandra brings an artistic vision to every wedding website.",
    specialties: ["Design Strategy", "Brand Identity", "User Experience"],
    image: "/placeholder-alexandra.jpg"
  },
  {
    name: "Marcus Chen",
    role: "Lead Developer",
    bio: "Expert in creating seamless, responsive experiences that work flawlessly across all devices.",
    specialties: ["Web Development", "RSVP Systems", "Integration"],
    image: "/placeholder-marcus.jpg"
  },
  {
    name: "Sofia Vega",
    role: "Client Experience Manager", 
    bio: "Sofia ensures every couple receives personalized attention and support throughout their journey.",
    specialties: ["Client Relations", "Project Management", "Support"],
    image: "/placeholder-sofia.jpg"
  }
]

const values = [
  {
    icon: Heart,
    title: "Love-Centered Design",
    description: "Every website we create starts with your unique love story at the heart of the design."
  },
  {
    icon: Sparkles,
    title: "Luxury Attention to Detail",
    description: "We obsess over every pixel, ensuring your website reflects the elegance of your special day."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Our dedicated team provides white-glove service, treating each couple like family."
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "From concept to launch, we maintain the highest standards of quality and professionalism."
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          <div>
            <div className="flex items-center space-x-2 bg-navy-elegant/10 rounded-full px-4 py-2 mb-6 w-fit">
              <Star className="w-5 h-5 text-navy-elegant" />
              <span className="text-sm font-medium text-navy-elegant">Our Story</span>
            </div>
            
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy-elegant mb-6">
              Creating Digital Love Stories 
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Eternal Moments was born from a simple belief: every couple deserves a wedding website as unique and beautiful as their love story. What started as a passion project has grown into a luxury wedding website studio trusted by couples worldwide.
              </p>
              
              <p className="text-lg leading-relaxed">
                We understand that your wedding day is one of the most important moments of your life. That's why we combine cutting-edge technology with timeless elegance to create websites that not only look stunning but function flawlessly.
              </p>
              
              <p className="text-lg leading-relaxed">
                From intimate gatherings to grand celebrations, we've had the honor of being part of over 500 love stories, each one teaching us something new about what makes a wedding website truly exceptional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:+918855888965" >
              <Button variant="elegant" size="lg" className="w-full sm:w-auto">
                Our Process
                <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              {/* <Button variant="outline" size="lg" className="w-full sm:w-auto border-navy-elegant text-navy-elegant hover:bg-navy-elegant hover:text-white">
                View Awards
              </Button> */}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3" />
            <Card className="relative bg-white p-8 rounded-3xl shadow-elegant border-0 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-rose-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-10 h-10 text-rose-gold-dark" fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-navy-elegant mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground italic">
                    "To create digital experiences that capture the essence of your love story and make your wedding planning journey as beautiful as your destination."
                  </p>
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold-dark fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-2">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy-elegant mb-4">
              What Drives Us
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every website we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card 
                  key={index}
                  className="p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 border-0 bg-gradient-elegant group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-rose-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-gold/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-rose-gold-dark" />
                  </div>
                  <h4 className="font-playfair font-semibold text-navy-elegant mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        {/* <div>
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy-elegant mb-4">
              Meet Our Team
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals dedicated to making your wedding website dreams come true
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-white group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-rose-gold/30 to-navy-elegant/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-navy-elegant" />
                </div>
                
                <h4 className="font-playfair text-xl font-semibold text-navy-elegant mb-1">
                  {member.name}
                </h4>
                <p className="text-rose-gold-dark font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-navy-elegant">Specialties:</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-rose-gold/20 text-navy-elegant text-xs px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About