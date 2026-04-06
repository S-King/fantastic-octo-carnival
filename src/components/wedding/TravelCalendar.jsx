import React from "react";
import { motion } from "framer-motion";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// August 2026 starts on Saturday (index 6), has 31 days
const AUGUST_2026_START_DAY = 6;
const DAYS_IN_AUGUST = 31;

const travelers = [
  { name: "S&K", arrival: 11, departure: 24, color: "#C9A96E" },
  { name: "Stan&Victoria", arrival: 11, departure: 24, color: "#6E8FA6" },
  { name: "Thaddeus&Ashley", arrival: 20, departure: 23, color: "#6FA69A" },
  { name: "Kay&Alex", arrival: 17, departure: 24, color: "#8FA66E" },
  { name: "Britt&Elizabeth(Tentative)", arrival: 20, departure: 24, color: "#A67C6E" },
  { name: "Evan&Kacey", arrival: 15, departure: 23, color: "#8A7EA6" },
  { name: "Rick&Julie", arrival: 17, departure: 24, color: "#8A7EA6" },
];

export default function TravelCalendar() {
  // Build calendar grid
  const blanks = Array(AUGUST_2026_START_DAY).fill(null);
  const days = Array.from({ length: DAYS_IN_AUGUST }, (_, i) => i + 1);
  const cells = [...blanks, ...days];

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  while (rows[rows.length - 1].length < 7) {
    rows[rows.length - 1].push(null);
  }

  const getDayIndex = (day) => blanks.length + day - 1;
  const getCellColumn = (day) => getDayIndex(day) % 7;
  const getCellRow = (day) => Math.floor(getDayIndex(day) / 7);

  // =========================
  // LANE + HEIGHT CALCULATION
  // =========================
  const LANE_HEIGHT = 12;
  const BASE_DAY_HEIGHT = 40;

  const rowLanes = {};

  travelers.forEach((traveler) => {
    const arrivalRow = getCellRow(traveler.arrival);
    const departureRow = getCellRow(traveler.departure);

    for (let r = arrivalRow; r <= departureRow; r++) {
      if (!rowLanes[r]) rowLanes[r] = [];

      let lane = 0;
      while (rowLanes[r][lane]) lane++;

      rowLanes[r][lane] = true;

      if (!traveler._lanes) traveler._lanes = {};
      traveler._lanes[r] = lane;
    }
  });

  const rowHeights = rows.map((_, i) => {
    const lanes = rowLanes[i]?.length || 0;
    return BASE_DAY_HEIGHT + lanes * LANE_HEIGHT;
  });

  // =========================
  // RENDER
  // =========================
  return (
    <div>
      {/* Month Header */}
      <div className="text-center mb-6">
        <h3
          className="text-xl text-gray-800 font-light"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          August 2026
        </h3>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] tracking-[0.15em] uppercase text-gray-400 font-light py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="relative">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-7"
            style={{ height: rowHeights[rowIndex] }}
          >
            {row.map((day, colIndex) => {
              const isWeddingDay = day === 22;

              return (
                <div
                  key={colIndex}
                  className={`relative flex items-start justify-center border-b border-r border-gray-50
                    ${!day ? "bg-gray-50/30" : "hover:bg-[#C9A96E]/5"}
                    ${colIndex === 0 ? "border-l" : ""}
                    ${rowIndex === 0 ? "border-t" : ""}`}
                >
                  {day && (
                    <span
                      className={`text-sm font-light mt-1
                        ${
                          isWeddingDay
                            ? "text-[#C9A96E] font-normal"
                            : "text-gray-600"
                        }`}
                    >
                      {day}
                      {isWeddingDay && (
                        <span className="block text-[8px] text-center">
                          💍
                        </span>
                      )}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Travel Bars */}
        {travelers.map((traveler, tIdx) => {
          const arrivalCol = getCellColumn(traveler.arrival);
          const arrivalRow = getCellRow(traveler.arrival);
          const departureCol = getCellColumn(traveler.departure);
          const departureRow = getCellRow(traveler.departure);

          const segments = [];
          for (let r = arrivalRow; r <= departureRow; r++) {
            const startCol = r === arrivalRow ? arrivalCol : 0;
            const endCol = r === departureRow ? departureCol : 6;
            segments.push({ row: r, startCol, endCol });
          }

          return (
            <div key={traveler.name}>
              {segments.map((seg, sIdx) => {
                const leftPercent = (seg.startCol / 7) * 100;
                const widthPercent =
                  ((seg.endCol - seg.startCol + 1) / 7) * 100;

                const topPx =
                  rowHeights
                    .slice(0, seg.row)
                    .reduce((a, b) => a + b, 0) +
                  BASE_DAY_HEIGHT +
                  (traveler._lanes?.[seg.row] || 0) * LANE_HEIGHT;

                return (
                  <motion.div
                    key={sIdx}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + tIdx * 0.15,
                    }}
                    style={{
                      position: "absolute",
                      top: `${topPx}px`,
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                      transformOrigin: "left",
                    }}
                    className="flex items-center h-5 z-20 pointer-events-none"
                  >
                    <div
                      className="w-full h-1 rounded-full relative"
                      style={{ backgroundColor: `${traveler.color}30` }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: `${traveler.color}50` }}
                      />

                      {/* Start Dot */}
                      {sIdx === 0 && (
                        <div
                          className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white"
                          style={{ backgroundColor: traveler.color }}
                        />
                      )}

                      {/* End Dot */}
                      {sIdx === segments.length - 1 && (
                        <div
                          className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white"
                          style={{ backgroundColor: traveler.color }}
                        />
                      )}

                      {/* Label */}
                      {sIdx === 0 && (
                        <span
                          className="absolute -top-4 left-3 text-[10px] tracking-wide font-light whitespace-nowrap"
                          style={{ color: traveler.color }}
                        >
                          {traveler.name}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-gray-100">
        {travelers.map((t) => (
          <div key={t.name} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: t.color }}
            />
            <span className="text-xs text-gray-500 font-light">
              {t.name}: Aug {t.arrival}–{t.departure}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}