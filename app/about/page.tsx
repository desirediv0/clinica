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
import ContactForm from "@/components/ContactForm";
import Expert from "@/components/expert";
import { FaWhatsapp } from "react-icons/fa";

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
        "Certified dental specialists with decades of combined experience in advanced dental procedures",
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
      number: "EMI Options",
      label: "Available",
      icon: Clock,
      description: "Flexible payment options",
    },
    {
      number: "30k+",
      label: "Successful Treatments",
      icon: Users,
      description: "Successful treatments",
    },
    {
      number: "99%",
      label: "Patient Satisfaction",
      icon: Star,
      description: "Exceptional results",
    },
    {
      number: "12+",
      label: "Years of Experience",
      icon: Shield,
      description: "Expert care",
    },
  ];

  const homeTestimonials = [
    {
      name: "Nitesh Singh",
      text: "The hygiene and cleanliness is very good. My friend recomended me Dr Sehar. Everything was explained and showed very nicely . I had long time phobia of dentist. It is over now. I am happy",
      rating: 5,
    },
    {
      name: "Shruti Raikwar",
      text: "Me and my mothers visit to Clinica was worth mentioning. The sanitization and the hygiene was worth praising . My sons treatment with Dr Anjum Sehar was completely painless. Everything was explained at basic level before starting only. Highly recomending this clinic to everyone.",
      rating: 5,
    },
    {
      name: "Himanshu Rathore",
      text: "A high tech and clean dental clinic i have been searching from very long time around my society and i saw this . Good to have such a dental clinic on my walking distance. My wife has taken skin consulation also.",
      rating: 5,
    },
    {
      name: "Dimple Mehra",
      text: "Dr. Sehar’s Clinic is amazing. She’s professional and truly talented. The clinic is clean ,welcoming and delivers visible results. Whether it’s for dental care or glowing skin, she provides top-quality service. Highly recommend visiting Clinica.",
      rating: 5,
    },
    {
      name: "Anamika (Singh)",
      text: "I had heard about teeth whitening but was not sure about results. My whitening was done by dr anjum . The results were so good and then and there only. Laser machine was used. I was told what to and what not to after whitening for a week. I am so satisfied with the result.",
      rating: 5,
    },
    {
      name: "Sayyead Rahil",
      text: "I recently visited Dr Anjum Sehar’s Clinic and i must say- it’s an obsolute gem. From consultation to treatment , you feel truly cared for. The clinic is modern , hygienic with a calming environment that puts you at ease.",
      rating: 5,
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Team of Best Dentists in Dwarka, Delhi Providing"
        subtitle="Excellence in Dentistry & Aesthetics "
        description="Clinica Dental & Skin offers world-class dental and skin care in Dwarka, Delhi. From laser treatments and smile designing to premium implants and aesthetics, we deliver advanced, comfortable care in a safe, modern setting."
        backgroundImage="/images/about1.jpg"
        tagText="About CLINICA"
        tagIcon={Award}
        primaryButtonText="Our Mission"
        primaryButtonIcon={Target}
        primaryButtonLink="#mission"
        secondaryButtonText="Contact"
        secondaryButtonIcon={Play}
        secondaryButtonLink="/contact"
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
                  At Clinica Dental & Skin, we believe every patient deserves gentle, personalized care powered by modern technology. With expertise in Laser procedures, aligners, braces, implants, and advanced skin treatments, our team is dedicated to delivering world-class results in a comfortable, friendly environment. Rooted in trust and compassion, we are committed to creating healthier smiles and radiant confidence for every individual who walks through our doors.
                </p>
                <p>
                  Our mission is to combine modern technology with compassionate care to create healthier smiles and radiant confidence for every patient.
                </p>
                <p>
                  Our team of experienced dental professionals and cosmetologists combine cutting edge technology with personalized  treatment plans to deliver results that exceed expectations. We focus on customized dental treatments, utilize high end technology, and maintain a patient-first approach.
                </p>
                <p>
                  From the moment you walk through our doors, you&#39;ll experience
                  the difference that dental expertise, technology, and
                  personalized care make. Our commitment to dental excellence
                  ensures every visit is comfortable, safe, and effective.
                </p>
                <p>Our vision is to be not just Dwarka’s but also Delhi’s most trusted destination for advanced dental and skin care, blending innovation with compassion to transform every smile and every life we touch.</p>
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
                    title: "Compassionate Expert",
                    desc: "Best Dentists and Skin Cosmetologists",
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
                    Our Commitment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide the highest quality dental care with the most
                    advanced dental technology in a comfortable, welcoming
                    environment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-lg md:text-4xl font-bold bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent mb-2">
                      12+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-lg md:text-4xl font-bold bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent mb-2">
                      30k
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Successful Treatments
                    </div>
                  </div>
                </div>

                {/* Testimonial highlight */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-[#815A93] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        &quot;The level of dental professionalism and care at CLINICA
                        is unmatched. They truly care about their dental
                        patients.&quot;
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-full flex items-center justify-center text-white font-semibold">
                          R
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            Rahul
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

          {/* Stats */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-[#e3c19d] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm md:text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-purple-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Expert />

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

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
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
              <ContactForm
                title="Ready to Experience"
                subtitle="CLINICA?"
                tagText="Book Consultation"
                tagColor="from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93]"
                titleGradientFrom="from-[#815A93]"
                titleGradientTo="to-[#e3c19d]"
                buttonText="Book Consultation"
                successMessage="Consultation Booked Successfully!"
                successSubtitle="Thank you for choosing CLINICA. We'll contact you within 24 hours to confirm your appointment."
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={slideInRight}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Contact Information
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trust CLINICA for top-quality care, expert guidance, and
                  personalized solutions that truly stand the test of time.
                </p>
              </div>

              <div className="space-y-6 mb-12">
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
                ].map((contact, index) => (
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
                      <p className="text-sm text-gray-500">
                        {contact?.subtext}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help you on your journey. Reach out to us through
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
                icon: FaWhatsapp,
                title: "WhatsApp Us",
                content: "+91 70071 45918",
                subtext: "Quick replies via WhatsApp",
                color: "from-[#815A93] to-[#e3c19d]",
              }
              // {
              //   icon: Mail,
              //   title: "Email Us",
              //   content: "info@clinica.com\nWe respond within 24 hours",
              //   subtext: "Professional consultation via email",
              //   color: "from-[#e3c19d] to-[#815A93]",
              // },
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
