"use client";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  Heart,
  Sparkles,
} from "lucide-react";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      content: "123 Medical Center Dr, Suite 100\nCity, State 12345",
      subtext: "Modern facility with ample parking",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567\nAvailable 24/7 for emergencies",
      subtext: "Immediate response guaranteed",
      color: "from-[#B12EBC] to-[#00326D]",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@clinica.com\nWe respond within 24 hours",
      subtext: "Professional consultation via email",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      icon: Clock,
      title: "Emergency Care",
      content: "24/7 Emergency Services\nUrgent care available",
      subtext: "Round-the-clock medical support",
      color: "from-[#B12EBC] to-[#00326D]",
    },
  ];

  const workingHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM", isOpen: true },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM", isOpen: true },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM", isOpen: true },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM", isOpen: true },
    { day: "Friday", hours: "8:00 AM - 5:00 PM", isOpen: true },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM", isOpen: true },
    { day: "Sunday", hours: "Closed", isOpen: false },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Board-certified specialists",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "FDA approved procedures",
      color: "from-[#B12EBC] to-[#00326D]",
    },
    {
      icon: Heart,
      title: "Patient First",
      description: "Personalized treatment plans",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      icon: Sparkles,
      title: "Latest Technology",
      description: "Advanced medical equipment",
      color: "from-[#B12EBC] to-[#00326D]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Let's Talk About Your"
        subtitle="Transformation"
        description="Ready to start your journey? Contact us today to schedule your consultation or learn more about our services. We're here to help you achieve your goals."
        backgroundImage="/images/contact.jpg"
        tagText="Contact CLINICA"
        tagIcon={Phone}
        primaryButtonText="Send Message"
        primaryButtonIcon={Phone}
        primaryButtonLink="#contact-form"
        secondaryButtonText="Call Now"
        secondaryButtonIcon={Phone}
        secondaryButtonLink="tel:+15551234567"
        titleGradient="from-blue-600 via-cyan-600 to-teal-600"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                CLINICA
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that expertise, technology, and
              personalized care make in your transformation journey.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        id="contact-form"
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 lg:gap-20"
          >
            {/* Contact Form */}
            <motion.div variants={slideInLeft}>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={slideInRight}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Contact Information
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-1">
                        {contact.content}
                      </p>
                      <p className="text-sm text-gray-500">{contact.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span>Working Hours</span>
                </h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-semibold text-gray-700">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-medium ${
                          schedule.isOpen ? "text-green-600" : "text-red-500"
                        } px-3 py-1 rounded-full text-sm ${
                          schedule.isOpen ? "bg-green-50" : "bg-red-50"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta
        title="Ready to Start Your Journey?"
        subtitle="Don't wait to achieve the results you deserve. Contact us today and take the first step towards your transformation with CLINICA's expert care."
        buttonText="Call Us Now"
        phoneText="Book Consultation"
        gradientFrom="from-blue-900"
        gradientTo="to-cyan-900"
        titleGradientFrom="from-cyan-300"
        titleGradientTo="to-purple-300"
      />
    </div>
  );
}
