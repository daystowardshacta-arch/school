/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  FileText, 
  Check, 
  Award,
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  X 
} from "lucide-react";
import { ApplicationFormData, ProgramType } from "../types";
import { CONTACT_INFO } from "../data/schoolData";

interface AdmissionApplicationProps {
  initialData?: Partial<ApplicationFormData>;
  isActive: boolean;
  onReset: () => void;
}

export default function AdmissionApplication({ initialData = {}, isActive, onReset }: AdmissionApplicationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [countdownTime, setCountdownTime] = useState(48 * 3600); // 48 hours

  const [formData, setFormData] = useState<ApplicationFormData>({
    studentName: "",
    studentDob: "",
    studentNationality: "Tanzanian",
    studentGender: "",
    parentName: "",
    parentRelationship: "Father",
    parentPhone: "",
    parentEmail: "",
    currentSchool: "",
    lastYearCompleted: "Preschool",
    academicResults: "",
    programmeOfInterest: "",
    documentFile: "",
    ...initialData
  });

  // Sync initialData
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(prev => ({ ...prev, ...initialData }));
      setTimeout(() => {
        const page = document.getElementById("application-page");
        if (page) {
          page.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }, [initialData]);

  // Countdown timer on completion
  useEffect(() => {
    if (!isCompleted) return;

    const savedTime = localStorage.getItem("umoja_admissions_countdown_v1");
    let initialCount = 48 * 3600;

    if (savedTime) {
      const timeElapsed = Math.floor((Date.now() - parseInt(savedTime)) / 1000);
      initialCount = Math.max((48 * 3600) - timeElapsed, 0);
    } else {
      localStorage.setItem("umoja_admissions_countdown_v1", Date.now().toString());
    }

    setCountdownTime(initialCount);

    const interval = setInterval(() => {
      setCountdownTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCompleted]);

  const formatCountdown = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num: number) => String(num).padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const validateStep = (step: number) => {
    setValidationError(null);
    switch (step) {
      case 1:
        if (!formData.studentName.trim()) return "Student name is required.";
        if (formData.studentName.trim().length < 3) return "Please enter a valid student name.";
        if (!formData.studentDob) return "Student date of birth is required.";
        if (!formData.studentNationality) return "Student nationality is required.";
        if (!formData.studentGender) return "Please select gender.";
        return null;
      case 2:
        if (!formData.parentName.trim()) return "Parent/Guardian name is required.";
        if (!formData.parentPhone.trim()) return "Primary contact phone is required.";
        if (!formData.parentEmail.trim()) return "Admissions contact email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) return "Please enter a valid email address.";
        return null;
      case 3:
        if (!formData.currentSchool.trim()) return "Current or previous school status is required.";
        return null;
      case 4:
        if (!formData.programmeOfInterest) return "Please select the level of education.";
        return null;
      default:
        return null;
    }
  };

  const handleNext = () => {
    const error = validateStep(currentStep);
    if (error) {
      setValidationError(error);
      return;
    }
    
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    setValidationError(null);
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <section id="application-page" className="py-14 bg-white border-b border-brand-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Progress Tracker header */}
        <div className="bg-brand-dark text-white rounded-lg p-6 mb-8 text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 font-serif text-8xl font-black select-none pointer-events-none -translate-y-4 translate-x-4">
            U
          </div>
          <h2 className="font-serif text-2xl font-extrabold tracking-tight">Admissions Intake Registration</h2>
          <p className="text-[11px] text-gray-300 mt-1">Umoja Pre & Primary School — English Medium, Mbeya</p>
          
          {!isCompleted && (
            <div className="mt-6 flex items-center justify-between gap-1 border-t border-white/10 pt-4">
              {[
                { num: 1, label: "Pupil" },
                { num: 2, label: "Parent" },
                { num: 3, label: "School" },
                { num: 4, label: "Track" },
                { num: 5, label: "Submit" }
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center flex-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-sans text-[10px] font-bold ${
                    currentStep === s.num 
                      ? "bg-brand-orange text-white" 
                      : currentStep > s.num 
                        ? "bg-brand-blue text-white" 
                        : "bg-white/10 text-gray-400"
                  }`}>
                    {currentStep > s.num ? <Check size={10} className="stroke-[3]" /> : s.num}
                  </div>
                  <span className="text-[8.5px] uppercase tracking-wider font-extrabold mt-1 text-gray-400 font-sans">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {validationError && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded text-left">
            ✕ {validationError}
          </div>
        )}

        {/* Multi-step form panels */}
        {!isCompleted ? (
          <div className="bg-brand-offwhite rounded-lg border border-brand-border p-6 md:p-8">
            
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="border-b border-brand-border pb-2 mb-4">
                  <h3 className="font-serif font-extrabold text-brand-dark text-base flex items-center gap-2">
                    <User className="text-brand-orange" size={18} />
                    Pupil Demographics
                  </h3>
                  <p className="text-[11px] text-gray-500">Admissions age must be at least 3.5 years old under Umoja School directives.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Pupil Full Legal Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter spelling as shown in Birth Certificate"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Date of Birth *</label>
                    <input 
                      type="date" 
                      value={formData.studentDob}
                      onChange={(e) => setFormData({ ...formData, studentDob: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Nationality *</label>
                    <input 
                      type="text" 
                      value={formData.studentNationality}
                      onChange={(e) => setFormData({ ...formData, studentNationality: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Gender *</label>
                    <div className="flex gap-4 items-center h-[38px]">
                      <label className="flex items-center gap-2 cursor-pointer font-sans text-xs">
                        <input 
                          type="radio" 
                          name="studentGender" 
                          checked={formData.studentGender === "Male"}
                          onChange={() => setFormData({ ...formData, studentGender: "Male" })}
                          className="accent-brand-orange w-4 h-4 cursor-pointer"
                        />
                        <span>Male</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-sans text-xs">
                        <input 
                          type="radio" 
                          name="studentGender" 
                          checked={formData.studentGender === "Female"}
                          onChange={() => setFormData({ ...formData, studentGender: "Female" })}
                          className="accent-brand-orange w-4 h-4 cursor-pointer"
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="border-b border-brand-border pb-2 mb-4">
                  <h3 className="font-serif font-extrabold text-brand-dark text-base flex items-center gap-2">
                    <MapPin className="text-brand-orange" size={18} />
                    Parent/Guardian Contact Details
                  </h3>
                  <p className="text-[11px] text-gray-500">Enables rapid response from administrators Mr. Isack & Mr. Komba.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Guardian Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Father, Mother or Guardian name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Relationship to Child *</label>
                    <select
                      value={formData.parentRelationship}
                      onChange={(e) => setFormData({ ...formData, parentRelationship: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    >
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Legal Guardian</option>
                      <option value="Sponsor">Sponsor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 0754013886 or 0684253580"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="e.g. parent@email.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="border-b border-brand-border pb-2 mb-4">
                  <h3 className="font-serif font-extrabold text-brand-dark text-base flex items-center gap-2">
                    <GraduationCap className="text-brand-orange" size={18} />
                    Current Academic Standard
                  </h3>
                  <p className="text-[11px] text-gray-500">We maintain an absolute zero-repetition student care policy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Current/Previous School Attended *</label>
                    <input 
                      type="text" 
                      placeholder="Enter previous kindergarten, preschool or home learning status"
                      value={formData.currentSchool}
                      onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">Most Recent Year Completed *</label>
                    <select
                      value={formData.lastYearCompleted}
                      onChange={(e) => setFormData({ ...formData, lastYearCompleted: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark px-3 py-2.5 rounded text-xs font-sans outline-none focus:border-brand-blue"
                    >
                      <option value="Preschool">Preschool / None</option>
                      <option value="Nursery">Nursery Class</option>
                      <option value="Pre-Primary">Pre-Primary Class</option>
                      <option value="Standard I">Standard I (Primary)</option>
                      <option value="Standard II">Standard II</option>
                      <option value="Standard III">Standard III</option>
                      <option value="Standard IV">Standard IV</option>
                      <option value="Standard V">Standard V</option>
                      <option value="Standard VI">Standard VI</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                      Academic Assessment Overview (Optional)
                    </label>
                    <textarea 
                      placeholder="Share average scores or grade levels to help us plan support lessons. Diagnostic entry interview target is above 61%."
                      rows={4}
                      value={formData.academicResults}
                      onChange={(e) => setFormData({ ...formData, academicResults: e.target.value })}
                      className="w-full bg-white border border-brand-border text-brand-dark p-3 rounded text-xs font-sans outline-none focus:border-brand-blue resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="border-b border-brand-border pb-2 mb-4">
                  <h3 className="font-serif font-extrabold text-brand-dark text-base flex items-center gap-2">
                    <Award className="text-brand-orange" size={18} />
                    Level of Interest
                  </h3>
                  <p className="text-[11px] text-gray-500">Pick the educational level required for your pupil.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      type: ProgramType.Nursery,
                      years: "Ages 3.5 – 4.5",
                      desc: "Early communication, play, primary literacy, and zero bias inclusivity framework."
                    },
                    {
                      type: ProgramType.PrePrimary,
                      years: "Ages 4.5 – 5.5",
                      desc: "NECTA foundational preparation, English instruction, mathematical basics."
                    },
                    {
                      type: ProgramType.Primary,
                      years: "Standard I – VII (Age 6+)",
                      desc: "Full academic curriculum, science studies, arts class, exam-taking drills."
                    },
                    {
                      type: ProgramType.SportsAndArts,
                      years: "Co-curricular Specialty",
                      desc: "Sports academies, football trophies, traditional music classes, choral groups."
                    }
                  ].map((item) => {
                    const isSelected = formData.programmeOfInterest === item.type;
                    return (
                      <div
                        key={item.type}
                        onClick={() => setFormData({ ...formData, programmeOfInterest: item.type as any })}
                        className={`p-4 rounded-lg border-2 cursor-pointer bg-white transition-all flex flex-col justify-between ${
                          isSelected 
                            ? "border-brand-blue ring-4 ring-brand-blue/10" 
                            : "border-brand-border hover:border-brand-orange/50"
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-serif font-bold text-brand-dark text-xs sm:text-sm">{item.type}</span>
                            {isSelected ? (
                              <span className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center">
                                <Check size={10} className="stroke-[3]" />
                              </span>
                            ) : (
                              <span className="w-4 h-4 rounded-full bg-brand-offwhite border border-brand-border" />
                            )}
                          </div>
                          <div className="text-[9px] text-[#E07B2A] font-extrabold tracking-wider font-sans mb-2 uppercase">{item.years}</div>
                          <p className="text-[10.5px] text-gray-500 leading-normal">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="border-b border-brand-border pb-2 mb-4">
                  <h3 className="font-serif font-extrabold text-brand-dark text-base flex items-center gap-2">
                    <FileText className="text-brand-orange" size={18} />
                    Submit Portfolio
                  </h3>
                  <p className="text-[11px] text-gray-500">Confirm the details and click below to process. There is no submission fee.</p>
                </div>

                <div className="bg-white border border-brand-border p-4 rounded-lg space-y-3 text-xs text-gray-600">
                  <div><strong className="text-brand-dark">Pupil Name:</strong> {formData.studentName}</div>
                  <div><strong className="text-brand-dark">Level Requested:</strong> {formData.programmeOfInterest || "Not selected yet"}</div>
                  <div><strong className="text-brand-dark">Parent/Guardian Name:</strong> {formData.parentName} ({formData.parentRelationship})</div>
                  <div><strong className="text-brand-dark">Primary Telephone:</strong> {formData.parentPhone}</div>
                </div>

                <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-lg text-xs leading-relaxed text-brand-blue">
                  <strong>ℹ️ Assessment Day Booking:</strong> Physical interviews are conducted on campus under Mr. Komba's supervision. Candidate overall score must be above 61% to confirm admission.
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 pt-4 border-t border-brand-border flex justify-between items-center select-none">
              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-1.5 font-sans font-bold text-xs py-2.5 px-4 rounded transition-all ${
                  currentStep === 1 
                    ? "text-gray-300 cursor-not-allowed" 
                    : "text-brand-dark hover:text-brand-orange hover:bg-white border border-brand-border"
                }`}
              >
                <ArrowLeft size={14} />
                <span>Previous Step</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 bg-brand-blue hover:bg-[#D97706] text-white font-sans font-bold text-xs py-2.5 px-5 rounded shadow active:scale-95 transition-all cursor-pointer"
              >
                <span>{currentStep === 5 ? "Complete Registration" : "Continue"}</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        ) : (
          
          /* Success Screen */
          <div className="bg-brand-offwhite border border-brand-border rounded-lg p-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto mb-6 border border-blue-100">
              <Check size={30} className="stroke-[3]" />
            </div>

            <h3 className="font-serif font-extrabold text-[#111827] text-2xl mb-3">
              Kariibu Umoja School Family!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
              Thank you for trusting Umoja Pre & Primary School with your child's future. The registrar has recorded student <strong>{formData.studentName}</strong> for class selection evaluation. We will notify you to arrange the diagnostic entry assessment.
            </p>

            {/* 48hr Countdown */}
            <div className="bg-white border border-brand-border rounded-lg p-5 max-w-xs mx-auto mb-8 text-center">
              <div className="text-[9px] text-[#E07B2A] font-sans font-extrabold tracking-wider uppercase mb-1">
                Registrar Response Queue
              </div>
              <div className="font-mono text-3xl font-extrabold text-brand-blue tracking-wider">
                {formatCountdown(countdownTime)}
              </div>
              <div className="text-[8.5px] text-green-600 font-sans font-extrabold mt-1 tracking-widest uppercase">
                Free Spot Priority Reserved
              </div>
            </div>

            {/* Contacts trigger */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href={`tel:${CONTACT_INFO.mrIsack.phone}`} 
                className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-sans font-bold py-3 px-5 rounded shadow flex items-center gap-2 justify-center transition-all w-full sm:w-auto"
              >
                <span>Call Registrar Mr. Isack ({CONTACT_INFO.mrIsack.phone})</span>
              </a>

              <button 
                onClick={onReset}
                className="bg-transparent hover:bg-white text-brand-dark text-xs font-sans font-bold py-3 px-5 rounded border border-brand-border w-full sm:w-auto transition-all"
              >
                Start Another Form
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
