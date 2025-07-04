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
            description="Advanced Skin & Dental Care with Personalized Excellence"
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
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
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
                <span className="inline-block bg-[#B12EBC]/10 text-[#B12EBC] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  About CLINICA
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Excellence in{" "}
                  <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                    Esthetics & Dentistry
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At CLINICA, we are dedicated to providing world-class skin and
                  dental care that combines cutting-edge technology with
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#B12EBC] to-[#00326D] hover:from-[#B12EBC]/80 hover:to-[#00326D]/80 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
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
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skin Treatments Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Skin Treatments
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Glow Starts Here –{" "}
              <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                Premium Skin Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of skin care treatments designed
              to enhance your natural beauty with advanced technology.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {skinTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/skin"
                      className="inline-flex items-center space-x-2 text-[#B12EBC] hover:text-[#00326D] font-semibold group-hover:translate-x-1 transition-all duration-300"
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

      {/* Enhanced Dental Treatments Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#00326D]/10 to-[#00326D]/20 text-[#00326D] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Dental Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Smile Beautifully,{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Chew Confidently
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine checkups to advanced cosmetic procedures, we provide
              complete dental solutions for a healthy, beautiful smile.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {dentalTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden h-40">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <treatment.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-full text-xs font-medium border border-white/30">
                      {treatment.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/dental"
                      className="inline-flex items-center space-x-1 text-[#00326D] hover:text-[#B12EBC] font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
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

      {/* Enhanced Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#00326D] via-[#00326D]/90 to-[#B12EBC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/homepagebanner.jpg.avif')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-white/20">
              Why Choose CLINICA
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience the{" "}
              <span className="bg-gradient-to-r from-white to-[#B12EBC] bg-clip-text text-transparent">
                CLINICA Difference
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We combine medical expertise with cutting-edge technology to
              deliver exceptional results that exceed your expectations.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#B12EBC] to-white rounded-2xl mb-6 shadow-2xl">
                  <item.icon className="w-10 h-10 text-[#00326D]" />
                </div>
                <div className="text-3xl font-bold text-[#B12EBC] mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Experts Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-green-100 to-teal-100 text-teal-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Expert Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                Medical Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced professionals are dedicated to providing you with
              the highest quality care and exceptional results.
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
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative p-8 text-center">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src={expert.image || "/placeholder.svg"}
                        alt={expert.name}
                        fill
                        className="rounded-full object-cover shadow-xl group-hover:shadow-2xl transition-all duration-500"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-[#B12EBC] font-semibold mb-1">
                    {expert.specialization}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {expert.credentials}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {expert.description}
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="inline-flex items-center space-x-2 bg-[#B12EBC]/10 text-[#B12EBC] px-4 py-2 rounded-full text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{expert.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Advanced Technology
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              International{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Quality Standards
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All our systems meet the most stringent international quality
              standards for your safety and optimal results.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-2 border border-gray-100"
              >
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <Cta
        title="Ready to Transform Your Smile & Skin?"
        subtitle="Take the first step towards your transformation. Book your consultation today and experience the CLINICA difference."
        buttonText="Book Appointment Now"
        phoneText="Call Us Today"
        gradientFrom="from-[#00326D]"
        gradientTo="to-[#B12EBC]"
        titleGradientFrom="from-white"
        titleGradientTo="to-[#B12EBC]"
      />

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 lg:gap-20"
          >
            <motion.div variants={slideInLeft}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Get In Touch
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Let's Talk About Your{" "}
                  <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Ready to start your journey? Contact us today to schedule your
                consultation or learn more about our services.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Our Clinic",
                    content:
                      "123 Medical Center Dr, Suite 100\nCity, State 12345",
                    color: "from-[#00326D] to-[#B12EBC]",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "(555) 123-4567\nAvailable 24/7",
                    color: "from-[#B12EBC] to-[#00326D]",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@clinica.com\nQuick Response Guaranteed",
                    color: "from-[#00326D] to-[#B12EBC]",
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
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {contact.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Send us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="dental">Dental Care</option>
                      <option value="skin">Skin Care</option>
                      <option value="consultation">General Consultation</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B12EBC] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your concerns or questions..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#B12EBC] to-[#00326D] hover:from-[#B12EBC]/80 hover:to-[#00326D]/80 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
