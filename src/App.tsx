/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import WhyMlima from "./components/WhyMlima";
import CampusLife from "./components/CampusLife";
import Testimonials from "./components/Testimonials";
import AdmissionTimeline from "./components/AdmissionTimeline";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StartApplicationModal from "./components/StartApplicationModal";
import ProspectusModal from "./components/ProspectusModal";
import PortalModal from "./components/PortalModal";
import ProgramDetailsModal from "./components/ProgramDetailsModal";
import AdmissionApplication from "./components/AdmissionApplication";
import NewsPage from "./components/NewsPage";
import ResultsPage from "./components/ResultsPage";
import { ApplicationFormData } from "./types";

export default function App() {
  // Modal togglers
  const [isStartApplyOpen, setIsStartApplyOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Active view switcher: home, news, or results
  const [currentView, setCurrentView] = useState<"home" | "news" | "results">("home");

  // Curriculum deep dive state
  const [activeProgTitle, setActiveProgTitle] = useState<string | null>(null);
  const [activeProgDetail, setActiveProgDetail] = useState<string | null>(null);

  // Application session states
  const [isApplicationSectionActive, setIsApplicationSectionActive] = useState(false);
  const [capturedData, setCapturedData] = useState<Partial<ApplicationFormData>>({});

  // When clicking a primary CTA to apply
  const handleLaunchApplyFlow = () => {
    setIsStartApplyOpen(true);
  };

  // When submits the 1st step quick modal capture
  const handleCompleteQuickCapture = (data: Partial<ApplicationFormData>) => {
    setCapturedData(data);
    setIsApplicationSectionActive(true);
    setCurrentView("home"); // ensure we are on home to show application
    
    // Smoothly scroll down to full extensive multi-step layout with a 150ms delay
    setTimeout(() => {
      const formSection = document.getElementById("application-page");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const handleLearnMoreProgram = (title: string, detail: string) => {
    setActiveProgTitle(title);
    setActiveProgDetail(detail);
  };

  const handleResetApplication = () => {
    setCapturedData({});
    setIsApplicationSectionActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateView = (view: "home" | "news" | "results") => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full relative bg-white select-none selection:bg-brand-orange selection:text-white">
      
      {/* 1. Header Sticky Nav with active view states */}
      <Header 
        onApplyClick={handleLaunchApplyFlow}
        onPortalClick={() => setIsPortalOpen(true)}
        onNavigate={handleNavigateView}
        currentView={currentView}
      />

      {/* Main content body switcher */}
      {currentView === "home" && (
        <div className="animate-fade-in">
          {/* 2. Hero Section */}
          <Hero 
            onStartApplicationClick={handleLaunchApplyFlow}
            onDownloadProspectusClick={() => setIsProspectusOpen(true)}
          />

          {/* 3. Detailed Multi-step Registration form */}
          <AdmissionApplication 
            isActive={isApplicationSectionActive}
            initialData={capturedData}
            onReset={handleResetApplication}
          />

          {/* 4. IntersectionObserver Stats Bar Counters */}
          <StatsBar />

          {/* 5. Six Reasons Families Choose Us + Programmes list */}
          <WhyMlima 
            onLearnMoreClick={handleLearnMoreProgram}
            onApplyClick={handleLaunchApplyFlow}
          />

          {/* 6. Life at Umoja bento gallery */}
          <CampusLife />

          {/* 7. Testimonials */}
          <Testimonials />

          {/* 8. Four steps admissions road timeline + educator profiles */}
          <AdmissionTimeline 
            onBeginNowClick={handleLaunchApplyFlow}
            onEducatorReadMore={(name) => handleLearnMoreProgram(name, `Dedicated senior school administrator of Umoja Pre & Primary School, guiding Tanzanian families and pupils through academic excellence criteria, safe GPS transit routing, and wholesome nutrition schedules.`)}
          />

          {/* 9. FAQ Accordion */}
          <FAQ />
        </div>
      )}

      {currentView === "news" && (
        <NewsPage />
      )}

      {currentView === "results" && (
        <ResultsPage />
      )}

      {/* 10. Footer showing exact contacts and locations across all view tabs */}
      <Footer 
        onApplyClick={handleLaunchApplyFlow}
        onBookVisitClick={() => setIsProspectusOpen(true)}
      />

      {/* MODALS RENDER OVERLAYS */}
      
      {/* Quick capture Start Application modal */}
      <StartApplicationModal 
        isOpen={isStartApplyOpen}
        onClose={() => setIsStartApplyOpen(false)}
        onSubmitCapture={handleCompleteQuickCapture}
      />

      {/* Download Prospectus dialogue */}
      <ProspectusModal 
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
      />

      {/* Parent/Student secure School portal login */}
      <PortalModal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Curriculum Learn More detail card */}
      <ProgramDetailsModal 
        programTitle={activeProgTitle}
        programDetail={activeProgDetail}
        onClose={() => { setActiveProgTitle(null); setActiveProgDetail(null); }}
        onApplyClick={handleLaunchApplyFlow}
      />

    </div>
  );
}
