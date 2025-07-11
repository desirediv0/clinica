import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface CtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  phoneText?: string;
  gradientFrom?: string;
  gradientTo?: string;
  titleGradientFrom?: string;
  titleGradientTo?: string;
}

const Cta: React.FC<CtaProps> = ({
  title = "Ready to Transform Your Smile?",
  subtitle = "Join thousands of satisfied patients who have experienced the CLINICA difference. Book your consultation today and take the first step towards a beautiful, healthy smile.",
  buttonText = "Book Consultation",
  phoneText = "Call Us Today",
  gradientFrom = "from-[#e3c19d]",
  gradientTo = "to-[#815A93]",
  titleGradientFrom = "from-[#e3c19d]",
  titleGradientTo = "to-[#815A93]",
}) => {
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
    <section
      className={`py-20 lg:py-32 bg-gradient-to-br ${gradientFrom} via-[#815A93]/80 ${gradientTo} text-white relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span
              className={`bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent`}
            >
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={staggerContainer}
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/80 hover:to-[#815A93]/80 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Calendar className="w-6 h-6 relative z-10" />
                <span className="relative z-10">{buttonText}</span>
              </Link>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="tel:+917007145918"
                className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-4 rounded-full text-white font-bold text-lg border border-white/30 hover:border-white/50 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>{phoneText}</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
