import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#002d6b] to-[#0f793c] text-white py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-3">Servitend</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your safety is our top priority.  
              Protect your journey with confidence and transparency.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#86efac]/30 rounded-full transition"
                >
                  <Icon className="text-white text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-semibold text-lg mb-3 text-[#86efac]">Products</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-[#86efac] transition">Auto Insurance</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Motorcycle Insurance</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Fleet Coverage</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Commercial Plans</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold text-lg mb-3 text-[#86efac]">Company</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-[#86efac] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Careers</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Social Impact</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Partners</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-semibold text-lg mb-3 text-[#86efac]">Support</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-[#86efac] transition">FAQs</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#86efac] transition">Terms of Service</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-300 text-sm"
        >
          <p>© {new Date().getFullYear()} Servitend. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-[#86efac] transition">Terms</a>
            <a href="#" className="hover:text-[#86efac] transition">Privacy</a>
            <a href="#" className="hover:text-[#86efac] transition">Cookies</a>
          </div>
        </motion.div>
      </div>

      {/* Decorative background glows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-96 h-96 bg-[#0f793c] rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#002d6b] rounded-full blur-3xl opacity-25"
      ></motion.div>
    </footer>
  );
}
