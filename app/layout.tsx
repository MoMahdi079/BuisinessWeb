"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./components/Button";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const navItems = ["Products", "Solutions", "Pricing", "Resources", "About"];

  return (
    <html lang="en">
      <body>
        <motion.header
          className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50"
          style={{ opacity: headerOpacity }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-blue-900 flex items-center"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40&text=SS"
                  alt="SoftSolutions Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                SoftSolutions
              </motion.div>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className="text-blue-900 hover:bg-blue-100 transition-colors duration-300"
                    >
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </Button>
              </div>
            </div>
          </nav>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white py-4"
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full text-blue-900 py-2"
                >
                  {item}
                </Button>
              ))}
            </motion.div>
          )}
        </motion.header>
        {children}
      </body>
    </html>
  );
}
