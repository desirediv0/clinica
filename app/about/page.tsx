"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  Shield,
  Zap,
  Heart,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Target,
  Eye,
  Lightbulb,
  Sparkles,
  Quote,
  Play,
} from "lucide-react";
import Hero from "@/components/Hero";

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

export default function AboutPage() {
  const values = [
    {
      title: "Medical Expertise",
      description:
        "Board-certified specialists with decades of combined experience in advanced procedures",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      stat: "15+ Years",
    },
    {
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment and cutting-edge treatment methods for optimal results",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      stat: "Latest Tech",
    },
    {
      title: "Patient Comfort",
      description:
        "Patient-first approach ensuring comfort, safety, and peace of mind throughout your journey",
      icon: Heart,
      color: "from-teal-500 to-green-500",
      stat: "100% Care",
    },
    {
      title: "Proven Results",
      description:
        "Exceptional outcomes and patient satisfaction with a track record of successful transformations",
      icon: Star,
      color: "from-green-500 to-blue-500",
      stat: "99% Success",
    },
  ];

  const timeline = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Comprehensive assessment, medical history review, and personalized treatment planning",
      icon: Users,
      duration: "45-60 mins",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Advanced Diagnostics",
      description:
        "Digital imaging, 3D scanning, and detailed analysis for precise treatment approach",
      icon: Eye,
      duration: "30-45 mins",
      color: "from-cyan-500 to-teal-500",
    },
    {
      step: "03",
      title: "Treatment Execution",
      description:
        "Expert care with precision, attention to detail, and continuous monitoring",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-teal-500 to-green-500",
    },
    {
      step: "04",
      title: "Follow-up Care",
      description:
        "Ongoing support, maintenance guidance, and long-term relationship building",
      icon: Heart,
      duration: "Lifetime",
      color: "from-green-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "24/7",
      label: "Expert Support",
      icon: Clock,
      description: "Round-the-clock care",
    },
    {
      number: "5000+",
      label: "Happy Patients",
      icon: Users,
      description: "Successful transformations",
    },
    {
      number: "99.8%",
      label: "Success Rate",
      icon: Star,
      description: "Exceptional outcomes",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: Shield,
      description: "Emergency care ready",
    },
  ];

  const achievements = [
    {
      title: "Best Medical Clinic 2023",
      organization: "Healthcare Excellence Awards",
      icon: Award,
    },
    {
      title: "Top Rated Dental Practice",
      organization: "Patient Choice Awards",
      icon: Star,
    },
    {
      title: "Innovation in Healthcare",
      organization: "Medical Technology Summit",
      icon: Lightbulb,
    },
    {
      title: "Patient Safety Excellence",
      organization: "Healthcare Quality Institute",
      icon: Shield,
    },
  ];

  const testimonialHighlight = {
    text: "CLINICA didn't just transform my smile - they transformed my entire confidence. The level of care, expertise, and attention to detail is unmatched. I finally feel like the best version of myself.",
    author: "Sarah Mitchell",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Excellence in"
        subtitle="Esthetics & Dentistry"
        description="Discover the story behind CLINICA's commitment to providing world-class skin and dental care with personalized treatments and exceptional results."
        backgroundImage="/images/about1.jpg"
        tagText="About CLINICA"
        tagIcon={Award}
        primaryButtonText="Our Mission"
        primaryButtonIcon={Target}
        primaryButtonLink="#mission"
        secondaryButtonText="Watch Our Story"
        secondaryButtonIcon={Play}
        secondaryButtonLink="#story"
        subtitleColor="text-[#B12EBC]"
      />

      {/* Enhanced Mission Section */}
      <section id="mission" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          >
            <motion.div variants={slideInLeft}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Our Mission
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforming Lives Through{" "}
                  <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                    Advanced Care
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  At CLINICA, our mission is to enhance your natural beauty and
                  restore your confidence through advanced medical procedures
                  and exceptional patient care. We believe that everyone
                  deserves to feel confident in their skin and smile.
                </p>
                <p>
                  Our team of experienced professionals combines cutting-edge
                  technology with personalized treatment plans to deliver
                  results that exceed expectations. We focus on customized
                  treatments, utilize high-end technology, and maintain a
                  patient-first approach.
                </p>
                <p>
                  From the moment you walk through our doors, you'll experience
                  the difference that expertise, technology, and personalized
                  care make. Our commitment to excellence ensures every visit is
                  comfortable, safe, and effective.
                </p>
              </div>

              {/* Mission highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    title: "Personalized Care",
                    desc: "Tailored to your needs",
                  },
                  {
                    icon: Shield,
                    title: "Safety First",
                    desc: "Highest medical standards",
                  },
                  {
                    icon: Heart,
                    title: "Compassionate",
                    desc: "Caring and supportive",
                  },
                  {
                    icon: Sparkles,
                    title: "Excellence",
                    desc: "Exceptional results",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-[#B12EBC]/5 rounded-xl border border-gray-100 hover:border-[#B12EBC]/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="bg-gradient-to-br from-[#B12EBC]/5 via-[#00326D]/5 to-[#B12EBC]/10 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide the highest quality care with the most advanced
                    technology in a comfortable, welcoming environment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Expert Support
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent mb-2">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Happy Patients
                    </div>
                  </div>
                </div>

                {/* Testimonial highlight */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-[#B12EBC] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "The level of professionalism and care at CLINICA is
                        unmatched. They truly care about their patients."
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-full flex items-center justify-center text-white font-semibold">
                          J
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            Jennifer Adams
                          </div>
                          <div className="text-gray-500 text-xs">
                            Verified Patient
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating achievement badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-2xl border border-gray-100"
              >
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#B12EBC] mx-auto mb-1" />
                  <div className="text-xs font-semibold text-gray-900">
                    Award
                  </div>
                  <div className="text-xs text-gray-600">Winner</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Foundation of Our{" "}
              <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we do, ensuring that every
              patient receives the highest quality care and exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-2xl mb-6 shadow-lg relative z-10`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                <div className="text-2xl font-bold text-[#B12EBC] mb-2 relative z-10">
                  {value.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a comprehensive approach to ensure the best possible
              outcomes for every patient, from initial consultation to long-term
              follow-up care.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative text-center group"
              >
                {/* Connection line for desktop */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 transform translate-x-4 z-0"></div>
                )}

                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D] rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {item.step}
                  </div>

                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-[#00326D]/10 text-[#00326D] px-4 py-2 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#00326D] via-[#00326D]/90 to-[#B12EBC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Numbers That{" "}
              <span className="bg-gradient-to-r from-white to-[#B12EBC] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in these achievements
              and the trust our patients place in us.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#B12EBC] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-purple-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon className="w-8 h-8 text-[#B12EBC] mx-auto mb-3" />
                <h4 className="font-semibold text-white text-sm mb-1">
                  {achievement.title}
                </h4>
                <p className="text-purple-200 text-xs">
                  {achievement.organization}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-8 right-8">
                <Quote className="w-16 h-16 text-orange-200" />
              </div>

              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonialHighlight.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-[#B12EBC] fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic leading-relaxed mb-8">
                  "{testimonialHighlight.text}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-6 border-3 border-[#B12EBC]/20">
                    <Image
                      src={testimonialHighlight.image || "/placeholder.svg"}
                      alt={testimonialHighlight.author}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonialHighlight.author}
                    </h4>
                    <p className="text-[#B12EBC] font-medium">
                      {testimonialHighlight.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Info Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you on your journey. Reach out to us through
              any of these convenient methods.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
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
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <contact.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-2 whitespace-pre-line">
                  {contact.content}
                </p>
                <p className="text-sm text-gray-500">{contact.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
