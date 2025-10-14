import { motion } from "framer-motion";
import { FaCar, FaTruck, FaMotorcycle, FaUsers } from "react-icons/fa";

const coverages = [
  {
    icon: <FaCar size={30} />,
    title: "Personal Auto",
    desc: "Protect your vehicle from collisions, theft, and liability with our comprehensive plans.",
  },
  {
    icon: <FaTruck size={30} />,
    title: "Commercial Vehicle",
    desc: "Tailored insurance for your business vehicles and fleets with higher coverage limits.",
  },
  {
    icon: <FaMotorcycle size={30} />,
    title: "Motorcycle",
    desc: "Ride confidently with coverage for your bike, gear, and roadside assistance.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Multi-Vehicle",
    desc: "Save by combining multiple vehicles under one policy with unified billing.",
  },
];

export default function Coverage() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#002d6b] to-[#0f793c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-4"
        >
          Coverage Types <span className="text-green-300">for Every Need</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-200 mb-16 max-w-2xl mx-auto"
        >
          Whether it’s your car, truck, or motorcycle, PlateShield offers
          reliable protection designed around your lifestyle.
        </motion.p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
          {coverages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#0b1f38]/60 border border-white/10 backdrop-blur-xl p-10 rounded-3xl text-center shadow-lg hover:shadow-[0_0_20px_rgba(15,121,60,0.4)] transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-green-300"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0f793c] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#002d6b] rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
