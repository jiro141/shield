import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$49/month",
    desc: "Perfect for budget-conscious drivers who still want protection and peace of mind.",
    features: ["Damage Coverage", "Roadside Assistance", "24/7 Support"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "$89/month",
    desc: "Balanced protection for most drivers — flexible, secure, and affordable.",
    features: ["All Basic plan features", "Medical Protection", "Total Loss Coverage"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$139/month",
    desc: "Maximum coverage with premium benefits and top-tier service priority.",
    features: ["All Standard plan features", "Vehicle Replacement", "VIP Assistance"],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-gradient-to-br from-[#002d6b] to-[#0f793c] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-4"
        >
          Simple, Transparent <span className="text-[#86efac]">Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-200 max-w-2xl mx-auto mb-16"
        >
          Choose the plan that fits your lifestyle. Every plan includes core protection features, full transparency, and zero hidden fees.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden ${
                plan.highlight ? "scale-105 bg-white/15 border-[#86efac]" : ""
              }`}
            >
              {/* Ribbon */}
              {plan.highlight && (
                <div className="absolute -top-3 right-0 bg-[#86efac] text-[#002d6b] font-semibold text-xs px-3 py-1 rounded-bl-lg shadow-md">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <p className="text-gray-200 mb-6">{plan.desc}</p>
              <p className="text-4xl font-extrabold mb-8 text-[#86efac]">{plan.price}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-[#86efac] text-lg">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold tracking-wide transition-all ${
                  plan.highlight
                    ? "bg-[#86efac] text-[#002d6b] hover:bg-[#a5f3fc]"
                    : "border border-white/30 text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0f793c] rounded-full blur-3xl opacity-30"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#002d6b] rounded-full blur-3xl opacity-25"
      ></motion.div>
    </section>
  );
}
