/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight, Award, Compass, Heart, Star, Users } from "lucide-react";
import React from "react";
import { Educator } from "../types";
import { ADMISSION_CRITERIA, EDUCATORS } from "../data/schoolData";

interface AdmissionTimelineProps {
  onBeginNowClick: () => void;
  onEducatorReadMore: (educatorName: string) => void;
}

export default function AdmissionTimeline({ onBeginNowClick, onEducatorReadMore }: AdmissionTimelineProps) {
  const steps = [
    {
      num: 1,
      title: "1. Online Registration",
      desc: "Fill in the basic student age (3.5+ years old required) and parent contact. Mr. Isack handles immediate response."
    },
    {
      num: 2,
      title: "2. Diagnostic Interview",
      desc: "Attend a friendly on-campus assessment led by Mr. Komba. Requires an overall pass result of above 61%."
    },
    {
      num: 3,
      title: "3. Zero-Bias Review",
      desc: "We double-check absolute parity with zero bias on racism, tribal, or religious lines. Every child gets equal priority."
    },
    {
      num: 4,
      title: "4. Fast Intake Setups",
      desc: "Receive prompt admissions, allocate transport route slot (400,000 TSh/year), setup fees and begin under our no-repetition policy."
    }
  ];

  return (
    <section id="admissions-timeline" className="py-14 bg-[#FAF7FA] border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Timeline Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[1.5px] bg-brand-orange" />
              <div className="text-[10px] font-sans font-bold uppercase tracking-[2px] text-brand-orange text-left">Enrollment Process</div>
            </div>
            <h2 className="font-serif text-3xl font-extrabold text-[#111827] tracking-tight leading-none text-left">
              Secure admission in 4 simple steps
            </h2>
          </div>
          
          <button 
            onClick={onBeginNowClick}
            className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-bold px-5 py-3.5 rounded-[4px] shadow-sm transform active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Begin Admission Submission</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Connected Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-white border border-brand-border rounded-lg overflow-hidden shadow-xs mb-16 divide-y md:divide-y-0 md:divide-x divide-brand-border select-none">
          {steps.map((step, idx) => {
            const styleNum = step.num === 1 ? "bg-brand-blue text-white" : step.num === 2 ? "bg-brand-orange text-white" : step.num === 3 ? "bg-brand-gold text-brand-dark" : "bg-brand-dark text-white";

            return (
              <div 
                key={step.num}
                className="p-6 md:p-8 hover:bg-brand-offwhite/40 transition-colors duration-300 relative group flex flex-col justify-between min-h-[190px]"
              >
                <div>
                  {/* Numbered Indicator Circle */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-8 h-8 rounded-full ${styleNum} flex items-center justify-center font-sans text-xs font-bold ring-4 ring-black/5`}>
                      {step.num}
                    </div>
                    <div className="flex-1 h-0.5 bg-brand-offwhite border-b border-brand-border hidden md:block group-last:hidden" />
                  </div>

                  <h3 className="font-sans text-xs md:text-sm font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors duration-300 tracking-wide uppercase mb-3 text-left">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[11px] leading-[1.75] text-[#4B5563] text-left">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educators Section */}
        <div className="pt-4">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-[1.5px] bg-brand-orange" />
              <div className="text-[10px] font-sans font-bold uppercase tracking-[2px] text-brand-orange text-left">Admin & Educators</div>
            </div>
            <h2 className="font-serif text-2xl font-extrabold text-[#111827] tracking-tight text-left">
              Meet our senior administrators
            </h2>
            <p className="text-xs text-gray-500 mt-1 text-left">Always available to support parents through phone or campus visitation tours.</p>
          </div>

          {/* Educator Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATORS.map((teacher) => (
              <div 
                key={teacher.name}
                className="bg-white border border-brand-border rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                onClick={() => onEducatorReadMore(teacher.name)}
              >
                <div>
                  {/* Avatar / Initials */}
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue border border-brand-border rounded-full flex items-center justify-center font-sans font-extrabold text-base mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    {teacher.avatarInitials}
                  </div>

                  <h3 className="font-sans text-xs sm:text-sm font-extrabold text-[#111827] group-hover:text-brand-orange transition-colors duration-300 uppercase tracking-wide text-left">
                    {teacher.name}
                  </h3>
                  <div className="text-[10px] text-brand-orange font-bold font-sans mt-0.5 mb-3 uppercase tracking-wider text-left">
                    {teacher.subject}
                  </div>
                  
                  <div className="p-3 bg-brand-offwhite rounded border border-brand-border text-left">
                    <p className="text-[10.5px] text-gray-600 leading-relaxed font-sans font-medium italic">
                      "{teacher.achievement}"
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-sans font-extrabold text-gray-500 group-hover:text-brand-blue transition-colors flex items-center gap-1 mt-6 text-left">
                  <span>View Professional Focus</span>
                  <ChevronRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
