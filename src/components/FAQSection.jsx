import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What types of vehicle insurance do you offer?",
    answer:
      "We offer comprehensive, collision, and liability insurance for cars, motorcycles, and commercial vehicles. Each plan is customizable to your needs.",
  },
  {
    question: "How quickly can I get coverage?",
    answer:
      "You can get instant coverage within minutes after submitting your details and completing payment. Your policy is delivered digitally.",
  },
  {
    question: "What factors affect my insurance premium?",
    answer:
      "Premiums depend on your vehicle type, driving history, age, location, and coverage level. We ensure transparency with no hidden fees.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "Simply log in to your Servitend account or call our 24/7 hotline. We’ll guide you step-by-step to file your claim efficiently.",
  },
  {
    question: "Do you offer multi-vehicle discounts?",
    answer:
      "Yes! If you insure more than one vehicle with us, you’ll automatically qualify for exclusive discounts and additional perks.",
  },
  {
    question: "Is roadside assistance included?",
    answer:
      "All plans include free 24/7 roadside assistance across the country — whether it’s a flat tire, battery jump, or towing service.",
  },
  {
    question: "Can I modify my policy later?",
    answer:
      "Absolutely. You can adjust your coverage anytime through your online dashboard without penalties or complicated paperwork.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-gradient-to-br from-[#002d6b] to-[#0f793c] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4"
        >
          Frequently Asked <span className="text-[#86efac]">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          Find answers to common questions about our vehicle insurance policies and services.
        </motion.p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#86efac]" />
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-[#86efac]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-200 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#0f793c] rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#002d6b] rounded-full blur-3xl opacity-25"
      ></motion.div>
    </section>
  );
}
