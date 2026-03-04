import React from "react";
import { motion } from "framer-motion";
import AccommodationCard from "../components/wedding/AccommodationCard";
import ventanasImage from "../assets/images/las_ventanas_accommodation_card_background.jpg";
import villasKalimba from "../assets/images/villas_kalimba_accomodation_card_background.jpg";

const hotels = [
  {
    name: "Ventanas del Mar",
    description: "A serene hillside retreat nestled along the Pacific coast. " +
        "Enjoy ocean-view suites, an infinity pool, and a short drive to pristine sandy shores. " +
        "Rentals are townhouses or 3 bedroom condos with panoramic ocean views. Please book through Spencer & Kim for discounted rates.",
    image: ventanasImage,
    price: "From ~$275/night",
    tag: "Wedding Venue",
    url: "https://ventanasdelmarcr.com/",
  },
  {
    name: "Villas Kalimba",
    description: "Surrounded by lush tropical gardens, this intimate resort offers a tranquil escape. Each villa features a private terrace overlooking the verdant canopy.",
    image: villasKalimba,
    price: "From $217/night",
    tag: "Close to Beach",
    url: "https://villaskalimbahotel.com-hotel.com/",
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