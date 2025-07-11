"use client";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function FaqPage() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (title: string) => {
    if (expandedFaq === title) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(title);
    }
  };

  const faqs = [
    {
      category: "Dental Care",
      questions: [
        {
          title: "What dental treatments do you offer?",
          answer:
            "We offer a comprehensive range of dental treatments including dental implants, root canal treatments, cosmetic dentistry, orthodontics, laser teeth whitening, and full mouth rehabilitation. Our services are designed to address both functional and aesthetic dental concerns.",
        },
        {
          title: "Is the root canal treatment painful?",
          answer:
            "No, our root canal treatments are completely painless. We use advanced technology and local anesthesia to ensure you're comfortable throughout the procedure. Most treatments are completed within 30 minutes by our experts.",
        },
        {
          title: "How long do dental implants last?",
          answer:
            "Dental implants are a permanent solution with proper care. They can last a lifetime when maintained well with good oral hygiene and regular dental check-ups. The success rate of our dental implants is over 98%.",
        },
        {
          title: "What types of braces do you offer?",
          answer:
            "We offer various types of braces including metal braces, ceramic braces, self-ligating braces, clear aligners, and lingual braces. The choice depends on your specific needs, lifestyle, and preferences.",
        },
        {
          title: "How long does teeth whitening last?",
          answer:
            "Professional laser teeth whitening results can last up to 2 years with proper maintenance. The longevity depends on your oral hygiene, dietary habits, and lifestyle factors like smoking or consuming staining beverages.",
        },
      ],
    },
    {
      category: "Skin Treatments",
      questions: [
        {
          title: "What skin treatments are available?",
          answer:
            "We offer a wide range of skin treatments including chemical peels, hydrafacial, carbon peel, microneedling, skin tag removal, and laser hair reduction. Each treatment is customized to address your specific skin concerns.",
        },
        {
          title: "Is chemical peel safe for all skin types?",
          answer:
            "Chemical peels are generally safe for most skin types, but the strength and type of peel are carefully selected based on your skin type, concerns, and sensitivity. We perform a thorough skin analysis before recommending any treatment.",
        },
        {
          title: "How many sessions of laser hair reduction are needed?",
          answer:
            "The number of sessions varies by individual, but typically 6-8 sessions are recommended for optimal results. Factors like hair thickness, skin type, and treatment area affect the number of sessions needed.",
        },
        {
          title: "What is the recovery time for microneedling?",
          answer:
            "Recovery time for microneedling is typically 2-3 days. You may experience some redness and mild swelling immediately after the treatment, but these effects usually subside quickly.",
        },
        {
          title: "How often should I get a HydraFacial?",
          answer:
            "For optimal results, we recommend getting a HydraFacial every 4-6 weeks. However, the frequency can be adjusted based on your skin type, concerns, and goals.",
        },
      ],
    },
    {
      category: "General Questions",
      questions: [
        {
          title: "What are your clinic timings?",
          answer:
            "Our clinic is open from 12 PM to 9 PM every day except Wednesday. We recommend booking an appointment in advance to ensure convenient scheduling.",
        },
        {
          title: "Do you accept insurance?",
          answer:
            "Yes, we accept most major insurance plans for dental treatments. Please contact our office with your insurance information for verification of coverage.",
        },
        {
          title: "How do I book an appointment?",
          answer:
            "You can book an appointment through our website, by calling us at +91 70071 45918, or by visiting our clinic. We also offer online consultations for initial assessments.",
        },
        {
          title: "What safety protocols do you follow?",
          answer:
            "We follow strict sterilization and safety protocols. All our equipment is sterilized after each use, and we maintain high standards of hygiene throughout the clinic. We also follow all COVID-19 safety guidelines.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3c19d]/5 to-[#815A93]/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93] font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our dental and skin
            treatments. If you don't find what you're looking for, feel free to
            contact us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <motion.div
                    key={faq.title}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.title)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {faq.title}
                      </h3>
                      {expandedFaq === faq.title ? (
                        <ChevronUp className="w-5 h-5 text-[#815A93]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#815A93]" />
                      )}
                    </button>
                    {expandedFaq === faq.title && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
