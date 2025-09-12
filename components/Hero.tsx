"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

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

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  tagText: string;
  tagIcon: LucideIcon;
  primaryButtonText: string;
  primaryButtonIcon: LucideIcon;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonIcon: LucideIcon;
  secondaryButtonLink: string;
  stats?: Array<{ number: string; label: string }>;
  titleGradient?: string;
  subtitleColor?: string; // new prop for subtitle color
  subtitleGradient?: string; // if you want to allow gradient explicitly
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  tagText,
  tagIcon: TagIcon,
  primaryButtonText,
  primaryButtonIcon: PrimaryIcon,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonIcon: SecondaryIcon,
  secondaryButtonLink,
  stats,
}: HeroProps) {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Lighter overlay for better visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlay for style */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3c19d]/20 via-[#815A93]/20 to-[#815A93]/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#e3c19d]/30 to-[#815A93]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#815A93]/30 to-[#e3c19d]/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center space-x-3 bg-[#815A93]/20 backdrop-blur-md rounded-full px-8 py-4 border border-[#e3c19d]/30 mb-8 shadow-lg">
              <TagIcon className="w-6 h-6 text-[#e3c19d]" />
              <span className="text-lg font-semibold text-[#e3c19d]">
                {tagText}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-[4rem]  font-bold mb-8 leading-tight"
          >
            <span className="text-white">{title} </span>
            {/* Subtitle with gradient */}
            <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
              {subtitle}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-[#e3c19d] max-w-4xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={primaryButtonLink}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <PrimaryIcon className="w-6 h-6 relative z-10" />
                <span className="relative z-10">{primaryButtonText}</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={secondaryButtonLink}
                className="group inline-flex items-center space-x-3 bg-[#815A93]/20 backdrop-blur-md hover:bg-[#815A93]/30 px-8 py-4 rounded-full text-[#e3c19d] font-semibold text-lg border border-[#e3c19d]/30 hover:border-[#e3c19d]/50 transition-all duration-300"
              >
                <SecondaryIcon className="w-6 h-6" />
                <span>{secondaryButtonText}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          {stats && (
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-[#815A93]/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-[#e3c19d]/30"
                >
                  <div className="text-xl md:text-4xl font-bold text-[#e3c19d] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
