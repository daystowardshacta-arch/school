/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  BookOpen, 
  Megaphone, 
  Search, 
  ChevronRight, 
  Bell, 
  MapPin 
} from "lucide-react";
import { NEWS_ARTICLES, SCHOOL_EVENTS } from "../data/schoolData";
import { NewsArticle, SchoolEvent } from "../types";

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Academic Excellence", "Campus & Nutrition", "Services Update"];

  // Filter articles based on search & tab selection
  const filteredArticles = NEWS_ARTICLES.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle going back to default list
  const handleBack = () => {
    setSelectedArticle(null);
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadArticle = (art: NewsArticle) => {
    setSelectedArticle(art);
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadEvent = (evt: SchoolEvent) => {
    setSelectedEvent(evt);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1. SINGLE STANDING VIEW FOR DETAILS
  if (selectedArticle) {
    return (
      <div className="bg-brand-offwhite py-12 animate-fade-in text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-brand-blue hover:text-brand-orange mb-6 cursor-pointer bg-white px-3 py-1.5 rounded-md border border-brand-border"
          >
            <ArrowLeft size={14} />
            <span>Back to Newsroom Feed</span>
          </button>

          <article className="bg-white border border-brand-border rounded-lg p-6 sm:p-10 shadow-sm">
            {/* Header info */}
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <span className="bg-blue-50 text-brand-blue text-[10px] font-sans font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              {selectedArticle.badge && (
                <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-sans font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {selectedArticle.badge}
                </span>
              )}
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight mb-6">
              {selectedArticle.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-6 border-b border-brand-border mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={13} />
                <span>Published on {selectedArticle.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={13} />
                <span>Written by: {selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={13} />
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Simulated Banner Cover */}
            <div className="w-full h-48 sm:h-64 bg-slate-900 rounded-md mb-8 flex items-center justify-center text-center p-6 relative overflow-hidden bg-gradient-to-tr from-[#0B3C5D] to-[#1D2E3D]">
              <div className="text-white relative z-10 max-w-lg">
                <BookOpen size={30} className="mx-auto text-brand-gold mb-3 animate-bounce" />
                <p className="font-serif italic text-xs sm:text-sm text-gray-200">
                  "Raising multilingual Tanzanian leaders through academic commitment, nutrition menus, and direct NECTA competency guidelines."
                </p>
              </div>
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>

            {/* Rich Content Render */}
            <div className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-wrap space-y-4">
              {selectedArticle.fullContent}
            </div>

            <div className="mt-12 pt-6 border-t border-brand-border flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-mono">ID: {selectedArticle.id}</span>
              <button 
                onClick={handleBack}
                className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-bold px-4 py-2.5 rounded shadow cursor-pointer transition-colors"
              >
                Return to Directory
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // 2. SINGLE STANDING VIEW FOR EVENT
  if (selectedEvent) {
    return (
      <div className="bg-brand-offwhite py-12 animate-fade-in text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-brand-blue hover:text-brand-orange mb-6 cursor-pointer bg-white px-3 py-1.5 rounded-md border border-brand-border"
          >
            <ArrowLeft size={14} />
            <span>Back to Admissions News & Feed</span>
          </button>

          <article className="bg-white border border-brand-border rounded-lg p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-50 text-brand-orange text-[10px] font-sans font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                Upcoming School Event
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight mb-6">
              {selectedEvent.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-blue-50/55 rounded-lg border border-blue-100 mb-8 text-xs text-brand-blue">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-brand-orange" />
                <div>
                  <div className="text-[9px] text-[#A5B4FC] font-extrabold uppercase">Event Date</div>
                  <strong>{selectedEvent.date}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-brand-orange" />
                <div>
                  <div className="text-[9px] text-[#A5B4FC] font-extrabold uppercase">Event Time</div>
                  <strong>{selectedEvent.time}</strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-brand-orange" />
                <div>
                  <div className="text-[9px] text-[#A5B4FC] font-extrabold uppercase">Campus Location</div>
                  <strong>{selectedEvent.location}</strong>
                </div>
              </div>
            </div>

            <div className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              <p className="font-bold text-brand-dark mb-4 text-sm">{selectedEvent.summary}</p>
              {selectedEvent.fullDetails}
            </div>

            <div className="mt-8 bg-amber-50/50 border border-amber-200 p-4 rounded text-xs text-amber-900">
              <strong>Need a visitor badge or guided campus route tour?</strong> Call logistics dean Mr. Isack on 0754013886 to secure direct entry routing and bus parking tags.
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-mono">ID: {selectedEvent.id}</span>
              <button 
                onClick={handleBack}
                className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-bold px-4 py-2.5 rounded shadow cursor-pointer transition-colors"
              >
                Back to All Events
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // 3. MAIN DIRECTORY NEWSROOM LIST PAGE
  return (
    <div className="bg-[#FAF7FA] py-12 animate-fade-in text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Newsroom Top Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-brand-blue text-[9px] font-bold uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3">
            <Megaphone size={12} className="text-brand-orange animate-bounce" />
            UMOJA SCHOOL FEEDROOM
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-2">
            Events, Results & Official Updates
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Stay plugged into our NECTA highlights, high-nutrition menus, transport tour routes, and campus circulars.
          </p>
        </div>

        {/* Search & Filter bar layout */}
        <div className="bg-white border border-brand-border rounded-lg p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10.5px] font-sans font-bold px-3 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-brand-blue text-white" 
                    : "bg-blue-50/50 text-brand-blue hover:bg-blue-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-offwhite border border-brand-border pl-9 pr-4 py-2 rounded text-xs focus:border-brand-blue outline-none"
            />
          </div>

        </div>

        {/* Bento Grid layout of News Feed & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MAIN COLUMN (8 cols): Interactive News Panels */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredArticles.length === 0 ? (
              <div className="bg-white border border-brand-border rounded-lg p-12 text-center text-gray-500">
                <Clock className="mx-auto text-gray-300 mb-3" size={32} />
                <p className="text-xs font-sans font-bold uppercase tracking-wider text-brand-dark mb-1">No announcements matches search</p>
                <button 
                  onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                  className="text-xs text-brand-blue font-bold tracking-wide mt-2 underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {filteredArticles.map((art, index) => {
                  const isFeatured = index === 0;
                  return (
                    <div 
                      key={art.id}
                      className={`bg-white border border-brand-border rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 ${
                        isFeatured ? "md:col-span-2 border-l-4 border-brand-orange" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 text-[10px]">
                          <span className="bg-blue-50 font-bold text-brand-blue px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {art.category}
                          </span>
                          <span className="text-gray-400 font-medium flex items-center gap-1">
                            <Calendar size={11} className="text-brand-orange" />
                            {art.date}
                          </span>
                        </div>

                        <h3 className={`font-serif font-extrabold text-[#111827] group-hover:text-brand-orange mb-3 tracking-tight ${
                          isFeatured ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                        }`}>
                          {art.title}
                        </h3>

                        <p className="text-[11px] text-gray-500 leading-relaxed font-sans mb-4">
                          {art.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-brand-border mt-4">
                        <span className="text-[9.5px] text-gray-400 font-mono italic">By {art.author}</span>
                        <button 
                          onClick={() => handleReadArticle(art)}
                          className="text-[11px] font-sans font-extrabold text-brand-blue hover:text-brand-orange flex items-center gap-1 group cursor-pointer"
                        >
                          <span>Read Full Announcement</span>
                          <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}

              </div>
            )}

          </div>

          {/* SIDEBAR COLUMN (4 cols): Events & Noticeboard */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Notice board */}
            <div className="bg-white border border-brand-border rounded-lg p-6 shadow-2xs">
              <h3 className="font-serif font-extrabold text-[#111827] text-base mb-4 flex items-center gap-1.5 border-b border-brand-border pb-3">
                <Bell size={16} className="text-brand-orange animate-pulse" />
                <span>Notice Board Hub</span>
              </h3>

              <div className="space-y-4">
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded text-left">
                  <div className="text-[9px] text-brand-blue font-extrabold tracking-wider uppercase mb-1">Registration Rule</div>
                  <p className="text-[10.5px] text-gray-600 leading-normal">
                    Admissions minimum age is <strong>3.5 years old</strong>. Diagnostics entry checkup has a target of overall score <strong>above 61%</strong>.
                  </p>
                </div>

                <div className="p-3 bg-amber-50/40 border border-amber-100 rounded text-left">
                  <div className="text-[9px] text-brand-orange font-extrabold tracking-wider uppercase mb-1">Zero Bias Guarantee</div>
                  <p className="text-[10.5px] text-gray-600 leading-normal">
                    Umoja prohibits all religion bias, racism, or tribal preferences. Every family is admitted equally.
                  </p>
                </div>

                <div className="p-3 bg-green-50/55 border border-green-100 rounded text-left">
                  <div className="text-[9px] text-green-700 font-extrabold tracking-wider uppercase mb-1">Fees Policy</div>
                  <p className="text-[10.5px] text-gray-600 leading-normal">
                    Tuition is <strong>900,000 TSh</strong> per year. Transit school bus route is <strong>400,000 TSh</strong> per year with warden schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Events sidebar list */}
            <div className="bg-brand-dark text-white rounded-lg p-6 shadow-xs text-left">
              <h3 className="font-serif font-extrabold text-white text-base mb-4 flex items-center gap-1.5 border-b border-white/10 pb-3">
                <Calendar size={16} className="text-brand-orange" />
                <span>Upcoming Events</span>
              </h3>

              <div className="space-y-4">
                {SCHOOL_EVENTS.map(evt => (
                  <div 
                    key={evt.id}
                    className="border-b border-white/10 last:border-b-0 pb-3 last:pb-0 group cursor-pointer"
                    onClick={() => handleReadEvent(evt)}
                  >
                    <div className="text-[9.5px] text-brand-gold font-bold tracking-wider font-sans mb-1 uppercase">
                      📅 {evt.date}
                    </div>
                    <h4 className="font-sans text-xs font-bold text-white group-hover:text-brand-orange transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-[10.5px] text-gray-300 leading-snug line-clamp-2 mt-1">
                      {evt.summary}
                    </p>
                    <div className="text-[9px] text-[#A5B4FC] font-extrabold uppercase mt-2 select-none">
                      Location: {evt.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
