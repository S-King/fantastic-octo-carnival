import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

// Import video so bundler resolves it correctly
import backgroundVideo from "../assets/videos/landing_page_background_video.MP4";

export default function Landing() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set playback speed correctly
      videoRef.current.playbackRate = 0.75;

      // Attempt to play (helps avoid some autoplay edge cases)
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.warn("Autoplay prevented by browser.");
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-white/70 text-sm tracking-[0.35em] uppercase mb-6 font-light">
            Together with their families
          </p>

          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Spencer <span className="italic text-white/80">&</span> Kimberlin
          </h1>

          <div className="w-16 h-px bg-[#C9A96E] mx-auto my-8" />

          <p
            className="text-white/80 text-lg md:text-xl tracking-wide font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sámara, Costa Rica
          </p>

          <p className="text-white/60 text-sm tracking-[0.2em] uppercase mt-2 font-light">
            August 22, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14"
        >
          <Link to={createPageUrl("Accommodations")}>
            <button className="group relative px-12 py-4 border border-white/40 text-white text-sm tracking-[0.3em] uppercase font-light transition-all duration-500 hover:border-[#C9A96E] hover:text-[#C9A96E] hover:shadow-[0_0_30px_rgba(201,169,110,0.15)] bg-white/5 backdrop-blur-sm">
              <span className="relative z-10">Enter</span>
              <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/5 transition-all duration-500" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
      />
    </div>
  );
}