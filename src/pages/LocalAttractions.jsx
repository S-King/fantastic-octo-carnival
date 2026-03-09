import React from "react";
import AttractionCard from "../components/wedding/AttractionCard";

import atvTourImg from "../assets/images/beach_atv_local_attractions_card_image.jpg"
import zipLineTourImage from "../assets/images/jungle_zip_line_local_attractions_card_image.jpg";
import surfImg from "../assets/images/surfing_lessons_local_attractions_card_image.jpg";
import horsebackTourImg from "../assets/images/horseback_riding_beach_local_attractions_card_image.jpg";
import autogyroTourImg from "../assets/images/autogyro_local_attractions_card_image.jpg";
import massagesImg from "../assets/images/massages_local_attractions_card_image.jpg";
import {motion} from "framer-motion";


const attractions = [
  {
    name: "Surfing Lessons",
    description:
      "Take a surf lesson with local instructors and experience Costa Rica's famous waves. Great for beginners and experienced surfers.",
    image: surfImg,
    tag: "Surfing",
    price: "$60",
    url: "https://ticossurfschool.com/"
  },
  {
    name: "ATV Tours",
    description:
      "Explore hidden beaches and jungle with a guided ATV tour with options from 2 to 4 hours.",
    image: atvTourImg,
    tag: "ATVs",
    price: "$110",
    url: "https://outbackquads.com/"
  },
  {
    name: "Jungle Zip Lines",
    description:
      "Tour the jungle canopy through a web of zip lines linking treetop platforms",
    image: zipLineTourImage,
    tag: "Zip Line",
    price: "$100",
    url: "https://samaraadventures.com/wingnut-canopy/"
  },
  {
    name: "Beach Horseback Rides",
    description:
      "Explore the beautiful beaches or jungle scenery via horseback.",
    image: horsebackTourImg,
    tag: "Horseback Riding",
    price: "$55",
    url: "https://horsejungle.com/"
  },
  {
    name: "Autogyro Tours",
    description:
      "Feed your sense of adventure with an autogyro tour of the nearby towns and beaches. No better way to see the scenery than by a " +
        "single seater autogyro.",
    image: autogyroTourImg,
    tag: "Autogyro Tour",
    price: "Starts at $150",
    url: "https://www.flywithus.aero/"
  },
  {
    name: "Massages",
    description:
      "Let your whole body relax with multiple options for massages, ranging from the cheaper massage school in Samara to more expensive options " +
        "with a massage in a private cabana at Las Ventanas overlooking the ocean.",
    image: massagesImg,
    tag: "Massages",
    price: "$25+",
    url: "https://crsmt.com/"
  }
];

export default function LocalAttractions() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3 font-light">
          Have some fun!
        </p>
        <h1
          className="text-3xl md:text-4xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Local Attractions
        </h1>
        <p className="text-gray-400 text-sm font-light mt-3 max-w-lg">
          Check out some of our favorite activities to do in and around Sámara.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.map((attraction, index) => (
          <AttractionCard
            key={index}
            hotel={attraction}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}