"use client";
import { useRef } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
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
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const handleReviewClick = () => {
    window.open(
      "https://www.google.com/search?q=CLINICA+Dental+and+Skin+Reviews",
      "_blank"
    );
  };

  const getInitials = (name: string) => {
    return name.split(" ")[0][0].toUpperCase();
  };

  const getRandomColor = (name: string) => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-green-100 text-green-600",
      "bg-purple-100 text-purple-600",
      "bg-pink-100 text-pink-600",
      "bg-orange-100 text-orange-600",
      "bg-teal-100 text-teal-600",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <section className={`py-20 lg:py-32 ${backgroundClass}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  onClick={handleReviewClick}
                  className="cursor-pointer group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getRandomColor(
                        testimonial.name
                      )}`}
                    >
                      <span className="text-lg font-semibold">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
