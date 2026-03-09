import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { Hotel, MapPin, Calendar, Gift, Menu, Compass, X } from "lucide-react";

const navItems = [
  { name: "Accommodations", icon: Hotel, label: "Accommodations" },
  { name: "Maps", icon: MapPin, label: "Maps" },
  { name: "Schedules", icon: Calendar, label: "Schedules" },
  { name: "Registry", icon: Gift, label: "Registry" },
  { name: "LocalAttractions", icon: Compass, label: "Local Attractions" },
];

export default function Sidebar({ currentPage }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-5 left-5 z-50 lg:hidden p-2 rounded-full bg-white shadow-md border border-gray-100"
      >
        {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 bg-white/95 backdrop-blur-md border-r border-gray-100 
          transition-transform duration-300 ease-in-out w-64
          lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo / Title */}
          <Link to={createPageUrl("Landing")} onClick={() => setMobileOpen(false)}>
            <div className="px-8 py-10 border-b border-gray-50">
              <h2
                className="text-2xl text-gray-800 font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                S <span className="text-[#C9A96E] italic">&</span> K
              </h2>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mt-1 font-light">
                August 22, 2026
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-8">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.name;
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      to={createPageUrl(item.name)}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div
                        className={`relative flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all duration-300 group
                          ${isActive 
                            ? "bg-[#C9A96E]/8 text-gray-800" 
                            : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#C9A96E] rounded-full"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          />
                        )}
                        <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-[#C9A96E]" : "text-gray-400 group-hover:text-gray-600"}`} />
                        <span className="text-sm tracking-wide font-light">{item.label}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-50">
            <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-light">
              Sámara, Costa Rica
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}