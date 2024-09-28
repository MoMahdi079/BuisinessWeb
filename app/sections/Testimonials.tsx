"use client";

import ClientStorySlider from "../components/ClientStorySlider";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <ClientStorySlider />
      </div>
    </section>
  );
};

export default Testimonials;
