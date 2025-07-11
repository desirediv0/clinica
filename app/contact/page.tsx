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
      content:
        "1st Floor, Plot No. 24, Sector-12A Rd, opp. Bal Bharti School, above AU Small Finance Bank, Block A, Sector 12 Dwarka, Dwarka, New Delhi, Delhi, 110075",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 70071 45918",
      subtext: "Immediate response guaranteed",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@clinica.com\nWe respond within 24 hours",
      subtext: "Professional consultation via email",
      color: "from-[#815A93] to-[#e3c19d]",
    },
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

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Certified specialists",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Strict Sterlization Protocols",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      icon: Heart,
      title: "Patient First",
      description: "Personalized treatment plans",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      icon: Sparkles,
      title: "Latest Technology",
      description: "Advanced equipments",
      color: "from-[#e3c19d] to-[#815A93]",
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
        titleGradient="from-[#815A93] via-[#e3c19d] to-[#815A93]"
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
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
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
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-[#815A93]/5"
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
                <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Contact Information
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
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

      {/* Map Section */}
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
              Find Us{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                Here
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visit our state-of-the-art clinic located in the heart of Dwarka,
              New Delhi.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0806089776147!2d77.03832867528769!3d28.597358475683873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b09f3446b91%3A0x706f3fd85bb1916b!2sCLINICA%20Dental%20and%20Skin!5e0!3m2!1sen!2sin!4v1752227255128!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
