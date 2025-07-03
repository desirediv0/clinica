"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  Eye,
  CheckCircle,
  Star,
  Plus,
  Minus,
  Clock,
  Award,
  Users,
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

export default function SkinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const skinTreatments = [
    {
      title: "Chemical Peels",
      description:
        "Advanced exfoliation treatments that remove damaged skin layers to reveal smoother, more radiant skin underneath.",
      benefits: [
        "Improves skin texture",
        "Reduces fine lines",
        "Fades dark spots",
        "Unclogs pores",
      ],
      duration: "30-60 minutes",
      recovery: "3-7 days",
      image: "/images/skin.png",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "HydraFacial",
      description:
        "A multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin using advanced vortex technology.",
      benefits: [
        "Deep cleansing",
        "Hydration boost",
        "Immediate results",
        "No downtime",
      ],
      duration: "45 minutes",
      recovery: "No downtime",
      image: "/images/skinbanner.png",
      icon: Heart,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Carbon Peel",
      description:
        "Laser treatment that uses carbon lotion and laser energy to rejuvenate skin and refine pores.",
      benefits: [
        "Pore refinement",
        "Skin rejuvenation",
        "Oil control",
        "Even skin tone",
      ],
      duration: "30 minutes",
      recovery: "1-2 days",
      image: "/images/skin.png",
      icon: Zap,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Microneedling",
      description:
        "Collagen induction therapy that uses tiny needles to stimulate natural collagen production.",
      benefits: [
        "Collagen stimulation",
        "Scar reduction",
        "Texture improvement",
        "Natural results",
      ],
      duration: "60 minutes",
      recovery: "3-5 days",
      image: "/images/skinbanner.png",
      icon: Eye,
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Skin Tag Removal",
      description:
        "Safe and effective removal of skin tags using advanced techniques for minimal scarring.",
      benefits: [
        "Quick procedure",
        "Minimal scarring",
        "Immediate results",
        "Safe removal",
      ],
      duration: "15-30 minutes",
      recovery: "1-2 weeks",
      image: "/images/skin.png",
      icon: CheckCircle,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Laser Hair Reduction",
      description:
        "Permanent hair reduction using advanced laser technology for smooth, hair-free skin.",
      benefits: [
        "Permanent reduction",
        "All skin types",
        "Large areas",
        "Long-lasting results",
      ],
      duration: "15-60 minutes",
      recovery: "No downtime",
      image: "/images/skinbanner.png",
      icon: Zap,
      color: "from-pink-600 to-red-500",
    },
  ];

  const faqs = [
    {
      question: "How many treatments will I need?",
      answer:
        "The number of treatments varies depending on your skin concerns and goals. Most patients see significant improvement after 3-6 sessions, spaced 4-6 weeks apart.",
    },
    {
      question: "Is there any downtime after treatments?",
      answer:
        "Downtime varies by treatment. HydraFacial has no downtime, while chemical peels may require 3-7 days. We'll provide detailed aftercare instructions for optimal results.",
    },
    {
      question: "Are the treatments painful?",
      answer:
        "Most treatments are well-tolerated with minimal discomfort. We use advanced techniques and can apply numbing cream if needed to ensure your comfort.",
    },
    {
      question: "How long do results last?",
      answer:
        "Results vary by treatment and individual factors. Some treatments like HydraFacial provide immediate results, while others like microneedling show improvement over time. Maintenance sessions help prolong results.",
    },
    {
      question: "Can I combine multiple treatments?",
      answer:
        "Yes, we often recommend combining treatments for optimal results. Our experts will create a personalized treatment plan based on your skin concerns and goals.",
    },
    {
      question: "What should I do to prepare for treatment?",
      answer:
        "Avoid sun exposure, tanning, and certain skincare products for 1-2 weeks before treatment. We'll provide specific pre-treatment instructions during your consultation.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The HydraFacial treatment was incredible! My skin feels so smooth and hydrated. I can't believe the immediate results.",
      rating: 5,
      treatment: "HydraFacial",
    },
    {
      name: "Michael Chen",
      text: "After struggling with acne scars for years, microneedling has transformed my skin. The results are amazing!",
      rating: 5,
      treatment: "Microneedling",
    },
    {
      name: "Emily Rodriguez",
      text: "The chemical peel exceeded my expectations. My skin tone is so much more even and my fine lines have diminished.",
      rating: 5,
      treatment: "Chemical Peel",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/skinbanner.png"
            alt="Skin Care Hero"
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
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium text-cyan-100">
                  Premium Skin Care
                </span>
              </div>
            </motion.div>

            <h1 className="heading-xl text-shadow-lg mb-6 text-white">
              Glow Starts Here – Premium Skin Treatments
            </h1>
            <p className="text-shadow-md text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Advanced skin care treatments designed to enhance your natural
              beauty and address your specific concerns with personalized care.
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
              Advanced Skin Care Solutions
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Discover our comprehensive range of skin care treatments designed
              to address your specific concerns and enhance your natural beauty.
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
                className="card-premium group overflow-hidden"
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
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-shadow-md text-body mb-4">
                    {treatment.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        Duration: {treatment.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        Recovery: {treatment.recovery}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {treatment.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
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
                      className="btn-primary w-full inline-flex items-center justify-center space-x-2"
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
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              patients have to say about their skin care experience at CLINICA.
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
              FAQ
            </span>
            <h2 className="heading-lg mt-2 text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-shadow-md text-body max-w-3xl mx-auto">
              Get answers to common questions about our skin care treatments and
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

      {/* Skin Quiz CTA */}
      <section className="section-padding gradient-bg text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-lg mb-6">
              Find the Best Skin Treatment For You
            </h2>
            <p className="text-shadow-md text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Not sure which treatment is right for you? Take our quick skin
              assessment quiz and get personalized recommendations from our
              experts.
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
                <Users className="w-6 h-6" />
                <span>Take Skin Quiz</span>
              </Link>
              <Link
                href="/contact"
                className="btn-ghost text-white hover:text-blue-100 inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Consultation</span>
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
              Ready to Transform Your Skin?
            </h2>
            <p className="text-shadow-md text-body mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied patients who have experienced the
              CLINICA difference. Book your consultation today and take the
              first step towards radiant, healthy skin.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Your Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
