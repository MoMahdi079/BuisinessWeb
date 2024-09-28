"use client";

import { motion, useTransform, useScroll } from "framer-motion";

const FloatingElement = ({ children }) => {
  const y = useTransform(useScroll().scrollY, [0, 100], [0, -50]);
  return (
    <motion.div style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
};

export default FloatingElement;
