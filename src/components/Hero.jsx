import { motion } from "framer-motion";
import hero from "../assets/hero-car.png"
export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-[#003366] via-[#004080] to-[#0F793C] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/hero-pattern.svg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* --- Texto Hero --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Protect Your Journey with{" "}
            <span className="text-[#0F793C] block">
              PlateShield Insurance
            </span>
          </h1>
          <p className="text-gray-100 text-lg mb-6">
            Affordable, reliable coverage that keeps you safe on the road.
            Compare plans, customize your policy, and get instant quotes in
            minutes.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#0F793C] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-400 transition"
            >
              Get Free Quote →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition"
            >
              Learn More
            </motion.button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-10 text-gray-100">
            <div>
              <span className="font-bold text-2xl text-white">4.8/5</span>
              <p className="text-sm opacity-90">Customer Rating</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-white">24/7</span>
              <p className="text-sm opacity-90">Support Available</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-white">+10k</span>
              <p className="text-sm opacity-90">Happy Customers</p>
            </div>
          </div>
        </motion.div>

        {/* --- Imagen Hero --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <img
              src={hero}
              alt="Hero Car"
              className="rounded-2xl  w-[420px] md:w-[820px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
