/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import React from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/schoolData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials-section" className="py-14 bg-brand-dark overflow-hidden border-b border-brand-border text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Testimonial Carousel */}
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-between">
            <div className="relative">
              
              <Quote className="absolute top-0 left-0 w-20 h-20 text-white/5 -translate-y-8 -translate-x-6 hidden md:block" />

              <div className="border-l-4 border-brand-orange pl-5 mb-8">
                <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[2px] font-sans mb-1.5">
                  Parent Voices
                </div>
                <h2 className="font-serif text-3xl font-extrabold text-white tracking-tight">
                  Tanzanian families express their trust
                </h2>
              </div>

              {/* Active Slide */}
              <div className="min-h-[180px] mb-6 select-none">
                <div key={activeIndex} className="animate-fade-in text-left">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 text-brand-gold">
                    {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <div className="font-serif text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-200 max-w-2xl mb-6">
                    "{TESTIMONIALS[activeIndex].text}"
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-blue/80 text-brand-gold flex items-center justify-center font-sans font-bold text-xs border border-brand-border/20">
                      {TESTIMONIALS[activeIndex].avatarInitials}
                    </div>
                    <div>
                      <div className="font-sans font-extrabold text-white text-xs sm:text-sm">
                        {TESTIMONIALS[activeIndex].name}
                      </div>
                      <div className="font-sans text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        {TESTIMONIALS[activeIndex].role}
                      </div>
                    </div>

                    <span className="text-[10px] text-gray-400 font-serif italic ml-auto hidden sm:block">
                      Verified {TESTIMONIALS[activeIndex].source}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="w-9 h-9 border border-white/20 hover:border-white rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous testimony"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-9 h-9 border border-white/20 hover:border-white rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next testimony"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Bullet Indicators */}
                <div className="flex gap-1.5 items-center">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "bg-brand-orange w-5" : "bg-white/20 w-2"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Metrics */}
          <div className="col-span-1 lg:col-span-4 bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-center divide-y divide-white/10">
            
            <div className="pb-5 text-left">
              <div className="font-serif text-3xl font-extrabold text-brand-gold">
                4.9 ⭐
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[1.5px] mt-1 font-sans">
                Parent Satisfaction
              </div>
              <p className="text-[11px] text-gray-300 mt-2">
                Derived directly from our termly parent-teacher survey logs across nursery and primary levels.
              </p>
            </div>

            <div className="py-5 text-left">
              <div className="font-serif text-3xl font-extrabold text-brand-orange">
                100%
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[1.5px] mt-1 font-sans">
                NECTA Pass Rate
              </div>
              <p className="text-[11px] text-gray-300 mt-2">
                Consistently zero candidates failing standard school transition checkpoints in Southern highlands.
              </p>
            </div>

            <div className="pt-5 text-left">
              <div className="font-serif text-3xl font-extrabold text-gray-100">
                1995
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[1.5px] mt-1 font-sans">
                Active Year of Launch
              </div>
              <p className="text-[11px] text-gray-300 mt-2">
                Delivering high-caliber bilingual primary success routines for generations of Tanzanians.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
