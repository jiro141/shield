import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fleet Owner",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Servitend made insuring my delivery van so easy. The claims process was smooth and professional — they handled everything perfectly.",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Best rates I found after comparing multiple companies. The online portal makes managing my policy super convenient.",
  },
  {
    name: "Emily Rodriguez",
    role: "Motorcycle Enthusiast",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Finally found an insurance company that truly understands riders. They even covered my custom parts and riding gear!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-[#f9fafb] via-[#e6f4f1] to-[#f0f8ff] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-[#002d6b] mb-4"
        >
          What Our <span className="text-[#0f793c]">Customers Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Join thousands of satisfied drivers who trust <span className="text-[#002d6b] font-semibold">Servitend</span> for
          their vehicle insurance needs.
        </motion.p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white/70 backdrop-blur-xl border border-[#0f793c]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#0f793c] text-3xl absolute -top-4 left-6 opacity-70" />

              {/* Stars */}
              <div className="flex justify-center mb-4 text-[#facc15]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed mb-6">“{t.quote}”</p>

              {/* Profile */}
              <div className="flex flex-col items-center mt-4">
                <motion.img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-[#0f793c] object-cover mb-3"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h4 className="font-semibold text-[#002d6b]">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating shapes for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#0f793c] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#002d6b] rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
