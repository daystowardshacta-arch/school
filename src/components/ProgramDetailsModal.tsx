/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Calendar, GraduationCap, CheckCircle } from "lucide-react";

interface ProgramDetailsModalProps {
  programTitle: string | null;
  programDetail: string | null;
  onClose: () => void;
  onApplyClick: () => void;
}

export default function ProgramDetailsModal({ programTitle, programDetail, onClose, onApplyClick }: ProgramDetailsModalProps) {
  if (!programTitle) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-brand-dark/75 backdrop-blur-xs" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-2xl p-6 sm:p-8 border border-brand-border z-10 animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark p-1.5 rounded-full hover:bg-brand-offwhite transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-4 text-brand-orange">
          <GraduationCap size={24} />
          <h3 className="font-serif text-lg font-bold text-[#12100E]">{programTitle}</h3>
        </div>

        <div className="space-y-4 text-left">
          <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            {programDetail}
          </p>

          <div className="bg-[#FAF6EF] p-4 rounded-lg border border-[#EBEBEB]">
            <h4 className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2">Pathways & Core Offerings</h4>
            <ul className="text-xs text-[#555] space-y-2">
              <li className="flex gap-2 items-start">
                <CheckCircle size={12} className="text-brand-green shrink-0 mt-0.5" />
                <span>Cambridge Accredited Study Materials and Termly Exams</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle size={12} className="text-brand-green shrink-0 mt-0.5" />
                <span>Dual language options integrating Fluent Swahili Culture</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle size={12} className="text-brand-green shrink-0 mt-0.5" />
                <span>Highly supervised pastoral mentorship models</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4 border-t border-brand-border">
            <button
              onClick={() => {
                onClose();
                onApplyClick();
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-sans font-bold py-3 px-5 rounded-[3px] shadow-sm tracking-wide flex-1 cursor-pointer"
            >
              Start Admission Entry
            </button>
            <button
              onClick={onClose}
              className="border border-[#EBEBEB] bg-white hover:bg-[#FAF6EF] text-brand-dark text-xs font-sans font-bold py-3 px-4 rounded-[4px] transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
