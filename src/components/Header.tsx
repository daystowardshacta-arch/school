/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import React from "react";
import { Menu, X, LogIn, Award, Sparkles } from "lucide-react";
import SchoolLogo from "./SchoolLogo";

interface HeaderProps {
  onApplyClick: () => void;
  onPortalClick: () => void;
  onNavigate: (view: "home" | "news" | "results") => void;
  currentView: "home" | "news" | "results";
}

export default function Header({ onApplyClick, onPortalClick, onNavigate, currentView }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, view: "home" | "news" | "results" = "home") => {
    setIsMobileMenuOpen(false);
    onNavigate(view);
    
    if (view === "home") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sticky Top Navigation */}
      <nav id="nav-header" className="sticky top-0 z-50 bg-white border-b border-[#D0D8E0] h-16 px-4 md:px-8 lg:px-12 flex items-center justify-between shadow-xs">
        
        {/* Left Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick("hero-section", "home")}
        >
          {/* Brand dark blue emblem */}
          <SchoolLogo className="w-10 h-10" />
          <div>
            <div className="font-serif font-extrabold text-brand-blue text-sm md:text-base tracking-tight leading-none">
              Umoja Pre & Primary
            </div>
            <div className="text-[9px] text-[#D97706] font-semibold tracking-[1.5px] uppercase leading-tight mt-0.5 font-sans">
              English Medium · Mbeya
            </div>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick("hero-section", "home")}
            className={`text-xs lg:text-sm font-sans font-medium transition-colors relative py-2 ${currentView === "home" ? "text-brand-blue font-bold" : "text-gray-600 hover:text-brand-blue"}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("why-mlima", "home")}
            className="text-xs lg:text-sm font-sans font-medium text-gray-600 hover:text-brand-blue transition-colors py-2"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick("programmes-section", "home")}
            className="text-xs lg:text-sm font-sans font-medium text-gray-600 hover:text-brand-blue transition-colors py-2"
          >
            Curriculum (NECTA)
          </button>
          <button
            onClick={() => handleNavClick("campus-gallery", "home")}
            className="text-xs lg:text-sm font-sans font-medium text-gray-600 hover:text-brand-blue transition-colors py-2"
          >
            Campus Life
          </button>
          <button
            onClick={() => handleNavClick("admissions-timeline", "home")}
            className="text-xs lg:text-sm font-sans font-medium text-gray-600 hover:text-brand-blue transition-colors py-2"
          >
            Admissions
          </button>
          <button
            onClick={() => handleNavClick("", "news")}
            className={`text-xs lg:text-sm font-sans font-medium transition-colors relative py-2 ${currentView === "news" ? "text-brand-blue font-bold border-b-2 border-brand-blue" : "text-gray-600 hover:text-brand-blue"}`}
          >
            News & Feed
          </button>
          <button
            onClick={() => handleNavClick("", "results")}
            className={`text-xs lg:text-sm font-sans font-medium transition-colors relative py-2 ${currentView === "results" ? "text-brand-blue font-bold border-b-2 border-brand-blue" : "text-gray-600 hover:text-brand-blue"}`}
          >
            Exam Results
          </button>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button 
            onClick={onPortalClick}
            className="flex items-center gap-1.5 text-xs lg:text-sm font-sans font-bold text-brand-blue hover:text-[#D97706] transition-colors"
          >
            <LogIn size={14} />
            <span>Portal</span>
          </button>
          <button
            onClick={onApplyClick}
            className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs lg:text-sm font-sans font-bold px-4 py-2 rounded-[3px] shadow-xs transition-colors"
          >
            Apply Online
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick("", "news")}
            className="text-gray-600 hover:text-brand-blue p-1.5 text-xs font-bold"
          >
            News
          </button>
          <button
            onClick={() => handleNavClick("", "results")}
            className="text-[#D97706] p-1.5 text-xs font-extrabold flex items-center gap-0.5"
          >
            <Award size={12} />
            Results
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-blue focus:outline-none p-1.5"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menus */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-md flex flex-col justify-between p-8 md:hidden text-white animate-fade-in">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <SchoolLogo className="w-8 h-8" />
              <span className="font-serif font-bold text-sm tracking-tight text-white">Umoja School</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white bg-white/20 p-2 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-5 my-auto text-center">
            <button
              onClick={() => handleNavClick("hero-section", "home")}
              className="text-base font-sans font-semibold text-white/90 hover:text-brand-gold py-1"
            >
              Home Page
            </button>
            <button
              onClick={() => handleNavClick("why-mlima", "home")}
              className="text-base font-sans font-semibold text-white/90 hover:text-brand-gold py-1"
            >
              About School
            </button>
            <button
              onClick={() => handleNavClick("programmes-section", "home")}
              className="text-base font-sans font-semibold text-white/90 hover:text-brand-gold py-1"
            >
              Curriculum & Values
            </button>
            <button
              onClick={() => handleNavClick("campus-gallery", "home")}
              className="text-base font-sans font-semibold text-white/90 hover:text-brand-gold py-1"
            >
              School Services & Campus
            </button>
            <button
              onClick={() => handleNavClick("admissions-timeline", "home")}
              className="text-base font-sans font-semibold text-white/90 hover:text-brand-gold py-1"
            >
              Fee & Admissions Rules
            </button>
            <button
              onClick={() => handleNavClick("", "news")}
              className="text-base font-sans font-bold text-brand-gold py-1"
            >
              News & Announcements
            </button>
            <button
              onClick={() => handleNavClick("", "results")}
              className="text-base font-sans font-bold text-[#E07B2AF0] py-1"
            >
              NECTA Academic Results
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onPortalClick();
              }}
              className="flex items-center justify-center gap-2 bg-white/10 text-white rounded-[4px] py-3 text-sm font-sans font-bold"
            >
              <LogIn size={16} />
              Parents & Teachers Portal
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onApplyClick();
              }}
              className="bg-brand-orange text-white rounded-[4px] py-3.5 text-sm font-sans font-bold tracking-wide"
            >
              Apply Online Registration
            </button>
          </div>
        </div>
      )}

      {/* Floating Call to Action */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 items-end">
          <button
            onClick={onApplyClick}
            className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-extrabold px-5 py-3.5 rounded-full shadow-lg flex items-center gap-2 tracking-wide border border-white/20 uppercase"
          >
            <Sparkles size={14} />
            Apply Now
          </button>
        </div>
      )}
    </>
  );
}
