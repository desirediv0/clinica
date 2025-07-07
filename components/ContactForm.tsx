"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Send } from "lucide-react";

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
  fields?: Array<{
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    options?: Array<{ value: string; label: string }>;
  }>;
}

export default function ContactForm({
  title = "Send us a Message",
  subtitle = "Get in touch with us today",
  tagText = "Get In Touch",
  tagColor = "from-[#e3c19d] to-[#815A93] text-[#815A93]",
  titleGradientFrom = "from-[#815A93]",
  titleGradientTo = "to-[#e3c19d]",
  buttonText = "Send Message",
  successMessage = "Message Sent Successfully!",
  successSubtitle = "Thank you for contacting CLINICA. We'll get back to you within 24 hours with a personalized response.",
  fields = [
    {
      name: "firstName",
      label: "First Name *",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name *",
      type: "text",
      placeholder: "Doe",
      required: true,
    },
    {
      name: "email",
      label: "Email Address *",
      type: "email",
      placeholder: "john.doe@example.com",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "(555) 123-4567",
    },
    {
      name: "service",
      label: "Service Interest",
      type: "select",
      placeholder: "Select a service",
      options: [
        { value: "", label: "Select a service" },
        { value: "dental-consultation", label: "Dental Consultation" },
        { value: "skin-consultation", label: "Skin Consultation" },
        { value: "dental-implants", label: "Dental Implants" },
        { value: "smile-makeover", label: "Smile Makeover" },
        { value: "chemical-peel", label: "Chemical Peel" },
        { value: "hydrafacial", label: "HydraFacial" },
        { value: "laser-hair-removal", label: "Laser Hair Removal" },
        { value: "general", label: "General Inquiry" },
      ],
    },
    {
      name: "message",
      label: "Message *",
      type: "textarea",
      placeholder:
        "Tell us about your concerns, questions, or what you'd like to achieve...",
      required: true,
    },
  ],
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({});
    }, 5000);
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

      {isSubmitted ? (
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field, index) => (
              <div
                key={field.name}
                className={
                  field.name === "firstName" || field.name === "lastName"
                    ? "grid md:grid-cols-2 gap-6"
                    : ""
                }
              >
                {field.name === "firstName" || field.name === "lastName" ? (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder={field.placeholder}
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        required={field.required}
                        rows={5}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        placeholder={field.placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        required={field.required}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#815A93] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#815A93] to-[#e3c19d] hover:from-[#6a4a7a] hover:to-[#c9ab85] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <Send className="w-5 h-5" />
                  <span>{buttonText}</span>
                </div>
              )}
            </motion.button>
          </form>
        </div>
      )}
    </div>
  );
}
