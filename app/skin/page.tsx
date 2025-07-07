"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Heart,
  Zap,
  Eye,
  CheckCircle,
  Star,
  Clock,
  Award,
  Users,
  Phone,
  Play,
  Shield,
  Quote,
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

export default function SkinPage() {
  const skinJourney = [
    {
      step: "01",
      title: "Skin Analysis",
      description:
        "Comprehensive skin assessment using advanced diagnostic tools to identify your specific concerns and skin type.",
      icon: Eye,
      duration: "30 minutes",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      step: "02",
      title: "Custom Treatment Plan",
      description:
        "Personalized treatment plan created based on your skin analysis, goals, and lifestyle preferences.",
      icon: Shield,
      duration: "15 minutes",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      step: "03",
      title: "Treatment Sessions",
      description:
        "Professional treatment sessions using advanced technology and techniques for optimal, safe results.",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      step: "04",
      title: "Aftercare & Maintenance",
      description:
        "Ongoing support, skincare guidance, and maintenance treatments to preserve and enhance your results.",
      icon: Heart,
      duration: "Ongoing",
      color: "from-[#e3c19d] to-[#815A93]",
    },
  ];

  const skinFaqs = [
    {
      question: "How many skin treatments will I need for optimal results?",
      answer:
        "The number of skin treatments varies depending on your skin concerns and goals. Most patients see significant improvement after 3-6 sessions, spaced 4-6 weeks apart. During your consultation, we'll create a personalized treatment plan with specific recommendations.",
    },
    {
      question: "Is there any downtime after skin treatments?",
      answer:
        "Downtime varies by treatment. HydraFacial has no downtime, while chemical peels may require 3-7 days of mild peeling. Microneedling typically involves 2-3 days of redness. We'll provide detailed aftercare instructions for optimal healing and results.",
    },
    {
      question: "Are the skin treatments painful or uncomfortable?",
      answer:
        "Most skin treatments are well-tolerated with minimal discomfort. We use advanced techniques and can apply numbing cream if needed to ensure your comfort. Many patients find treatments relaxing and enjoy the pampering experience.",
    },
    {
      question: "How long do the results from skin treatments last?",
      answer:
        "Skin treatment results vary by treatment and individual factors. Some treatments like HydraFacial provide immediate results lasting 4-6 weeks, while others like microneedling show improvement over 3-6 months. Maintenance sessions help prolong and enhance results.",
    },
    {
      question: "Can I combine multiple skin treatments together?",
      answer:
        "Yes, we often recommend combining skin treatments for optimal results. Popular combinations include HydraFacial with chemical peels or microneedling with LED therapy. Our experts will create a safe, effective combination plan based on your skin needs.",
    },
    {
      question: "What should I do to prepare for my skin treatment?",
      answer:
        "Avoid sun exposure, tanning, and certain skincare products (retinoids, acids) for 1-2 weeks before treatment. Stay hydrated and inform us of any medications or skin conditions. We'll provide specific pre-treatment instructions during your consultation.",
    },
    {
      question: "Do you also offer dental services?",
      answer:
        "Yes! While we specialize in skin care, CLINICA is primarily a dental clinic offering comprehensive dental services including implants, smile makeovers, teeth whitening, and more. Our dental services are our primary focus and we're proud to offer both dental and skin care under one roof.",
    },
  ];

  const skinTestimonials = [
    {
      name: "Sarah Johnson",
      text: "The HydraFacial treatment was incredible! My skin feels so smooth and hydrated. I can't believe the immediate results - my complexion looks years younger and so radiant!",
      rating: 5,
      treatment: "HydraFacial",
      image: "/placeholder.svg?height=60&width=60",
      location: "New York",
    },
    {
      name: "Michael Chen",
      text: "After struggling with acne scars for years, microneedling has transformed my skin. The results are amazing and my confidence has returned. Best investment I've made!",
      rating: 5,
      treatment: "Microneedling",
      image: "/placeholder.svg?height=60&width=60",
      location: "California",
    },
    {
      name: "Emily Rodriguez",
      text: "The chemical peel exceeded my expectations. My skin tone is so much more even and my fine lines have diminished significantly. The team was professional and caring throughout.",
      rating: 5,
      treatment: "Chemical Peel",
      image: "/placeholder.svg?height=60&width=60",
      location: "Texas",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Glow Starts Here –"
        subtitle="Premium Skin Care"
        description="Advanced skin care treatments designed to enhance your natural beauty and address your specific concerns with personalized, expert care."
        backgroundImage="/images/skincare.jpg"
        tagText="Premium Skin Care"
        tagIcon={Sparkles}
        primaryButtonText="View Treatments"
        primaryButtonIcon={Calendar}
        primaryButtonLink="#treatments"
        secondaryButtonText="Book Consultation"
        secondaryButtonIcon={Play}
        secondaryButtonLink="/contact"
        stats={[
          { number: "10,000+", label: "Treatments Performed" },
          { number: "98%", label: "Patient Satisfaction" },
          { number: "6", label: "Advanced Treatments" },
          { number: "24/7", label: "Expert Support" },
        ]}
        subtitleColor="text-[#815A93]"
      />

      {/* About CLINICA Skin Care Section */}
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
              About{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                CLINICA Skin Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We at CLINICA are highly motivated to provide the best derma help
              to our clients in looking naturally beautiful and having the best
              skin. Our motive is to provide world class skin care services with
              amazing esthetic technology.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center mb-16"
          >
            <motion.div variants={slideInLeft}>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  When it comes to skin care, we usually take suggestions from
                  our friends, acquaintances, or relatives. However every time
                  the solution does not work properly. Even sometimes the
                  problem gets even worse. We at CLINICA, understand this and
                  offer the best and customized solution for our patients. We
                  understand the patient needs and provide them best and most
                  advanced treatments.
                </p>
                <p>We follow a simple process:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#815A93] rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Meeting the patient and understanding the problem
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#815A93] rounded-full mt-3 flex-shrink-0"></div>
                    <span>Proper diagnosis and getting the root cause</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#815A93] rounded-full mt-3 flex-shrink-0"></div>
                    <span>
                      Prescribing the right procedure or treatment along with
                      the required products
                    </span>
                  </li>
                </ul>
                <p>
                  We not only work to provide long-term results but strive
                  create a supportive and comfortable environment where our
                  clients feel understood, valued and empowered.
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="bg-gradient-to-br from-[#B12EBC]/5 via-[#00326D]/5 to-[#B12EBC]/10 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide the highest quality skin care with the most
                    advanced technology in a comfortable, welcoming environment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent mb-2">
                      98%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Patient Satisfaction
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent mb-2">
                      6
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Advanced Treatments
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
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            Sarah Mitchell
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

      {/* Enhanced Treatments Overview */}
      <section
        id="treatments"
        className="py-20 lg:py-32 bg-gradient-to-br from-[#B12EBC]/5 to-[#00326D]/5"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Advanced Treatments
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#B12EBC] to-[#00326D] bg-clip-text text-transparent">
                Skin Care Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our range of advanced skin treatments designed to address
              your specific concerns and deliver transformative results.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* Chemical Peels */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00326D] to-[#B12EBC] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      CHEMICAL PEELS
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Ageing, chronic sun exposure, or acne can make your skin
                      dull, wrinkled, spotted and scarred. A chemical peel is
                      one of the most effective ways to improve the skin. It is
                      a procedure of chemical skin resurfacing by applying a
                      solution with active agents that exfoliate the top layers
                      of the skin. The new skin that grows after healing is
                      smoother, fresh, spot free and younger looking.
                    </p>
                    <p>
                      Chemical peels are used to treat wrinkles, skin
                      discolouration and scars. Although chemical peels are used
                      mostly on the face, they can also be used to improve the
                      skin on your neck and hands. A chemical peel can be done
                      alone or in combination with other cosmetic procedures.
                    </p>
                    <p>
                      The results of chemical peel procedure depends on the type
                      of chemical used. You may opt for chemical peeling if you
                      have:
                    </p>
                    <ul className="space-y-2 pl-6">
                      {[
                        "Acne or acne scars",
                        "Dark spots or patches",
                        "Uneven skin pigmentation",
                        "Dull looking skin",
                        "Rough, dehydrated skin",
                        "Open pores",
                        "Fine lines and wrinkles",
                        "Looking for maintenance of skin in good condition",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Depending on the condition of the skin and type of peel
                      used, a person may require 4-8 sessions to see excellent
                      results.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/chemical-peel.jpg"
                    alt="Chemical Peels"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* HydraFacial */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <Image
                    src="/images/hydrafacial.jpg"
                    alt="HydraFacial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      HYDRAFACIAL
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Hydrafacial is a "hydradermabrasion" treatment that
                      basically involves three steps — cleansing, exfoliating,
                      and then infusing skin with essential serums. Hydra Facial
                      is a procedure that can give you a refreshed, hydrated and
                      energised skin in just 30 minutes. As it is a dermabrasion
                      treatment, so a controlled exfoliation of dead cells is
                      carried out, the pores are deep cleansed and then infused
                      with hydrating and moisturising serums.
                    </p>
                    <p>
                      The treatment is relaxing, rejuvenating, non-irritating
                      giving immediate results. It promotes long-term skin
                      health and can be customised to meet the specific needs of
                      all skin types.
                    </p>
                    <p>Hydra Facial addresses all skincare needs:</p>
                    <ul className="space-y-2 pl-6">
                      {[
                        "Fine lines & Wrinkles",
                        "Elasticity & Firmness",
                        "Even Tone & Vibrancy",
                        "Smooth Skin Texture",
                        "Brown Spots",
                        "Oily & Congested Skin",
                        "Enlarged Pores",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Hydra Facial can be repeated monthly once till desired
                      results are achieved, and following that, maintenance
                      sessions may be done every two months. Hydra Facial is one
                      of the safest treatment options you can opt for if you are
                      looking to get a clearer radiant skin.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carbon Peel */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00326D] to-[#B12EBC] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      CARBON PEEL
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Also known as charcoal facial, charcoal peel or carbon
                      peel, it is a very gentle non-invasive laser procedure
                      with zero down time using activated charcoal to improve
                      the radiance of the skin. The carbon is virtually blasted
                      off the skin from the perfectly fired laser. Dead skin
                      cells, makeup residue, clogged pores, oil and blackheads
                      are removed, leaving the skin radiant and glowing.
                    </p>
                    <p>Benefits of the carbon facial include:</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          For an ageing skin:
                        </h4>
                        <ul className="space-y-1 pl-6">
                          {[
                            "Shrinking of dilated pores",
                            "Improved skin tone",
                            "Improved skin texture",
                            "Reduction of fine lines and wrinkles",
                            "Improved scars",
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          For an acne prone skin:
                        </h4>
                        <ul className="space-y-1 pl-6">
                          {[
                            "Reduced black heads and white heads",
                            "Reduced sebum production due to shrinkage of oil glands",
                            "Destruction of acne causing bacteria",
                            "Improved acne lesions including the larger cysts and nodules",
                            "Reduced acne scars",
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p>
                      The results are instant! Immediately following the
                      treatment you can notice a clearer and smooth skin. The
                      dilated pores shrink, excess oil reduces, blemishes fade,
                      and the skin looks more fresh, rejuvenated and youthful.
                      Carbon facials can be done every 3-4 weeks.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/cardon-peel.jpg"
                    alt="Carbon Peel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Microneedling */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <Image
                    src="/images/microneedeing.jpg"
                    alt="Microneedling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      MICRONEEDLING
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Microneedling is a procedure that use multiple minute
                      needles to puncture the skin and create micro-injuries.
                      The goal of the therapy is to stimulate new collagen and
                      elastin production to make the skin smoother, firmer, more
                      toned, and younger looking.
                    </p>
                    <p>
                      Microneedling is a minimally invasive procedure that's
                      used to treat various skin problems by stimulating
                      collagen production. Also known as collagen induction
                      therapy, percutaneous collagen induction, needle
                      dermabrasion, or dermal remodelling, this treatment may
                      help those looking to reduce the appearance of acne scars
                      and stretch marks.
                    </p>
                    <p>
                      It can improve a wide variety of conditions including:
                    </p>
                    <ul className="space-y-2 pl-6">
                      {[
                        "Acne scars (box and rolling types)",
                        "Linear atrophic scars",
                        "Traumatic or surgical scars",
                        "Striae (Stretch marks)",
                        "Reduction of fine lines and open pores",
                        "Skin rejuvenation of face, neck, upper lip, decollete, arms, legs, abdomen and buttocks",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skin Tag Removal */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00326D] to-[#B12EBC] rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      SKIN TAG REMOVAL
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Skin tag is extra growth of skin tissue, hanging off the
                      skin as a flap with a connecting stalk. They are most
                      commonly present in the folds of the body like the neck,
                      armpits ETC They may also be found on back and chest. Skin
                      tags are more common in females than males, elderly
                      people, and people with high body mass index.
                    </p>
                    <p>
                      Skin tags are usually asymptomatic. However, they can
                      become irritated if anything, such as clothing, jewellery,
                      or skin rubs against them. Skin tag removal is a single
                      session procedure, however, if a person has multiple skin
                      tags, they may be removed in more than one sitting.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/skin-tag-removal.jpg"
                    alt="Skin Tag Removal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Laser Hair Reduction */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <Image
                    src="/images/lazer-hair-reduction.jpg"
                    alt="Laser Hair Reduction"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      LASER HAIR REDUCTION
                    </h3>
                  </div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Laser hair removal in delhi is a pain-free cosmetic
                      procedure through exposure to pulses of laser light that
                      destroy the hair follicles. Anyone with unwanted dark
                      coarse hair is a good candidate for laser hair removal
                      treatment to get rid of unwanted hair. Hair removal works
                      in all skin types and skin tones.
                    </p>
                    <p>
                      Females with increased facial hair growth and underlying
                      hormonal imbalances can also undergo laser hair removal
                      and the treatment of hormonal issues after consulting and
                      obtaining medical advice from the Dermatologist.
                    </p>
                    <p>
                      Anyone facing problems with ingrown hairs and folliculitis
                      is a good candidate for permanent hair removal. People
                      with white or grey hair do not have sufficient melanin in
                      the hair roots to serve as targets for laser light. Hence
                      they are not suitable candidates and must consider other
                      hair removal options.
                    </p>
                    <p>
                      Various factors determine the price of laser hair removal:
                    </p>
                    <ul className="space-y-2 pl-6">
                      {[
                        "Size of the area to be treated",
                        "Number of sessions",
                        "Hair and Skin Type",
                        "Hair Colour",
                        "Laser Technology and Machine",
                        "Experience of the doctor",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#B12EBC] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skin Journey Timeline */}
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
              Your Skin Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Path to{" "}
              <span className="bg-gradient-to-r from-[#00326D] to-[#B12EBC] bg-clip-text text-transparent">
                Radiant Skin
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our comprehensive, personalized process designed to
              transform your skin and boost your confidence with expert care at
              every step.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skinJourney.map((step, index) => (
              <motion.div
                key={step.step}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {/* Connection line for desktop */}
                {index < skinJourney.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00326D]/20 to-[#B12EBC]/20 transform translate-x-4 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00326D] to-[#B12EBC] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B12EBC] to-[#00326D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-[#00326D]/10 text-[#00326D] px-4 py-2 rounded-full text-sm font-medium">
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
        testimonials={skinTestimonials}
        title="What Our Patients Say"
        subtitle="Don't just take our word for it. Here's what our satisfied patients have to say about their transformative skin care experience at CLINICA."
        tagText="Patient Stories"
        tagColor="from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC]"
        titleGradientFrom="from-[#B12EBC]"
        titleGradientTo="to-[#00326D]"
        backgroundClass="bg-gradient-to-br from-gray-50 to-[#B12EBC]/5"
      />

      {/* FAQ Section */}
      <Faq
        faqs={skinFaqs}
        title="Got Skin Care Questions?"
        subtitle="Get answers to common questions about our skin care treatments, procedures, and what to expect during your visit."
        tagText="Skin Care FAQ"
        tagColor="from-[#00326D]/10 to-[#B12EBC]/10 text-[#00326D]"
        titleGradientFrom="from-[#00326D]"
        titleGradientTo="to-[#B12EBC]"
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
                subtitle="Skin?"
                tagText="Book Consultation"
                tagColor="from-[#B12EBC]/10 to-[#00326D]/10 text-[#B12EBC]"
                titleGradientFrom="from-[#B12EBC]"
                titleGradientTo="to-[#00326D]"
                buttonText="Book Consultation"
                successMessage="Consultation Booked Successfully!"
                successSubtitle="Thank you for booking your skin consultation with CLINICA. We'll contact you within 24 hours to confirm your appointment."
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

      {/* Final CTA */}
      <Cta
        title="Ready to Transform Your Skin?"
        subtitle="Join thousands of satisfied patients who have experienced the CLINICA difference. Book your consultation today and take the first step towards radiant, healthy skin."
        buttonText="Book Your Consultation"
        phoneText="Call Us Today"
        gradientFrom="from-[#B12EBC]"
        gradientTo="to-[#00326D]"
        titleGradientFrom="from-[#B12EBC]"
        titleGradientTo="to-[#00326D]"
      />
    </div>
  );
}
