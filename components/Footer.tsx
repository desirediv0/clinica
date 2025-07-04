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
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Dental Implants", href: "/dental", icon: "🦷" },
    { name: "Smile Makeovers", href: "/dental", icon: "😊" },
    { name: "Chemical Peels", href: "/skin", icon: "✨" },
    { name: "HydraFacial", href: "/skin", icon: "💧" },
    { name: "Teeth Whitening", href: "/dental", icon: "⚡" },
    { name: "Laser Hair Removal", href: "/skin", icon: "🔥" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      color: "hover:bg-blue-400",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:bg-blue-700",
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
      color: "hover:bg-red-600",
    },
  ];

  const achievements = [
    { icon: Award, text: "Best Medical Clinic 2023" },
    { icon: Shield, text: "FDA Approved Procedures" },
    { icon: Star, text: "5-Star Patient Rating" },
    { icon: Heart, text: "Patient Safety Excellence" },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-bl from-[#00326D] via-[#00326D]/95 to-[#B12EBC] text-white  overflow-hidden relative">
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#B12EBC]/10 to-[#00326D]/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 rounded-full blur-3xl"
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
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl blur-lg opacity-30"></div> */}
                <Image
                  src="/images/logo.png"
                  alt="CLINICA Logo"
                  width={200}
                  height={200}
                  className="relative  px-3  rounded object-cover bg-white"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-purple-100 mb-8 leading-relaxed text-lg"
            >
              Providing world-class skin and dental care with personalized
              treatments and exceptional results. Your journey to natural beauty
              starts here.
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
                  className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-300"
                >
                  <achievement.icon className="w-5 h-5 text-[#B12EBC]" />
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

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-8 text-white flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 text-blue-200 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-xl font-bold mb-8 text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center space-x-3 text-blue-200 hover:text-white transition-all duration-300 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <span className="group-hover:underline">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-8 text-white flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Contact Info</span>
            </h4>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">
                    Visit Our Clinic
                  </p>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    123 Medical Center Dr, Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Call Us</p>
                  <p className="text-blue-200 text-sm">(555) 123-4567</p>
                  <p className="text-blue-300 text-xs">24/7 Emergency Care</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Email Us</p>
                  <p className="text-blue-200 text-sm">info@clinica.com</p>
                  <p className="text-blue-300 text-xs">We respond within 24h</p>
                </div>
              </motion.div>

              {/* Working Hours */}
              <div className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <h5 className="text-white font-semibold">Working Hours</h5>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-blue-200">{schedule.day}</span>
                      <span className="text-white font-medium">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Footer */}
      <div className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0"
          >
            <div className="text-purple-200 text-sm text-center lg:text-left">
              © {currentYear} CLINICA. All rights reserved. |{" "}
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-300 underline"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-300 underline"
              >
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-purple-200 text-sm">
              <span>Designed with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-[#B12EBC] fill-current" />
              </motion.div>
              <span>for your health and beauty</span>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] hover:from-[#B12EBC]/80 hover:to-[#00326D]/80 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
