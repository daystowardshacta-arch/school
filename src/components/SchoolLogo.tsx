/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface SchoolLogoProps {
  className?: string; // Tailwind width and height class (e.g., "w-10 h-10")
}

export default function SchoolLogo({ className = "w-10 h-10" }: SchoolLogoProps) {
  return (
    <div className={`${className} bg-brand-blue rounded-lg flex items-center justify-center p-1 shadow-md relative shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 border border-white/10`}>
      {/* Dynamic and elegant school emblem badge */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        {/* Shield Frame */}
        <path
          d="M16 18C16 18 50 8 50 8C50 8 84 18 84 18C84 18 84 62.5 50 90C16 62.5 16 18 16 18Z"
          stroke="#FFBE0B"
          strokeWidth="5"
          strokeLinejoin="round"
          fill="#0B3C5D"
        />
        
        {/* Inner Shield Accent */}
        <path
          d="M24 24C24 24 50 16 50 16C50 16 76 24 76 24C76 24 76 58 50 81C24 58 24 24 24 24Z"
          fill="#1D2E3D"
          opacity="0.4"
        />

        {/* Distinctive Bold "U" Monogram for Umoja */}
        <path
          d="M34 32V52C34 60.5 41.2 67 50 67C58.8 67 66 60.5 66 52V32"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Open Book representing primary education at the bottom */}
        <path
          d="M30 74C39 74 47 77 50 80C53 77 61 74 70 74"
          stroke="#FFBE0B"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Academic Star of Excellence inside the Shield */}
        <path
          d="M50 24L52.5 29.5L58.5 30L54 34L55.5 39.5L50 36.5L44.5 39.5L46 34L41.5 30L47.5 29.5L50 24Z"
          fill="#FFBE0B"
        />
      </svg>
    </div>
  );
}
