"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Award,
  Shield,
  Sparkles,
  Calendar,
  Star,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Dental Care", href: "/dental" },
    { name: "Skin Care", href: "/skin" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Dental Implants", href: "/dental", icon: "🦷" },
    { name: "Smile Makeovers", href: "/dental", icon: "😊" },
    { name: "Teeth Whitening", href: "/dental", icon: "⚡" },
    { name: "Root Canal Treatment", href: "/dental", icon: "🦷" },
    { name: "Orthodontics", href: "/dental", icon: "🎯" },
    { name: "Pediatric Dentistry", href: "/dental", icon: "👶" },
    { name: "Chemical Peels", href: "/skin", icon: "✨" },
    { name: "HydraFacial", href: "/skin", icon: "💧" },
    { name: "Laser Hair Reduction", href: "/skin", icon: "🌟" },
    { name: "Skin Tag Removal", href: "/skin", icon: "🎯" },
    { name: "Microneedling", href: "/skin", icon: "💉" },
    { name: "Carbon Peel", href: "/skin", icon: "⭐" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/clinicadentalandskin",
      icon: Instagram,
      color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
    },
  ];

  const achievements = [
    { icon: Award, text: "Best Multi-Specialty Clinic" },
    { icon: Shield, text: "Strict Sterlization Protocols" },
    { icon: Star, text: "5-Star Dental Patient Rating" },
    { icon: Heart, text: "Dental Safety Excellence" },
  ];

  const workingHours = [
    { day: "Monday", hours: "12:00 PM - 9:00 PM", isOpen: true },
    { day: "Tuesday", hours: "12:00 PM - 9:00 PM", isOpen: true },
    { day: "Wednesday", hours: "Closed", isOpen: false },
    { day: "Thursday", hours: "12:00 PM - 9:00 PM", isOpen: true },
    { day: "Friday", hours: "12:00 PM - 9:00 PM", isOpen: true },
    { day: "Saturday", hours: "12:00 PM - 9:00 PM", isOpen: true },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM", isOpen: true },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-bl from-[#815A93] via-[#815A93] to-[#815A93] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="CLINICA Logo"
                  width={150}
                  height={150}
                  className="relative px-3 rounded object-cover bg-white"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/90 mb-8 leading-relaxed text-lg"
            >
              Providing world-class dental care with personalized treatments and
              exceptional results. Your journey to a perfect smile starts here.
            </motion.p>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 mb-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <achievement.icon className="w-5 h-5 text-[#e3c19d]" />
                  <span className="text-sm">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative w-12 h-12 bg-white/10 backdrop-blur-md ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 text-white border border-white/20 hover:border-white/40`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-[#e3c19d] group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li
                  key={service.name}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link
                    href={service.href}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-[#e3c19d]">{service.icon}</span>
                    <span>{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Visit Us</h5>
                  <p className="text-white/80 text-sm leading-relaxed">
                    1st Floor, Plot No. 24, Sector-12A Rd
                  </p>
                </div>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Call Us</h5>
                  <p className="text-white/80 text-sm leading-relaxed">
                    +91 70071 45918
                  </p>
                </div>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Email Us</h5>
                  <p className="text-white/80 text-sm leading-relaxed">
                    info@clinica.com
                  </p>
                </div>
              </motion.li>

              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">
                    Working Hours
                  </h5>
                  <ul className="text-white/80 text-sm leading-relaxed">
                    {workingHours.map((schedule, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{schedule.day}:</span>
                        <span className="text-[#e3c19d]">{schedule.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} CLINICA. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
