/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import React from "react";
import { Play, Tv, X, Volume2 } from "lucide-react";
import FloatingPlayer from "./FloatingPlayer";

interface CampusCard {
  id: number;
  name: string;
  desc: string;
  gradient: string;
  gridClass: string;
}

const VIDEO_MAP: Record<number, string> = {
  1: "-USKUNpg9_A", // Science Class experiments (requested video)
  2: "-DwAVMDPUYk", // Sports & Athletics Field
  3: "Z41Yg0P70wA", // GPS-Tracked Transport Tour
  4: "yQ0V15_GfW0", // Creative Art Class
  5: "7V2VpWvU0i8", // High-Nutrition Dining Program
  6: "kYh7Cym_Y5g"  // Cozy Boarding Ward / Welfare
};

export default function CampusLife() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; name: string } | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPlayerInView, setIsPlayerInView] = useState(true);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeVideo) {
      setIsPlayerInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlayerInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeVideo]);

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

  const handleCardClick = (id: number, name: string) => {
    const videoId = VIDEO_MAP[id] || "-USKUNpg9_A";
    setActiveVideo({ id: videoId, name });
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

        {/* Real Video Player HUD */}
        {activeVideo && (
          <div 
            ref={playerRef}
            id="video-hud-overlay"
            className="mb-8 p-4 md:p-6 bg-brand-dark text-[#F4F7FA] rounded-lg border border-brand-orange/40 animate-scale-up shadow-2xl relative overflow-hidden flex flex-col gap-4"
          >
            {/* Header Control Panel */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-brand-blue/20 pb-3 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center text-brand-orange shrink-0 animate-pulse">
                  <Volume2 size={15} />
                </div>
                <div className="text-left">
                  <div className="text-[9px] text-brand-orange font-bold tracking-widest uppercase font-mono">
                    ▶ Now Playing Locally
                  </div>
                  <div className="text-sm font-bold font-serif text-white">
                    {activeVideo.name}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 items-center self-end sm:self-auto">
                <span className="text-[10px] font-mono text-white/50 bg-[#1D2E3D] px-2.5 py-1 rounded">
                  {isPlayerInView ? "HD Local Player Feed" : "PiP Active Mode"}
                </span>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="text-white hover:text-brand-orange text-xs font-sans font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-all cursor-pointer"
                >
                  <X size={13} />
                  <span>Close Player</span>
                </button>
              </div>
            </div>

            {/* Embedded Responsive Video Player / Placeholder */}
            <div className="w-full aspect-video md:max-w-4xl mx-auto rounded-lg overflow-hidden border border-brand-blue/20 shadow-lg bg-black relative">
              {isPlayerInView ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                  title={`Umoja School Feature - ${activeVideo.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                  className="w-full h-full border-0"
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-[#051726]/95 flex flex-col items-center justify-center text-center p-6 gap-3 select-none">
                  <div className="w-12 h-12 rounded-full border border-brand-orange/40 flex items-center justify-center text-brand-orange animate-pulse">
                    <Volume2 size={20} className="animate-bounce" />
                  </div>
                  <h5 className="font-serif font-bold text-white text-base">Picture-in-Picture Mode Active</h5>
                  <p className="text-xs text-white/60 max-w-sm">
                    You scrolled away! The video of <strong>{activeVideo.name}</strong> is now playing in the floating movable window.
                  </p>
                  <button
                    onClick={() => {
                      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="mt-2 text-xs font-sans font-bold bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-orange/80 transition-all cursor-pointer shadow-md"
                  >
                    Scroll back to Original Player
                  </button>
                </div>
              )}
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
                onClick={() => handleCardClick(card.id, card.name)}
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

      {/* Floating Picture-in-Picture Player */}
      {activeVideo && !isPlayerInView && (
        <FloatingPlayer 
          videoId={activeVideo.id}
          title={activeVideo.name}
          onClose={() => setActiveVideo(null)}
          onRestore={() => {
            playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        />
      )}
    </section>
  );
}
