"use client";

import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";

const stats = [
  { value: "700M", description: "Messages sent daily" },
  {
    value: "4M",
    description:
      "Slack Connect users working directly with external teams each week",
  },
  { value: "3M", description: "Daily Workflows" },
  { value: "1.7M", description: "Apps actively used each week" },
];

const awards = [
  {
    title: "Leader",
    subtitle: "SUMMER 2024",
    image: "/path/to/leader-summer-2024.png",
  },
  {
    title: "Best Usability",
    subtitle: "SUMMER 2024",
    image: "/path/to/best-usability-summer-2024.png",
  },
  {
    title: "Most Implementable",
    subtitle: "SUMMER 2024",
    image: "/path/to/most-implementable-summer-2024.png",
  },
  {
    title: "Leader",
    subtitle: "Enterprise SUMMER 2024",
    image: "/path/to/leader-enterprise-summer-2024.png",
  },
  {
    title: "Leader",
    subtitle: "Mid-Market SUMMER 2024",
    image: "/path/to/leader-mid-market-summer-2024.png",
  },
  {
    title: "Leader",
    subtitle: "Small Business SUMMER 2024",
    image: "/path/to/leader-small-business-summer-2024.png",
  },
];

export default function ClientSuccessSection() {
  return (
    <div className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Millions of people love to work in TechSolutions.
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {stats.map((stat, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-lg">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              Don't just take our word for it.
            </h3>
            <p className="text-lg mb-8">
              Slack is a leader in over 100 G2 market reports.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-2"
                  />
                  <h4 className="text-lg font-bold">{award.title}</h4>
                  <p className="text-sm">{award.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
