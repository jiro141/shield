import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Coverage from "./components/Coverage";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <Footer/>
    </div>
  );
}
