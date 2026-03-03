import React from "react";
import { motion } from "framer-motion";
import AccommodationCard from "../components/wedding/AccommodationCard";

const hotels = [
  {
    name: "Casa del Mar Boutique",
    description: "A serene beachfront retreat nestled along the Pacific coast. Enjoy ocean-view suites, an infinity pool, and steps-away access to pristine sandy shores.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    price: "From $185/night",
    tag: "Beachfront",
  },
  {
    name: "Villa Colibrí Resort",
    description: "Surrounded by lush tropical gardens, this intimate resort offers a tranquil escape. Each villa features a private terrace overlooking the verdant canopy.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    price: "From $145/night",
    tag: "Garden View",
  },
  {
    name: "Hotel Playa Dorada",
    description: "An elegant family-friendly property with spacious rooms, a kids' pool, and a renowned on-site restaurant serving fresh Costa Rican cuisine.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    price: "From $120/night",
    tag: "Family Friendly",
  },
  {
    name: "The Sunset Hacienda",
    description: "A charming hillside hacienda offering panoramic sunset views, artisan cocktails at the rooftop bar, and a peaceful yoga studio.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    price: "From $165/night",
    tag: "Hillside",
  },
];

export default function Accommodations() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3 font-light">
          Where to Stay
        </p>
        <h1
          className="text-3xl md:text-4xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Accommodations
        </h1>
        <p className="text-gray-400 text-sm font-light mt-3 max-w-lg">
          We've curated a selection of beautiful places to stay near our venue in Sámara. 
          Each offers something unique for your Costa Rica experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel, index) => (
          <AccommodationCard key={hotel.name} hotel={hotel} index={index} />
        ))}
      </div>
    </div>
  );
}