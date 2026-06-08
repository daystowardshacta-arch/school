/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { X, Sparkles, Send, HelpCircle } from "lucide-react";
import { ApplicationFormData, ProgramType } from "../types";

interface StartApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitCapture: (capturedData: Partial<ApplicationFormData>) => void;
}

export default function StartApplicationModal({ isOpen, onClose, onSubmitCapture }: StartApplicationModalProps) {
  const [studentName, setStudentName] = useState("");
  const [programmeOfInterest, setProgrammeOfInterest] = useState<ProgramType | "">("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Reset fields on modal show
    setStudentName("");
    setProgrammeOfInterest("");
    setParentName("");
    setParentEmail("");
    setParentPhone("");
    setError(null);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!studentName.trim()) {
      setError("Please fill out the student's full name.");
      return;
    }
    if (!programmeOfInterest) {
      setError("Please select the student's level of interest.");
      return;
    }
    if (!parentName.trim()) {
      setError("Please fill out the parent or guardian name.");
      return;
    }
    if (!parentEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentEmail)) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!parentPhone.trim()) {
      setError("Please provide a primary contact phone number.");
      return;
    }

    const compiledData: Partial<ApplicationFormData> = {
      studentName,
      programmeOfInterest,
      parentName,
      parentEmail,
      parentPhone
    };

    onSubmitCapture(compiledData);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Darkened blur background */}
      <div 
        className="fixed inset-0 bg-[#12100E]/70 backdrop-blur-2xs transition-opacity"
        onClick={onClose}
      />

      {/* Styled Card Container */}
      <div 
        ref={cardRef}
        className="relative bg-white w-full max-w-lg rounded-lg shadow-2xl p-6 sm:p-8 border border-brand-border/60 z-10 animate-scale-up my-auto"
      >
        {/* Close Button Trigger */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark p-1.5 rounded-full hover:bg-brand-offwhite transition-colors"
          aria-label="Close modal dialog"
        >
          <X size={18} />
        </button>

        {/* Modal heading and subheads */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[9px] font-bold uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles size={11} className="text-brand-orange" />
            Admissions Registry 2026
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#12100E] tracking-tight leading-none mb-2">
            Begin Your Application
          </h2>
          <p className="text-xs text-[#666666] leading-relaxed">
            Fill the priority details below. We'll contact your family within 24 hours to secure your slots.
          </p>
        </div>

        {/* Validation Errors representation */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-2 border-red-500 rounded text-red-700 text-xs font-semibold leading-relaxed">
            {error}
          </div>
        )}

        {/* Form Inputs Grid */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Student Name field */}
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Student Full Name *
              </label>
              <input
                type="text"
                placeholder="First Name, Alternate, Last Name"
                value={studentName}
                onChange={(e) => { setStudentName(e.target.value); setError(null); }}
                className="w-full bg-white border border-[#EBEBEB] text-brand-dark px-3 py-2.5 rounded-[3px] text-xs font-sans focus:border-brand-green outline-none"
              />
            </div>

            {/* Target Year Group dropdown selection */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Program of Interest *
              </label>
              <select
                value={programmeOfInterest}
                onChange={(e) => { setProgrammeOfInterest(e.target.value as ProgramType); setError(null); }}
                className="w-full bg-white border border-[#EBEBEB] text-brand-dark px-3 py-3 rounded-[3px] text-xs font-sans focus:border-brand-green outline-none"
              >
                <option value="">-- Choose level --</option>
                <option value={ProgramType.Primary}>{ProgramType.Primary} (Std 1–7)</option>
                <option value={ProgramType.OLevel}>{ProgramType.OLevel} (Form 1–4)</option>
                <option value={ProgramType.ALevel}>{ProgramType.ALevel} (Form 5–6)</option>
                <option value={ProgramType.SportsAndArts}>{ProgramType.SportsAndArts} (All Grades)</option>
              </select>
            </div>

            {/* Parent Name field */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Parent / Guardian Name *
              </label>
              <input
                type="text"
                placeholder="Custodian Official name"
                value={parentName}
                onChange={(e) => { setParentName(e.target.value); setError(null); }}
                className="w-full bg-white border border-[#EBEBEB] text-brand-dark px-3 py-2.5 rounded-[3px] text-xs font-sans focus:border-brand-green outline-none"
              />
            </div>

            {/* Parent Email field */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Your Email Address *
              </label>
              <input
                type="email"
                placeholder="parent@example.com"
                value={parentEmail}
                onChange={(e) => { setParentEmail(e.target.value); setError(null); }}
                className="w-full bg-white border border-[#EBEBEB] text-brand-dark px-3 py-2.5 rounded-[3px] text-xs font-sans focus:border-brand-green outline-none"
              />
            </div>

            {/* Parent Phone field */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +255 25 250 0180"
                value={parentPhone}
                onChange={(e) => { setParentPhone(e.target.value); setError(null); }}
                className="w-full bg-white border border-[#EBEBEB] text-brand-dark px-3 py-2.5 rounded-[3px] text-xs font-sans focus:border-brand-green outline-none"
              />
            </div>

          </div>

          {/* Submit Trigger - Continue to Full application */}
          <button
            type="submit"
            className="w-full mt-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-sans font-bold py-3.5 rounded-[4px] shadow-md transition-colors duration-300 uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Continue to Full Application</span>
            <Send size={12} />
          </button>

          <p className="text-[10px] text-center text-[#999999] pt-2 font-sans flex items-center justify-center gap-1">
            <HelpCircle size={10} />
            Your initial values carry forward to populate the extensive portfolio form.
          </p>

        </form>

      </div>
    </div>
  );
}
