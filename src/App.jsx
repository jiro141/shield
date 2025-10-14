import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Coverage from "./components/Coverage";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
    </div>
  );
}
