"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Award, Users, Star, Clock } from "lucide-react";

interface WhyChooseProps {
  title: string;
  subtitle?: string;
  items: {
    icon: any;
    title: string;
    description: string;
  }[];
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function WhyChoose({
  title,
  subtitle,
  items,
  className = "",
}: WhyChooseProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`text-center mt-16 ${className}`}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {title}{" "}
          <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
            Excellence
          </span>
        </h3>
        {subtitle && (
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-[#815A93] transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
