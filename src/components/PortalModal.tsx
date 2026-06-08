/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Lock, User, CheckCircle, ShieldAlert } from "lucide-react";
import SchoolLogo from "./SchoolLogo";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortalModal({ isOpen, onClose }: PortalModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [useSwahili, setUseSwahili] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError(useSwahili ? "Tafadhali jaza jina la mtumiaji na siri." : "Please enter both username and password.");
      return;
    }

    setIsLogged(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-brand-dark/75 backdrop-blur-xs" onClick={onClose} />

      {/* Box */}
      <div className="relative bg-white w-full max-w-sm rounded-lg shadow-2xl p-6 sm:p-8 border border-brand-border z-10 animate-scale-up">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1.5 rounded-full hover:bg-brand-offwhite"
        >
          <X size={18} />
        </button>

        {/* Portal Header */}
        <div className="flex items-center justify-between mb-6 border-b border-brand-border pb-2">
          <div className="flex items-center gap-2.5">
            <SchoolLogo className="w-7 h-7" />
            <span className="font-serif font-bold text-brand-dark text-base">
              {useSwahili ? "Lango la Shule" : "Umoja Portal"}
            </span>
          </div>

          <button
            onClick={() => setUseSwahili(!useSwahili)}
            className="text-[9px] bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange px-2 py-1 rounded font-bold uppercase tracking-wide cursor-pointer"
          >
            {useSwahili ? "English" : "Kiswahili"}
          </button>
        </div>

        {!isLogged ? (
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {useSwahili 
                  ? "Ingia kwenye mfumo wa Umoja Pre & Primary School kufuatilia maendeleo ya mwanafunzi au mabaraza ya masomo."
                  : "Sign in with your registered Parent, Student or Faculty ID to monitor NECTA grades, fee schedules and daily student welfare updates."}
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-l-2 border-red-500 rounded text-red-700 text-[11px] font-medium font-sans">
                {error}
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                {useSwahili ? "Kitambulisho / Jina la Mtumiaji *" : "Username / School ID *"}
              </label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. parent2026, UM-9920"
                  value={username}
                  onChange={(e) => { setUsername(e.target.value); setError(null); }}
                  className="w-full bg-white border border-brand-border text-brand-dark pl-9 pr-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">
                {useSwahili ? "Nenosiri *" : "Secret Password *"}
              </label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(null); }}
                  className="w-full bg-white border border-brand-border text-brand-dark pl-9 pr-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-brand-blue hover:bg-[#D97706] text-white text-xs font-sans font-bold w-full py-3 rounded shadow-sm uppercase tracking-wider cursor-pointer"
            >
              {useSwahili ? "Ingia Sasa →" : "Sign In Securely →"}
            </button>

            <div className="p-3 bg-brand-offwhite rounded border border-brand-border text-[10px] text-gray-500 leading-relaxed flex gap-2 items-start mt-4">
              <ShieldAlert size={14} className="text-brand-orange shrink-0 mt-0.5" />
              <span>
                {useSwahili
                  ? "Vitambulisho hutolewa baada ya mwanafunzi kufaulu mtihani wa usahili (zaidi ya asilimia 61%)."
                  : "Login credentials are securely generated following successful diagnostic assessments (above 61% overall metrics) and registration clearance."}
              </span>
            </div>
          </form>
        ) : (
          <div className="text-center py-4 animate-scale-up">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
              {useSwahili ? "Umealikwa Kuingia" : "Security Access Granted"}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto mb-6">
              {useSwahili
                ? "Karibu kwenye lango letu la kidijitali la Umoja Pre & Primary School! Mfumo unasawazisha matokeo..."
                : "Welcome to Umoja digital environment! Synchronizing school results databases, student transit routing and fee logs..."}
            </p>
            <div className="flex flex-col gap-2.5 w-full mt-4">
              <a 
                href="https://ais-pre-k7nrovaa7sz5m6ylmkeabu-577503539405.europe-west2.run.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-[#d9480f] text-white text-xs font-sans font-extrabold w-full py-3 rounded shadow-md text-center transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
              >
                <span>{useSwahili ? "Ingia kwenye App Rasmi →" : "Launch Official Portal App →"}</span>
              </a>
              <button 
                onClick={onClose}
                className="border border-brand-border bg-white hover:bg-brand-offwhite text-brand-dark text-xs font-sans font-bold w-full py-2.5 rounded transition-all cursor-pointer"
              >
                {useSwahili ? "Rudi Kwenye Tovuti" : "Back to Website"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
