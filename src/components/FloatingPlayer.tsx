/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion } from "motion/react";
import { X, Move, ArrowUpRight, Volume2 } from "lucide-react";

interface FloatingPlayerProps {
  videoId: string;
  title: string;
  onClose: () => void;
  onRestore: () => void;
}

export default function FloatingPlayer({ videoId, title, onClose, onRestore }: FloatingPlayerProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={constraintsRef} 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      id="floating-pip-boundary"
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.05}
        initial={{ opacity: 0, scale: 0.85, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 80 }}
        className="absolute bottom-6 right-6 w-72 sm:w-80 md:w-96 bg-brand-dark/95 backdrop-blur-md rounded-lg shadow-2xl border border-brand-orange/50 overflow-hidden pointer-events-auto flex flex-col cursor-grab active:cursor-grabbing hover:border-brand-orange transition-colors"
        id="floating-pip-window"
        style={{ touchAction: "none" }}
      >
        {/* Header Bar */}
        <div 
          className="flex items-center justify-between px-3 py-2 bg-brand-dark border-b border-brand-blue/20 select-none text-white"
          id="floating-pip-header"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <Move size={12} className="text-brand-orange shrink-0 animate-pulse" />
            <span className="text-[9px] font-mono tracking-wider text-brand-orange uppercase font-bold shrink-0">
              Floating:
            </span>
            <span className="text-xs font-sans font-bold truncate text-white/90">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Scroll/Restore button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRestore();
              }}
              className="text-white/70 hover:text-brand-orange p-1 rounded hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
              title="Scroll to Original Player"
              id="btn-pip-restore"
            >
              <ArrowUpRight size={13} />
            </button>
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-white/70 hover:text-red-500 p-1 rounded hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
              title="Close Video"
              id="btn-pip-close"
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Video Frame */}
        <div className="w-full aspect-video bg-black relative" id="floating-pip-iframe-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
            title={`Umoja School Mini Feed - ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="no-referrer"
            className="w-full h-full border-0"
            id="floating-pip-iframe"
          ></iframe>
        </div>

        {/* Footer Hint */}
        <div 
          className="px-3 py-1 bg-[#051726]/90 text-[9px] text-white/50 text-center font-sans tracking-wide border-t border-brand-blue/10 flex items-center justify-center gap-1"
          id="floating-pip-hint"
        >
          <Volume2 size={9} className="text-brand-orange" />
          <span>Drag me anywhere on your screen.</span>
        </div>
      </motion.div>
    </div>
  );
}
