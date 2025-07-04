"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
  treatment?: string;
  service?: string;
  image?: string;
  location: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  tagText?: string;
  tagColor?: string;
  titleGradientFrom?: string;
  titleGradientTo?: string;
  testimonials: TestimonialItem[];
  backgroundClass?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Patients Say",
  subtitle = "Don't just take our word for it. Here's what our satisfied patients have to say about their transformative experience at CLINICA.",
  tagText = "Patient Stories",
  tagColor = "from-yellow-100 to-orange-100 text-orange-600",
  titleGradientFrom = "from-yellow-600",
  titleGradientTo = "to-orange-600",
  testimonials,
  backgroundClass = "bg-gradient-to-br from-gray-50 to-pink-50",
}) => {
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

  return (
    <section className={`py-20 lg:py-32 ${backgroundClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span
            className={`inline-block bg-gradient-to-r ${tagColor} font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4`}
          >
            {tagText}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span
              className={`bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent`}
            >
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 relative"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-orange-200">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-orange-600 font-medium text-sm">
                    {testimonial.treatment || testimonial.service}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
