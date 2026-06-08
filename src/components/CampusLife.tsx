/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import React from "react";
import { Play, Tv, X, Volume2 } from "lucide-react";

interface CampusCard {
  id: number;
  name: string;
  desc: string;
  gradient: string;
  gridClass: string;
}

export default function CampusLife() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const cards: CampusCard[] = [
    {
      id: 1,
      name: "Science Class experiments",
      desc: "Interactive learning of NECTA elementary science. Where Standard IV and VII perform physical plant biology assays, water filtration, and circuit experiments.",
      gradient: "from-[#0B3C5D] via-slate-900 to-[#051726]",
      gridClass: "col-span-12 md:col-span-8 h-48 md:h-64"
    },
    {
      id: 2,
      name: "Sports & Athletics Field",
      desc: "Nurturing fitness through inter-school soccer league trophies, traditional competitive races, and outdoor play.",
      gradient: "from-brand-orange via-red-900 to-[#12100E]",
      gridClass: "col-span-12 md:col-span-4 h-48 md:h-64"
    },
    {
      id: 3,
      name: "GPS-Tracked Transport Tour",
      desc: "Safe door-to-door transit across Mbeya (Soweto, Forest, Uyole, Ruanda, Iyunga, Lupa Road) for TSh 400,000/year under superintendent Mr. Isack.",
      gradient: "from-slate-800 via-slate-900 to-brand-dark",
      gridClass: "col-span-12 md:col-span-4 h-40 md:h-52"
    },
    {
      id: 4,
      name: "Creative Art Class",
      desc: "Handcrafted clay molding, traditional Swahili watercolor paintings, and choir music to trigger early spatial cognitive intelligence.",
      gradient: "from-brand-orange via-amber-700 to-slate-950",
      gridClass: "col-span-12 md:col-span-4 h-40 md:h-52"
    },
    {
      id: 5,
      name: "High-Nutrition Dining Program",
      desc: "Daily fresh-cooked proteins, balanced multi-vitamin vegetables, healthy cereals, and milk to feed brain cognitive focus.",
      gradient: "from-emerald-800 via-[#0B3C5D] to-slate-900",
      gridClass: "col-span-12 md:col-span-4 h-40 md:h-52"
    },
    {
      id: 6,
      name: "Cozy Boarding Ward",
      desc: "Separate high-hygiene halls managed by Dean Mr. Komba. Feats warm solar showers, insect audits, mosquito nets, and structured evening tutoring.",
      gradient: "from-blue-900 to-indigo-950",
      gridClass: "col-span-12 h-36 md:h-44"
    }
  ];

  const handleCardClick = (name: string) => {
    setActiveVideo(name);
    setTimeout(() => {
      const hud = document.getElementById("video-hud-overlay");
      if (hud) {
        hud.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <section id="campus-gallery" className="py-14 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[1.5px] bg-[#E07B2A]" />
              <div className="text-[10px] font-sans font-bold uppercase tracking-[2px] text-brand-orange">Campus Life</div>
            </div>
            <h2 className="font-serif text-3xl font-extrabold text-[#111827] tracking-tight leading-none">
              Services & Practical Classes
            </h2>
            <p className="text-xs text-gray-500 mt-2 max-w-lg">
              Explore how we deliver top welfare, safe transport, and practical learning inside Umoja School.
            </p>
          </div>
          
          <div className="text-xs font-sans font-bold text-brand-blue flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded">
            <Tv size={14} className="animate-pulse text-brand-orange" />
            <span>Interactive Service Video Playlists</span>
          </div>
        </div>

        {/* Dynamic Video HUD Display */}
        {activeVideo && (
          <div 
            id="video-hud-overlay"
            className="mb-8 p-4 bg-brand-dark text-[#F4F7FA] rounded-md border border-brand-blue/30 flex flex-col md:flex-row justify-between items-center gap-4 animate-scale-up shadow-md relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 bottom-0 opacity-10 flex gap-0.5 items-end p-2 pointer-events-none">
              <div className="w-1 h-12 bg-white animate-pulse" />
              <div className="w-1 h-8 bg-white animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-10 bg-white animate-pulse" style={{ animationDelay: '0.4s' }} />
              <div className="w-1 h-6 bg-white animate-pulse" style={{ animationDelay: '0.1s' }} />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                <Volume2 size={15} />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-[#FFBE0B] font-bold tracking-widest uppercase font-mono">
                  ▶ Active Live Stream
                </div>
                <div className="text-sm font-bold font-serif text-white">
                  Broadcasting: {activeVideo}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-[10px] font-mono text-white/50 bg-[#1D2E3D] px-2 py-1 rounded">
                Simulating HD Feed...
              </span>
              <button 
                onClick={() => setActiveVideo(null)}
                className="text-white hover:text-brand-orange text-xs font-sans font-bold flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded"
              >
                <X size={12} />
                <span>Close Player</span>
              </button>
            </div>
          </div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5 mb-8">
          {cards.map((card) => {
            const isHovered = hoveredId === card.id;

            return (
              <div 
                key={card.id}
                className={`${card.gridClass} rounded-lg overflow-hidden relative cursor-pointer shadow-xs border border-brand-border group flex flex-col justify-end p-6 select-none`}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(card.name)}
              >
                {/* Background Gradient container */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${card.gradient} transition-all duration-500 ease-out z-0`}
                  style={{
                    filter: isHovered ? "blur(0px)" : "blur(4px)",
                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                  }}
                />

                {/* Dark Vignette Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-90 z-10" />

                {/* Interactive Play Button */}
                <div 
                  className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(12px)"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs border-2 border-white flex items-center justify-center text-white">
                    <Play size={16} className="fill-current ml-0.5 text-white" />
                  </div>
                </div>

                {/* Labels overlay bottom left */}
                <div className="relative z-20 text-left">
                  <h4 className="font-serif font-extrabold text-white text-base md:text-lg mb-1 leading-snug">
                    {card.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-300 leading-relaxed font-sans max-w-xl">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
