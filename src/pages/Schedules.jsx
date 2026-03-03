import React from "react";
import { motion } from "framer-motion";
import { Clock, Plane } from "lucide-react";
import ScheduleAccordion from "../components/wedding/ScheduleAccordion";
import TravelCalendar from "../components/wedding/TravelCalendar";

const ceremonySchedule = [
  { time: "3:00 PM", event: "Guest Arrival & Seating", detail: "Guests arrive at the beachfront venue" },
  { time: "3:30 PM", event: "Ceremony Begins", detail: "Processional and exchange of vows" },
  { time: "4:15 PM", event: "Cocktail Hour", detail: "Drinks and appetizers by the shore" },
  { time: "5:30 PM", event: "Reception Dinner", detail: "Seated dinner under the stars" },
  { time: "7:00 PM", event: "First Dance & Toasts", detail: "Speeches, cake cutting, and dancing" },
  { time: "8:00 PM", event: "Open Dancing", detail: "Dance the night away with live music" },
  { time: "11:00 PM", event: "Sparkler Send-Off", detail: "A magical farewell to end the evening" },
];

export default function Schedules() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A96E] mb-3 font-light">
          Plan Ahead
        </p>
        <h1
          className="text-3xl md:text-4xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Schedules
        </h1>
        <p className="text-gray-400 text-sm font-light mt-3 max-w-lg">
          All the details you need to plan your trip and enjoy our special day.
        </p>
      </motion.div>

      <div className="space-y-3">
        {/* Ceremony Schedule */}
        <ScheduleAccordion title="Ceremony Schedule" icon={Clock}>
          <div className="space-y-0">
            {ceremonySchedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex gap-5 py-4 border-b border-gray-50 last:border-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm text-[#C9A96E] font-light">{item.time}</span>
                </div>
                <div className="relative pl-5 border-l border-gray-100">
                  <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <p className="text-sm text-gray-800 font-light">{item.event}</p>
                  <p className="text-xs text-gray-400 font-light mt-0.5">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScheduleAccordion>

        {/* Travel Schedule */}
        <ScheduleAccordion title="Travel Schedule" icon={Plane}>
          <TravelCalendar />
        </ScheduleAccordion>
      </div>
    </div>
  );
}