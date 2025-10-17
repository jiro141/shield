import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

export default function Navbar({ openLogin }) {  // 👈 recibes la función como prop
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Servitend" className="w-16 h-16" />
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {[
            { to: "features", label: "Features" },
            { to: "coverage", label: "Coverage" },
            { to: "how", label: "How It Works" },
            { to: "pricing", label: "Pricing" },
            { to: "testimonials", label: "Testimonials" },
            { to: "faq", label: "FAQ" },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="cursor-pointer hover:text-[#0f793c] transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* 👇 Aquí llamas la función que abre el modal */}
          <button
            onClick={openLogin}
            className="bg-[#002D6B] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <button className="bg-[#0F793C] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Check Out
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
