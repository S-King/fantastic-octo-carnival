import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

export default function MapAccordion({
  title,
  description,
  image,
  iframe,
  index,
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-100 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/50 transition-colors duration-300"
      >
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#C9A96E]" />
          <span
            className="text-gray-800 text-lg font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {description && (
                <p className="text-gray-400 text-sm font-light mb-4">
                  {description}
                </p>
              )}

              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                {iframe ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={iframe}
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}