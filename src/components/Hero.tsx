/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import React from "react";
import { Play, FileText, Compass, Award, ShieldAlert, Sparkles, X } from "lucide-react";
import { ADMISSION_CRITERIA, CONTACT_INFO } from "../data/schoolData";

interface HeroProps {
  onStartApplicationClick: () => void;
  onDownloadProspectusClick: () => void;
}

export default function Hero({ onStartApplicationClick, onDownloadProspectusClick }: HeroProps) {
  const [isPlayingFilm, setIsPlayingFilm] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="hero-section" className="relative text-white overflow-hidden border-b border-brand-border">
      
      {/* Background Media Container with Dark Blue / White Overlay */}
      <div className="absolute inset-0 z-0">
        {!isPlayingFilm ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] via-[#051726] to-[#0B3C5D] transition-all duration-1000" />
        ) : (
          <iframe 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 transition-all duration-1000"
            src="https://www.youtube.com/embed/-USKUNpg9_A?autoplay=1&mute=1&playlist=-USKUNpg9_A&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
            title="Umoja School Film"
            allow="autoplay; encrypted-media"
            referrerPolicy="no-referrer"
          ></iframe>
        )}

        {/* Dynamic Translucent Blur */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backdropFilter: isPlayingFilm ? "blur(0px)" : "blur(12px)",
            backgroundColor: isPlayingFilm ? "rgba(10, 28, 42, 0.4)" : "rgba(244, 247, 250, 0.86)"
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12 pb-10 md:pt-16 md:pb-12 flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Left Section (Full Layout, takes ~70% width on Desktop) */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="mb-8 md:mb-10">
            
            {/* Badge Strip */}
            <div className="inline-flex flex-wrap items-center gap-1 bg-white rounded border border-[#D0D8E0] shadow-xs mb-6 overflow-hidden max-w-max">
              <span className="bg-brand-blue text-white text-[8px] font-sans font-bold tracking-[1.5px] px-3 py-1.5 uppercase">
                Est. 1995
              </span>
              <span className="text-[#334155] text-[9.5px] font-sans font-semibold px-3.5 py-1.5 tracking-wide flex items-center gap-1">
                <Award size={12} className="text-brand-orange" />
                NECTA National Standard IV & VII Top Performer · Mbeya
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-[1.12] mb-6 transition-all duration-300">
              Shaping High-Achievers for <span className="text-brand-blue italic font-serif block sm:inline">Tanzania’s Bright Future</span>
            </h1>

            {/* Subtitle with key psychological features */}
            <p className="text-sm md:text-base text-gray-700 max-w-2xl font-sans leading-relaxed mb-6">
              Empowering nursery, pre-primary, and primary pupils with peer-supported remedial learning, zero-bias admissions, secure school bus transport tours, and modern science classes in cooling highlands of Mbeya. 
            </p>

            {/* Fee Prompt Box */}
            <div className="bg-blue-50/80 border-l-4 border-brand-blue p-4 rounded-r-md max-w-xl mb-8 flex gap-3 items-start">
              <ShieldAlert className="text-brand-blue shrink-0 mt-0.5" size={18} />
              <div className="text-xs text-brand-blue">
                <span className="font-bold uppercase tracking-wider block mb-0.5">Affordable High-End Quality:</span>
                School tuition is <strong className="text-brand-orange">900,000 TSh per year</strong> and complete transportation tour is <strong className="text-brand-blue">400,000 TSh per year</strong>. We maintain a zero class repetition policy to safeguard your child's confidence.
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onStartApplicationClick}
                className="bg-brand-blue hover:bg-[#D97706] text-white text-xs sm:text-sm font-sans font-bold px-6 py-4 rounded-[4px] shadow-md transition-all duration-300 transform active:scale-95 flex items-center gap-2"
              >
                <Sparkles size={14} />
                <span>Begin Admissions (Age 3.5+)</span>
              </button>

              <button
                onClick={() => {
                  setIsVideoModalOpen(true);
                  setIsPlayingFilm(true);
                }}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-bold text-brand-blue hover:text-brand-orange transition-colors group p-2 relative"
              >
                <span className="w-9 h-9 border-2 border-brand-blue bg-white text-brand-blue rounded-full flex items-center justify-center shadow-sm relative pulse-ring-active group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-300">
                  <Play size={14} className="fill-none ml-0.5" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 font-sans">
                  Watch School Film
                </span>
              </button>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="pt-4 border-t border-[#D0D8E0] mt-auto flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-600 font-sans">
            <div>
              <span className="text-gray-500">Admissions Director:</span>{" "}
              <a href="tel:0684253580" className="font-bold text-brand-blue hover:underline">{CONTACT_INFO.mrKomba.name} ({CONTACT_INFO.mrKomba.phone})</a>
            </div>
            <div>
              <span className="text-gray-500">Operations Head:</span>{" "}
              <a href="tel:0754013886" className="font-bold text-brand-blue hover:underline">{CONTACT_INFO.mrIsack.name} ({CONTACT_INFO.mrIsack.phone})</a>
            </div>
          </div>
        </div>

        {/* Right Section: Compact Stacked Info Cards */}
        <div className="w-full md:w-[220px] shrink-0 flex flex-col justify-start rounded-lg overflow-hidden shadow-lg border border-brand-border h-fit bg-white">
          
          {/* Card 1: Curriculum */}
          <div className="bg-brand-blue hover:bg-brand-blue-hover p-4 flex flex-col justify-between min-h-[105px] border-b border-white/5 transition-colors duration-300 group">
            <Compass size={20} className="text-brand-gold opacity-80 group-hover:scale-110 transition-transform" />
            <div className="mt-3">
              <div className="text-[8px] text-white/60 font-bold tracking-[1.5px] uppercase font-sans">
                Curriculum
              </div>
              <div className="text-xs sm:text-xs font-serif font-bold text-white mt-0.5 leading-snug">
                NECTA National Tanzanian Exams (English Medium)
              </div>
            </div>
          </div>

          {/* Card 2: Tuition Fees */}
          <div className="bg-white p-4 flex flex-col justify-between min-h-[105px] border-b border-brand-border transition-colors duration-300 group">
            <Award size={20} className="text-brand-orange opacity-90 group-hover:rotate-12 transition-transform" />
            <div className="mt-3">
              <div className="text-[8px] text-gray-500 font-bold tracking-[1.5px] uppercase font-sans">
                Tuition Fee
              </div>
              <div className="text-xs sm:text-xs font-serif font-bold text-brand-dark mt-0.5 leading-snug">
                900,000/- TSh Per Year
              </div>
            </div>
          </div>

          {/* Card 3: Entry Ages */}
          <div className="bg-brand-offwhite p-4 flex flex-col justify-between min-h-[105px] transition-colors duration-300 group border-b border-brand-border">
            <Compass size={20} className="text-brand-blue opacity-85 group-hover:scale-110 transition-transform" />
            <div className="mt-3">
              <div className="text-[8px] text-gray-500 font-bold tracking-[1.5px] uppercase font-sans">
                Entry Age
              </div>
              <div className="text-xs sm:text-xs font-serif font-bold text-brand-dark mt-0.5 leading-snug">
                3.5 Years Old and Above
              </div>
            </div>
          </div>

          {/* Dark Strip: Download Prospectus */}
          <div className="bg-brand-dark p-3.5 flex flex-col items-stretch">
            <button
              onClick={onDownloadProspectusClick}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-sans font-bold py-2.5 rounded-[3px] text-center w-full transition-colors duration-300 shadow-sm flex items-center justify-center gap-1.5"
            >
              <FileText size={12} />
              <span>Download Fee Brochure</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Video Player Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#051726]/95 backdrop-blur-lg flex items-center justify-center p-4 transition-all duration-300">
          <div className="relative bg-black w-full max-w-4xl aspect-video rounded-xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-brand-dark/80 hover:bg-brand-orange text-white p-2 text-center items-center justify-center rounded-full transition-all duration-200 shadow-md cursor-pointer flex"
              aria-label="Close Video"
            >
              <X size={18} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/-USKUNpg9_A?autoplay=1&rel=0&modestbranding=1"
              title="Umoja School Film Web Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
