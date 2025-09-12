"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle, Star, Users, Zap, Sparkles, Heart, Smile, MapPin, Shield, Award } from "lucide-react";
const Expert = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleCard = (title: string) => {
        if (expandedCard === title) {
            setExpandedCard(null);
        } else {
            setExpandedCard(title);
        }
    };
    const experts = [
        {
            name: "Dr. Anjum Sehar",
            specialization: "Laser Specialist | Smile Makeover Expert | Oral Cancer Specialist | Radiologist | Cosmetologist",
            experience: "12+ Years",
            image: "/images/Dr-anjum.JPG",
            description: "With over 12 years of extensive clinical experience, known for precision, expertise, and patient-centric approach",
            credentials: "BDS, MDS",
            fullDescription: "Dr. Anjum Sehar is a highly accomplished dental surgeon known for her precision, expertise, and patient-centric approach. A graduate and postgraduate from BBD University, Lucknow, Dr. Sehar has also held leadership roles including Centre Head and Zonal Clinical Manager at Clove Dental, one of India's leading dental chains. As a Radiologist and Oral Cancer Specialist, she is proficient in diagnosing and managing a wide range of oral health issues, including oral cysts, tumors, precancerous conditions, TMJ disorders, and oral cancers, with a strong emphasis on non-surgical treatments. As a certified Laser Specialist, she effectively treats conditions such as Oral Leukoplakia, Oral Submucous Fibrosis (OSMF), Oral Lichen Planus, Gingival enlargements, Crown lengthening, Fibromas and mucoceles, and Recurrent oral ulcers. Her finesse in cosmetic dentistry also sets her apart. As a Smile Makeover Expert, she offers cutting-edge treatments like Veneers and Laminates, Laser teeth whitening, and Laser gum depigmentation—all with a focus on delivering painless and aesthetically pleasing results. In addition, Dr. Sehar is trained in facial aesthetics and offers advanced cosmetology treatments such as Facial rejuvenation, Chemical peels, Medifacials and Hydrafacial, Microneedling, and MNRF. Dr Anjum Sehar is said to have golden hands by her patients due to her precise and Painless RCT's. She is thus regarded as the Best Dentist in Delhi by her patients. Driven by academic excellence, she regularly attends national and international conferences and has contributed to various research publications in areas such as CBCT, MRI, LASERS. She has done certified courses on Implantology (All-on-4 & All-on-6 systems). She was also recognized as the Best All-Rounder Student during her graduation and ranked 2nd in her batch. Dr. Anjum Sehar is passionate about providing holistic dental care backed by the latest advancements. Her unwavering commitment to quality, comfort, and precision ensures her patients always leave with healthier, more confident smiles. She is considered as Best Dentist In Dwarka, Delhi.",
            highlights: [
                "12+ Years of Experience",
                "3000+ Laser Treatments",
                "5000+ Root Canal Procedures",
                "6000+ Crowns, Bridges & Veneers",
                "500+ Post & Core Restorations",
                "1000+ Teeth Whitening Procedures",
                "5000+ Gum Depigmentation Cases",
                "500+ Gum Repositioning Surgeries",
                "15,000+ Dental Fillings",
                "3000+ Cancerous & Precancerous Diagnoses & Treatments"
            ],
            laserTreatments: [
                "Oral Leukoplakia",
                "Oral Submucous Fibrosis (OSMF)",
                "Oral Lichen Planus",
                "Gingival enlargements",
                "Crown lengthening",
                "Fibromas and mucoceles",
                "Recurrent oral ulcers"
            ],
            cosmeticTreatments: [
                "Veneers and Laminates",
                "Laser teeth whitening",
                "Laser gum depigmentation",
                "Facial rejuvenation",
                "Chemical peels",
                "Medifacials and Hydrafacial",
                "Microneedling",
                "MNRF"
            ],
            expertise: [
                "Laser treatments for oral conditions",
                "Painless root canal treatments",
                "Smile makeovers with veneers",
                "Facial aesthetics and cosmetology",
                "Oral cancer diagnosis and treatment",
                "Oral radiological interpretations",
                "CBCT and MRI diagnostics",
                "Implantology (All-on-4 & All-on-6 systems)",
                "Non-surgical oral cancer treatments",
                "TMJ disorder management"
            ]
        },
        {
            name: "Dr. Reshu Jindal Goyal",
            specialization: "Consultant Orthodontist | Invisalign Certified Specialist",
            experience: "10+ Years",
            image: "/images/Dr-reshu.jpeg",
            description: "Smile Architect for All Ages - highly skilled and compassionate orthodontist committed to crafting healthy, confident smiles",
            credentials: "BDS, MDS Orthodontics",
            fullDescription: "Dr. Reshu Jindal Goyal is a highly skilled and compassionate orthodontist committed to crafting healthy, confident smiles for children, teens, and adults. With over a decade of clinical experience, she specializes in the diagnosis, prevention, and correction of dental and facial irregularities using modern, evidence-based orthodontic techniques. She completed her Master's in Orthodontics from the prestigious Nair Hospital Dental College, Mumbai—a globally recognized institute ranked as the 'Best in Asia' by the Pierre Fauchard Academy (USA).",
            highlights: [
                "10+ Years of Experience",
                "Invisalign Certified Provider",
                "Master's from Nair Hospital, Mumbai",
                "Former Assistant Professor, GDC Mumbai",
                "Former Senior Orthodontist, Clove Dental",
                "Smile Architect for All Ages",
                "Best in Asia institute graduate"
            ],
            orthodonticTreatments: [
                "Traditional metal & ceramic braces",
                "Damon & self-ligating braces",
                "Clear aligner therapy (Invisalign, Straumann & more)",
                "Myofunctional therapy & dentofacial orthopedics",
                "Growth modification in children",
                "Complex malocclusion & cleft lip/palate cases"
            ],
            currentPositions: [
                "Aakash Hospital",
                "Clinica Dental and Skin",
                "Empyrean Dental Clinic",
                "Smiles Unlimited Dental Clinic",
                "Balaji Dental Clinic",
                "Vamika Dental Clinic"
            ],
            expertise: [
                "Traditional metal & ceramic braces",
                "Clear aligner therapy (Invisalign)",
                "Damon & self-ligating braces",
                "Growth modification in children",
                "Complex malocclusion treatments"
            ]
        },
        {
            name: "Dr. Kanika Sharma",
            specialization: "Pediatric Dentistry Specialist",
            experience: "8+ Years",
            image: "/images/Dr-kanika.jpeg",
            description: "Renowned pediatric dentist specializing in dental care for infants, children, adolescents, adults and special health care needs",
            credentials: "BDS, MDS Pediatric Dentistry",
            fullDescription: "Dr Kanika Sharma is a renowned pediatric dentist in Delhi with more than 8 years of experience in providing dental care to infants, children, adolescents, adults and those with special health care needs. She engages with patients to better understand their concerns and offer them a personalized treatment based on their specific requirements, lifestyle and recovery goals. She also educates parents and children about proper oral hygiene practices, diet, and the importance of preventive treatments and regular dental check ups.",
            highlights: [
                "8+ Years of Experience",
                "Pediatric Dental Specialist",
                "Expert in Children's Dental Care",
                "Special Health Care Needs Expert",
                "Preventive Treatment Focus",
                "Patient Education Specialist"
            ],
            pediatricServices: [
                "Pediatric Dental Counselling",
                "Preventive Dentistry",
                "Interceptive Orthodontics",
                "Restorative Dentistry",
                "Endodontics",
                "Exodontia",
                "Dental Trauma",
                "Sports Dentistry"
            ],
            expertise: [
                "Pediatric dental counselling",
                "Preventive dentistry for children",
                "Interceptive orthodontics",
                "Dental trauma management",
                "Sports dentistry"
            ]
        },
        {
            name: "Dr. Satya Prakash",
            specialization: "Oral & Maxillofacial Surgeon | Implantologist",
            experience: "14+ Years",
            image: "/images/Dr-satya.jpeg",
            description: "Facial Trauma Expert - highly skilled Oral Surgeon with expertise in complex surgical procedures and full mouth rehabilitation",
            credentials: "BDS, MDS Oral & Maxillofacial Surgery",
            fullDescription: "Dr. Prakash is a highly skilled Oral Surgeon, Implantologist and Oral and Maxillofacial trauma expert with over 14 years of rich clinical experience. His expertise spans across all age groups, from newborns with congenital deformities to elderly patients with conditions like Oral Cancer. Dr Satya Prakash is a visiting consultant in various cities of India. He is one stop solution to strategic Implants, Full Mouth Dental Implants and Immediate Functional loading of Implants within Days, even in no bone cases. Dr Prakash, due to his kind and humble nature is loved by his patients and team.",
            highlights: [
                "14+ Years of Experience",
                "Oral & Maxillofacial Surgeon",
                "Expert Implantologist",
                "Facial Trauma Specialist",
                "Full Mouth Rehabilitation Expert",
                "Visiting Consultant in Multiple Cities",
                "Immediate Functional Loading Specialist"
            ],
            surgicalProcedures: [
                "Wisdom tooth extractions",
                "Disimpaction",
                "Dental Implants And Full Mouth Rehab",
                "TMJ Disorders",
                "Oral Cancer Removal",
                "Facial Reconstruction after trauma",
                "Facial reconstruction in congenital deformities",
                "Removal of Cysts and Tumors of Jaws"
            ],
            expertise: [
                "Dental implants and full mouth rehab",
                "Wisdom tooth extractions",
                "Facial reconstruction surgery",
                "TMJ disorder treatment",
                "Oral cancer removal"
            ]
        },
    ];

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
    return (

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
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
                        Meet Our Specialists -{" "}
                        <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                            Best Dentists in Dwarka, Delhi
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
                    className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {experts.map((expert) => (
                        <motion.div
                            key={expert.name}
                            variants={scaleIn}
                            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 max-h-min"
                        >
                            <div className="relative md:h-[500px] overflow-hidden">
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    width={500}
                                    height={500}
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 mx-auto"

                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                                        {expert.name}
                                    </h3>
                                    <p className="text-white/95 text-base font-medium drop-shadow-md">
                                        {expert.credentials}
                                    </p>
                                </div>
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/25 backdrop-blur-md text-gray-500 px-4 py-2 rounded-full text-base font-semibold border border-white/40 shadow-lg">
                                        {expert.experience}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <p className="text-[#815A93] font-medium text-sm mb-2">
                                        {expert.specialization}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {expert.description}
                                    </p>
                                </div>

                                <AnimatePresence>
                                    {expandedCard === expert.name && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-gray-100 pt-4 space-y-4 max-h-80 overflow-y-auto">
                                                {/* Full Description */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2 text-sm">
                                                        <Users className="w-4 h-4 text-[#815A93]" />
                                                        <span>Professional Background:</span>
                                                    </h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                                                        {expert.fullDescription}
                                                    </p>
                                                </div>

                                                {/* Clinical Highlights */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                        <Star className="w-4 h-4 text-[#815A93]" />
                                                        <span>Clinical Achievements:</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {expert.highlights.map((highlight, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start space-x-2 bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 p-2 rounded-lg"
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-[#815A93] mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Specific Services based on doctor */}
                                                {expert.name === "Dr. Anjum Sehar" && (
                                                    <>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                                <Zap className="w-4 h-4 text-[#815A93]" />
                                                                <span>Laser Treatments Expertise:</span>
                                                            </h4>
                                                            <div className="grid grid-cols-1 gap-2">
                                                                {expert.laserTreatments?.map((treatment, idx) => (
                                                                    <div key={idx} className="flex items-start space-x-2 bg-blue-50 p-2 rounded-lg">
                                                                        <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                                        <span className="text-gray-700 text-sm">{treatment}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                                <Sparkles className="w-4 h-4 text-[#815A93]" />
                                                                <span>Cosmetic & Aesthetic Treatments:</span>
                                                            </h4>
                                                            <div className="grid grid-cols-1 gap-2">
                                                                {expert.cosmeticTreatments?.map((treatment, idx) => (
                                                                    <div key={idx} className="flex items-start space-x-2 bg-pink-50 p-2 rounded-lg">
                                                                        <Heart className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                                                                        <span className="text-gray-700 text-sm">{treatment}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                                {expert.name === "Dr. Reshu Jindal Goyal" && (
                                                    <>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                                <Smile className="w-4 h-4 text-[#815A93]" />
                                                                <span>Orthodontic Treatment Options:</span>
                                                            </h4>
                                                            <div className="grid grid-cols-1 gap-2">
                                                                {expert.orthodonticTreatments?.map((treatment, idx) => (
                                                                    <div key={idx} className="flex items-start space-x-2 bg-green-50 p-2 rounded-lg">
                                                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                                        <span className="text-gray-700 text-sm">{treatment}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                                <MapPin className="w-4 h-4 text-[#815A93]" />
                                                                <span>Practice Locations:</span>
                                                            </h4>
                                                            <div className="grid grid-cols-1 gap-2">
                                                                {expert.currentPositions?.map((position, idx) => (
                                                                    <div key={idx} className="flex items-start space-x-2 bg-purple-50 p-2 rounded-lg">
                                                                        <MapPin className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                                                        <span className="text-gray-700 text-sm font-medium">{position}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                                {expert.name === "Dr. Kanika Sharma" && (
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                            <Heart className="w-4 h-4 text-[#815A93]" />
                                                            <span>Pediatric Specialization Areas:</span>
                                                        </h4>
                                                        <div className="grid grid-cols-1 gap-2">
                                                            {expert.pediatricServices?.map((service, idx) => (
                                                                <div key={idx} className="flex items-start space-x-2 bg-yellow-50 p-2 rounded-lg">
                                                                    <Heart className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-gray-700 text-sm font-medium">{service}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {expert.name === "Dr. Satya Prakash" && (
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                            <Shield className="w-4 h-4 text-[#815A93]" />
                                                            <span>Surgical Procedures & Expertise:</span>
                                                        </h4>
                                                        <div className="grid grid-cols-1 gap-2">
                                                            {expert.surgicalProcedures?.map((procedure, idx) => (
                                                                <div key={idx} className="flex items-start space-x-2 bg-red-50 p-2 rounded-lg">
                                                                    <Shield className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-gray-700 text-sm font-medium">{procedure}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Core Expertise */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                                                        <Award className="w-4 h-4 text-[#815A93]" />
                                                        <span>Key Areas of Expertise:</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {expert.expertise.map((item, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start space-x-2 bg-indigo-50 p-2 rounded-lg"
                                                            >
                                                                <Award className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-700 text-sm font-medium">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    onClick={() => toggleCard(expert.name)}
                                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                                >
                                    <span>
                                        {expandedCard === expert.name
                                            ? "Show Less Details"
                                            : "View Full Profile"}
                                    </span>
                                    {expandedCard === expert.name ? (
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
    )
}

export default Expert
