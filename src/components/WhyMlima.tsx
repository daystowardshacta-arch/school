/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Users, Globe, Smile, ShieldCheck, Soup, ChevronRight } from "lucide-react";
import React from "react";
import { PROGRAMS, ADMISSION_CRITERIA } from "../data/schoolData";

interface WhyMlimaProps {
  onLearnMoreClick: (title: string, detail: string) => void;
  onApplyClick: () => void;
}

export default function WhyMlima({ onLearnMoreClick, onApplyClick }: WhyMlimaProps) {
  const reasons = [
    {
      num: "01",
      title: "Consistently Top Ranked",
      text: "Proven NECTA academic strategy. We consistently rank among the top private primary schools in Mbeya with over 90% in direct Division A scores.",
      isOdd: true
    },
    {
      num: "02",
      title: "English Medium Confidence",
      text: "Rigorous focus on high-precision spoken and written English fluency, while cultivating robust native values, good manners, and local Swahili respect.",
      isOdd: false
    },
    {
      num: "03",
      title: "No Class Repetitions",
      text: "We safeguard a child's mental self-esteem. We guarantee advancement alongside age peers, supporting learners dynamic remedial coaching.",
      isOdd: true
    },
    {
      num: "04",
      title: "Rich Nutrition Program",
      text: "A balanced, high-nutrition daily meal planner: vitamins, minerals, proteins, and fresh locally-sourced fruits to stimulate sound mental focus.",
      isOdd: false
    },
    {
      num: "05",
      title: "Attentive Student Welfare",
      text: "Providing a secure, positive day campus supervised by Mr. Komba. Features hygienic child-friendly facilities, guidance counselors, and friendly recreational play.",
      isOdd: true
    },
    {
      num: "06",
      title: "100% Inclusive Environment",
      text: "Absolute zero-tolerance on racism and religious denomination bias. We cultivate absolute harmony and respect among all children.",
      isOdd: false
    }
  ];

  const trackConfigs = [
    {
      title: "Nursery School",
      grade: "Ages 3.5 – 4.5",
      desc: PROGRAMS[0].details,
      iconBg: "bg-blue-50",
      iconColor: "text-brand-blue",
      border: "border-brand-blue/20",
    },
    {
      title: "Pre-Primary",
      grade: "Ages 4.5 – 5.5",
      desc: PROGRAMS[1].details,
      iconBg: "bg-amber-50",
      iconColor: "text-brand-orange",
      border: "border-brand-orange/20",
    },
    {
      title: "Primary School",
      grade: "Standard I – VII NECTA",
      desc: PROGRAMS[2].details,
      iconBg: "bg-blue-50",
      iconColor: "text-brand-blue",
      border: "border-brand-blue/20",
    },
    {
      title: "Sports & Arts",
      grade: "All Grades Co-Curricular",
      desc: PROGRAMS[3].details,
      iconBg: "bg-red-50",
      iconColor: "text-red-700",
      border: "border-red-100",
    }
  ];

  return (
    <section id="why-mlima" className="bg-brand-offwhite py-14 border-b border-brand-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[1.5px] bg-brand-orange" />
              <div className="text-[10px] font-sans font-bold uppercase tracking-[2px] text-brand-orange">Why Choose Umoja</div>
            </div>
            <h2 className="font-serif text-3xl font-extrabold text-[#111827] tracking-tight leading-none">
              Nurturing Pupils, Shifting Paradigms
            </h2>
            <p className="text-xs text-gray-500 mt-2 max-w-lg">
              Tailored learning framework built strictly to support parent criteria and pupil psychology.
            </p>
          </div>
          
          <button 
            onClick={onApplyClick}
            className="text-xs font-sans font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center gap-1 group py-1 border-b border-transparent hover:border-brand-orange cursor-pointer"
          >
            <span>Start Online Admissions</span>
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 2x3 Grid of Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-border rounded-lg overflow-hidden shadow-xs mb-16 bg-white">
          {reasons.map((reason) => {
            return (
              <div 
                key={reason.num} 
                className="p-6 sm:p-8 bg-white duration-300 transition-all border-r border-b border-brand-border last:border-b-0 md:border-b-1 cursor-default group relative overflow-hidden flex flex-col justify-between min-h-[190px]"
              >
                {/* Visual Accent Hover Overlays */}
                <div 
                  className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    reason.isOdd ? "bg-brand-blue" : "bg-brand-blue"
                  }`}
                />

                <div className="relative z-10">
                  <div className="font-serif text-4xl font-extrabold text-[#E5E7EB] group-hover:text-white/20 transition-colors duration-300 leading-none mb-4">
                    {reason.num}
                  </div>
                  <h3 className="font-sans text-xs md:text-sm font-extrabold text-brand-dark group-hover:text-white transition-colors duration-300 mb-3 tracking-wide uppercase">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-[11.5px] leading-[1.8] text-[#4B5563] group-hover:text-white/90 transition-colors duration-300">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Programs Segment */}
        <div className="mb-8" id="programmes-section">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-[1.5px] bg-[#E07B2A]" />
            <div className="text-[10px] font-sans font-bold uppercase tracking-[2px] text-brand-orange">Educational Levels</div>
          </div>
          <h2 className="font-serif text-2xl font-extrabold text-[#111827] tracking-tight">Our Structured Programs</h2>
          <p className="text-xs text-gray-500 mt-1">Under National Exam Council of Tanzania (NECTA) English Medium guidelines.</p>
        </div>

        {/* Horizontal 4-Column layout for Academics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trackConfigs.map((track) => (
            <div 
              key={track.title}
              className="bg-white border border-brand-border hover:border-brand-blue p-6 rounded-lg flex flex-col justify-between shadow-xs transition-all duration-300 group hover:shadow-sm cursor-pointer"
              onClick={() => onLearnMoreClick(track.title, track.desc)}
            >
              <div>
                <div className={`w-10 h-10 rounded-full ${track.iconBg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  {track.title.includes("Nursery") && <Smile size={18} className={track.iconColor} />}
                  {track.title.includes("Pre-Primary") && <Users size={18} className={track.iconColor} />}
                  {track.title.includes("Primary") && <BookOpen size={18} className={track.iconColor} />}
                  {track.title.includes("Sports") && <Globe size={18} className={track.iconColor} />}
                </div>

                <h3 className="font-serif text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                  {track.title}
                </h3>
                <div className="text-[9px] text-[#9CA3AF] font-bold tracking-[1.5px] uppercase mt-1 mb-3">
                  {track.grade}
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed font-sans line-clamp-3">
                  {track.desc}
                </p>
              </div>

              <div className="text-[10px] font-sans font-extrabold text-brand-blue group-hover:text-brand-orange transition-colors flex items-center gap-1 mt-6">
                <span>Detailed Syllabus Core</span>
                <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
