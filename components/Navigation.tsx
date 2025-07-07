"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  Mail,
  Smile,
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const servicesItems = [
    {
      name: "Dental Care",
      href: "/dental",
      icon: Smile,
      description: "Complete dental solutions for a perfect smile",
      color: "from-blue-500 to-cyan-500",
      features: ["Dental Implants", "Smile Makeovers", "Teeth Whitening"],
    },
    {
      name: "Skin Care",
      href: "/skin",
      icon: Sparkles,
      description: "Advanced skin treatments for radiant beauty",
      color: "from-pink-500 to-purple-500",
      features: ["HydraFacial", "Chemical Peels", "Microneedling"],
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+91 70071 45918",
      href: "tel:+917007145918",
      label: "Call Us Now",
    },
    {
      icon: Mail,
      text: "info@clinica.com",
      href: "mailto:info@clinica.com",
      label: "Email Us",
    },
    {
      icon: MapPin,
      text: "1st Floor, Plot No. 24, Sector-12A Rd",
      href: "#location",
      label: "Visit Us",
    },
  ];

  return (
    <>
      {/* Sub-navigation bar for contact info */}
      <div
        className={`fixed top-0 w-full z-50 bg-gradient-to-r from-[#e3c19d] to-[#815A93] text-white transition-all duration-500 ${
          isScrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div className="flex items-center justify-end h-full space-x-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 top-0"
            : "bg-white/90 backdrop-blur-md top-10"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 lg:space-x-4 group"
              >
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="CLINICA Logo"
                    width={100}
                    height={100}
                    className="relative object-cover transition-all duration-300 hidden md:block"
                    priority
                  />
                  <Image
                    src="/images/logo.png"
                    alt="CLINICA Logo"
                    width={110}
                    height={110}
                    className="relative object-cover transition-all duration-300 block md:hidden"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                      pathname === item.href
                        ? "text-[#815A93] bg-[#e3c19d]/20 shadow-md"
                        : "text-gray-700 hover:text-[#815A93] hover:bg-[#e3c19d]/10"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#e3c19d]/20 rounded-xl -z-10 shadow-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                </motion.div>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#815A93] hover:bg-[#e3c19d]/10 rounded-xl transition-all duration-300 group"
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: showServicesDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.button>

                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full right-7 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      {servicesItems.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block"
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 hover:bg-[#e3c19d]/10 transition-colors duration-300"
                          >
                            <div className="flex items-start space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${
                                  index % 2 === 0
                                    ? "from-[#e3c19d] to-[#815A93]"
                                    : "from-[#815A93] to-[#e3c19d]"
                                } rounded-xl flex items-center justify-center shadow-lg`}
                              >
                                <service.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-[#815A93] font-semibold mb-1">
                                  {service.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {service.description}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {service.features.map((feature, idx) => (
                                    <span
                                      key={idx}
                                      className="text-xs bg-[#e3c19d]/20 text-[#815A93] px-2 py-1 rounded-full"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-[#e3c19d]/10 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-24 p-4 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl z-40 mobile-menu"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-[#815A93] bg-[#e3c19d]/20"
                      : "text-gray-700 hover:text-[#815A93] hover:bg-[#e3c19d]/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services section in mobile menu */}
              <div className="px-4 py-3">
                <div
                  className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-2"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: showServicesDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {servicesItems.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-xl hover:bg-[#e3c19d]/10 transition-colors duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <service.icon className="w-5 h-5 text-[#815A93]" />
                            <span className="text-sm font-medium text-gray-700">
                              {service.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
