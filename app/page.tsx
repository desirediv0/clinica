"use client";
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
  Play,
  Quote,
} from "lucide-react";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
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

export default function HomePage() {
  const skinTreatments = [
    {
      title: "Chemical Peels",
      description:
        "Advanced exfoliation for radiant, youthful skin with professional-grade solutions",
      icon: Sparkles,
      image: "/images/chemical-peel.jpg",
    },
    {
      title: "HydraFacial",
      description: "Deep cleansing and hydration for glowing, refreshed skin",
      icon: Heart,
      image: "/images/hydrafacial.jpg",
    },
    {
      title: "Carbon Peel",
      description: "Laser treatment for skin rejuvenation and pore refinement",
      icon: Zap,
      image: "/images/cardon-peel.jpg",
    },
    {
      title: "Microneedling",
      description: "Collagen induction therapy for improved skin texture",
      icon: Eye,
      image: "/images/microneedeing.jpg",
    },
    {
      title: "Skin Tag Removal",
      description: "Safe and effective removal of unwanted skin tags",
      icon: CheckCircle,
      image: "/images/skin-tag-removal.jpg",
    },
    {
      title: "Laser Hair Reduction",
      description: "Permanent hair reduction with advanced laser technology",
      icon: Zap,
      image: "/images/lazer-hair-reduction.jpg",
    },
  ];

  const dentalTreatments = [
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement with natural results",
      icon: Smile,
      image: "/images/dental-implant.jpg",
      duration: "2-3 visits",
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Complete smile transformation and restoration",
      icon: Award,
      image: "/images/full-mouth-rehabilitation.jpg",
      duration: "4-6 months",
    },
    {
      title: "Orthodontics",
      description: "Braces and aligners for perfect alignment",
      icon: Shield,
      image: "/images/orthodonics.jpg",
      duration: "12-24 months",
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile",
      icon: Sparkles,
      image: "/images/laser-teeth-whitening.jpg",
      duration: "1 session",
    },
    {
      title: "Smile Makeovers",
      description: "Comprehensive cosmetic transformations",
      icon: Heart,
      image: "/images/cosmetic-dentist.jpg",
      duration: "2-4 weeks",
    },
    {
      title: "Painless Root Canal",
      description: "Advanced treatment with minimal discomfort",
      icon: CheckCircle,
      image: "/images/dantkriti-root-canel.jpg",
      duration: "1-2 visits",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle dental care for children",
      icon: Users,
      image: "/images/pediatric-dentistry.jpg",
      duration: "30-45 mins",
    },
    {
      title: "Preventive Dentistry",
      description: "Comprehensive care for optimal oral health",
      icon: Shield,
      image: "/images/preventive-dentistry.jpg",
      duration: "45-60 mins",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Doctors",
      description: "Board-certified specialists with decades of experience",
      icon: Award,
      color: "from-[#00326D] to-[#B12EBC]",
      stat: "Expert Care",
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment with latest innovations",
      icon: Zap,
      color: "from-[#B12EBC] to-[#00326D]",
      stat: "99.9% Success",
    },
    {
      title: "Personalized Care",
      description: "Customized treatment plans for every patient",
      icon: Users,
      color: "from-[#00326D] to-[#B12EBC]",
      stat: "1000+ Patients",
    },
    {
      title: "Digital Precision",
      description: "Latest digital techniques for accurate results",
      icon: Shield,
      color: "from-[#B12EBC] to-[#00326D]",
      stat: "100% Digital",
    },
  ];

  const experts = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Chief Dental Surgeon",
      experience: "Expert Care",
      image: "/images/expert1.jpg",
      description:
        "Specialized in cosmetic dentistry and advanced implant procedures",
      credentials: "DDS, MS",
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Lead Dermatologist",
      experience: "12+ Years",
      image: "/images/expert2.jpg.avif",
      description: "Expert in advanced skin treatments and laser therapy",
      credentials: "MD, FAAD",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialization: "Cosmetic Specialist",
      experience: "10+ Years",
      image: "/images/expert3.jpeg",
      description: "Focused on smile makeovers and aesthetic procedures",
      credentials: "DDS, AACD",
    },
  ];

  const homeTestimonials = [
    {
      name: "Maria Garcia",
      text: "CLINICA transformed my smile completely. The team is professional, caring, and the results exceeded my expectations. I can't stop smiling!",
      rating: 5,
      service: "Dental Implants",
      image: "/images/expert1.jpg",
      location: "New York",
    },
    {
      name: "James Wilson",
      text: "Best skin treatment I've ever had. My skin looks 10 years younger and the HydraFacial was incredibly relaxing and effective!",
      rating: 5,
      service: "HydraFacial",
      image: "/images/expert2.jpg.avif",
      location: "California",
    },
    {
      name: "Lisa Thompson",
      text: "Painless dental work and amazing results. The staff made me feel comfortable throughout the entire process. Highly recommended!",
      rating: 5,
      service: "Smile Makeover",
      image: "/images/expert3.jpeg",
      location: "Texas",
    },
  ];

  const technologies = [
    { name: "Advanced Laser", logo: "/images/technology1.png" },
    { name: "Digital Imaging", logo: "/images/technology2.png" },
    { name: "3D Scanning", logo: "/images/technology3.png" },
    { name: "AI Diagnostics", logo: "/images/technology4.png" },
    { name: "Robotic Surgery", logo: "/images/technology5.png" },
    { name: "Smart Monitoring", logo: "/images/technology6.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto  text-center text-white">
          <Hero
            title="Transform Your"
            subtitle="Beauty with CLINICA"
            description="Advanced  Dental Care & Skin with Personalized Excellence"
            backgroundImage="/images/hero.jpg"
            tagText="Premium Medical Excellence"
            tagIcon={Sparkles}
            primaryButtonText="Book Consultation"
            primaryButtonIcon={Calendar}
            primaryButtonLink="#contact"
            secondaryButtonText="About Us"
            secondaryButtonIcon={Play}
            secondaryButtonLink="#about"
            subtitleColor="text-[#B12EBC]"
          />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5"
      >
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
                <span className="inline-block bg-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  About CLINICA
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Excellence in{" "}
                  <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                    Dentistry & Esthetics
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At CLINICA, we are dedicated to providing world-class dental
                  and skin care that combines cutting-edge technology with
                  personalized treatment plans. Our mission is to enhance your
                  natural beauty and restore your confidence.
                </p>
                <p>
                  We focus on customized treatments, utilize high-end
                  technology, and maintain a patient-first approach in
                  everything we do. Our team of experienced professionals
                  ensures every visit is comfortable, safe, and effective.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: Award,
                    title: "Award Winning",
                    desc: "Recognized Excellence",
                  },
                  {
                    icon: Shield,
                    title: "Safe & Secure",
                    desc: "FDA Approved",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Certified Professionals",
                  },
                  {
                    icon: Zap,
                    title: "Latest Tech",
                    desc: "Advanced Equipment",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-lg flex items-center justify-center flex-shrink-0">
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/images/teethbanner.jpg"
                      alt="Dental Care"
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#815A93]/30 to-transparent"></div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/images/skin.png"
                      alt="Skin Care"
                      width={250}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e3c19d]/30 to-transparent"></div>
                  </motion.div>
                </div>
                <div className="space-y-6 pt-12">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/images/about1.jpg"
                      alt="Advanced Technology"
                      width={250}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#815A93]/30 to-transparent"></div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/images/about2.jpg"
                      alt="Dental Technology"
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e3c19d]/30 to-transparent"></div>
                  </motion.div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#815A93]">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Dental Treatments Section - Made Larger and More Prominent */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e3c19d]/5 to-[#815A93]/5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              Dental Excellence
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Smile Beautifully,{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Chew Confidently
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              From routine checkups to advanced cosmetic procedures, we provide
              complete dental solutions for a healthy, beautiful smile.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600">
              <span className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#815A93]" />
                <span>Painless Procedures</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#815A93]" />
                <span>Advanced Technology</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#815A93]" />
                <span>Expert Care</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {dentalTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                      {treatment.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/dental"
                      className="inline-flex items-center space-x-2 text-[#00326D] hover:text-[#B12EBC] font-semibold text-base group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Dental Care?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#e3c19d]  to-[#815A93] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Safe & Painless
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Advanced techniques ensure comfortable procedures
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#e3c19d]  to-[#815A93] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Latest Technology
                  </h4>
                  <p className="text-gray-600 text-sm">
                    State-of-the-art equipment for precise results
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#e3c19d]  to-[#815A93] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-600 text-sm">
                    Certified professionals with years of experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skin Treatments Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Skin Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Radiant Skin,{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Timeless Beauty
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience transformative skincare treatments that enhance your
              natural beauty and restore your confidence with our expert care.
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {treatment.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        index % 2 === 0
                          ? "from-[#e3c19d] to-[#815A93]"
                          : "from-[#815A93] to-[#e3c19d]"
                      } rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#815A93]" />
                      <span className="text-sm text-gray-600">45-60 mins</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#815A93]" />
                      <span className="text-sm text-gray-600">No downtime</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Why Choose CLINICA
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence Through{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Expertise and Artistry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our clinic is designed to instantly make you feel comfortable and
              relaxed. We believe that the best outcomes originate from
              personalised patient care.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      index % 2 === 0
                        ? "from-[#e3c19d] to-[#815A93]"
                        : "from-[#815A93] to-[#e3c19d]"
                    } rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 inline-block bg-[#e3c19d]/10 text-[#815A93] px-3 py-1 rounded-full text-sm font-medium">
                      {feature.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Experts Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Experts
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Specialists
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of highly qualified doctors brings years of experience
              and expertise to provide you with the best care possible.
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {expert.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="w-4 h-4 text-[#815A93]" />
                    <span className="text-[#815A93] font-medium">
                      {expert.credentials}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{expert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[#e3c19d]/10 text-[#815A93] px-3 py-1 rounded-full text-sm font-medium">
                      {expert.specialization}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {expert.experience}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Advanced Technology
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Medical Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We invest in the latest medical technology to ensure precise
              diagnostics and superior treatment outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100"
              >
                <div className="relative h-20 mb-4">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-900">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "10k+", label: "Happy Patients" },
              { number: "50+", label: "Expert Doctors" },
              { number: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-black/90 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-white/5">
              Patient Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Patients Say
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Real experiences from our valued patients who have transformed
              their smiles and confidence with our expert care.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {homeTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/5 backdrop-blur-lg rounded-2xl p-8 border border-black/10 hover:bg-black/10 transition-all duration-500"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#eba458] fill-[#eba458]"
                          />
                        ))}
                      </div>
                      <span className="text-[#eba458] text-sm">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#815A93]/20 absolute -top-4 -left-2" />
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{testimonial.location}</span>
                  <span>Verified Patient</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              <span>View All Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
          >
            {/* Contact Form */}
            <motion.div variants={slideInLeft}>
              <div className="mb-8">
                <span className="inline-block bg-black/90 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-white/5">
                  Book Consultation
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Schedule your consultation today and take the first step
                  towards your enhanced confidence and well-being.
                </p>
              </div>

              <div className="bg-black/5 backdrop-blur-lg rounded-2xl p-8 border border-black/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Treatment Interest
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300">
                    <option value="" className="bg-[#1a1a1a]">
                      Select Treatment
                    </option>
                    <option value="dental" className="bg-[#1a1a1a]">
                      Dental Care
                    </option>
                    <option value="skin" className="bg-[#1a1a1a]">
                      Skin Treatment
                    </option>
                    <option value="both" className="bg-[#1a1a1a]">
                      Both Services
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300 h-32 resize-none"
                    placeholder="Tell us about your concerns..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300"
                >
                  Book Your Consultation
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={slideInRight}>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Our Clinic",
                    content:
                      "123 Medical Center Dr, Suite 100\nCity, State 12345",
                    subtext: "Modern facility with ample parking",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "(555) 123-4567\nEmergency: (555) 999-8888",
                    subtext: "24/7 emergency support available",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@clinica.com\nappointments@clinica.com",
                    subtext: "Response within 24 hours",
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    content:
                      "Mon-Fri: 9:00 AM - 7:00 PM\nSat: 9:00 AM - 5:00 PM",
                    subtext: "Emergency care available 24/7",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-800 whitespace-pre-line mb-1">
                          {item.content}
                        </p>
                        <p className="text-sm text-[#eba458]">{item.subtext}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map or Additional Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  Why Choose CLINICA?
                </h3>
                <ul className="space-y-3">
                  {[
                    "State-of-the-art facilities",
                    "Expert medical professionals",
                    "Comprehensive care approach",
                    "Flexible scheduling options",
                    "Insurance accepted",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#e3c19d]" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-black/80 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-white/5">
              Get Started Today
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Smile & Confidence
              </span>
            </h2>
            <p className="text-xl text-gray-800 mb-12 leading-relaxed">
              Experience the perfect blend of advanced dental care and skin
              treatments. Book your consultation now and take the first step
              towards a more confident you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-3 bg-black/70 hover:bg-black/80 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
