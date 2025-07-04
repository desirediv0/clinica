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
      features: ["Dental Implants", "Smile Makeovers", "Orthodontics"],
    },
    {
      name: "Skin Care",
      href: "/skin",
      icon: Sparkles,
      description: "Advanced skin treatments for radiant beauty",
      color: "from-pink-500 to-purple-500",
      features: ["HydraFacial", "Chemical Peels", "Laser Treatments"],
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "(555) 123-4567",
      href: "tel:+15551234567",
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
      text: "123 Medical Center Dr",
      href: "#location",
      label: "Visit Us",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo - Responsive */}
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
                    width={200}
                    height={200}
                    className="relative object-cover transition-all duration-300 hidden md:block "
                    priority
                  />
                  <Image
                    src="/images/logo.png"
                    alt="CLINICA Logo"
                    width={180}
                    height={180}
                    className="relative object-cover transition-all duration-300  block md:hidden "
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
                        ? "text-[#00326D] bg-[#B12EBC]/10 shadow-md"
                        : "text-gray-700 hover:text-[#00326D] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#B12EBC]/10 rounded-xl -z-10 shadow-md"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                </motion.div>
              ))}

              {/* Enhanced Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#00326D] hover:bg-gray-50 rounded-xl transition-all duration-300 group"
                >
                  <span>Services</span>
                  <motion.div
                    animate={{ rotate: showServicesDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
                      <div className="p-6">
                        <div className="grid gap-4">
                          {servicesItems.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              className="group"
                            >
                              <Link
                                href={item.href}
                                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                                  pathname === item.href
                                    ? "text-[#00326D] bg-[#B12EBC]/10 shadow-md"
                                    : "text-gray-700 hover:text-[#00326D] hover:bg-gray-50"
                                }`}
                              >
                                <div
                                  className={`w-12 h-12 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                >
                                  <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-lg mb-1">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 mb-3">
                                    {item.description}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {item.features.map((feature, idx) => (
                                      <span
                                        key={idx}
                                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                      >
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#00326D] to-[#B12EBC] text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-[#00326D]/80 hover:to-[#B12EBC]/80 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <Calendar className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Book Now</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 bg-gradient-to-r from-[#00326D] to-[#B12EBC] text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden xs:inline">Call</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mobile-menu shadow-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg mobile-menu rounded-b-2xl shadow-2xl"
              >
                <div className="py-6 space-y-6">
                  {/* Main Navigation */}
                  <div className="space-y-2 px-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                      Navigation
                    </h4>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: (contactInfo.length + index) * 0.1,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                            pathname === item.href
                              ? "text-[#00326D] bg-[#B12EBC]/10 font-bold shadow-md"
                              : "text-gray-700 hover:text-[#00326D] hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-sm">{item.name}</span>
                          <ChevronDown className="w-4 h-4 transform rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Services Section */}
                  <div className="px-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                      Our Services
                    </h4>
                    <div className="space-y-3">
                      {servicesItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay:
                              (contactInfo.length + navItems.length + index) *
                              0.1,
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                              pathname === item.href
                                ? "text-[#00326D] bg-[#B12EBC]/10 font-bold shadow-md"
                                : "text-gray-700 hover:text-[#00326D] hover:bg-gray-50"
                            }`}
                          >
                            <div
                              className={`w-10 h-10 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            >
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-sm">{item.name}</h3>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Book Now Button for Mobile */}
                  <div className="px-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00326D] to-[#B12EBC] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Appointment</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
