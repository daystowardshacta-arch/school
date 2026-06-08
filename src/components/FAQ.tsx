/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import React from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FAQS, CONTACT_INFO } from "../data/schoolData";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-14 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Accordion Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-brand-blue text-[9px] font-bold uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle size={12} className="text-brand-orange" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
            Answering Your Direct Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto">
            Everything you need to plan your registration journey. Feel free to contact our senior administrators at any time.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column (Items 1, 3, 5) */}
          <div className="space-y-4">
            {FAQS.filter((_, idx) => idx % 2 === 0).map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`border rounded-lg bg-white overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "border-brand-blue shadow-xs" 
                      : "border-brand-border hover:border-brand-orange/40"
                  }`}
                  style={{
                    borderLeftWidth: isOpen ? "3px" : "1px",
                    borderLeftColor: isOpen ? "var(--color-brand-blue)" : ""
                  }}
                >
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 bg-white outline-none cursor-pointer"
                  >
                    <span className={`text-xs md:text-[13px] font-extrabold font-sans transition-colors duration-300 leading-tight ${
                      isOpen ? "text-brand-blue font-bold" : "text-brand-dark"
                    }`}>
                      {item.question}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-brand-blue" : ""
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                      isOpen ? "max-h-52 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[11px] leading-[1.7] text-gray-600 font-sans font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Items 2, 4) */}
          <div className="space-y-4">
            {FAQS.filter((_, idx) => idx % 2 !== 0).map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`border rounded-lg bg-white overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "border-brand-blue shadow-xs" 
                      : "border-brand-border hover:border-brand-orange/40"
                  }`}
                  style={{
                    borderLeftWidth: isOpen ? "3px" : "1px",
                    borderLeftColor: isOpen ? "var(--color-brand-blue)" : ""
                  }}
                >
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 bg-white outline-none cursor-pointer"
                  >
                    <span className={`text-xs md:text-[13px] font-extrabold font-sans transition-colors duration-300 leading-tight ${
                      isOpen ? "text-brand-blue font-bold" : "text-brand-dark"
                    }`}>
                      {item.question}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-brand-blue" : ""
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                      isOpen ? "max-h-52 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[11px] leading-[1.7] text-gray-600 font-sans font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer Support Prompt */}
        <div className="mt-10 text-center bg-blue-50/50 p-4 rounded-md border border-blue-100 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-left text-brand-blue">
            <span className="font-bold block uppercase tracking-wider text-[10px]">Speak to Mr. Isack & Mr. Komba:</span>
            Feel free to place a direct phone call for fee arrangements, visits, or admissions checklists.
          </div>
          <div className="flex gap-2 text-brand-blue font-extrabold font-mono shrink-0">
            <a href={`tel:${CONTACT_INFO.mrIsack.phone}`} className="bg-brand-blue text-white px-3 py-1.5 rounded hover:bg-brand-blue-hover transition-colors flex items-center gap-1">
              <PhoneCall size={12} />
              <span>{CONTACT_INFO.mrIsack.name}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
