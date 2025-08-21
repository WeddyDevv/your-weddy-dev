import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import About from "@/components/About"
import Contact from "@/components/Contact"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
