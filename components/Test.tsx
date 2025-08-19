"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const lines = [
    { count: 9, spacing: "-mb-6" }, // السطر الأول مع تباعد 2rem
    { count: 10, spacing: "-mb-6" }, // السطر الثاني مع تباعد 2.5rem
    { count: 11, spacing: "-mb-6" }, // السطر الثالث مع تباعد 3rem
    { count: 12, spacing: "-mb-6" }, // السطر الرابع مع تباعد 3.5rem
    { count: 13, spacing: "" }, // السطر الأخير بدون تباعد إضافي
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      {lines.map((line, lineIndex) => {
        // حساب المؤشر العالمي للعنصر
        const globalIndexOffset = lines
          .slice(0, lineIndex)
          .reduce((acc, curr) => acc + curr.count, 0);

        return (
          <div
            key={lineIndex}
            className={`flex justify-center items-center gap-2 ${line.spacing}`}
          >
            {Array.from({ length: line.count }).map((_, index) => {
              const globalIndex = globalIndexOffset + index;

              return (
                <div
                  key={index}
                  className="relative group flex items-center justify-center"
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence>
                    {hoveredIndex === globalIndex && (
                      <motion.span
                        className="absolute z-10 w-32 h-32 path bg-neutral-200 block"
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
                  <div className="w-30 h-30 bg-gradient-to-bl from-blue-900 via-purple-600 to-violet-600 path relative z-20" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Test;
