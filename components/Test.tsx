"use client"

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // عدد العناصر في كل سطر
  const lines = [
    { count: 9, top: "12%" },
    { count: 10, top: "22.4%" },
    { count: 11, top: "32.9%" },
    { count: 12, top: "auto" }, // السطر الأوسط بدون top أو bottom
    { count: 13, bottom: "32.9%" },
  ];

  return (
    <section className="absolute gap-1 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      {lines.map((line, lineIndex) => {
        // تحديد إذا كان السطر في الأعلى أو الأسطر أو الوسط
        const positionClass = line.top
          ? `absolute top-[${line.top}]`
          : line.bottom
          ? `absolute bottom-[${line.bottom}]`
          : "";

        return (
          <section
            key={lineIndex}
            className={`w-full flex justify-center items-center gap-2 ${positionClass}`}
          >
            {Array.from({ length: line.count }).map((_, index) => {
              const globalIndex = lines
                .slice(0, lineIndex)
                .reduce((acc, curr) => acc + curr.count, index);

              return (
                <div
                  key={index}
                  className="relative group items-center justify-center flex"
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === globalIndex && (
                      <motion.span
                        className="absolute inset-0 path z-10 items-center size-32 bg-neutral-200 block"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.15 },
                        }}
                        exit={{
                          opacity: 0,
                          transition: { duration: 0.15, delay: 0.2 },
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <div className="size-30 bg-gradient-to-bl from-blue-900 via-purple-600 to-violet-600 path relative z-20" />
                </div>
              );
            })}
          </section>
        );
      })}
    </section>
  );
};

export default Test;
