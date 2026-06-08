/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Award, 
  BarChart, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  GraduationCap 
} from "lucide-react";
import { SCHOOL_RESULTS, CONTACT_INFO } from "../data/schoolData";

export default function ResultsPage() {
  const stats = [
    { label: "NECTA Pass Rate", value: "100%", desc: "Zero failing scores across Standard IV and VII checkpoints", color: "text-brand-blue" },
    { label: "Division A Pupil Grades", value: "91%+", desc: "Scoring direct Division A grades in English, Mathematics, and Science Classes", color: "text-brand-orange" },
    { label: "Division B Pupil Grades", value: "9%", desc: "Scoring overall Division B grades", color: "text-brand-gold" },
    { label: "Class Repetition Rate", value: "0%", desc: "Ensured by free post-class remedial coaching support", color: "text-green-600" }
  ];

  return (
    <div className="bg-[#FAF7FA] py-12 animate-fade-in text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-brand-blue text-[9px] font-bold uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3">
            <Award size={12} className="text-brand-orange" />
            OFFICIAL NECTA SCOREBOARD & SCHOLASTICS
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-2">
            Mbeya Academic Performance Rankings
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Review the official results certified by the National Examinations Council of Tanzania (NECTA) for Standard IV (SFNA) and Standard VII (PSLE).
          </p>
        </div>

        {/* Visual Analytics Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((st) => (
            <div 
              key={st.label}
              className="bg-white border border-brand-border rounded-lg p-6 flex flex-col justify-between shadow-2xs hover:border-brand-blue/30 transition-colors"
            >
              <div>
                <div className={`font-serif text-3xl sm:text-4xl font-extrabold ${st.color} mb-2`}>
                  {st.value}
                </div>
                <h3 className="font-sans text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                  {st.label}
                </h3>
                <p className="text-[10.5px] text-gray-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NECTA Results Archives Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {SCHOOL_RESULTS.map((res) => (
            <div 
              key={res.examType + res.year}
              className="bg-white border border-brand-border rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
            >
              <div>
                
                {/* Score Header */}
                <div className="flex justify-between items-start border-b border-brand-border pb-4 mb-4">
                  <div>
                    <span className="bg-blue-50 text-brand-blue text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Academic Year {res.year}
                    </span>
                    <h3 className="font-serif font-extrabold text-[#111827] text-base md:text-lg mt-1.5">
                      {res.examType === "PSLE" ? "Standard VII Leaving Exams (PSLE)" : "Standard IV National Assessment (SFNA)"}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-[#E07B2A] font-extrabold tracking-wider uppercase font-sans">Rank Status</span>
                    <div className="font-serif font-bold text-[#E07B2A] text-sm leading-tight">{res.gpaOrRank}</div>
                  </div>
                </div>

                <p className="text-[11.5px] text-gray-600 leading-relaxed font-sans mb-6">
                  {res.performanceBrief}
                </p>

                {/* Division Breakdown Graphic */}
                <h4 className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Certified Division Analysis</h4>
                <div className="space-y-3 mb-6">
                  {res.divisionAnalysis.map((div) => {
                    const totalCount = res.divisionAnalysis.reduce((acc, curr) => acc + curr.count, 0);
                    const widthPercent = (div.count / totalCount) * 100;
                    const progressColor = div.label === "Division I" || div.label === "A Grades" ? "bg-brand-blue" : "bg-brand-orange";
                    
                    return (
                      <div key={div.label} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-sans font-medium text-brand-dark">
                          <span>{div.label}</span>
                          <span className="font-bold">{div.count} Candidates</span>
                        </div>
                        <div className="w-full h-2 bg-brand-offwhite rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${progressColor} rounded-full`} 
                            style={{ width: `${widthPercent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Achievements banner */}
              <div className="bg-blue-50/50 p-3 rounded-md border border-blue-100 flex items-center gap-2.5 text-brand-blue text-[10.5px]">
                <Sparkles size={14} className="text-brand-orange shrink-0 animate-pulse" />
                <span>
                  <strong>Top Subject Performance:</strong> {res.gradeAStudents}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Admissions conversion block */}
        <div className="bg-brand-dark text-white rounded-lg p-6 sm:p-10 text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 opacity-10 flex gap-0.5 items-end p-2 pointer-events-none">
            <GraduationCap className="w-48 h-48 -translate-y-4 translate-x-8 text-white rotate-12" />
          </div>

          <div className="relative z-10 max-w-xl">
            <h3 className="font-serif font-extrabold text-white text-xl sm:text-2xl mb-2">
              Guarantee Your Pupil's Scholastic Growth
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Unlike normal environments where struggling pupils are forced to repeat standard classes (causing severe mental self-esteem drops), Umoja Pre & Primary School offers active remedial support completely free of extra charge. Secure your child's NECTA success now.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a 
                href={`tel:${CONTACT_INFO.mrKomba.phone}`}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-sans font-bold px-4 py-2.5 rounded transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Call Admissions Dean: {CONTACT_INFO.mrKomba.phone}</span>
              </a>
              <span className="text-[10.5px] text-gray-400 font-sans">
                Mr. Komba accommodates direct physical tours of Lupa Road campus offices.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
