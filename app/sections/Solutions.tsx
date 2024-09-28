"use client";

import { motion } from "framer-motion";
import { Check, Zap, Rocket, Shield } from "lucide-react";
import { Button } from "../components/Button";

const Solutions = () => {
  const solutions = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
      ],
      icon: <Zap className="w-12 h-12 text-blue-500" />,
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
      icon: <Rocket className="w-12 h-12 text-purple-500" />,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited users",
        "Real-time analytics",
        "Dedicated account manager",
        "Unlimited storage",
        "API access",
        "On-premise option",
      ],
      icon: <Shield className="w-12 h-12 text-green-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your business operations and
            drive growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg p-8 border-2 ${
                index === 1
                  ? "border-blue-900 relative overflow-hidden"
                  : "border-transparent"
              } hover:shadow-xl transition-shadow duration-300`}
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-blue-900 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 bg-gray-100 rounded-full">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold">{solution.name}</h3>
              </div>
              <div className="text-4xl font-bold mb-4">
                {solution.price}
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 1
                    ? "bg-blue-900 text-white hover:bg-blue-800"
                    : "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
