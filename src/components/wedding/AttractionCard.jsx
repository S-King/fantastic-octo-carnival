import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function AttractionCard({ hotel, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {hotel.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-gray-700 rounded-full font-light">
            {hotel.tag}
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="text-xl text-gray-800 mb-2 font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {hotel.name}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-light mb-5">
            {hotel.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#C9A96E] text-sm font-light">
            {hotel.price}
          </span>

          {hotel.url && (
            <a
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9A96E] transition-colors duration-300 font-light group/btn"
            >
              <span>View Details</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}