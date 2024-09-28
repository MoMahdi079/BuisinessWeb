"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MahdiTechSolutions</h2>
            <p className="text-gray-600">Empowering Your Business</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-black hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-black hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-black hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-black hover:text-blue-700 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} MahdiTechSolutions. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
