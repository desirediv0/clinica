"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Send,
  Calendar,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import IndiaAppointmentForm from "./IndiaAppointmentForm";

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
  successMessage = "Message Sent Successfully!",
  successSubtitle = "We will get back to you soon.",
}: ContactFormProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState<'none' | 'contact' | 'india'>('none');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show success message
        setShowForm('none');
        setShowSuccess(true);
        setIsSubmitting(false);
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        // Error
        setErrors({ submit: data.error || "Failed to send message" });
        setIsSubmitting(false);
      }
    } catch (error) {
      setErrors({ submit: "Network error. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handleContactClick = () => {
    setShowForm('contact');
    setShowSuccess(false);
  };

  const handleIndiaAppointmentClick = () => {
    setShowForm('india');
    setShowSuccess(false);
  };

  const handleBackToOptions = () => {
    setShowForm('none');
    setShowSuccess(false);
    setErrors({});
  };

  const handleResetSuccess = () => {
    setShowSuccess(false);
    setShowForm('none');
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
            Redirecting to Booking...
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            You will be redirected to our secure booking system.
          </p>
          <div className="flex items-center justify-center space-x-2 text-[#815A93]">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">We appreciate your trust in us</span>
          </div>
        </motion.div>
      ) : showSuccess ? (
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
          <div className="flex items-center justify-center space-x-2 text-[#815A93] mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">We appreciate your trust in us</span>
          </div>
          <motion.button
            onClick={handleResetSuccess}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#c9ab85] hover:to-[#6a4a7a] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      ) : showForm === 'none' ? (
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Choose Your Option
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Click below to book your appointment or send us a message
                through our secure contact form.
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
                onClick={handleContactClick}
                disabled={isRedirecting}
                className="w-full bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#c9ab85] hover:to-[#6a4a7a] text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Send className="w-6 h-6" />
                  <span className="text-lg">Send Message</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleIndiaAppointmentClick}
                disabled={isRedirecting}
                className="w-full bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#c9ab85] hover:to-[#6a4a7a] text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed md:col-span-2"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">Request Appointment</span>
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
                <li>• Quick response to your inquiries</li>
              </ul>
            </div>
          </div>
        </div>
      ) : showForm === 'contact' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 ${errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 ${errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 resize-none ${errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Tell us about your inquiry or concern..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                onClick={handleBackToOptions}
                disabled={isSubmitting}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                Back to Options
              </motion.button>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#c9ab85] hover:to-[#6a4a7a] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      ) : showForm === 'india' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100"
        >
          <div className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 ">
                Request Appointment
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill out the form below and we&apos;ll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
            <IndiaAppointmentForm onBack={handleBackToOptions} />
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
