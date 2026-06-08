/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  ExternalLink 
} from "lucide-react";
import React from "react";
import { CONTACT_INFO } from "../data/schoolData";
import SchoolLogo from "./SchoolLogo";

interface FooterProps {
  onApplyClick: () => void;
  onBookVisitClick: () => void;
}

export default function Footer({ onApplyClick, onBookVisitClick }: FooterProps) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="footer-section" className="bg-brand-dark text-white pt-16 pb-8 border-t border-brand-blue/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: biography */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5 space-y-6">
            
            <div 
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={handleLogoClick}
            >
              <SchoolLogo className="w-10 h-10" />
              <div>
                <h3 className="font-serif font-extrabold text-white text-base tracking-tight leading-none text-left">
                  Umoja Pre & Primary
                </h3>
                <span className="text-[8px] text-brand-gold font-bold tracking-[2px] uppercase font-sans mt-1 block leading-none text-left">
                  Mbeya · Tanzania
                </span>
              </div>
            </div>

            <p className="text-[11.5px] leading-relaxed text-gray-300 font-sans max-w-sm text-left">
              Consistently leading co-educational development in the Southern Highlands of Tanzania since 1995. Fully registered under NECTA curriculum guidelines, raising leaders without class repetitions.
            </p>

            {/* Socials */}
            <div className="flex gap-4 items-center">
              {[
                { icon: <Facebook size={16} />, link: "https://facebook.com" },
                { icon: <Instagram size={16} />, link: "https://instagram.com" },
                { icon: <Youtube size={16} />, link: "https://youtube.com" },
                { icon: <Linkedin size={16} />, link: "https://linkedin.com" }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-brand-orange hover:bg-brand-orange text-white hover:text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onApplyClick}
                className="bg-brand-blue hover:bg-[#D97706] text-white font-sans font-bold text-xs py-3.5 px-5 rounded-[3px] text-center shadow-xs transition-colors cursor-pointer"
              >
                Apply Admissions Now — Free
              </button>
              <button
                onClick={onBookVisitClick}
                className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-medium text-xs py-3.5 px-4 rounded-[4px] text-center transition-colors cursor-pointer"
              >
                Request Tuition Fee Prospectus
              </button>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:pl-6 space-y-4">
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[2px] font-sans text-left">
              SCHOOL SECTIONS
            </h4>
            <div className="flex flex-col gap-3 text-left">
              {[
                { name: "About Umoja School", target: "why-mlima" },
                { name: "Nursery & Primary Tracks", target: "programmes-section" },
                { name: "Transport Tour Schedules", target: "campus-gallery" },
                { name: "Admissions & Entry Marks", target: "admissions-timeline" },
                { name: "Frequently Asked Questions", target: "faq-section" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.target)}
                  className="text-left text-[11.5px] text-gray-300 hover:text-brand-gold transition-colors leading-relaxed font-sans cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[2px] font-sans text-left">
              OFFICIAL CONTACT DETAILS
            </h4>
            
            <div className="space-y-3 text-left">
              <div className="flex gap-2.5 items-start">
                <MapPin size={13} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-[11.5px] text-gray-300 font-sans leading-tight">
                  {CONTACT_INFO.general.location}
                </span>
              </div>
              
              <div className="flex gap-2.5 items-center">
                <Phone size={13} className="text-brand-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.mrIsack.phone}`} className="text-[11.5px] text-gray-300 font-sans leading-none hover:underline">
                  Logistics (Mr. Isack): {CONTACT_INFO.mrIsack.phone}
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone size={13} className="text-brand-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.mrKomba.phone}`} className="text-[11.5px] text-gray-300 font-sans leading-none hover:underline">
                  Admissions (Mr. Komba): {CONTACT_INFO.mrKomba.phone}
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Mail size={13} className="text-brand-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.general.email}`} className="text-[11.5px] text-gray-300 font-sans leading-none hover:underline">
                  {CONTACT_INFO.general.email}
                </a>
              </div>
            </div>

            {/* Embedded simulation map */}
            <div className="rounded border border-white/10 overflow-hidden h-28 w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.086111300898!2d33.4358!3d-8.9094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19277fba1f592f9d%3A0x6b7774d75d2dfba0!2sMbeya%2C%20Tanzania!5e0!3m2!1sen!2s!4v1620000000000" 
                className="w-full h-full border-none absolute inset-0"
                loading="lazy"
                title="Umoja School Map location"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-transparent pointer-events-none" />
            </div>
            
            <a 
              href="https://maps.google.com/?q=Mbeya+Tanzania+Umoja" 
              target="_blank" 
              rel="noreferrer"
              className="text-[9.5px] font-bold text-brand-gold hover:underline flex items-center gap-1 leading-none cursor-pointer justify-start"
            >
              <span>View Route Logistics Map</span>
              <ExternalLink size={10} />
            </a>
          </div>

        </div>

        {/* Bottom copyright segments */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center select-none opacity-90 text-xs">
          <span className="text-[10px] text-gray-400 font-sans">
            © 2026 Umoja Pre & Primary School · Lupa Road, Mbeya, Tanzania. Reg: NECTA English Medium.
          </span>
          
          <div className="flex flex-wrap justify-center gap-5">
            {["Strict Anti-Bias Policy", "No-Repetition Modules", "Kiswahili Portal Info"].map((link) => (
              <a 
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-[10px] text-gray-400 hover:text-brand-orange transition-colors font-sans"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
