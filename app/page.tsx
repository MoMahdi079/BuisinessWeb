"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  BarChart,
  Users,
  Code,
  ArrowUpRight,
  Zap,
  Shield,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./components/Button";
import ClientStorySlider from "./components/ClientStorySlider";
import FloatingElement from "./components/FloatingElement";
import Hero from "./sections/Hero";
import Solutions from "./sections/Solutions";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import DesignElement from "./components/DesignElements";
import ClientSuccessSection from "./components/ClientSuccesSection"; // Ensure correct import
import ClientStoriesSection from "./components/ClientStoriesSection"; // Ensure correct import

export default function EnhancedLandingPageV7() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const transformRef = useRef(null);
  const transformInView = useInView(transformRef, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const statsSection = document.getElementById("stats");
      if (statsSection && scrollPosition > statsSection.offsetTop + 200) {
        setIsVisible(true);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Hero />
      <TestimonialCarousel /> {/* Client Success Stories */}
      <ClientSuccessSection /> {/* Slack Section */}
      <CallToAction /> {/* Ready to Transform Your Business? */}
      <Solutions /> {/* Our Solutions */}
      <Footer />
    </div>
  );
}
