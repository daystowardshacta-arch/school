/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import React from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function AnimatedCounter({ target, suffix = "", duration = 1800, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    const startTime = performance.now();

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      const currentVal = Math.floor(easedProgress * (end - start) + start);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [trigger, target, duration]);

  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-brand-offwhite border-y border-brand-border py-10 md:py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 items-center justify-items-center">
          
          {/* Column 1: Academic Pass Rate */}
          <div className="w-full text-center md:border-r border-brand-border last:border-none px-4 flex flex-col items-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D97706] leading-none select-none">
              <AnimatedCounter target={100} suffix="%" trigger={hasIntersected} />
            </h2>
            <div className="text-[9px] text-gray-500 font-bold tracking-[2.5px] uppercase mt-3.5 font-sans leading-tight">
              NECTA Exam Transition
            </div>
          </div>

          {/* Column 2: Enrolled Students */}
          <div className="w-full text-center md:border-r border-brand-border last:border-none px-4 flex flex-col items-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-none select-none">
              <AnimatedCounter target={820} suffix="+" trigger={hasIntersected} />
            </h2>
            <div className="text-[9px] text-gray-500 font-bold tracking-[2.5px] uppercase mt-3.5 font-sans leading-tight">
              Enrolled Pupils
            </div>
          </div>

          {/* Column 3: Transit Areas */}
          <div className="w-full text-center md:border-r border-[#D0D8E0] last:border-none px-4 flex flex-col items-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-none select-none">
              <AnimatedCounter target={12} suffix="+" trigger={hasIntersected} />
            </h2>
            <div className="text-[9px] text-gray-500 font-bold tracking-[2.5px] uppercase mt-3.5 font-sans leading-tight">
              School Bus route areas
            </div>
          </div>

          {/* Column 4: Repetition policy */}
          <div className="w-full text-center px-4 flex flex-col items-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-none select-none">
              <AnimatedCounter target={0} suffix="%" trigger={hasIntersected} />
            </h2>
            <div className="text-[9px] text-gray-500 font-bold tracking-[2.5px] uppercase mt-3.5 font-sans leading-tight">
              Class Repetition Rate
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
