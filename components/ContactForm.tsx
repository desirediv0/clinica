"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Send, Calendar } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  tagText?: string;
  tagColor?: string;
  titleGradientFrom?: string;
  titleGradientTo?: string;
  buttonText?: string;
  successMessage?: string;
  successSubtitle?: string;
}

export default function ContactForm({
  title = "Book Your Appointment",
  subtitle = "Get in touch with us today",
  tagText = "Get In Touch",
  tagColor = "from-[#e3c19d] to-[#815A93] text-[#815A93]",
  titleGradientFrom = "from-[#815A93]",
  titleGradientTo = "to-[#e3c19d]",
  buttonText = "Book Appointment",
  successMessage = "Redirecting to Booking...",
  successSubtitle = "You will be redirected to our secure booking system.",
}: ContactFormProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleBookingRedirect = () => {
    setIsRedirecting(true);
    // Redirect to Pappyjoe booking widget
    window.open(
      "https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D",
      "_blank"
    );
    // Reset after a short delay
    setTimeout(() => {
      setIsRedirecting(false);
    }, 2000);
  };

  const handleContactRedirect = () => {
    setIsRedirecting(true);
    // Redirect to Pappyjoe booking widget
    window.open(
      "https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D",
      "_blank"
    );
    // Reset after a short delay
    setTimeout(() => {
      setIsRedirecting(false);
    }, 2000);
  };

  return (
    <div className="mb-8">
      <span
        className={`inline-block bg-gradient-to-r ${tagColor} font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 text-black`}
      >
        {tagText}
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {title}{" "}
        <span
          className={`bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent`}
        >
          {subtitle}
        </span>
      </h2>

      {isRedirecting ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {successMessage}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {successSubtitle}
          </p>
          <div className="flex items-center justify-center space-x-2 text-[#815A93]">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">We appreciate your trust in us</span>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Choose Your Option
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Click below to book your appointment or send us a message
                through our secure booking system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBookingRedirect}
                disabled={isRedirecting}
                className="w-full bg-gradient-to-r from-[#815A93] to-[#e3c19d] hover:from-[#6a4a7a] hover:to-[#c9ab85] text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">Book Appointment</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactRedirect}
                disabled={isRedirecting}
                className="w-full bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#c9ab85] hover:to-[#6a4a7a] text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Send className="w-6 h-6" />
                  <span className="text-lg">Send Message</span>
                </div>
              </motion.button>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                What to expect:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Secure booking system powered by Pappyjoe</li>
                <li>• Easy appointment scheduling</li>
                <li>• Direct communication with our team</li>
                <li>• Quick response within 24 hours</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
