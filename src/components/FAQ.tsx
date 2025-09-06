import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Heart } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to create a wedding website?",
    answer: "Most wedding websites are completed within 7-10 business days from the time we receive all your content and photos. Rush orders can be accommodated for an additional fee, with completion in 3-5 business days."
  },
  {
    question: "What information do I need to provide?",
    answer: "We'll need your wedding details (date, venue, schedule), couple photos, your story,  and any specific design preferences. We provide a detailed checklist to make this process smooth and easy."
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. We understand that many guests will access your site on their phones, so mobile experience is a top priority."
  },
  {
    question: "What happens after the wedding?",
    answer: "Your website remains active for 1 year after your wedding date (included in all packages). You can use this time to share wedding photos, thank guests, and keep your beautiful memories online. Extended hosting is available at a nominal annual fee."
  },
  {
    question: "Do you offer custom design or just templates?",
    answer: "We specialize in completely custom designs tailored to your unique style and story. While we have design inspirations to choose from, every website is created from scratch to reflect your personality and wedding theme."
  },
  {
    question: "How much does a wedding website cost?",
    answer: "Our packages range from Rs.5999/- for basic custom designs to Rs.11999/- for our complete luxury package. Pricing depends on features, complexity, and customization level. We offer payment plans and always provide detailed quotes upfront with no hidden fees."
  },

  {
    question: "What if we need to change wedding details after the site is live?",
    answer: "No problem! We understand that wedding planning involves changes. our team provides complimentary support for any major changes with small fees"
  }
]

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-navy-elegant/10 rounded-full px-4 py-2">
              <HelpCircle className="w-5 h-5 text-navy-elegant" />
              <span className="text-sm font-medium text-navy-elegant">FAQ</span>
            </div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-elegant mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our wedding website services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-card border-0 bg-white/90 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-rose-gold/20 rounded-lg px-6 py-2 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-playfair font-semibold text-navy-elegant hover:text-rose-gold-dark transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          
          {/* Still Have Questions CTA */}
          <Card className="mt-12 p-8 bg-gradient-navy text-white shadow-elegant border-0 text-center">
            <MessageCircle className="w-12 h-12 text-rose-gold mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold mb-2">
              Still Have Questions?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We're here to help! Our team is ready to answer any specific questions about your wedding website needs and provide personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919160703822" >
              <Button variant="hero" size="lg" className="bg-rose-gold text-navy-elegant hover:bg-rose-gold-dark">
                Chat With Us Now
                <MessageCircle className="w-5 h-5" />
              </Button>
              </a>
              <a href="tel:+919160703822" >
              <Button variant="luxury" size="lg" className="border-white text-white hover:bg-white hover:text-navy-elegant">
                Schedule Consultation
                <Heart className="w-5 h-5" />
              </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FAQ