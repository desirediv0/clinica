"use client";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";

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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    if (expandedCard === title) {
      setExpandedCard(null);
    } else {
      setExpandedCard(title);
    }
  };

  const skinTreatments = [
    {
      title: "Chemical Peels",
      description:
        "Advanced exfoliation treatments that remove damaged skin layers to reveal fresh, youthful skin beneath. Our medical-grade peels target various concerns from acne to aging.",
      icon: Sparkles,
      image: "/images/chemical-peel.jpg",
      benefits: [
        "Reduces fine lines and wrinkles",
        "Improves skin texture and tone",
        "Treats acne and scarring",
        "Minimizes sun damage",
        "Enhances skin radiance",
      ],
      duration: "30-45 minutes",
      recovery: "3-7 days",
      details:
        "We offer different strengths of peels customized to your skin type and concerns. Our expert team ensures safe application and provides comprehensive aftercare guidance.",
    },
    {
      title: "HydraFacial",
      description:
        "A revolutionary treatment combining cleansing, exfoliation, extraction, and hydration. Perfect for all skin types, delivering instant, visible results.",
      icon: Heart,
      image: "/images/hydrafacial.jpg",
      benefits: [
        "Deep pore cleansing",
        "Instant hydration boost",
        "No downtime required",
        "Customizable serums",
        "Immediate visible results",
      ],
      duration: "45-60 minutes",
      recovery: "No downtime",
      details:
        "Our signature HydraFacial treatment uses patented technology to cleanse, extract, and hydrate. The multi-step treatment includes specialized serums that address your specific skin concerns.",
    },
    {
      title: "Carbon Peel",
      description:
        "Advanced laser treatment using carbon particles to deeply cleanse and rejuvenate skin. Ideal for oily skin, enlarged pores, and dull complexion.",
      icon: Zap,
      image: "/images/cardon-peel.jpg",
      benefits: [
        "Reduces pore size",
        "Controls oil production",
        "Brightens complexion",
        "Improves skin texture",
        "Treats mild acne",
      ],
      duration: "45 minutes",
      recovery: "No downtime",
      details:
        "The treatment involves applying a carbon solution followed by laser therapy that targets pigmentation, oil production, and skin texture in one session.",
    },
    {
      title: "Microneedling",
      description:
        "Advanced collagen induction therapy using precision micro-needles to stimulate natural skin regeneration. Perfect for scars, wrinkles, and skin rejuvenation.",
      icon: Eye,
      image: "/images/microneedeing.jpg",
      benefits: [
        "Stimulates collagen production",
        "Reduces acne scars",
        "Improves skin texture",
        "Minimizes fine lines",
        "Enhances product absorption",
      ],
      duration: "60 minutes",
      recovery: "2-3 days",
      details:
        "Our advanced microneedling system creates controlled micro-injuries that trigger the body's natural healing process, resulting in firmer, smoother skin.",
    },
    {
      title: "Skin Tag Removal",
      description:
        "Safe and effective removal of unwanted skin tags using advanced techniques. Our experts ensure minimal discomfort and optimal aesthetic results.",
      icon: CheckCircle,
      image: "/images/skin-tag-removal.jpg",
      benefits: [
        "Quick and painless procedure",
        "No scarring",
        "Immediate results",
        "Multiple tags treated at once",
        "Prevents recurrence",
      ],
      duration: "15-30 minutes",
      recovery: "1-2 days",
      details:
        "We use state-of-the-art equipment for precise removal of skin tags, ensuring clean results with minimal recovery time.",
    },
    {
      title: "Laser Hair Reduction",
      description:
        "Permanent hair reduction using advanced laser technology. Safe for all skin types with long-lasting results.",
      icon: Zap,
      image: "/images/lazer-hair-reduction.jpg",
      benefits: [
        "Permanent hair reduction",
        "Suitable for all skin types",
        "Treats large areas quickly",
        "Precise and targeted",
        "Cost-effective long-term",
      ],
      duration: "15-60 minutes",
      recovery: "No downtime",
      details:
        "Our advanced laser systems target hair follicles while protecting surrounding skin, providing safe and effective permanent hair reduction.",
    },
  ];

  const dentalTreatments = [
    {
      title: "Dental Implants",
      description:
        "Successfully replacing teeth using implants is an extremely 'technique-sensitive' procedure that requires great expertise. An advanced titanium structure is anchored into the jawbone where the tooth is to be replaced.",
      benefits: [
        "Permanent solution for missing teeth",
        "Natural appearance and feel",
        "Prevents bone loss in jaw",
        "Lifelong solution with proper care",
        "Bite & Chew With Ease like natural teeth",
        "Look Younger with restored facial structure",
        "Single, multiple or full mouth options available",
      ],
      duration: "2-3 hours",
      recovery: "3-6 months",
      image: "/images/dental-implant.jpg",
      icon: Smile,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "This structure acts as a support for the 'crown' or the artificial tooth. These mechanics are similar to how a natural tooth anchors itself, making dental implants the ideal replacement solution. All our implant systems meet the most stringent of international quality standards. Implants act by replacing the root portion of the tooth, thus not only replace a tooth but also support the bone beneath thereby preventing loss of jaw bone after tooth loss. On top of dental implants, implant crowns are placed that replace the tooth portion.",
    },
    {
      title: "Full Mouth Rehabilitation",
      description:
        "A full mouth reconstruction (rehabilitation) is needed when your oral health deteriorates completely due to multiple dental problems. The procedure has the power to turn back the clock by taking away at least 10 to 15 years of facial ageing.",
      benefits: [
        "Complete oral health restoration",
        "Reverses 10-15 years of facial ageing",
        "Enhanced aesthetics and function",
        "Long-term comprehensive solution",
        "Better overall oral health",
        "Enjoy all favorite foods again",
        "Customized treatment planning",
        "All-on-Four, All-on-Six, All-on-Eight options",
      ],
      duration: "Multiple visits over 3-6 months",
      recovery: "Varies by individual case",
      image: "/images/full-mouth-rehabilitation.jpg",
      icon: Award,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "Along with looking and feeling younger, you will also be able to enjoy all your favourite foods again. Our team of skilled specialists plan the entire treatment while taking into account the patient's primary and secondary concerns, expectations, existing medical and oral condition, and budget and time constraints. Full mouth rehabilitation with dental implants can include All-on-Four, All-on-Six, All-on-Eight or All-on-X techniques for complete teeth replacement giving the ideal aesthetics with the most natural appearance and complete functions of chewing and speaking. Suitable for both young and adult patients and Improved oral health and aesthetics",
    },
    {
      title: "Orthodontics",
      description:
        "Everyone wants those perfectly aligned teeth; our team of orthodontists makes sure that your teeth stay that way. Orthodontics deals with braces that align your teeth in an ideal manner. We provide conventional braces as well as clear aligners so that both the young and the adult can be happy with their smile.",
      benefits: [
        "Type 1: Metal Braces - Conventional metal brackets for effective alignment",
        "Type 2: Ceramic Braces - Tooth-colored brackets, virtually invisible at distance",
        "Type 3: Self-Ligating Braces - Reduced treatment duration, increased comfort",
        "Type 4: Clear Aligners - Removable, transparent, virtually invisible",
        "Type 5: Lingual Braces - Hidden behind teeth, completely invisible",
        "Type 6: Preventive Orthodontics - Early intervention for children",
      ],
      duration: "6-24 months",
      recovery: "No downtime required",
      image: "/images/orthodonics.jpg",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "Clear aligners are wafer-thin, transparent aligners that fit snugly on your teeth and gently reposition them to give you the perfect smile. They offer you all the benefits of conventional orthodontics, can be taken out as and when needed spare you from the inconvenience and awkwardness of metal brackets and wires. Self-ligating systems can be used with both metal and ceramic brackets to reduce treatment duration and increase treatment quality and comfort.  Suitable for both young and adult patients and Improved oral health and aesthetics",
      keyBenefitsLabel: "Types:",
    },
    {
      title: "Laser Teeth Whitening",
      description:
        "Intrinsic stains and discolouration present deep within the teeth are responsible for the overall dull or yellowish appearance of your teeth. Our LASER expert professionally removes these stains using a peroxide-based agent.",
      benefits: [
        "100% safe procedure",
        "Guaranteed visible results",
        "Teeth-whitening experts",
        "Highly cost-effective treatment",
        "Results last for 2 years",
        "Professional LASER specialist performed",
        "Special barriers protect gums and lips",
      ],
      duration: "45 minutes",
      recovery: "No downtime",
      image: "/images/laser-teeth-whitening.jpg",
      icon: Sparkles,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "The peroxide reacts with the stain-producing substances thereby oxidizing and clearing them completely. The gums and lips are protected with special barriers to prevent their contact with peroxide. The laser bleaching is more effective and stays for longer period. Bring back the sparkle in your smile. Transform your dull, stained or yellowish teeth into the perfect set of pearly whites in under an hour.",
    },
    {
      title: "Painless Root Canal Treatments",
      description:
        "A root canal treatment entails removing the infected soft tissue within the tooth and replacing it with an artificial inert 'filling' material. This procedure not only saves the tooth but also eliminates dental pain.",
      benefits: [
        "Completely pain-free procedure",
        "State-of-the-art technology used",
        "Expert endodontic specialists",
        "Comfortable and relaxed experience",
        "High success rate",
        "Saves natural tooth structure",
        "Eliminates dental pain permanently",
      ],
      duration: "30 minutes",
      recovery: "1-2 days",
      image: "/images/dantkriti-root-canel.jpg",
      icon: CheckCircle,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "We combine state-of-the-art technology with our expertise and soft-skill approach to ensure that every root canal procedure is precise, seamless and pain-free. Most of the root canal treatments at CLINICA are performed within 30 minutes by our expert who make sure you are always comfortable and relaxed. We understand that people fear root canals and tend to avoid undergoing the treatment. However, our specialists carefully craft the entire process to eliminate any fear attached to this procedure. In fact, we turn it into a very positive experience. Most of our referrals come from patients who have undergone RCT.",
    },
    {
      title: "Cosmetic Smile Makeovers",
      description:
        "Aesthetics and functionality are at the heart of what we do. Our experts use a combination of treatment modalities to enhance your natural smile and boost your confidence. From mild to extreme smile makeovers and smile enhancements, we transform your teeth within 90 minutes.",
      benefits: [
        "Type 1: Dental Bonding - Repairs chips, cracks, and small gaps between teeth",
        "Type 2: Porcelain Veneers - Custom-made shells for perfect teeth appearance",
        "Type 3: LASER Gum Contouring - Reshapes uneven and asymmetrical gumlines",
        "Type 4: Professional Whitening - Instant brightness enhancement treatment",
        "Type 5: Tooth Recontouring - Perfects shape, size and proportions",
        "Type 6: Metal-Free Crowns - Natural-looking restorations without black lines",
        "LASER Depigmentation of Gums - Removes black and brown pigments",
        "Complete transformation in 90 minutes",
      ],
      duration: "90 minutes",
      recovery: "No downtime",
      image: "/images/cosmetic-dentist.jpg",
      icon: Heart,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "Smile makeovers are a sublime combination of exceptional expertise and rare artistry. They help in achieving a dramatic transformation in the appearance of a person while simultaneously restoring the health and function of the teeth. Our carefully selected team of aesthetic dentists and various other associated specialists (implantologists, orthodontists) work in a carefully orchestrated sync to ensure breathtaking outcomes for our patients. We use only metal-free ceramic crowns for anterior teeth to ensure no black lines are formed and the crowns blend in naturally with the adjacent teeth.",
      keyBenefitsLabel: "Types:",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Doctors",
      description: "Certified specialists with decades of experience",
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

  const technologies = [
    { name: "Advanced Laser", logo: "/images/technology1.png" },
    { name: "Digital Imaging", logo: "/images/technology2.png" },
    { name: "3D Scanning", logo: "/images/technology3.png" },
    { name: "AI Diagnostics", logo: "/images/technology4.png" },
    { name: "Robotic Surgery", logo: "/images/technology5.png" },
    { name: "Smart Monitoring", logo: "/images/technology6.png" },
    { name: "Bio Laser", logo: "/images/bio-laser.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 container mx-auto text-center">
          <Hero
            title="Advanced Dental Care & Skin"
            subtitle="with Personalized Excellence At Clinica"
            backgroundImage="/images/hero.jpg"
            tagText="Premium Dental And Skin Excellence"
            tagIcon={Sparkles}
            primaryButtonText="Book Consultation"
            primaryButtonIcon={Calendar}
            primaryButtonLink="#contact"
            secondaryButtonText="About Us"
            secondaryButtonIcon={Play}
            secondaryButtonLink="#about"
          />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
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
                    title: "Award Winning Doctors",
                    desc: "Recognized Excellence",
                  },
                  {
                    icon: Shield,
                    title: "Safe & Secure",
                    desc: "Strict Sterlization Protocols",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Certified Professionals",
                  },
                  {
                    icon: Zap,
                    title: "Latest Tech",
                    desc: "Advanced Equipments",
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
                  <div className="text-2xl font-bold text-[#815A93]">12+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dental Treatments Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="inline-block bg-white text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-[#815A93]/20">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {dentalTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
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

                  <AnimatePresence>
                    {expandedCard === treatment.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {treatment.keyBenefitsLabel || "Benefits:"}
                          </h4>
                          <ul className="space-y-2">
                            {treatment.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-5 h-5 text-[#815A93] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Details:
                            </h4>
                            <p className="text-gray-600">{treatment.details}</p>
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                Duration:
                              </h4>
                              <p className="text-gray-600">
                                {treatment.duration}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                Recovery:
                              </h4>
                              <p className="text-gray-600">
                                {treatment.recovery}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    onClick={() => toggleCard(treatment.title)}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                  >
                    <span>
                      {expandedCard === treatment.title
                        ? "Show Less"
                        : "Learn More"}
                    </span>
                    {expandedCard === treatment.title ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skin Treatments Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-[#815A93]/20">
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
                    <p className="text-white/90 text-sm line-clamp-2">
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
                      <span className="text-sm text-gray-600">
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#815A93]" />
                      <span className="text-sm text-gray-600">
                        Recovery: {treatment.recovery}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#815A93] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Treatment Details:
                    </h4>
                    <p className="text-sm text-gray-600">{treatment.details}</p>
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

      {/* Enhanced Why Choose CLINICA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-[#815A93]/20">
              Why Choose CLINICA
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence Through{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                Expertise and Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CLINICA, we combine advanced technology with expert care to
              deliver exceptional results. Our commitment to excellence makes us
              the preferred choice for all your dental and skin care needs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Award,
                title: "12+ Years of Excellence",
                description:
                  "Over a decade of experience in providing top-tier dental and skin care services with proven results and satisfied patients.",
                stat: "",
                color: "from-[#e3c19d] to-[#815A93]",
              },
              {
                icon: Shield,
                title: "Advanced Safety Protocols",
                description:
                  "State-of-the-art sterilization and safety measures ensuring the highest standards of hygiene and protection for our patients.",
                stat: "100% Safe",
                color: "from-[#815A93] to-[#e3c19d]",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Our team of highly qualified doctors and specialists brings years of experience and expertise to provide you with the best care possible.",
                stat: "12+ Experts",
                color: "from-[#e3c19d] to-[#815A93]",
              },
              {
                icon: Zap,
                title: "Latest Technology",
                description:
                  "Equipped with cutting-edge dental and skincare technology for precise diagnostics and superior treatment outcomes.",
                stat: "Digital Excellence",
                color: "from-[#815A93] to-[#e3c19d]",
              },
              {
                icon: Star,
                title: "Patient Satisfaction",
                description:
                  "Consistently rated 5 stars by our patients for quality care, comfortable environment, and exceptional results.",
                stat: "98% Happy Patients",
                color: "from-[#e3c19d] to-[#815A93]",
              },
              {
                icon: Clock,
                title: "Convenient Care",
                description:
                  "Flexible scheduling, minimal waiting times, and comprehensive care all under one roof for your convenience.",
                stat: "12PM-9PM (Wed Off)",
                color: "from-[#815A93] to-[#e3c19d]",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 group-hover:scale-110`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#815A93] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] px-4 py-2 rounded-full text-sm font-medium">
                      {feature.stat}
                    </span>
                  </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Experience the CLINICA Difference
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "12+", label: "Years Experience" },
                  { number: "1k+", label: "Happy Patients" },
                  { number: "12+", label: "Expert Doctors" },
                  { number: "99%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                Technology
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
              { number: "12+", label: "Years Experience" },
              { number: "1k+", label: "Happy Patients" },
              { number: "12+", label: "Expert Doctors" },
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
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#815A93]/20 absolute -top-4 -left-2" />
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
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
                  Get In
                  <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                    Touch
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="Ritesh"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300"
                      placeholder="rit@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 text-sm font-medium mb-2">
                    Treatment Interest
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-black placeholder-gray-600 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300">
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
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e3c19d] transition-colors duration-300 h-32 resize-none"
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
                      "1st Floor, Plot No. 24, Sector-12A Rd, opp. Bal Bharti School, above AU Small Finance Bank, Block A, Sector 12 Dwarka, Dwarka, New Delhi, Delhi, 110075",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 70071 45918",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@clinica.com\nappointments@clinica.com",
                    subtext: "Response within 24 hours",
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
                        <p className="text-sm text-[#eba458]">
                          {item?.subtext}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      {/* <section className="py-20 lg:py-32 relative overflow-hidden">
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
                  href="/about"
                  className="inline-flex items-center space-x-3 bg-black/70 hover:bg-black/80 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
