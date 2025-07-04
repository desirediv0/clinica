"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title?: string;
  subtitle?: string;
  tagText?: string;
  tagColor?: string;
  titleGradientFrom?: string;
  titleGradientTo?: string;
  faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({
  title = "Got Questions?",
  subtitle = "Get answers to common questions about our treatments, procedures, and what to expect during your visit.",
  tagText = "Frequently Asked Questions",
  tagColor = "from-purple-100 to-pink-100 text-purple-600",
  titleGradientFrom = "from-purple-600",
  titleGradientTo = "to-pink-600",
  faqs,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Enhanced Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span
            className={`inline-block bg-gradient-to-r ${tagColor} font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4`}
          >
            {tagText}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span
              className={`bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent`}
            >
              {title.split(" ").slice(-1).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openFaq === index ? (
                    <Minus className="w-6 h-6 text-purple-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-purple-600" />
                  )}
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
