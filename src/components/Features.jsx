import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDollarSign,
  FaClock,
  FaHeadset,
  FaClipboardList,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-yellow-400" size={30} />,
    title: "Comprehensive Protection",
    desc: "Full coverage for accidents, theft, natural disasters, and third-party liability.",
  },
  {
    icon: <FaDollarSign className="text-blue-400" size={30} />,
    title: "Affordable Rates",
    desc: "Flexible payment plans and competitive prices that fit your budget perfectly.",
  },
  {
    icon: <FaClock className="text-green-400" size={30} />,
    title: "Quick Claims Process",
    desc: "Get approved within 24-48 hours with minimal paperwork and hassle.",
  },
  {
    icon: <FaHeadset className="text-purple-400" size={30} />,
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance whenever you need help on the road.",
  },
  {
    icon: <FaClipboardList className="text-orange-400" size={30} />,
    title: "Easy Policy Management",
    desc: "Manage your policy, make payments, and update details online easily.",
  },
  {
    icon: <FaBolt className="text-pink-400" size={30} />,
    title: "Instant Quotes",
    desc: "Get personalized quotes in under 2 minutes with our smart calculator.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-[#f8fafc] text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <h2 className="text-4xl font-extrabold text-[#002d6b] mb-4">
          Why Choose{" "}
          <span className="text-[#0f793c]">PlateShield Insurance?</span>
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide comprehensive vehicle insurance solutions designed to give
          you peace of mind on every journey.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-5 flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-[#002d6b]/10 group-hover:bg-[#0f793c]/20 transition">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#002d6b] mb-2 group-hover:text-[#0f793c] transition">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative background blob */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#002d6b] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0f793c] rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
