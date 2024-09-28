"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "CTO, TechInnovate",
    company: "TechInnovate",
    image: "/placeholder.svg?height=400&width=300&text=ET",
    quote:
      "SoftSolutions transformed our workflow, boosting productivity by 40% in just three months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, GrowthWave",
    company: "GrowthWave",
    image: "/placeholder.svg?height=400&width=300&text=MC",
    quote:
      "The intuitive interface and powerful features have made SoftSolutions an indispensable tool for our team.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Operations Manager, SwiftScale",
    company: "SwiftScale",
    image: "/placeholder.svg?height=400&width=300&text=SJ",
    quote:
      "Customer support is top-notch. They're always there when we need them, ensuring smooth operations.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Founder, InnovateCorp",
    company: "InnovateCorp",
    image: "/placeholder.svg?height=400&width=300&text=DR",
    quote:
      "SoftSolutions' analytics tools have given us invaluable insights, driving our strategic decisions.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Client Success Stories
        </h2>
        <div className="relative h-[400px]">
          {" "}
          {/* Decreased height by 20% */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={300}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    objectFit="cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <blockquote className="text-2xl font-light mb-6 italic text-white">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
