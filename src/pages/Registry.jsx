import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";

export default function Registry() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3 font-light">
          Celebrate With Us
        </p>
        <h1
          className="text-3xl md:text-4xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Wedding Registry
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12"
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl opacity-30">✨</div>
          
          <div className="bg-white border border-gray-100 rounded-2xl p-10 md:p-14 shadow-sm">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#C9A96E]" />
              </div>
            </div>

            <p
              className="text-gray-600 text-base leading-relaxed font-light max-w-md mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
              we've created a registry for your convenience.
            </p>

            <div className="w-12 h-px bg-[#C9A96E]/40 mx-auto my-8" />

            <div className="space-y-4">
              <a
                href="https://www.amazon.com/wedding/registry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gray-200 rounded-xl text-gray-700 
                  hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 group bg-white hover:shadow-md"
              >
                <span className="text-sm tracking-wide font-light">View Our Amazon Registry</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 text-gray-300">
              <span>💍</span>
              <span className="w-8 h-px bg-gray-200" />
              <span>✨</span>
              <span className="w-8 h-px bg-gray-200" />
              <span>❤️</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 text-xs text-gray-300 font-light tracking-wide"
      >
        With all our love, Spencer & Kim
      </motion.p>
    </div>
  );
}