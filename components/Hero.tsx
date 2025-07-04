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
  description: string;
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
  titleGradient = "from-[#B12EBC] via-white to-[#00326D]",
  subtitleColor = "text-white", // default to white
  subtitleGradient,
}: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Stronger/darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Optional: keep a subtle gradient for style */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00326D]/70  via-[#00326D]/50 to-[#B12EBC]/60"></div>
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#B12EBC]/20 to-[#00326D]/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#00326D]/20 to-[#B12EBC]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 text-center text-white z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 mb-8 shadow-2xl">
              <TagIcon className="w-6 h-6 text-[#B12EBC]" />
              <span className="text-lg font-semibold text-white">
                {tagText}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            {title}{" "}
            {/* Subtitle: use solid color by default, gradient only if explicitly set */}
            {subtitleGradient ? (
              <span
                className={`bg-gradient-to-r ${subtitleGradient} bg-clip-text text-transparent`}
              >
                {subtitle}
              </span>
            ) : (
              <span className={subtitleColor}>{subtitle}</span>
            )}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white max-w-4xl mx-auto leading-relaxed font-light"
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
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#B12EBC] to-[#00326D] hover:from-[#B12EBC]/80 hover:to-[#00326D]/80 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
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
                className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-4 rounded-full text-white font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-300"
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
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#B12EBC] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-200 text-sm md:text-base">
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
