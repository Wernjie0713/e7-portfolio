import React from "react";

import { cn } from "@/lib/utils";

const Skiper66 = () => {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-[#f5f4f3]">
      <ClipDiv imgSrc="/skiperv1/common/img_p11.png">
        <h1 className="font-cal-sans text-4xl text-red-500">Hover Me </h1>
      </ClipDiv>
    </div>
  );
};

const ClipDiv = ({
  children,
  imgSrc,
  className
}) => {
  return (
    <>
      <SvgMask />
      <div
        style={{ clipPath: "url(#customMask001)" }}
        className={cn(
          "group relative flex aspect-video w-full items-center justify-center overflow-hidden lg:w-[80%]",
          className
        )}>
        <img
          src={imgSrc}
          alt=""
          className="duration-400 absolute inset-0 h-full w-full object-cover transition-all ease-in-out group-hover:scale-110" />

        {/* overlay */}
        <div className="absolute size-full bg-black/15" />

        {/* children */}
        {children && <div className="absolute">{children}</div>}
      </div>
    </>
  );
};

export { ClipDiv, Skiper66 };

//Use clipPath for clean geometric cuts.
//Use mask for blurry, faded, or complex visual effects.

const SvgMask = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1836 1053"
      className="absolute inset-0 size-full">
      <clipPath id="customMask001" clipPathUnits="objectBoundingBox">
        <path
          fill="currentColor"
          d="M457.525 1.148c-20.789-3.198-193.979 1.16-283.854 2.496 11.104-.178 1.297-2.868-81.146-2.496-103.5.468-86 102.499-86 109.999s-7 524.5-6.5 547.5 10 59 6.5 99c-2.8 32-1.167 234.667 0 332.003.5 75 62.5 66.5 67 68.5s38.5 0 81.5 0 436 6 526 10.5 438.995-.5 505.495 0 330.01-12.5 417.51-12.5 230.99 2 270.99 0 40.5-16 51-31.5 12.5-61 12.5-105.5c0-44.503 7.01-274.504 7.01-348.004s-3.51-159.998-7.01-230.998 0-256.002 0-318.002 7.01-92.998-22.5-110.999c-18.79-11.471-81.99-9.999-133.49-9.999H853.525c-29 0-370 4-396 0Z"
          transform="scale(0.0005139987561, 0.0008543065594)"></path>
      </clipPath>
    </svg>
  );
};
