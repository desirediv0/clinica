"use client";

import { motion } from "framer-motion";
import {
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
import Testimonials from "@/components/Testimonials";

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
      title: "Dental Excellence",
      description:
        "Board-certified dental specialists with decades of combined experience in advanced dental procedures",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      stat: "12+ Years",
    },
    {
      title: "Advanced Dental Tech",
      description:
        "State-of-the-art dental equipment and cutting-edge treatment methods for optimal oral health results",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      stat: "Latest Tech",
    },
    {
      title: "Patient Comfort",
      description:
        "Patient-first approach ensuring comfort, safety, and peace of mind throughout your dental journey",
      icon: Heart,
      color: "from-teal-500 to-green-500",
      stat: "100% Care",
    },
    {
      title: "Proven Dental Results",
      description:
        "Exceptional dental outcomes and patient satisfaction with a track record of successful smile transformations",
      icon: Star,
      color: "from-green-500 to-blue-500",
      stat: "99% Success",
    },
  ];

  const timeline = [
    {
      step: "01",
      title: "Dental Consultation",
      description:
        "Comprehensive oral assessment, dental history review, and personalized dental treatment planning",
      icon: Users,
      duration: "45-60 mins",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Advanced Dental Imaging",
      description:
        "Digital X-rays, 3D scanning, and detailed analysis for precise dental treatment approach",
      icon: Eye,
      duration: "30-45 mins",
      color: "from-cyan-500 to-teal-500",
    },
    {
      step: "03",
      title: "Dental Treatment",
      description:
        "Expert dental care with precision, attention to detail, and continuous monitoring",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-teal-500 to-green-500",
    },
    {
      step: "04",
      title: "Dental Follow-up",
      description:
        "Ongoing dental support, oral hygiene guidance, and long-term dental relationship building",
      icon: Heart,
      duration: "Lifetime",
      color: "from-green-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "24/7",
      label: "Dental Emergency",
      icon: Clock,
      description: "Round-the-clock dental care",
    },
    {
      number: "5000+",
      label: "Happy Dental Patients",
      icon: Users,
      description: "Successful dental transformations",
    },
    {
      number: "99.8%",
      label: "Dental Success Rate",
      icon: Star,
      description: "Exceptional dental outcomes",
    },
    {
      number: "12+",
      label: "Years Experience",
      icon: Shield,
      description: "Expert dental care",
    },
  ];

  const achievements = [
    {
      title: "Best Multi-Specialty Clinic",
      organization: "Dental Excellence Awards",
      icon: Award,
    },
    {
      title: "Top Rated Dental Practice",
      organization: "Patient Choice Awards",
      icon: Star,
    },
    {
      title: "Innovation in Dental Care",
      organization: "Dental Technology Summit",
      icon: Lightbulb,
    },
    {
      title: "Dental Safety Excellence",
      organization: "Dental Quality Institute",
      icon: Shield,
    },
  ];

  const homeTestimonials = [
    {
      name: "Maria Garcia",
      text: "CLINICA transformed my smile completely. The dental team is professional, caring, and the results exceeded my expectations. I can't stop smiling!",
      rating: 5,
      service: "Dental Implants",
      image: "/images/expert1.jpg",
      location: "New York",
    },
    {
      name: "David Chen",
      text: "Amazing dental experience! My teeth whitening treatment was painless and the results are incredible. The staff is so professional and caring!",
      rating: 5,
      service: "Teeth Whitening",
      image: "/images/expert2.jpg.avif",
      location: "California",
    },
    {
      name: "Lisa Thompson",
      text: "Painless dental work and amazing results. The dental staff made me feel comfortable throughout the entire process. Highly recommended!",
      rating: 5,
      service: "Smile Makeover",
      image: "/images/expert3.jpeg",
      location: "Texas",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Excellence in"
        subtitle="Dental & Esthetics"
        description="Discover the story behind CLINICA's commitment to providing world-class dental care with personalized treatments and exceptional results."
        backgroundImage="/images/about1.jpg"
        tagText="About CLINICA"
        tagIcon={Award}
        primaryButtonText="Our Mission"
        primaryButtonIcon={Target}
        primaryButtonLink="#mission"
        secondaryButtonText="About Us"
        secondaryButtonIcon={Play}
        secondaryButtonLink="#story"
        subtitleColor="text-[#815A93]"
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
                <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Our Mission
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Transforming Lives Through{" "}
                  <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                    Advanced Care
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  At CLINICA, our mission is to enhance your natural smile and
                  restore your confidence through advanced dental procedures and
                  exceptional patient care. We believe that everyone deserves to
                  feel confident in their smile and oral health.
                </p>
                <p>
                  Our team of experienced dental professionals combines
                  cutting-edge dental technology with personalized treatment
                  plans to deliver results that exceed expectations. We focus on
                  customized dental treatments, utilize high-end dental
                  technology, and maintain a patient-first approach.
                </p>
                <p>
                  From the moment you walk through our doors, you'll experience
                  the difference that dental expertise, technology, and
                  personalized care make. Our commitment to dental excellence
                  ensures every visit is comfortable, safe, and effective.
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
                    <div className="w-10 h-10 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-lg flex items-center justify-center flex-shrink-0">
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
              <div className="bg-gradient-to-br from-[#815A93]/5 via-[#e3c19d]/5 to-[#815A93]/10 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our Dental Commitment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide the highest quality dental care with the most
                    advanced dental technology in a comfortable, welcoming
                    environment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Expert Support
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent mb-2">
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
                    <Quote className="w-8 h-8 text-[#815A93] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        "The level of dental professionalism and care at CLINICA
                        is unmatched. They truly care about their dental
                        patients."
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-full flex items-center justify-center text-white font-semibold">
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
                  <Award className="w-8 h-8 text-[#815A93] mx-auto mb-1" />
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
            <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Foundation of Our{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we do, ensuring that every dental
              patient receives the highest quality dental care and exceptional
              results.
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
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-2xl mb-6 shadow-lg relative z-10`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                <div className="text-2xl font-bold text-[#815A93] mb-2 relative z-10">
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
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a comprehensive dental approach to ensure the best
              possible outcomes for every dental patient, from initial
              consultation to long-term dental follow-up care.
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
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d] rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {item.step}
                  </div>

                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-[#e3c19d]/10 text-[#e3c19d] px-4 py-2 rounded-full text-sm font-medium">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#815A93] via-[#815A93]/90 to-[#e3c19d] text-white relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-white to-[#e3c19d] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to dental excellence is reflected in these
              achievements and the trust our dental patients place in us.
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
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#e3c19d] bg-clip-text text-transparent">
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
                <achievement.icon className="w-8 h-8 text-[#e3c19d] mx-auto mb-3" />
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

      <Testimonials
        testimonials={homeTestimonials}
        title="What Our Patients Say"
        subtitle="Don't just take our word for it. Here's what our satisfied patients have to say about their transformative experience."
        tagText="Patient Stories"
        tagColor="from-yellow-100 to-orange-100 text-orange-600"
        titleGradientFrom="from-yellow-600"
        titleGradientTo="to-orange-600"
        backgroundClass="bg-white"
      />

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
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
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
                content:
                  "1st Floor, Plot No. 24, Sector-12A Rd, opp. Bal Bharti School, above AU Small Finance Bank, Block A, Sector 12 Dwarka, Dwarka, New Delhi, Delhi, 110075",

                color: "from-[#e3c19d] to-[#815A93]",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 70071 45918",
                subtext: "Immediate response guaranteed",
                color: "from-[#815A93] to-[#e3c19d]",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@clinica.com\nWe respond within 24 hours",
                subtext: "Professional consultation via email",
                color: "from-[#e3c19d] to-[#815A93]",
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
                <p className="text-sm text-gray-500">{contact?.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
