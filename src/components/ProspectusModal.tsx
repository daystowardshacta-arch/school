/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react";
import { X, FileDown, CheckCircle, MapPin } from "lucide-react";
import SchoolLogo from "./SchoolLogo";

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProspectusModal({ isOpen, onClose }: ProspectusModalProps) {
  const [step, setStep] = useState(1); // 1: Questions, 2: Active Download
  const [gender, setGender] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const okBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    setStep(1); // Reset state
    setGender("");
    setLocation("");
    setError(null);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gender) {
      setError("Please select your gender profile.");
      return;
    }
    if (!location.trim()) {
      setError("Please write your location (city or district).");
      return;
    }

    setError(null);
    setStep(2);
  };

  const triggerDownloadAction = () => {
    const prospectusUrl = "https://raw.githubusercontent.com/google/aistudio-blueprints/main/assets/sample-proposal.pdf"; 
    const link = document.createElement("a");
    link.href = prospectusUrl;
    link.setAttribute("download", "Umoja_Pre_Primary_School_Prospectus_2026.pdf");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="fixed inset-0 bg-brand-dark/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div 
        ref={modalRef}
        className="relative bg-white w-full max-w-md rounded-lg shadow-2xl p-6 sm:p-8 border border-brand-border z-10 animate-scale-up"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1.5 rounded-full hover:bg-brand-offwhite"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <SchoolLogo className="w-8 h-8" />
          <span className="font-serif font-bold text-brand-dark text-base">Prospectus 2026</span>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
                Access Official Prospectus
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Just two quick parameters before accessing the official school prospectus pack.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-l-2 border-red-500 rounded text-red-700 text-[11px] font-medium leading-none">
                {error}
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Your Gender Profile *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "PreferNot", label: "Skip/N.A." }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => { setGender(opt.value); setError(null); }}
                    className={`p-2.5 rounded text-center border text-xs font-sans font-medium transition-all cursor-pointer ${
                      gender === opt.value
                        ? "border-brand-blue bg-blue-50 text-brand-blue font-bold"
                        : "border-brand-border hover:border-brand-orange text-gray-600 bg-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                Your Location *
              </label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. Mbeya, Soweto, Forest..."
                  value={location}
                  onChange={(e) => { setLocation(e.target.value); setError(null); }}
                  className="w-full bg-white border border-brand-border text-brand-dark pl-9 pr-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-extrabold w-full py-3.5 rounded shadow-sm transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileDown size={14} />
              <span>Generate Prospectus Link</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <CheckCircle size={32} />
            </div>

            <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
              Your Download Is Ready
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto mb-6">
              Thank you! Your customized Umoja Pre & Primary School prospectus folder is compiled and waiting.
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                ref={okBtnRef}
                onClick={triggerDownloadAction}
                className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-bold w-full py-3.5 rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <FileDown size={14} className="animate-bounce" />
                <span>Save Prospectus (PDF)</span>
              </button>
              
              <button
                onClick={onClose}
                className="border border-brand-border bg-white hover:bg-brand-offwhite text-brand-dark text-[11px] font-sans font-bold w-full py-2.5 rounded transition-colors"
              >
                Return to School Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
