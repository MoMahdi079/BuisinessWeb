"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Users } from "lucide-react";
import { Button } from "../components/Button";

const CallToAction = () => {
  const transformRef = useRef(null);
  const transformInView = useInView(transformRef, { once: true });

  return (
    <section
      ref={transformRef}
      className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=Abstract+Shapes')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={transformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={transformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of companies that have already revolutionized their
            operations with SoftSolutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={transformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Schedule a Demo <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <Zap className="h-12 w-12 text-yellow-400" />,
            title: "Lightning Fast",
            description: "Experience unparalleled speed and efficiency",
          },
          {
            icon: <Shield className="h-12 w-12 text-green-400" />,
            title: "Secure & Reliable",
            description:
              "Your data is protected with industry-leading security",
          },
          {
            icon: <Users className="h-12 w-12 text-purple-400" />,
            title: "24/7 Support",
            description: "Our expert team is always here to help you succeed",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={transformInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <div className="mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-blue-200">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CallToAction;
