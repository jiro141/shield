import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Coverage from "./components/Coverage";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing token on load
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (isAuthenticated) return <Dashboard onLogout={handleLogout} />;

  return (
    <div className="font-inter">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#002d6b",
            color: "#fff",
            borderRadius: "10px",
          },
          success: {
            style: { background: "#0f793c" },
            iconTheme: { primary: "#fff", secondary: "#0f793c" },
          },
          error: {
            style: { background: "#dc2626" },
          },
        }}
      />
      <Navbar openLogin={() => setIsLoginOpen(true)} />
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <Footer />

      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}
