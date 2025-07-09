"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Smile,
  Award,
  Shield,
  Sparkles,
  Heart,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Phone,
  Play,
  MapPin,
  Mail,
  Baby,
  Scissors,
  Droplets,
  Sparkle,
  Activity,
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
        "Successfully replacing teeth using implants is an extremely 'technique-sensitive' procedure that requires great expertise. An advanced titanium structure is anchored into the jawbone where the tooth is to be replaced.",
      benefits: [
        "Permanent solution",
        "Natural appearance",
        "Prevents bone loss",
        "International quality standards",
        "Lifelong solution",
        "Bite & Chew With Ease",
      ],
      duration: "2-3 hours",
      recovery: "3-6 months",
      image: "/images/dental-implant.jpg",
      icon: Smile,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "This structure acts as a support for the 'crown' or the artificial tooth. These mechanics are similar to how a natural tooth anchors itself, making dental implants the ideal replacement solution. All our implant systems meet the most stringent of international quality standards. Implants act by replacing the root portion of the tooth, thus not only replace a tooth, but also support the bone beneath thereby preventing loss of jaw bone after tooth loss.",
    },
    {
      title: "Full Mouth Rehabilitation",
      description:
        "A full mouth reconstruction (rehabilitation) is needed when your oral health deteriorates completely due to multiple dental problems. The procedure has the power to turn back the clock by taking away at least 10 to 15 years of facial ageing.",
      benefits: [
        "Complete restoration",
        "Reverses facial ageing",
        "Enhanced aesthetics",
        "Long-term solution",
        "Better oral health",
        "Enjoy favorite foods",
      ],
      duration: "Multiple visits",
      recovery: "Varies by case",
      image: "/images/full-mouth-rehabilitation.jpg",
      icon: Award,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "Along with looking and feeling younger, you will also be able to enjoy all your favourite foods again. Our team of skilled specialists plan the entire treatment while taking into account the patient's primary and secondary concerns, expectations, existing medical and oral condition, and budget and time constraints. Full mouth rehabilitation with dental implants can include All-on-Four, All-on-Six, All-on-Eight or All-on-X techniques for complete teeth replacement.",
    },
    {
      title: "Orthodontics",
      description:
        "Everyone wants those perfectly aligned teeth; our team of orthodontists makes sure that your teeth stay that way. Orthodontics deals with braces that align your teeth in an ideal manner.",
      benefits: [
        "Type 1: Metal Braces - Traditional metal brackets for effective alignment",
        "Type 2: Ceramic Braces - Tooth-colored brackets, virtually invisible",
        "Type 3: Self-Ligating Braces - Faster treatment, increased comfort",
        "Type 4: Clear Aligners - Removable, transparent teeth straightening",
        "Type 5: Lingual Braces - Hidden behind teeth, completely invisible",
        "Type 6: Preventive Orthodontics - Early intervention for children",
      ],
      duration: "6-24 months",
      recovery: "No downtime",
      image: "/images/orthodonics.jpg",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "We provide conventional braces as well as clear aligners so that both the young and the adult can be happy with their smile. Metal braces offer traditional metal brackets, while ceramic braces use tooth-colored brackets that are not visible to the eye at a distance. Self-ligating braces reduce treatment duration and increase comfort and can be used with both metal and ceramic. Clear aligners are wafer-thin, transparent aligners that fit snugly on your teeth and gently reposition them. They offer all the benefits of conventional orthodontics, can be taken out as needed and spare you from the inconvenience of metal brackets and wires.",
    },
    {
      title: "Laser Teeth Whitening",
      description:
        "Intrinsic stains and discolouration present deep within the teeth are responsible for the overall dull or yellowish appearance of your teeth. Our LASER expert professionally removes these stains using a peroxide-based agent.",
      benefits: [
        "60 minutes treatment",
        "100% safe",
        "Guaranteed results",
        "Expert specialists",
        "Cost-effective",
        "Results last 2 years",
      ],
      duration: "45 minutes",
      recovery: "No downtime",
      image: "/images/laser-teeth-whitening.jpg",
      icon: Sparkles,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "The peroxide reacts with the stain-producing substances thereby oxidizing and clearing them completely. The gums and lips are protected with special barriers to prevent their contact with peroxide. The laser bleaching is more effective and stays for longer period. Our entire teeth whitening procedure requires just about 45 minutes to complete and is professionally performed by the LASER Specialist.",
    },
    {
      title: "Painless Root Canal",
      description:
        "A root canal treatment entails removing the infected soft tissue within the tooth and replacing it with an artificial inert 'filling' material. This procedure not only saves the tooth but also eliminates dental pain.",
      benefits: [
        "Pain-free procedure",
        "30-minute treatment",
        "Advanced technology",
        "Expert specialists",
        "Comfortable experience",
        "High success rate",
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
        "Aesthetics and functionality are at the heart of what we do. Our experts use a combination of treatment modalities to enhance your natural smile and boost your confidence.",
      benefits: [
        "Type 1: Dental Bonding - Repairs chips, cracks, and small gaps",
        "Type 2: Porcelain Veneers - Custom-made shells for perfect teeth",
        "Type 3: LASER Gum Contouring - Reshapes uneven gumlines",
        "Type 4: Professional Whitening - Instant brightness enhancement",
        "Type 5: Tooth Recontouring - Perfects shape and proportions",
        "Type 6: Metal-Free Crowns - Natural-looking restorations",
      ],
      duration: "90 minutes",
      recovery: "No downtime",
      image: "/images/cosmetic-dentist.jpg",
      icon: Heart,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "From mild to extreme smile makeovers and smile enhancements, we use a combination of treatments to transform your set of dull teeth into natural-looking ones within 90 minutes. This includes bonding for minor flaws like chipped or cracked teeth, veneers and metal-free ceramic crowns for repairs, gum recontouring with LASERs for uneven gumlines, instant tooth whitening, tooth recontouring for shape and size alterations, and replacement of 'black-line' crowns. We also offer LASER depigmentation of gums to give them a natural and uniform color. Our metal-free ceramic crowns ensure no black lines are formed and blend naturally with adjacent teeth.",
    },
  ];

  const additionalTreatments = [
    {
      title: "Extractions & Surgical Extractions",
      description:
        "Generally, most wisdom teeth are impacted and require a surgical extraction. All surgical extractions at our centres are performed by skilled surgeons who practice high standards of hygiene and sterilization. We ensure a comfortable and safe experience for all types of extractions.",
      icon: Scissors,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Complete & Partial Dentures",
      description:
        "We offer various denture-based options for tooth replacement, including basic complete dentures, implant supported complete dentures, cast partial dentures, and Val Plast partial dentures. These provide economical yet effective solutions for fixed dentures.",
      icon: Shield,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Advanced Gum Treatments",
      description:
        "Most forms of gum disease involve the infection and erosion of gums. Sometimes, it spreads below the gums and infects the bone that supports the teeth. Gum disease ranges from a mild condition called gingivitis that is easily reversible, to severe periodontitis that requires comprehensive treatment. We offer complete gum disease treatments including scaling and polishing, root planning or curettage, flap surgery, gingival grafts (periodontal plastic surgery), and bone grafts. Early treatment is crucial as gum disease can progress from mild gingivitis to severe periodontitis affecting bone support.",
      icon: Activity,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Bridges & Fixed Solutions",
      description:
        "Bridges are used for replacing teeth in cases where implants are contraindicated. We incorporate artificial tints in the ceramic to match the natural shade transitions of the adjacent teeth, ensuring a seamless appearance.",
      icon: Shield,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Professional Clean-up",
      description:
        "Professional clean-up, scaling and polishing are essential at least once every 6 months to maintain oral health. These procedures efficiently remove plaque, tartar and stains, preventing gum problems when done regularly.",
      icon: Droplets,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Our child specialists provide comprehensive care including fluoride application, sealant treatment, pulpectomy, habit breakers, and preventive orthodontics. We create a friendly environment and educate both children and parents about oral health.",
      icon: Baby,
      color: "from-[#815A93] to-[#e3c19d]",
    },
  ];

  const clinicFeatures = [
    {
      title: "Excellence Through Expertise and Artistry",
      description:
        "Our responsibility towards you begins much before you sit on the dental chair. Our clinic is designed to instantly make you feel comfortable and relaxed. We believe that the best outcomes originate from personalised patient care.",
      icon: Award,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "World-class Equipment",
      description:
        "We use one of the best quality of equipment and materials to keep pace with the innovations in dental technology internationally.",
      icon: Zap,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Safety and Sterilization",
      description:
        "We maintain the highest standards of hygiene and adhere to stringent sterilization protocols for your safety. Since we are an internationally certified setup, all our protocols are monitored.",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Hi-Tech Dentistry",
      description:
        "The right expertise and technology enable us to undertake advanced smile makeovers, full mouth dental implants, zirconia and CAD CAM crowns, laser dentistry, aligners and more.",
      icon: Sparkle,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Specialists in Makeovers",
      description:
        "Smile makeovers are a sublime combination of exceptional expertise and rare artistry. They help in achieving a dramatic transformation in the appearance of a person while simultaneously restoring the health and function of the teeth. Our carefully selected team of aesthetic dentists and various other associated specialists (implantologists, orthodontists) work in a carefully orchestrated sync to ensure breathtaking outcomes for our patients.",
      icon: Heart,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "The Perfect Solution to Replace Missing Teeth",
      description:
        "Form, function and aesthetics are at the forefront of our dental implant solutions. Single, multiple or full mouth dental implants are the best solution to replace damaged or missing teeth with an artificial fixture that look and feel exactly like a real tooth so that one can Bite & Chew With Ease, Look Younger and have a Life-long Solution.",
      icon: Smile,
      color: "from-[#815A93] to-[#e3c19d]",
    },
  ];

  const smileJourney = [
    {
      step: "01",
      title: "Comprehensive Consultation",
      description:
        "Detailed evaluation of your dental health, education about oral health status, and creation of a personalized treatment plan with estimated cost and time.",
      icon: Eye,
      duration: "60 minutes",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      step: "02",
      title: "Informed Decision Making",
      description:
        "We lay down various alternative treatment plans that suit your budget, time constraints and needs. All doubts and queries are cleared at this stage.",
      icon: Shield,
      duration: "30 minutes",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      step: "03",
      title: "Expert Treatment Execution",
      description:
        "State-of-the-art technology combined with expertise and soft-skill approach ensures precise, seamless and comfortable treatment procedures.",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      step: "04",
      title: "Lifetime Care & Support",
      description:
        "Ongoing maintenance, support, and monitoring to ensure lasting results. We maintain lifetime dental records for continuous oral health progress tracking.",
      icon: Heart,
      duration: "Lifetime",
      color: "from-[#815A93] to-[#e3c19d]",
    },
  ];

  const dentalFaqs = [
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and maintenance, dental implants can last a lifetime. They have a success rate of over 95% and are designed to be a permanent solution. Implants act by replacing the root portion of the tooth, thus not only replace a tooth but also support the bone beneath, preventing loss of jaw bone after tooth loss. They allow you to bite and chew with ease while looking younger.",
    },
    {
      question: "What makes CLINICA different from other dental clinics?",
      answer:
        "CLINICA specializes in cutting-edge dentistry with world-class equipment, international quality standards, and a team of highly skilled specialists. We focus on personalized patient care and use the latest technology for optimal results. Our clinic is designed to instantly make you feel comfortable and relaxed. We maintain lifetime dental records for continuous oral health progress tracking and emphasize preventive care.",
    },
    {
      question: "What is included in a comprehensive consultation?",
      answer:
        "Your first consultation appointment is a crucial step in assessing your overall dental health. Our doctors conduct a detailed evaluation, educate you about your oral health status, and create a personalized treatment plan with estimated cost and time. We lay down various alternative treatment plans that suit your budget, time constraints, and needs. All doubts and queries are cleared at this stage, helping you make an informed decision.",
    },
    {
      question: "What types of orthodontic treatments do you offer?",
      answer:
        "We provide both conventional braces and clear aligners. Our options include metal braces (conventional metal brackets), ceramic braces (tooth-colored brackets that are less visible), self-ligating braces (to reduce treatment duration and increase comfort), and invisible/clear aligners. Clear aligners are wafer-thin, transparent aligners that fit snugly on your teeth, can be removed as needed, and spare you from the inconvenience of metal brackets and wires.",
    },
    {
      question: "What services do you offer for children's dental care?",
      answer:
        "Our team of child specialists provides comprehensive pediatric care including fluoride application for developing teeth, sealant treatment to make teeth caries resistant, restorative procedures, pulpectomy (RCT for kids teeth), habit breakers, preventive and corrective orthodontics, and oral hygiene education. We create a friendly environment and ensure both children and parents are educated about maintaining good oral health.",
    },
    {
      question: "What is involved in a smile makeover?",
      answer:
        "A smile makeover combines multiple treatments including bonding for minor flaws, veneers and metal-free ceramic crowns for repairs, gum recontouring with LASERs, instant tooth whitening, tooth recontouring, and replacement of 'black-line' crowns. We also offer LASER depigmentation of gums for a natural and uniform color. Our carefully selected team of aesthetic dentists and specialists work together to ensure breathtaking outcomes.",
    },
    {
      question: "How do you handle gum disease treatment?",
      answer:
        "We offer comprehensive gum disease treatments ranging from basic procedures to advanced surgeries. This includes scaling and polishing, root planning or curettage, flap surgery, gingival grafts (periodontal plastic surgery), and bone grafts. Early treatment is crucial as gum disease can progress from mild gingivitis to severe periodontitis affecting bone support. Regular professional clean-ups every 6 months help prevent gum problems.",
    },
    {
      question: "What is preventive dentistry and why is it important?",
      answer:
        "At CLINICA, we believe that prevention is better than cure. Preventive dentistry helps intercept oral diseases early, preventing their development into serious conditions. This includes addressing irregularities in teeth, cavity-prone teeth, development of aesthetic facial structure, proper speech, and avoiding oral habits like thumb sucking and nail biting. We maintain lifetime dental records to track oral health progress and plan preventive treatments accordingly.",
    },
    {
      question: "What options do you offer for full mouth rehabilitation?",
      answer:
        "Full mouth rehabilitation can include various treatments depending on your needs. For replacing all teeth with dental implants, we can use two to ten implants based on bone condition and other factors. We offer All-on-Four, All-on-Six, All-on-Eight or All-on-X techniques for complete teeth replacement. The procedure can take years off your facial age and restore your ability to enjoy all foods while providing a natural appearance.",
    },
    {
      question: "How safe is your laser teeth whitening procedure?",
      answer:
        "Our laser teeth whitening is completely safe and professionally performed by LASER specialists. The procedure takes just 45 minutes, with the peroxide-based agent effectively removing deep stains. We use special barriers to protect your gums and lips during the treatment. The results are guaranteed to last up to 2 years, making it a highly cost-effective solution for a brighter smile.",
    },
  ];

  const dentalTestimonials = [
    {
      name: "Maria Garcia",
      text: "The dental implant procedure was incredible! I can't believe how natural it looks and feels. The team made the entire process comfortable and stress-free. I'm so happy with my new smile!",
      rating: 5,
      treatment: "Dental Implants",
      image: "/images/expert1.jpg",
      location: "New York",
    },
    {
      name: "James Wilson",
      text: "My smile makeover exceeded all expectations. The transformation is amazing and I feel so much more confident. The attention to detail and care was exceptional throughout.",
      rating: 5,
      treatment: "Smile Makeover",
      image: "/images/expert2.jpg.avif",
      location: "California",
    },
    {
      name: "Lisa Thompson",
      text: "The teeth whitening treatment was quick and painless. My smile is now several shades brighter and I couldn't be happier with the results. Highly recommend CLINICA!",
      rating: 5,
      treatment: "Teeth Whitening",
      image: "/images/expert3.jpeg",
      location: "Texas",
    },
    {
      name: "David Chen",
      text: "The root canal treatment was completely painless! I was so nervous but the team made me feel comfortable throughout. The 30-minute procedure was quick and efficient.",
      rating: 5,
      treatment: "Root Canal",
      image: "/images/expert1.jpg",
      location: "Chicago",
    },
    {
      name: "Sarah Johnson",
      text: "My orthodontic treatment with clear aligners was amazing. They're virtually invisible and I can take them out when needed. The results are perfect!",
      rating: 5,
      treatment: "Orthodontics",
      image: "/images/expert2.jpg.avif",
      location: "Miami",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Smile Beautifully,"
        subtitle="Chew Confidently"
        description="Advanced dental care treatments designed to restore your smile and improve your oral health with personalized, expert care. Our responsibility towards you begins much before you sit on the dental chair."
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
          { number: "12+", label: "Years Experience" },
          { number: "24/7", label: "Emergency Care" },
        ]}
        subtitleColor="text-[#815A93]"
      />

      {/* Clinic Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clinicFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
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
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
            <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Our Dental Treatments
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
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
            {dentalTreatments.map((treatment) => (
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
                      <Clock className="w-4 h-4 text-[#e3c19d]" />
                      <span className="text-sm text-gray-600">
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#e3c19d]" />
                      <span className="text-sm text-gray-600">
                        {treatment.recovery}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    {treatment.title === "Orthodontics" ||
                    treatment.title === "Cosmetic Smile Makeovers" ? (
                      <h5 className="font-semibold text-gray-900 mb-3">
                        Types:
                      </h5>
                    ) : (
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Benefits:
                      </h4>
                    )}

                    <div className="grid grid-cols-1 gap-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {treatment.details && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {treatment.details}
                      </p>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/80 hover:to-[#815A93]/80 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Additional Treatments Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Additional Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                Dental Care Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From preventive care to advanced surgical procedures, we offer
              comprehensive dental solutions to meet all your oral health needs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalTreatments.map((treatment) => (
              <motion.div
                key={treatment.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${treatment.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <treatment.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {treatment.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Smile Journey Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Your Dental Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Path to a{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
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
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#815A93]/20 to-[#e3c19d]/20 transform translate-x-4 z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className="mt-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#e3c19d] to-[#815A93] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-[#815A93]/10 text-[#815A93] px-4 py-2 rounded-full text-sm font-medium">
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
        tagColor="from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d]"
        titleGradientFrom="from-[#e3c19d]"
        titleGradientTo="to-[#815A93]"
        backgroundClass="bg-white"
      />

      {/* FAQ Section */}
      <Faq
        faqs={dentalFaqs}
        title="Got Questions?"
        subtitle="Get answers to common questions about our dental treatments, procedures, and what to expect during your visit."
        tagText="Frequently Asked Questions"
        tagColor="from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93]"
        titleGradientFrom="from-[#815A93]"
        titleGradientTo="to-[#e3c19d]"
      />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-[#e3c19d]/10">
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
                tagColor="from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d]"
                titleGradientFrom="from-[#e3c19d]"
                titleGradientTo="to-[#815A93]"
                buttonText="Book Consultation"
                successMessage="Consultation Booked Successfully!"
                successSubtitle="Thank you for booking your dental consultation with CLINICA. We'll contact you within 24 hours to confirm your appointment."
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={slideInRight}>
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#e3c19d] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  Contact Information
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
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
                    color: "from-[#e3c19d] to-[#815A93]",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "(555) 123-4567\nAvailable 24/7 for emergencies",
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
