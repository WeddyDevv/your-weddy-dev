import { Card } from "@/components/ui/card"
import { Star, Heart, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Napa Valley, CA",
    wedding: "Garden Estate Wedding",
    quote: "Eternal Moments created the most beautiful wedding website for us. Our guests were amazed by the elegant design and how easy it was to RSVP. The team truly captured our love story perfectly.",
    rating: 5,
    image: "/placeholder-couple1.jpg"
  },
  {
    id: 2,
    name: "Emma & James Rodriguez",
    location: "Charleston, SC", 
    wedding: "Historic Venue Celebration",
    quote: "We couldn't be happier with our wedding website! The attention to detail and luxurious feel exceeded our expectations. Every guest complimented us on how stunning and professional it looked.",
    rating: 5,
    image: "/placeholder-couple2.jpg"
  },
  {
    id: 3,
    name: "Isabella & David Chen",
    location: "Malibu, CA",
    wedding: "Coastal Romance",
    quote: "From start to finish, the process was seamless. They understood our vision and brought it to life beautifully. The RSVP system made managing our guest list so much easier!",
    rating: 5,
    image: "/placeholder-couple3.jpg"
  },
  {
    id: 4,
    name: "Sophia & Alexander Kim",
    location: "New York, NY",
    wedding: "Metropolitan Luxury",
    quote: "The level of sophistication and elegance they brought to our wedding website was exactly what we hoped for. Our families loved being able to access everything in one beautiful place.",
    rating: 5,
    image: "/placeholder-couple4.jpg"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-rose-gold/20 rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-rose-gold-dark" fill="currentColor" />
              <span className="text-sm font-medium text-navy-elegant">Love Stories</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-elegant mb-4">
            What Our Couples Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from happy couples who trusted us with their special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-rose-gold to-rose-gold-dark" />
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-rose-gold-dark/30 mb-4" />
                <p className="text-muted-foreground italic leading-relaxed text-lg mb-4">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-gold-dark fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-semibold text-navy-elegant text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-rose-gold-dark font-medium">{testimonial.wedding}</p>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-rose-gold/20 to-navy-elegant/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-rose-gold-dark" fill="currentColor" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="group">
            <div className="text-3xl font-playfair font-bold text-navy-elegant group-hover:text-rose-gold-dark transition-colors">
              500+
            </div>
            <div className="text-sm text-muted-foreground">Happy Couples</div>
          </div>
          <div className="group">
            <div className="text-3xl font-playfair font-bold text-navy-elegant group-hover:text-rose-gold-dark transition-colors">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="group">
            <div className="text-3xl font-playfair font-bold text-navy-elegant group-hover:text-rose-gold-dark transition-colors">
              5★
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="group">
            <div className="text-3xl font-playfair font-bold text-navy-elegant group-hover:text-rose-gold-dark transition-colors">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials