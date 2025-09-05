
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Calendar,
    Phone,
    MapPin,
    Star,
    CheckCircle,
    Award,
    Users,
    Shield,
    Zap,
    Heart,
    Clock,
    ChevronDown,
    ChevronUp,
    Plane,
    Globe,
    Mail,
    Stethoscope,
    FileText,
    CreditCard,
    ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

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

const OverseasPatients = () => {
    const [expandedStep, setExpandedStep] = useState<string | null>(null);

    const toggleStep = (stepId: string) => {
        if (expandedStep === stepId) {
            setExpandedStep(null);
        } else {
            setExpandedStep(stepId);
        }
    };
    const treatmentProcess = [
        {
            step: "01",
            title: "Dental History Analysis",
            description: "Send us your complete dental history with X-rays, images, and medical records for comprehensive evaluation.",
            icon: FileText,
            duration: "24-48 hours",
            color: "from-[#815A93] to-[#e3c19d]",
            details: [
                "Name, Age, Sex details",
                "Detailed dental issue description",
                "Upload dental X-rays or images",
                "Past dental records submission",
                "Doctor's prescriptions (if any)"
            ]
        },
        {
            step: "02",
            title: "E-Consultation with Specialist",
            description: "Virtual consultation with our head specialist before confirming your trip to discuss treatment plan and costs.",
            icon: Stethoscope,
            duration: "30-60 minutes",
            color: "from-[#e3c19d] to-[#815A93]",
            details: [
                "Treatment plan discussion",
                "Tentative cost estimation",
                "Treatment duration planning",
                "Audio/Video consultation available",
                "Non-obligatory consultation"
            ]
        },
        {
            step: "03",
            title: "Travel Planning & Logistics",
            description: "Confirm your dates and we'll organize everything from airport pickup to accommodation near our clinic.",
            icon: Plane,
            duration: "Full assistance",
            color: "from-[#815A93] to-[#e3c19d]",
            details: [
                "Airport pickup/drop arrangements",
                "Hotel booking assistance",
                "Appointment scheduling",
                "Personal relationship manager",
                "Local area guidance"
            ]
        },
        {
            step: "04",
            title: "Personal Care & Support",
            description: "Complete assistance with visa requirements, travel insurance, currency exchange and local support.",
            icon: Heart,
            duration: "Throughout stay",
            color: "from-[#e3c19d] to-[#815A93]",
            details: [
                "Visa requirement assistance",
                "Flight selection guidance",
                "Travel insurance support",
                "Local mobile number setup",
                "Currency exchange help"
            ]
        },
        {
            step: "05",
            title: "Advanced Dental Treatment",
            description: "World-class dental care in our state-of-the-art facility with internationally trained specialists.",
            icon: Award,
            duration: "As per plan",
            color: "from-[#815A93] to-[#e3c19d]",
            details: [
                "International standard equipment",
                "Advanced dental technologies",
                "Internationally trained specialists",
                "Luxurious treatment environment",
                "Comprehensive dental care"
            ]
        }
    ];

    const whyClinicaAdvantages = [
        {
            icon: Award,
            title: "Personalized Care & Service",
            description: "World-class infrastructure with customized service and personal care for international patients.",
            highlights: [
                "Individual attention to every patient",
                "Time-efficient treatment planning",
                "Special care for overseas patients",
                "Customized treatment packages"
            ]
        },
        {
            icon: Clock,
            title: "Advanced Planning",
            description: "Carefully planned treatment schedules to achieve excellent results at accelerated pace.",
            highlights: [
                "Pre-planned treatment timelines",
                "No waiting time for patients",
                "Educated treatment planning",
                "Predictable excellent results"
            ]
        },
        {
            icon: Shield,
            title: "International Standards",
            description: "Strict international sterilization protocols with latest technology and quality materials.",
            highlights: [
                "International infection control",
                "Latest dental technology",
                "Top quality materials and tools",
                "Continuous education updates"
            ]
        },
        {
            icon: Globe,
            title: "Global Recognition",
            description: "Multiple award-winning dentists with international credentials and recognition.",
            highlights: [
                "4.9 GCR Global Clinical Rating",
                "English speaking staff",
                "World-class dentistry",
                "Affordable premium costs"
            ]
        }
    ];

    const dentalTourismBenefits = [
        {
            title: "Cost Effective Treatment",
            description: "World-class dental care at 60-80% lower costs compared to western countries.",
            icon: CreditCard,
            stats: "Save up to 80%"
        },
        {
            title: "No Waiting Lists",
            description: "Immediate treatment availability without long waiting periods.",
            icon: Clock,
            stats: "Instant availability"
        },
        {
            title: "Advanced Technology",
            description: "Latest dental equipment and techniques from USA and Europe.",
            icon: Zap,
            stats: "International grade"
        },
        {
            title: "English Speaking Doctors",
            description: "Fluent English speaking doctors and staff for clear communication.",
            icon: Users,
            stats: "Clear communication"
        },
        {
            title: "Tourism Combined",
            description: "Combine your dental treatment with exploring incredible India.",
            icon: MapPin,
            stats: "Holiday + Treatment"
        },
        {
            title: "International Materials",
            description: "Only proven, internationally recognized dental materials used.",
            icon: CheckCircle,
            stats: "Global standards"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Enhanced Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
                <div className="relative z-10 container mx-auto text-center">
                    <Hero
                        title="World-Class Dental Tourism"
                        subtitle="in the Heart of India"
                        description="Experience premium dental care combined with incredible Indian hospitality. Our international patients receive personalized treatment plans, comprehensive support, and world-class dental care at affordable prices."
                        backgroundImage="/images/homepagebanner.jpg.avif"
                        tagText="Dental Tourism Excellence"
                        tagIcon={Globe}
                        primaryButtonText="Plan Your Treatment"
                        primaryButtonIcon={Calendar}
                        primaryButtonLink="#treatment-process"
                        secondaryButtonText="E-Consultation"
                        secondaryButtonIcon={Stethoscope}
                        secondaryButtonLink="https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D"
                        stats={[
                            { number: "EMI Options", label: "Available" },
                            { number: "30k+", label: "Successful Treatments" },
                            { number: "12+", label: "Years Experience" },
                            { number: "99%", label: "Success Rate" },
                        ]}
                        subtitleColor="text-[#815A93]"
                    />
                </div>
            </section>
            {/* Why Delhi for Dental Tourism Section */}
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
                            Dental Tourism in Delhi
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose{" "}
                            <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                                Delhi, India
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Delhi stands as the premier destination for dental tourism, offering world-class healthcare, rich culture, and exceptional hospitality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {dentalTourismBenefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${index % 2 === 0
                                            ? "from-[#e3c19d] to-[#815A93]"
                                            : "from-[#815A93] to-[#e3c19d]"
                                            } rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6`}
                                    >
                                        <benefit.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {benefit.description}
                                    </p>
                                    <div className="mt-auto">
                                        <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] px-4 py-2 rounded-full text-sm font-medium">
                                            {benefit.stats}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Treatment Process Section */}
            <section id="treatment-process" className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-white text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-[#815A93]/20">
                            Treatment Process
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Your{" "}
                            <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                                Treatment Journey
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We&apos;ve streamlined our process to ensure your dental tourism experience is seamless, comfortable, and successful.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-8 grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    >
                        {treatmentProcess.map((process, index) => (
                            <motion.div
                                key={process.step}
                                variants={scaleIn}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
                            >
                                <div className="p-8">
                                    <div className="flex items-start space-x-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <process.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <span className="text-3xl font-bold text-[#815A93]">
                                                    {process.step}
                                                </span>
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {process.title}
                                                </h3>
                                                <span className="inline-block bg-[#e3c19d]/10 text-[#815A93] px-3 py-1 rounded-full text-sm font-medium">
                                                    {process.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                                {process.description}
                                            </p>

                                            <AnimatePresence>
                                                {expandedStep === process.step && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="border-t border-gray-100 pt-6">
                                                            <h4 className="font-semibold text-gray-900 mb-4">
                                                                What&apos;s Included:
                                                            </h4>
                                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {process.details.map((detail, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="flex items-start space-x-3"
                                                                    >
                                                                        <CheckCircle className="w-5 h-5 text-[#815A93] mt-0.5 flex-shrink-0" />
                                                                        <span className="text-gray-600">{detail}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <motion.button
                                                onClick={() => toggleStep(process.step)}
                                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                                            >
                                                <span>
                                                    {expandedStep === process.step
                                                        ? "Show Less"
                                                        : "Learn More"}
                                                </span>
                                                {expandedStep === process.step ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why CLINICA Section */}
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
                            Why CLINICA
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Excellence in{" "}
                            <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                                Dental Tourism
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            CLINICA stands as Delhi&apos;s premier dental tourism destination, offering unparalleled care and comprehensive services for international patients.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {whyClinicaAdvantages.map((advantage, index) => (
                            <motion.div
                                key={advantage.title}
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
                            >
                                <div className="flex items-start space-x-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${index % 2 === 0
                                        ? "from-[#e3c19d] to-[#815A93]"
                                        : "from-[#815A93] to-[#e3c19d]"
                                        } rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                                        <advantage.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {advantage.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {advantage.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-[#815A93] mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Detailed Information Sections */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-[#815A93]/5 to-[#e3c19d]/5">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="mb-16"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                Dental Tourism in{" "}
                                <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
                                    Delhi, India
                                </span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="mb-6">
                                    Dental tourism combines high-quality dental care with exploring incredible destinations. Delhi offers exceptional dental treatment quality at competitive prices, making it a preferred choice for patients worldwide. Our specialized medical travel services provide comprehensive packages that include both treatment and tourism opportunities.
                                </p>
                                <p className="mb-6">
                                    <strong className="text-[#815A93]">Delhi</strong> serves as the ideal destination for dental tourism with its mystical charm, excellent infrastructure, and world-class healthcare facilities. The city&apos;s connectivity to major tourist destinations and international accessibility makes it the most visited destination in India for medical tourism.
                                </p>
                            </div>
                        </motion.div>

                        {/* Original content sections with improved styling */}
                        <div className="space-y-12">
                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInLeft}
                                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MapPin className="w-6 h-6 text-[#815A93] mr-3" />
                                    Why Delhi for Dental Tourism
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Highly qualified and experienced Doctors",
                                        "Internationally Accredited Facilities",
                                        "Fluent English Speaking Doctors",
                                        "Ease of Access and Safety",
                                        "Plenty to See and Do",
                                        "Famous for great Food"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-[#815A93] flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInRight}
                                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Award className="w-6 h-6 text-[#815A93] mr-3" />
                                    World Class Materials & Equipment
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Premium Materials We Use:</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Fillings – Composite teeth coloured fillings from 3M (USA) and Ivoclar(Germany)",
                                                "Teeth Whitening – Zoom Whitespeed (USA)",
                                                "Veneers – e max porcelain veneers from Ivoclar (Germany)",
                                                "Implants – Straumann (USA), Nobel Active Biocare (Sweden)",
                                                "Crowns and Bridges – Dentsply (USA) Cercon HT high strength"
                                            ].map((material, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-4 h-4 text-[#815A93] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{material}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Advanced Equipment:</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "RVG (Radiovisiography) machine from Satelec (France)",
                                                "Light cure unit from Ivoclar (Germany)",
                                                "Ultrasonic scalers from Satelec (France)",
                                                "Rotary files and reamers from Dentsply (USA)"
                                            ].map((equipment, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <Zap className="w-4 h-4 text-[#815A93] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{equipment}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInLeft}
                                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Plane className="w-6 h-6 text-[#815A93] mr-3" />
                                    Visa & Travel Information
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Medical Tourism Visa:</h4>
                                        <p className="text-gray-600 mb-4">
                                            The Government of India provides specialized medical tourist visas for foreigners seeking medical treatment.
                                            The visa validity is typically one year depending on treatment requirements.
                                        </p>
                                        <h5 className="font-semibold text-gray-900 mb-2">Required Documents:</h5>
                                        <ul className="space-y-2">
                                            {[
                                                "Medical documents, images, & prescriptions",
                                                "Details of medical/procedural plans",
                                                "Passport with 6+ months validity",
                                                "Proof of relationship (for attendants)",
                                                "Proof of residential address",
                                                "Proof of required funds"
                                            ].map((doc, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <FileText className="w-4 h-4 text-[#815A93] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{doc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInRight}
                                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <MapPin className="w-6 h-6 text-[#815A93] mr-3" />
                                    Connectivity & Accommodation
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Transportation:</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Indira Gandhi International Airport - 6th busiest in Asia",
                                                "Excellent railway connectivity via multiple stations",
                                                "Well-maintained highway network",
                                                "Comprehensive Delhi Metro system",
                                                "Easy cab services (Uber, Ola)"
                                            ].map((transport, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <ArrowRight className="w-4 h-4 text-[#815A93] mt-1 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{transport}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Accommodation:</h4>
                                        <p className="text-gray-600 mb-4">
                                            Wide range of accommodation options from budget to 5-star hotels,
                                            many within walking distance to CLINICA or easy transport access.
                                        </p>
                                        <div className="bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 p-4 rounded-lg">
                                            <p className="text-[#815A93] font-semibold text-sm">
                                                Our team assists with accommodation booking near our clinic for your convenience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & Support Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
                    >
                        <motion.div variants={slideInLeft}>
                            <ContactForm
                                title="Plan Your Dental"
                                subtitle="Tourism Journey"
                                tagText="International Patients"
                                tagColor="from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93]"
                                titleGradientFrom="from-[#815A93]"
                                titleGradientTo="to-[#e3c19d]"
                                buttonText="Start Planning"
                                successMessage="Thank You for Your Interest!"
                                successSubtitle="Our international patient coordinator will contact you within 24 hours to begin planning your dental tourism journey."
                            />
                        </motion.div>

                        <motion.div variants={slideInRight}>
                            <div className="mb-8">
                                <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                                    International Support
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    24/7{" "}
                                    <span className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] bg-clip-text text-transparent">
                                        Patient Support
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Our dedicated international patient care team provides comprehensive support throughout your dental tourism journey.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Phone,
                                        title: "International Helpline",
                                        content: "+91 70071 45918",
                                        subtext: "Available 24/7 for international patients",
                                        color: "from-[#e3c19d] to-[#815A93]",
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email Support",
                                        content: "international@clinicadelhi.com",
                                        subtext: "Detailed queries and document submission",
                                        color: "from-[#815A93] to-[#e3c19d]",
                                    },
                                    {
                                        icon: Globe,
                                        title: "WhatsApp Support",
                                        content: "+91 70071 45918",
                                        subtext: "Instant messaging and video consultations",
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
                                            <p className="text-gray-600 leading-relaxed mb-1 font-semibold">
                                                {contact.content}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {contact.subtext}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="mt-10 p-6 bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 rounded-2xl border border-[#815A93]/20"
                            >
                                <h3 className="text-lg font-bold text-[#815A93] mb-2">
                                    Lifetime Warranty & Telemedicine
                                </h3>
                                <p className="text-gray-600">
                                    We maintain lifelong relationships with our patients, offering lifetime warranties on our work and ongoing telemedicine support for any future dental concerns.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>



            {/* FAQ Section */}
            <Faq
                title="Dental Tourism FAQ"
                subtitle="Everything you need to know about getting dental treatment abroad at CLINICA."
                tagText="International Patients"
                tagColor="from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93]"
                titleGradientFrom="from-[#815A93]"
                titleGradientTo="to-[#e3c19d]"
                faqs={[
                    {
                        question: "How do I plan my dental tourism trip to Delhi?",
                        answer: "Start by sending us your dental history and current issues. We'll provide a treatment plan and cost estimate. Our international patient coordinator will help with visa requirements, accommodation booking, and airport transfers to make your journey seamless."
                    },
                    {
                        question: "What dental treatments do you offer for international patients?",
                        answer: "We offer comprehensive dental services including implants, crowns, veneers, orthodontics, teeth whitening, root canal treatments, and complete smile makeovers. All treatments use international standard materials and equipment."
                    },
                    {
                        question: "How much can I save with dental tourism in India?",
                        answer: "Patients typically save 60-80% compared to dental costs in Western countries. For example, dental implants that cost $3000-5000 in the US or UK are available for $800-1200 at CLINICA, without compromising on quality."
                    },
                    {
                        question: "What visa do I need for dental treatment in India?",
                        answer: "You can apply for a Medical Tourism Visa or regular Tourist Visa. Medical visas are valid for up to one year depending on treatment duration. We provide all necessary documentation to support your visa application."
                    },
                    {
                        question: "How long should I stay for my dental treatment?",
                        answer: "Treatment duration varies by procedure. Simple treatments like cleanings or fillings require 1-2 days, while complex procedures like implants or full mouth rehabilitation may need 7-14 days. We provide detailed timelines during consultation."
                    },
                    {
                        question: "Do you provide follow-up care after I return home?",
                        answer: "Yes! We offer lifetime warranties on our work and provide telemedicine support for any post-treatment concerns. We also coordinate with local dentists in your area if follow-up visits are needed."
                    },
                    {
                        question: "What safety and hygiene standards do you follow?",
                        answer: "We maintain international sterilization protocols and use equipment from leading global manufacturers. Our clinic follows strict infection control measures, and our doctors are internationally trained with continuous education updates."
                    },
                    {
                        question: "Can you help with accommodation and transportation?",
                        answer: "Absolutely! We assist with booking hotels near our clinic, arrange airport transfers, and provide local transportation recommendations. Our team ensures you have a comfortable stay throughout your treatment period."
                    }
                ]}
            />

            {/* CTA Section */}
            <Cta />
        </div>
    );
};

export default OverseasPatients;


