"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/Button";
import FloatingElement from "../components/FloatingElement";

const Hero = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-16 md:py-32 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Empower Your Business with Smart Software Solutions
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Streamline operations, boost productivity, and drive growth with our
          cutting-edge software.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 rounded-full text-lg font-semibold border-blue-900 text-blue-900 hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:w-1/2"
      >
        <FloatingElement>
          <div className="relative w-full h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Software Dashboard"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </FloatingElement>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
