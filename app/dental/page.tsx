"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Smile,
  Award,
  Shield,
  Sparkles,
  Heart,
  CheckCircle,
  Star,
  Plus,
  Minus,
  Clock,
  Users,
  Zap,
  Eye,
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

export default function DentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const dentalTreatments = [
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement with natural-looking results that restore function and confidence.",
      benefits: [
        "Permanent solution",
        "Natural appearance",
        "Restores function",
        "Prevents bone loss",
      ],
      duration: "2-3 hours",
      recovery: "3-6 months",
      image: "/images/tooth.webp",
      icon: Smile,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full Mouth Rehabilitation",
      description:
        "Complete smile transformation and restoration for optimal oral health and aesthetics.",
      benefits: [
        "Complete restoration",
        "Improved function",
        "Enhanced aesthetics",
        "Long-term solution",
      ],
      duration: "Multiple visits",
      recovery: "Varies",
      image: "/images/teethbanner.jpg",
      icon: Award,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Orthodontics",
      description:
        "Braces and aligners for perfect smile alignment and optimal oral health.",
      benefits: [
        "Straightens teeth",
        "Improves bite",
        "Enhances appearance",
        "Prevents issues",
      ],
      duration: "18-24 months",
      recovery: "No downtime",
      image: "/images/tooth.webp",
      icon: Shield,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Teeth Whitening",
      description:
        "Professional whitening for a brighter, more confident smile.",
      benefits: [
        "Immediate results",
        "Safe procedure",
        "Long-lasting",
        "Boosts confidence",
      ],
      duration: "1 hour",
      recovery: "No downtime",
      image: "/images/teethbanner.jpg",
      icon: Sparkles,
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Smile Makeovers",
      description:
        "Comprehensive cosmetic dentistry transformations for your dream smile.",
      benefits: [
        "Customized plan",
        "Multiple procedures",
        "Dramatic results",
        "Enhanced confidence",
      ],
      duration: "Multiple visits",
      recovery: "Varies",
      image: "/images/tooth.webp",
      icon: Heart,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Painless Root Canal",
      description:
        "Advanced endodontic treatment with minimal discomfort and maximum comfort.",
      benefits: [
        "Pain-free procedure",
        "Saves natural tooth",
        "Quick recovery",
        "Advanced technology",
      ],
      duration: "1-2 hours",
      recovery: "1-2 days",
      image: "/images/teethbanner.jpg",
      icon: CheckCircle,
      color: "from-pink-600 to-red-500",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle dental care for children of all ages in a comfortable environment.",
      benefits: [
        "Child-friendly",
        "Preventive care",
        "Early detection",
        "Comfortable experience",
      ],
      duration: "30-60 minutes",
      recovery: "No downtime",
      image: "/images/tooth.webp",
      icon: Users,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Preventive Dentistry",
      description:
        "Comprehensive care to maintain optimal oral health and prevent future issues.",
      benefits: [
        "Preventive care",
        "Early detection",
        "Education",
        "Long-term health",
      ],
      duration: "30-60 minutes",
      recovery: "No downtime",
      image: "/images/teethbanner.jpg",
      icon: Shield,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const smileJourney = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Comprehensive oral examination and digital imaging to assess your current dental health.",
      icon: Eye,
    },
    {
      step: "02",
      title: "Treatment Planning",
      description:
        "Personalized treatment plan created based on your goals and dental needs.",
      icon: Shield,
    },
    {
      step: "03",
      title: "Treatment Execution",
      description:
        "Expert care with advanced technology and techniques for optimal results.",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Follow-up Care",
      description:
        "Ongoing maintenance and support to ensure lasting results and oral health.",
      icon: Heart,
    },
  ];

  const faqs = [
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and maintenance, dental implants can last a lifetime. They have a success rate of over 95% and are designed to be a permanent solution.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, professional teeth whitening is safe when performed by trained professionals. We use advanced techniques and monitor the process to ensure optimal results without damage.",
    },
    {
      question: "How long does orthodontic treatment take?",
      answer:
        "Treatment duration varies depending on the complexity of your case. Most patients complete treatment in 18-24 months, but some cases may take longer.",
    },
    {
      question: "Are root canals painful?",
      answer:
        "Modern root canal procedures are virtually painless. We use advanced anesthesia and techniques to ensure your comfort throughout the procedure.",
    },
    {
      question: "When should my child first visit the dentist?",
      answer:
        "Children should have their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good oral health habits.",
    },
    {
      question: "How often should I have a dental checkup?",
      answer:
        "Most patients should have a dental checkup and cleaning every 6 months. However, some patients may need more frequent visits based on their oral health needs.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      text: "The dental implant procedure was incredible! I can't believe how natural it looks and feels. The team made the entire process comfortable and stress-free.",
      rating: 5,
      treatment: "Dental Implants",
    },
    {
      name: "James Wilson",
      text: "My smile makeover exceeded all expectations. The transformation is amazing and I feel so much more confident. Highly recommend CLINICA!",
      rating: 5,
      treatment: "Smile Makeover",
    },
    {
      name: "Lisa Thompson",
      text: "The teeth whitening treatment was quick and painless. My smile is now several shades brighter and I couldn't be happier with the results.",
      rating: 5,
      treatment: "Teeth Whitening",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/teethbanner.jpg"
            alt="Dental Care Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-cyan-900/85"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8">
                <Smile className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium text-cyan-100">
                  Premium Dental Care
                </span>
              </div>
            </motion.div>

            <h1 className="heading-xl text-shadow-lg mb-6 text-white">
              Smile Beautifully, Chew Confidently
            </h1>
            <p className="text-shadow-md text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Advanced dental care treatments designed to restore your smile and
              improve your oral health with personalized care.
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
                  href="#treatments"
                  className="btn-primary inline-flex items-center space-x-3"
                >
                  <Calendar className="w-6 h-6" />
                  <span>View Treatments</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center space-x-3"
                >
                  <ArrowRight className="w-6 h-6" />
                  <span>Book Consultation</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Overview */}
      <section id="treatments" className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Treatments
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Comprehensive Dental Care Solutions
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              From routine checkups to advanced cosmetic procedures, we provide
              complete dental solutions for a healthy, beautiful smile.
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
                className="card-premium group overflow-hidden"
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
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <treatment.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {treatment.title}
                  </h3>
                  <p className="text-shadow-md text-caption mb-4">
                    {treatment.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <span className="text-xs text-gray-600">
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-3 h-3 text-blue-600" />
                      <span className="text-xs text-gray-600">
                        {treatment.recovery}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-xs text-gray-600"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="btn-primary w-full inline-flex items-center justify-center space-x-2 text-sm py-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Treatment</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Smile Journey Timeline */}
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
              Your Journey
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Smile Makeover Journey
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Follow our comprehensive process designed to transform your smile
              and restore your confidence with expert care.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {smileJourney.map((step, index) => (
              <motion.div
                key={step.step}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <div className="card-premium p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-shadow-md text-caption">
                    {step.description}
                  </p>
                </div>
                {index < smileJourney.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              patients have to say about their dental care experience at
              CLINICA.
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
                <p className="text-shadow-md text-body mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-shadow-md text-caption text-blue-600">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              FAQ
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Get answers to common questions about our dental treatments and
              procedures.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card-premium overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-shadow-md text-body text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-lg mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-shadow-md text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of satisfied patients who have experienced the
              CLINICA difference. Book your consultation today and take the
              first step towards a beautiful, healthy smile.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Consultation</span>
              </Link>
              <Link
                href="tel:+15551234567"
                className="btn-ghost text-white hover:text-blue-100 inline-flex items-center space-x-3"
              >
                <Zap className="w-6 h-6" />
                <span>Call Us Today</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-lg mb-6 text-gray-900">
              Experience the CLINICA Difference
            </h2>
            <p className="text-shadow-md text-body mb-8 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to providing
              you with the highest quality dental care and exceptional results.
              Start your journey to a beautiful smile today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Your Appointment</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
