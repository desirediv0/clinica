"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Shield,
  Zap,
  Sparkles,
  Heart,
  Clock,
  Eye,
  Smile,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function HomePage() {
  const skinTreatments = [
    {
      title: "Chemical Peels",
      description: "Advanced exfoliation for radiant, youthful skin",
      icon: Sparkles,
      image: "/images/skin.png",
    },
    {
      title: "HydraFacial",
      description: "Deep cleansing and hydration for glowing skin",
      icon: Heart,
      image: "/images/skinbanner.png",
    },
    {
      title: "Carbon Peel",
      description: "Laser treatment for skin rejuvenation",
      icon: Zap,
      image: "/images/skin.png",
    },
    {
      title: "Microneedling",
      description: "Collagen induction therapy for texture improvement",
      icon: Eye,
      image: "/images/skinbanner.png",
    },
    {
      title: "Skin Tag Removal",
      description: "Safe and effective removal of skin tags",
      icon: CheckCircle,
      image: "/images/skin.png",
    },
    {
      title: "Laser Hair Reduction",
      description: "Permanent hair reduction with advanced technology",
      icon: Zap,
      image: "/images/skinbanner.png",
    },
  ];

  const dentalTreatments = [
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement with natural results",
      icon: Smile,
      image: "/images/tooth.webp",
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Complete smile transformation and restoration",
      icon: Award,
      image: "/images/teethbanner.jpg",
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners for perfect alignment",
      icon: Shield,
      image: "/images/tooth.webp",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
      icon: Sparkles,
      image: "/images/teethbanner.jpg",
    },
    {
      title: "Smile Makeovers",
      description: "Comprehensive cosmetic transformations",
      icon: Heart,
      image: "/images/tooth.webp",
    },
    {
      title: "Painless Root Canal",
      description: "Advanced treatment with minimal discomfort",
      icon: CheckCircle,
      image: "/images/teethbanner.jpg",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle dental care for children",
      icon: Users,
      image: "/images/tooth.webp",
    },
    {
      title: "Preventive Dentistry",
      description: "Comprehensive care for optimal oral health",
      icon: Shield,
      image: "/images/teethbanner.jpg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Doctors",
      description: "Decades of experience in advanced treatments",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cutting-edge Equipment",
      description: "Latest technology with sterilization protocols",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Personalized Plans",
      description: "Customized treatment for every patient",
      icon: Users,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Digital Dentistry",
      description: "Latest techniques and digital precision",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Quality Results",
      description: "Top-quality, long-lasting outcomes",
      icon: CheckCircle,
      color: "from-purple-600 to-blue-500",
    },
  ];

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Dental Surgeon",
      experience: "15+ Years",
      image: "/images/expert1.jpg",
      description: "Specialized in cosmetic dentistry and implants",
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Dermatologist",
      experience: "12+ Years",
      image: "/images/expert2.jpg.avif",
      description: "Expert in advanced skin treatments and laser therapy",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialization: "Cosmetic Dentist",
      experience: "10+ Years",
      image: "/images/expert3.jpeg",
      description: "Focused on smile makeovers and orthodontics",
    },
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      text: "CLINICA transformed my smile completely. The team is professional, caring, and the results exceeded my expectations.",
      rating: 5,
      service: "Dental Implants",
    },
    {
      name: "James Wilson",
      text: "Best skin treatment I've ever had. My skin looks 10 years younger and the HydraFacial was incredibly relaxing!",
      rating: 5,
      service: "HydraFacial",
    },
    {
      name: "Lisa Thompson",
      text: "Painless dental work and amazing results. The staff made me feel comfortable throughout the entire process.",
      rating: 5,
      service: "Smile Makeover",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepagebanner.jpg.avif"
            alt="CLINICA Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-cyan-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium text-cyan-100">
                  Premium Medical Care
                </span>
              </div>
            </motion.div>

            <h1 className="heading-xl mb-6 text-white text-shadow-lg">
              Look Naturally Beautiful with{" "}
              <span className="gradient-text bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent text-shadow-lg">
                CLINICA
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed text-shadow-lg">
              Advanced Skin & Dental Care with Personalized Treatments
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="btn-primary inline-flex items-center space-x-3"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Consultation</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="btn-secondary inline-flex items-center space-x-3"
                >
                  <ArrowRight className="w-6 h-6" />
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"
        />
      </section>

      {/* About CLINICA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideInLeft}>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h2 className="heading-lg mt-2 text-gray-900">
                  Excellence in Esthetics & Dentistry
                </h2>
              </div>
              <div className="space-y-6 text-body">
                <p>
                  At CLINICA, we are dedicated to providing world-class skin and
                  dental care that combines cutting-edge technology with
                  personalized treatment plans. Our mission is to enhance your
                  natural beauty and restore your confidence through advanced
                  medical procedures and exceptional patient care.
                </p>
                <p>
                  We focus on customized treatments, utilize high-end
                  technology, and maintain a patient-first approach in
                  everything we do. Our team of experienced professionals
                  ensures that every visit is comfortable, safe, and effective.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link
                  href="/about"
                  className="btn-ghost inline-flex items-center space-x-2 text-lg"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-2xl neumorphic"
                  >
                    <Image
                      src="/images/about1.jpg"
                      alt="Dental Care"
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative overflow-hidden rounded-2xl neumorphic"
                  >
                    <Image
                      src="/images/about2.jpg"
                      alt="Skin Care"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                  </motion.div>
                </div>
                <div className="space-y-6 pt-12">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative overflow-hidden rounded-2xl neumorphic"
                  >
                    <Image
                      src="/images/skin.png"
                      alt="Advanced Technology"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-2xl neumorphic"
                  >
                    <Image
                      src="/images/tooth.webp"
                      alt="Dental Technology"
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skin Treatments Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Glow Starts Here – Premium Skin Treatments
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Discover our comprehensive range of skin care treatments designed
              to enhance your natural beauty and address your specific concerns
              with advanced technology and personalized care.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skinTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-premium group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-body mb-6">{treatment.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/skin"
                      className="btn-ghost inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dental Treatments Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Dental Excellence
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Smile Beautifully, Chew Confidently
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              From routine checkups to advanced cosmetic procedures, we provide
              complete dental solutions for a healthy, beautiful smile that
              lasts.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dentalTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-premium group"
              >
                <div className="relative overflow-hidden h-32">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <treatment.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {treatment.title}
                  </h3>
                  <p className="text-caption mb-4">{treatment.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/dental"
                      className="btn-ghost inline-flex items-center space-x-1 text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose CLINICA Section */}
      <section className="section-padding gradient-bg-medical text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-cyan-200 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="heading-lg mt-2 mb-6">
              Experience the CLINICA Difference
            </h2>
            <p className="text-gray-700 leading-relaxed text-shadow-md">
              We combine medical expertise with cutting-edge technology to
              deliver exceptional results that exceed your expectations.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glass text-center p-8"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-shadow-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Experts Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with
              the highest quality care and exceptional results through
              personalized treatment plans.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-premium text-center p-8 group"
              >
                <div className="relative mb-6">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="rounded-full object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="heading-md text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-blue-600 font-medium mb-3">
                  {expert.specialization}
                </p>
                <p className="text-caption mb-4">{expert.description}</p>
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{expert.experience} Experience</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              patients have to say about their experience at CLINICA.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-premium p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-body mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-caption text-blue-600">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-lg mb-6">
              Restore Your Smile & Skin with CLINICA
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Take the first step towards your transformation. Book your
              consultation today and experience the CLINICA difference with
              personalized care and exceptional results.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#contact"
                className="btn-secondary inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Appointment Now</span>
              </Link>
              <Link
                href="tel:+15551234567"
                className="btn-ghost text-white hover:text-blue-100 inline-flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call Us Today</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16"
          >
            <motion.div variants={slideInLeft}>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Contact Us
                </span>
                <h2 className="heading-lg mt-2 text-gray-900">
                  Let's Talk About Your Skin or Smile
                </h2>
              </div>
              <p className="text-body mb-8">
                Ready to start your journey? Contact us today to schedule your
                consultation or learn more about our services. Our team is here
                to help you achieve your aesthetic goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-body">
                      123 Medical Center Dr, Suite 100
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-body">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-body">info@clinica.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="card-premium p-8">
                <h3 className="heading-md text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="dental">Dental Care</option>
                      <option value="skin">Skin Care</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your concerns or questions..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
