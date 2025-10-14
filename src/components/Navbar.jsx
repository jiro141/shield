import { motion } from "framer-motion";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="PlateShield" className="w-16 h-16" />
          {/* <span className="text-xl font-semibold">PlateShield</span> */}
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-green-600">
            Features
          </a>
          <a href="#coverage" className="hover:text-green-600">
            Coverage
          </a>
          <a href="#plates" className="hover:text-green-600">
            License Plates
          </a>
          <a href="#pricing" className="hover:text-green-600">
            Pricing
          </a>
          <a href="#faq" className="hover:text-green-600">
            FAQ
          </a>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#002D6B] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Quote
          </button>
          <button className="bg-[#0F793C] text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Check Out
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
