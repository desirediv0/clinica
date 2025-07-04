"use client";
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
  Clock,
  Users,
  Zap,
  Eye,
  Phone,
  Play,
  MapPin,
  Mail,
} from "lucide-react";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
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

export default function DentalPage() {
  const dentalTreatments = [
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement with natural-looking results that restore function and confidence for a lifetime.",
      benefits: [
        "Permanent solution",
        "Natural appearance",
        "Restores full function",
        "Prevents bone loss",
        "Improves oral health",
        "Boosts confidence",
      ],
      duration: "2-3 hours",
      recovery: "3-6 months",

      image: "/placeholder.svg?height=300&width=400",
      icon: Smile,
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      title: "Full Mouth Rehabilitation",
      description:
        "Complete smile transformation and restoration for optimal oral health, function, and stunning aesthetics.",
      benefits: [
        "Complete restoration",
        "Improved function",
        "Enhanced aesthetics",
        "Long-term solution",
        "Better oral health",
        "Renewed confidence",
      ],
      duration: "Multiple visits",
      recovery: "Varies by case",

      image: "/placeholder.svg?height=300&width=400",
      icon: Award,
      color: "from-[#B12EBC] to-[#00326D]",
    },
    {
      title: "Orthodontics",
      description:
        "Advanced braces and clear aligners for perfect smile alignment and optimal oral health improvement.",
      benefits: [
        "Straightens teeth",
        "Improves bite",
        "Enhances appearance",
        "Prevents future issues",
        "Boosts self-esteem",
        "Better oral hygiene",
      ],
      duration: "18-24 months",
      recovery: "No downtime",

      image: "/placeholder.svg?height=300&width=400",
      icon: Shield,
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments for a brighter, more confident smile with immediate visible results.",
      benefits: [
        "Immediate results",
        "Safe procedure",
        "Long-lasting effects",
        "Boosts confidence",
        "Professional grade",
        "Customized treatment",
      ],
      duration: "1 hour",
      recovery: "No downtime",

      image: "/placeholder.svg?height=300&width=400",
      icon: Sparkles,
      color: "from-[#B12EBC] to-[#00326D]",
    },
    {
      title: "Smile Makeovers",
      description:
        "Comprehensive cosmetic dentistry transformations combining multiple procedures for your dream smile.",
      benefits: [
        "Customized plan",
        "Multiple procedures",
        "Dramatic results",
        "Enhanced confidence",
        "Personalized approach",
        "Life-changing results",
      ],
      duration: "Multiple visits",
      recovery: "Varies by treatment",

      image: "/placeholder.svg?height=300&width=400",
      icon: Heart,
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      title: "Painless Root Canal",
      description:
        "Advanced endodontic treatment with minimal discomfort using the latest technology and techniques.",
      benefits: [
        "Pain-free procedure",
        "Saves natural tooth",
        "Quick recovery",
        "Advanced technology",
        "Preserves function",
        "Cost-effective solution",
      ],
      duration: "1-2 hours",
      recovery: "1-2 days",

      image: "/placeholder.svg?height=300&width=400",
      icon: CheckCircle,
      color: "from-[#B12EBC] to-[#00326D]",
    },
  ];

  const smileJourney = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Comprehensive oral examination, digital imaging, and discussion of your goals and concerns.",
      icon: Eye,
      duration: "60 minutes",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      step: "02",
      title: "Treatment Planning",
      description:
        "Personalized treatment plan created based on your specific needs, goals, and budget.",
      icon: Shield,
      duration: "30 minutes",
      color: "from-[#B12EBC] to-[#00326D]",
    },
    {
      step: "03",
      title: "Treatment Execution",
      description:
        "Expert care with advanced technology and techniques for optimal, comfortable results.",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-[#00326D] to-[#B12EBC]",
    },
    {
      step: "04",
      title: "Follow-up Care",
      description:
        "Ongoing maintenance, support, and monitoring to ensure lasting results and oral health.",
      icon: Heart,
      duration: "Lifetime",
      color: "from-[#B12EBC] to-[#00326D]",
    },
  ];

  const dentalFaqs = [
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and maintenance, dental implants can last a lifetime. They have a success rate of over 95% and are designed to be a permanent solution. Regular dental checkups and good oral hygiene are essential for longevity.",
    },
    {
      question: "Is teeth whitening safe for my teeth?",
      answer:
        "Yes, professional teeth whitening is completely safe when performed by trained dental professionals. We use advanced techniques and monitor the process to ensure optimal results without damage to your tooth enamel.",
    },
    {
      question: "How long does orthodontic treatment typically take?",
      answer:
        "Treatment duration varies depending on the complexity of your case and the type of orthodontic treatment chosen. Most patients complete treatment in 18-24 months, but some cases may take longer for optimal results.",
    },
    {
      question: "Are root canal procedures painful?",
      answer:
        "Modern root canal procedures are virtually painless. We use advanced anesthesia techniques and the latest technology to ensure your comfort throughout the procedure. Most patients experience minimal discomfort.",
    },
    {
      question: "What's included in a smile makeover?",
      answer:
        "A smile makeover is customized to your specific needs and may include teeth whitening, veneers, crowns, orthodontics, or other cosmetic procedures. We create a comprehensive plan based on your goals and budget.",
    },
    {
      question: "How do I maintain my dental work?",
      answer:
        "Maintaining your dental work involves regular brushing, flossing, and professional cleanings. We provide detailed aftercare instructions and recommend regular checkups to ensure the longevity of your treatment.",
    },
  ];

  const dentalTestimonials = [
    {
      name: "Maria Garcia",
      text: "The dental implant procedure was incredible! I can't believe how natural it looks and feels. The team made the entire process comfortable and stress-free. I'm so happy with my new smile!",
      rating: 5,
      treatment: "Dental Implants",
      image: "/placeholder.svg?height=60&width=60",
      location: "New York",
    },
    {
      name: "James Wilson",
      text: "My smile makeover exceeded all expectations. The transformation is amazing and I feel so much more confident. The attention to detail and care was exceptional throughout.",
      rating: 5,
      treatment: "Smile Makeover",
      image: "/placeholder.svg?height=60&width=60",
      location: "California",
    },
    {
      name: "Lisa Thompson",
      text: "The teeth whitening treatment was quick and painless. My smile is now several shades brighter and I couldn't be happier with the results. Highly recommend CLINICA!",
      rating: 5,
      treatment: "Teeth Whitening",
      image: "/placeholder.svg?height=60&width=60",
      location: "Texas",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Smile Beautifully,"
        subtitle="Chew Confidently"
        description="Advanced dental care treatments designed to restore your smile and improve your oral health with personalized, expert care."
        backgroundImage="/images/dental.jpg"
        tagText="Premium Dental Care"
        tagIcon={Smile}
        primaryButtonText="View Treatments"
        primaryButtonIcon={Calendar}
        primaryButtonLink="#treatments"
        secondaryButtonText="Book Consultation"
        secondaryButtonIcon={Play}
        secondaryButtonLink="/contact"
        stats={[
          { number: "5000+", label: "Successful Treatments" },
          { number: "99%", label: "Patient Satisfaction" },
          { number: "15+", label: "Years Experience" },
          { number: "24/7", label: "Emergency Care" },
        ]}
        subtitleColor="text-[#B12EBC]"
      />

      {/* Enhanced Treatments Overview */}
      <section id="treatments" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Dental Treatments
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Dental Care Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine checkups to advanced cosmetic procedures, we provide
              complete dental solutions for a healthy, beautiful smile that
              lasts a lifetime.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dentalTreatments.map((treatment, index) => (
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
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center shadow-lg border border-white/30`}
                    >
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

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#00326D]" />
                      <span className="text-sm text-gray-600">
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#00326D]" />
                      <span className="text-sm text-gray-600">
                        {treatment.recovery}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Benefits:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {treatment.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00326D] to-[#B12EBC] hover:from-[#00326D]/80 hover:to-[#B12EBC]/80 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Enhanced Smile Journey Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#00326D]/5 to-[#B12EBC]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Your Dental Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Path to a{" "}
              <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                Perfect Smile
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our comprehensive, patient-centered process designed to
              transform your smile and restore your confidence with expert care
              at every step.
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
                className="relative group"
              >
                {/* Connection line for desktop */}
                {index < smileJourney.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#B12EBC]/20 to-[#00326D]/20 transform translate-x-4 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00326D] to-[#B12EBC] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-[#B12EBC]/10 text-[#B12EBC] px-4 py-2 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={dentalTestimonials}
        title="What Our Patients Say"
        subtitle="Don't just take our word for it. Here's what our satisfied patients have to say about their life-changing dental care experience at CLINICA."
        tagText="Patient Stories"
        tagColor="from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D]"
        titleGradientFrom="from-[#00326D]"
        titleGradientTo="to-[#B12EBC]"
        backgroundClass="bg-white"
      />

      {/* FAQ Section */}
      <Faq
        faqs={dentalFaqs}
        title="Got Questions?"
        subtitle="Get answers to common questions about our dental treatments, procedures, and what to expect during your visit."
        tagText="Frequently Asked Questions"
        tagColor="from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC]"
        titleGradientFrom="from-[#B12EBC]"
        titleGradientTo="to-[#00326D]"
      />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
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
                title="Ready to Transform Your"
                subtitle="Smile?"
                tagText="Book Consultation"
                tagColor="from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D]"
                titleGradientFrom="from-[#00326D]"
                titleGradientTo="to-[#B12EBC]"
                buttonText="Book Consultation"
                successMessage="Consultation Booked Successfully!"
                successSubtitle="Thank you for booking your dental consultation with CLINICA. We'll contact you within 24 hours to confirm your appointment."
              />
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
                {[
                  {
                    icon: MapPin,
                    title: "Visit Our Clinic",
                    content:
                      "123 Medical Center Dr, Suite 100\nCity, State 12345",
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <Cta />
    </div>
  );
}
