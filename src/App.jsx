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
import SearchPolicyModal from "./components/SearchPolicyModal"; // ✅ importamos el nuevo modal
import { Toaster } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Importamos el ícono

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
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
    <div className="font-inter relative">
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

      {/* ✅ Pasamos la nueva función openSearch */}
      <Navbar
        openLogin={() => setIsLoginOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
      />

      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <Footer />

      {/* ✅ Modales */}
      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {isSearchOpen && (
        <SearchPolicyModal onClose={() => setIsSearchOpen(false)} />
      )}

      {/* ✅ Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/+15129527484" // 🔗 Reemplaza con tu número ej: https://wa.me/5491122334455
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-transform transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
