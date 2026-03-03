import React from "react";
import { motion } from "framer-motion";
import MapAccordion from "../components/wedding/MapAccordion";

const mapSections = [
  {
    title: "Ceremony Location",
    description:
      "The ceremony will be held at a beautiful beachfront location in Sámara, with the Pacific Ocean as our backdrop.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    title: "Hotel Area",
    description:
      "Most recommended hotels are located within a short walk of the town center and beach.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Local Attractions",
    description:
      "Explore the beauty of Sámara — from hidden beaches to wildlife refuges and vibrant local markets.",
    iframe:
      "https://www.google.com/maps/d/u/0/embed?mid=1J0qGqJ8mvj85dXp0_rKVhj8SInidoMA&ehbc=2E312F",
  },
];

export default function Maps() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3 font-light">
          Find Your Way
        </p>
        <h1
          className="text-3xl md:text-4xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Maps & Locations
        </h1>
        <p className="text-gray-400 text-sm font-light mt-3 max-w-lg">
          Everything you need to navigate your way around our wedding destinations in Sámara.
        </p>
      </motion.div>

      <div className="space-y-3">
        {mapSections.map((section, index) => (
          <MapAccordion
            key={section.title}
            title={section.title}
            description={section.description}
            image={section.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}