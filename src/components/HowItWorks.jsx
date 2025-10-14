import { motion } from "framer-motion";
import { FaClipboardList, FaCalculator, FaLayerGroup, FaShieldAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList size={26} />,
    title: "Fill Out Information",
    desc: "Provide details about your vehicle, driving history, and preferences. Start your journey in minutes.",
  },
  {
    icon: <FaCalculator size={26} />,
    title: "Get Instant Quote",
    desc: "Our smart system generates personalized rates based on your profile and needs — instantly.",
  },
  {
    icon: <FaLayerGroup size={26} />,
    title: "Choose Your Plan",
    desc: "Compare plans and select the one that best fits your lifestyle. Pay securely with flexible options.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Get Covered",
    desc: "Receive your policy digitally and hit the road with full protection and peace of mind.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-[#002d6b] mb-4"
        >
          How It <span className="text-[#0f793c]">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 text-center mb-16 max-w-2xl mx-auto"
        >
          Getting insured is simple and fast. Follow these four easy steps to protect your vehicle today.
        </motion.p>

        {/* Timeline line */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line in Center */}
          <div className="absolute w-1 bg-[#0f793c] h-full left-1/2 transform -translate-x-1/2 rounded-full" />

          {/* Steps */}
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-16 flex flex-col md:flex-row items-center w-full relative ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content */}
              <div
                className={`md:w-1/2 px-6 md:px-10 ${
                  i % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-bold text-[#002d6b] mb-2"
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>

              {/* Icon in center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 flex items-center justify-center bg-[#002d6b] text-white rounded-full border-4 border-[#0f793c] shadow-lg z-10"
                >
                  {step.icon}
                </motion.div>

                {/* Connecting line */}
                {i !== steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "80px" }}
                    transition={{ duration: 1 }}
                    className="w-1 bg-[#0f793c] rounded-full"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blur effects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#002d6b] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0f793c] rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
