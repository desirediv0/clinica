"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  Users,
  Stethoscope,
  ChevronDown,
  ChevronUp,
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
      title: "Pediatric Dentistry",
      description:
        "Kids are one of the most difficult to handle, and when it comes to expressing, they always need special care. Our team of child specialist dentists not only caters to the needs of a child for dental treatment but they also make sure to educate the children and their parents for oral health awareness for future.",
      benefits: [
        "Fluoride application for developing teeth",
        "Sealant application for making teeth caries resistant",
        "Restorative procedures for damaged teeth",
        "Pulpectomy (RCT for kids teeth)",
        "Habit breakers for thumb sucking, nail biting",
        "Preventive and corrective orthodontics",
        "Oral hygiene education for children and parents",
        "Monitoring proper growth and development of teeth",
        "Friendly and playful environment for kids",
        "Complete dental development monitoring",
      ],
      duration: "30-60 minutes",
      recovery: "No downtime",
      image: "/images/pediatric-dentistry.jpg",
      icon: Baby,
      color: "from-[#815A93] to-[#e3c19d]",
      details:
        "In our commitment towards improving complete oral health, we ensure we spend time with each child entering our clinic to educate them about the importance of oral health and how to maintain it. Kids enjoy coming to our setup as we make sure to provide them a friendly and playful environment. We at CLINICA make sure that the kids are free from thumb sucking habit, nail biting, lip biting, etc. We keep a check for proper growth and development of the teeth in children. Most of the future problems can be catered on this stage and thus preventive measures are also taken care of. Our paediatric treatments include curative and preventive dental procedures, such as sealant treatment, topical fluoride application and more. We attend to all the dental care needs of children and monitor their overall dental development.",
      keyBenefitsLabel: "Services We Provide:",
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

  const additionalTreatments = [
    {
      title: "Gum Surgery & Advanced Gum Treatments",
      description:
        "Healthy Teeth Need Healthier Gums. Most forms of gum disease involve the infection and erosion of gums. Sometimes, it spreads below the gums and infects the bone that supports the teeth. Gum disease ranges from a mild condition called gingivitis that is easily reversible, to severe periodontitis that requires comprehensive treatment. Our periodontists perform all types of periodontal (gum) surgeries with finesse to arrest the damage and restore your gum health.",
      benefits: [
        "Type 1: Scaling and Polishing - Professional plaque and tartar removal",
        "Type 2: Root Planning/Curettage - Deep cleaning below gum line",
        "Type 3: Flap Surgery - Advanced surgical gum treatment",
        "Type 4: Gingival Grafts - Periodontal plastic surgery for gum recession",
        "Type 5: Bone Grafts - Regenerative treatment for bone loss",
        "Type 6: LASER Gum Treatment - Minimally invasive gum therapy",
        "Early intervention prevents tooth loss",
        "Comprehensive periodontal care available",
      ],
      icon: Activity,
      color: "from-[#e3c19d] to-[#815A93]",
      details:
        "Gum disease should be treated at the earliest. Signs include redness of gums, swollen gums, painful gums, receding gums, shaking teeth, pus in the gums, and persistent bad breath. The infection is limited to the gums in initial stages, but if left untreated, it gradually spreads to the bones supporting teeth and starts eroding them. Eventually, teeth lose their vital bone support and begin shaking. The earlier the treatment is sought, the lesser the damage done.",
      keyBenefitsLabel: "Types:",
    },
    {
      title: "Extractions & Surgical Extractions",
      description:
        "Generally, most wisdom teeth are impacted and require a surgical extraction. All surgical extractions at our centres are performed by skilled surgeons who practice high standards of hygiene and sterilization. We ensure a comfortable and safe experience for all types of extractions.",
      icon: Scissors,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Complete & Partial Dentures",
      description:
        "We offer various denture-based options for tooth replacement, including basic complete dentures, implant supported complete dentures, cast partial dentures, and Val Plast partial dentures. These provide economical yet effective solutions for fixed dentures with natural appearance and comfortable fit.",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Bridges & Fixed Solutions",
      description:
        "Bridges are used for replacing teeth in cases where implants are contraindicated. We incorporate artificial tints in the ceramic to match the natural shade transitions of the adjacent teeth, ensuring a seamless appearance and natural function.",
      icon: Shield,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Professional Clean-up & Maintenance",
      description:
        "Professional clean-up, scaling and polishing are essential at least once every 6 months to maintain oral health. These procedures efficiently remove plaque, tartar and stains, preventing gum problems when done regularly and addressing any problems in early stages.",
      icon: Droplets,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Preventive Dentistry",
      description:
        "We at CLINICA believe that prevention is better than cure. Prevention and interception of any oral disease at an early age prevents its development into a full blown disease thus maintaining good oral health and saving time and money. Early interception through specialized dentists can prevent a lifetime of bad oral health. We maintain lifetime dental records for continuous monitoring.",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Full Mouth Implants",
      description:
        "Full Mouth Dental Implants is a way of replacing or restoring all missing or failing teeth in one or both jaws. We specialize in cutting-edge dentistry to help you regain not just a beautiful smile but also the full functionality of your teeth. All-on-Four, All-on-Six, All-on-Eight or All-on-X techniques provide perfect support for complete teeth replacement with ideal aesthetics and natural appearance.",
      icon: Smile,
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
        "We use one of the best quality of equipment and materials to keep pace with the innovations in dental technology internationally. Our advanced digital dentistry and cutting-edge tools ensure accurate and effective treatment outcomes.",
      icon: Zap,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Safety and Sterilization",
      description:
        "We maintain the highest standards of hygiene and adhere to stringent sterilization protocols for your safety. Since we are an internationally certified setup, all our protocols are monitored and meet global standards.",
      icon: Shield,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Hi-Tech Dentistry",
      description:
        "The right expertise and technology enable us to undertake advanced smile makeovers, full mouth dental implants, zirconia and CAD CAM crowns, laser dentistry, aligners and more with precision and excellence.",
      icon: Sparkle,
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      title: "Specialists in  Smile Makeovers",
      description:
        "Smile makeovers are a sublime combination of exceptional expertise and rare artistry. They help in achieving a dramatic transformation in appearance while simultaneously restoring health and function. Our carefully selected team of aesthetic dentists and specialists work in orchestrated sync to ensure breathtaking outcomes.",
      icon: Heart,
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      title: "Perfect Solution for Missing Teeth",
      description:
        "Form, function and aesthetics are at the forefront of our dental implant solutions. Single, multiple or full mouth dental implants are the best solution to replace damaged or missing teeth with fixtures that look and feel exactly like real teeth, allowing you to Bite & Chew With Ease, Look Younger and have a Life-long Solution.",
      icon: Smile,
      color: "from-[#815A93] to-[#e3c19d]",
    },
  ];

  const whyChooseUs = [
    {
      title: "Excellence Through Expertise and Artistry",
      description:
        "Our responsibility towards you begins much before you sit on the dental chair. Our clinic is designed to instantly make you feel comfortable and relaxed. We believe that the best outcomes originate from personalised patient care.",
      icon: Award,
    },
    {
      title: "Personalized treatment plans",
      description:
        "Based on your unique needs, we develop customized treatment plans considering your concerns, expectations, and constraints.",
      icon: Users,
    },
    {
      title: "Cutting-edge technology",
      description:
        "We use digital dentistry and advanced techniques to ensure the most accurate, effective, and durable outcomes.",
      icon: Zap,
    },
    {
      title: "Skilled doctors with decades of experience",
      description:
        "Our team is led by certified dentists with decades of combined experience using evidence-based practices.",
      icon: Stethoscope,
    },
  ];

  const smileJourney = [
    {
      step: "01",
      title: "Comprehensive Consultation",
      description:
        "Your first consultation is crucial for assessing overall dental health. Our doctors conduct detailed evaluation, educate you about oral health status, and create personalized treatment plan with estimated cost and time. We believe every patient must be fully aware of their condition and available options to make informed decisions.",
      icon: Eye,
      duration: "60 minutes",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      step: "02",
      title: "Informed Decision Making",
      description:
        "We lay down various alternative treatment plans that suit your budget, time constraints and needs. All doubts and queries are cleared at this stage. We take this as an opportunity to build and bolster a healthy doctor-patient relationship.",
      icon: Shield,
      duration: "30 minutes",
      color: "from-[#815A93] to-[#e3c19d]",
    },
    {
      step: "03",
      title: "Expert Treatment Execution",
      description:
        "State-of-the-art technology combined with expertise and soft-skill approach ensures precise, seamless and comfortable treatment procedures. We use evidence-based practices and advanced materials for optimal results.",
      icon: CheckCircle,
      duration: "Varies",
      color: "from-[#e3c19d] to-[#815A93]",
    },
    {
      step: "04",
      title: "Lifetime Care & Support",
      description:
        "Ongoing maintenance, support, and monitoring to ensure lasting results. We maintain lifetime dental records for continuous oral health progress tracking and plan preventive treatments for all diseases at any age as per individual needs.",
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
        "CLINICA specializes in cutting-edge dentistry with world-class equipment, international quality standards, and a team of highly skilled specialists. We focus on personalized patient care and use the latest technology for optimal results. Our clinic is designed to instantly make you feel comfortable and relaxed. We maintain lifetime dental records for continuous oral health progress tracking and emphasize preventive care. Our responsibility towards you begins much before you sit on the dental chair.",
    },
    {
      question: "What is included in a comprehensive consultation?",
      answer:
        "Your first consultation appointment is a crucial step in assessing your overall dental health. Our doctors conduct a detailed evaluation, educate you about your oral health status, and create a personalized treatment plan with estimated cost and time. We lay down various alternative treatment plans that suit your budget, time constraints, and needs. All doubts and queries are cleared at this stage, helping you make an informed decision. Only a one-time consultation fee would be charged.",
    },
    {
      question: "What types of orthodontic treatments do you offer?",
      answer:
        "We provide both conventional braces and clear aligners so that both young and adults can be happy with their smile. Our options include metal braces (conventional metal brackets), ceramic braces (tooth-colored brackets that are not visible at distance), self-ligating braces (to reduce treatment duration and increase comfort), and invisible/clear aligners. Clear aligners are wafer-thin, transparent aligners that fit snugly on your teeth, can be removed as needed, and spare you from the inconvenience of metal brackets and wires.",
    },
    {
      question: "What services do you offer for children's dental care?",
      answer:
        "Our team of child specialists provides comprehensive pediatric care including fluoride application for developing teeth, sealant treatment to make teeth caries resistant, restorative procedures, pulpectomy (RCT for kids teeth), habit breakers, preventive and corrective orthodontics, and oral hygiene education. We create a friendly and playful environment and ensure both children and parents are educated about maintaining good oral health. We make sure kids are free from thumb sucking, nail biting, lip biting habits and monitor proper growth and development of teeth.",
    },
    {
      question: "What is involved in a smile makeover?",
      answer:
        "A smile makeover combines multiple treatments including bonding for minor flaws like chipped or cracked teeth, veneers and metal-free ceramic crowns for repairs, gum recontouring with LASERs for uneven gumlines, instant tooth whitening, tooth recontouring for shape and size alterations, and replacement of 'black-line' crowns. We also offer LASER depigmentation of gums for a natural and uniform color. Our carefully selected team of aesthetic dentists and specialists work together in orchestrated sync to ensure breathtaking outcomes.",
    },
    {
      question: "How do you handle gum disease treatment?",
      answer:
        "We offer comprehensive gum disease treatments ranging from basic procedures to advanced surgeries. This includes scaling and polishing, root planning or curettage, flap surgery, gingival grafts (periodontal plastic surgery), and bone grafts. Gum disease should be treated at the earliest as it can progress from mild gingivitis to severe periodontitis affecting bone support. Signs include redness, swelling, pain, receding gums, shaking teeth, pus, and persistent bad breath. Regular professional clean-ups every 6 months help prevent gum problems.",
    },
    {
      question: "What is preventive dentistry and why is it important?",
      answer:
        "At CLINICA, we believe that prevention is better than cure. Preventive dentistry helps intercept oral diseases early, preventing their development into serious conditions. This includes addressing irregularities in teeth, cavity-prone teeth, development of aesthetic facial structure, proper speech, and avoiding oral habits like thumb sucking and nail biting. We maintain lifetime dental records to track oral health progress and plan preventive treatments accordingly. Early interception through specialized dentists can prevent a lifetime of bad oral health.",
    },
    {
      question: "What options do you offer for full mouth rehabilitation?",
      answer:
        "Full mouth rehabilitation can include various treatments depending on your needs. For replacing all teeth with dental implants, we can use two to ten implants based on bone condition and other factors. We offer All-on-Four, All-on-Six, All-on-Eight or All-on-X techniques for complete teeth replacement. The procedure can take 10-15 years off your facial age and restore your ability to enjoy all foods while providing natural appearance and complete functions of chewing and speaking.",
    },
    {
      question: "How safe is your laser teeth whitening procedure?",
      answer:
        "Our laser teeth whitening is completely safe and professionally performed by LASER specialists. The procedure takes just 45 minutes, with the peroxide-based agent effectively removing deep stains. We use special barriers to protect your gums and lips during the treatment. The results are guaranteed to last up to 2 years, making it a highly cost-effective solution for a brighter smile. The laser bleaching is more effective and stays for longer period compared to other methods.",
    },
  ];

  const dentalTestimonials = [
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
        title="Smile Beautifully,"
        subtitle="Chew Confidently"
        description="Advanced dental care treatments designed to restore your smile and improve your oral health with personalized, expert care. Our responsibility towards you begins much before you sit on the dental chair."
        backgroundImage="/images/cosmetic-dentist.jpg"
        tagText="Premium Dental Care"
        tagIcon={Smile}
        primaryButtonText="View Treatments"
        primaryButtonIcon={Calendar}
        primaryButtonLink="#treatments"
        secondaryButtonText="Book Consultation"
        secondaryButtonIcon={Play}
        secondaryButtonLink="https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D"
        stats={[
          { number: "30k+", label: "Successful Treatments" },
          { number: "99%", label: "Patient Satisfaction" },
          { number: "12+", label: "Years Experience" },
          { number: "EMI Options", label: "Available" },
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

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-[#815A93]/10 to-[#e3c19d]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Why Choose CLINICA
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Top-Quality Care That{" "}
              <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                Truly Lasts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CLINICA, we go beyond just cosmetic improvements. We understand
              that restorative and prosthetic dentistry is about much more than
              just looks—it&#39;s about restoring your dental function, preserving
              oral health, and improving your quality of life.
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
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5 rounded-2xl p-8 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Treatments Overview */}
      <section
        id="treatments"
        className="py-20 lg:py-32 bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5"
      >
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
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
                <div className="p-6 flex flex-col flex-grow">
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
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {treatment.keyBenefitsLabel || "Key Benefits:"}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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
                    className="mt-auto"
                  >
                    <Link
                      href="https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D"
                      target="_blank"
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
      <section className="py-20 lg:py-32 bg-white">
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
            {additionalTreatments.map((treatment) => {
              const isExpanded = expandedCard === treatment.title;
              const truncatedDescription =
                treatment.description.slice(0, 200) +
                (treatment.description.length > 200 ? "..." : "");

              return (
                <motion.div
                  key={treatment.title}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 flex flex-col h-full cursor-pointer"
                  onClick={() =>
                    setExpandedCard(isExpanded ? null : treatment.title)
                  }
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
                  <div className="flex-grow">
                    <AnimatePresence initial={false}>
                      <motion.div
                        initial={{ height: "auto" }}
                        animate={{ height: "auto" }}
                        exit={{ height: "auto" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {isExpanded
                            ? treatment.description
                            : truncatedDescription}
                        </p>
                        {treatment.benefits && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                          >
                            <h5 className="font-semibold text-gray-900 mb-3">
                              {treatment.keyBenefitsLabel || "Key Benefits:"}
                            </h5>
                            <div className="grid grid-cols-1 gap-2">
                              {treatment.benefits.map(
                                (benefit: string, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-600">
                                      {benefit}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                        {treatment.details && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-gray-50 rounded-lg mt-4"
                          >
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {treatment.details}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center mt-4">
                      <button
                        className="flex items-center space-x-1 text-[#815A93] hover:text-[#e3c19d] transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(isExpanded ? null : treatment.title);
                        }}
                      >
                        <span>{isExpanded ? "Show Less" : "Read More"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trust CLINICA for top-quality care, expert guidance, and
                  personalized dental solutions that truly stand the test of
                  time. Restoring your smile has never been easier!
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

      {/* Enhanced CTA Section */}
      <Cta />
    </div>
  );
}
