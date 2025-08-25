import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Heart,
  Clock,
  Star,
  Send
} from "lucide-react"

interface ContactFormData {
  partner1: string
  partner2: string
  email: string
  phone: string
  weddingDate: string
  venue: string
  budget: string
  message: string
}

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8855888965",
    description: "Monday - Friday, 9AM - 11PM PST"
  },
  // {
  //   icon: Mail,
  //   title: "Email Us", 
  //   value: "hello@eternalmoments.com",
  //   description: "We'll respond within 24 hours"
  // },

  {
    icon: MapPin,
    title: "Visit Us",
    value: "mallepally",
    description: "By Contact only"
  }
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

   const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_03933oj",   // Replace with your EmailJS Service ID
        "template_ss1grrh",  // Replace with your EmailJS Template ID
        {
          partner1: data.partner1,
          phone: data.phone,
          venue: data.venue,
          message: data.message,
        },
        "Tto7XXOZ6UrX8tk6X" // Replace with your EmailJS Public Key
      );
      alert("Form submitted successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Something went wrong, please try again later.");
    }
    setIsSubmitting(false);
  };


  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-rose-gold/20 rounded-full px-3 sm:px-4 py-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-gold-dark" fill="currentColor" />
              <span className="text-xs sm:text-sm font-medium text-navy-elegant">Get In Touch</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-elegant mb-3 sm:mb-4 px-2 leading-tight">
            Let's Start Your Dream Wedding Website
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
            Ready to create something beautiful together? We'd love to hear your story and discuss your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-elegant border-0 bg-gradient-elegant">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-playfair text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-navy-elegant mb-2 leading-tight">
                  Tell Us About Your Wedding
                </h3>
                <p className="text-xs xs:text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Share your vision and we'll create a personalized proposal just for you.
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="Name" className="text-sm font-medium text-navy-elegant">Name *</Label>
                    <Input 
                      id="partner1"
                      {...register("partner1", { required: "Name is required" })}
                      placeholder="Enter your name"
                      className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                    />
                    {errors.partner1 && <p className="text-red-500 text-xs">{errors.partner1.message}</p>}
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="partner2" className="text-sm font-medium text-navy-elegant">Partner 2 Name *</Label>
                    <Input 
                      id="partner2"
                      {...register("partner2", { required: "Partner 2 name is required" })}
                      placeholder="Enter partner's name"
                      className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                    />
                    {errors.partner2 && <p className="text-red-500 text-xs">{errors.partner2.message}</p>}
                  </div> */}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-navy-elegant">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email"
                        }
                      })}
                      placeholder="your@email.com"
                      className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-navy-elegant">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      {...register(("phone"),{ required: "Name is required" })}
                      placeholder="+91 1234567890"
                      className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                    />
                  </div>
                </div>
                
                {/* <div className="space-y-2">
                  <Label htmlFor="weddingDate" className="text-sm font-medium text-navy-elegant">Wedding Date *</Label>
                  <Input 
                    id="weddingDate"
                    type="date"
                    {...register("weddingDate", { required: "Wedding date is required" })}
                    className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                  {errors.weddingDate && <p className="text-red-500 text-xs">{errors.weddingDate.message}</p>}
                </div> */}
                
                <div className="space-y-2">
                  <Label htmlFor="venue" className="text-sm font-medium text-navy-elegant">Wedding Venue (Optional)</Label>
                  <Input 
                    id="venue"
                    {...register("venue")}
                    placeholder="Venue name and location"
                    className="text-sm border-rose-gold/30 focus:border-rose-gold-dark"
                  />
                </div>
                
                {/* <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium text-navy-elegant">Website Budget Range</Label>
                  <select 
                    {...register("budget")}
                    className="w-full px-3 py-2 text-sm border border-rose-gold/30 rounded-md focus:outline-none focus:border-rose-gold-dark bg-background"
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="over-2000">$2,000+</option>
                  </select>
                </div> */}
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-navy-elegant">Tell Us Your Vision </Label>
                  <Textarea 
                    id="message"
                    {...register("message")}
                    placeholder="Describe your dream wedding website, style preferences, special requirements, or any questions you have..."
                    rows={3}
                    className="text-sm border-rose-gold/30 focus:border-rose-gold-dark resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>
                
                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Our Love Story
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours with a personalized proposal
                </p>
              </form>
            </Card>
          </div>
          
          {/* Contact Info & CTA */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-4 sm:gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card 
                    key={index}
                    className="p-4 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300 border-0 group"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-gold/20 rounded-xl flex items-center justify-center group-hover:bg-rose-gold/30 transition-colors flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-rose-gold-dark" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-playfair font-semibold text-navy-elegant mb-1 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-rose-gold-dark font-medium mb-1 text-sm sm:text-base break-words">{item.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
            
            {/* Quick CTA */}
            <Card className="p-6 sm:p-8 bg-gradient-navy text-white shadow-elegant border-0 text-center">
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-rose-gold mx-auto mb-4" />
              <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-2">
                Book a Free Consultation
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-6">
                Schedule a 30-minute call to discuss your vision and get expert guidance on your wedding website.
              </p>
              <a href="tel:+918855888965" >
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto bg-rose-gold text-navy-elegant hover:bg-rose-gold-dark"
              >
                Schedule Call
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              </a>
            </Card>
            
            {/* Trust Indicator */}
            <Card className="p-4 sm:p-6 border-0 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h4 className="font-playfair font-semibold text-navy-elegant mb-1 text-sm sm:text-base">
                    Join 100+ Happy Couples
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Trusted by couples in Hyderabad
                  </p>
                </div>
                <div className="flex flex-shrink-0 ml-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-rose-gold-dark fill-current" />
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