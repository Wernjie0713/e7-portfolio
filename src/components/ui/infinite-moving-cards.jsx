"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <li
              className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 px-6 py-8 shadow-xl hover:shadow-neon-pink-500/20 transition-all duration-300 group"
              key={idx}>
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-neon-pink-100 to-purple-100 dark:from-neon-pink-500/20 dark:to-purple-500/20 flex items-center justify-center text-neon-pink-600 dark:text-neon-pink-400 group-hover:border-neon-pink-500 group-hover:scale-110 transition-all duration-300">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                
                {/* Value/Number */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.prefix}
                  {typeof item.value === 'number' ? (
                    <span>
                      {item.decimals 
                        ? item.value.toFixed(item.decimals)
                        : item.value
                      }
                    </span>
                  ) : (
                    <span className="text-2xl">{item.value}</span>
                  )}
                  {item.suffix}
                </div>
                
                {/* Label */}
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {item.label}
                </div>
                
                {/* Description */}
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {item.description}
                </div>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-neon-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </li>
          )
        })}
      </ul>
    </div>
  );
};
