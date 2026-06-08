/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ProgramType {
  Nursery = "Nursery School",
  PrePrimary = "Pre-Primary",
  Primary = "Primary School",
  SportsAndArts = "Sports & Arts",
}

export interface ApplicationFormData {
  // Step 1: Student
  studentName: string;
  studentDob: string;
  studentNationality: string;
  studentGender: "Male" | "Female" | "";
  
  // Step 2: Parent/Guardian
  parentName: string;
  parentRelationship: string;
  parentPhone: string;
  parentEmail: string;
  
  // Step 3: Academic
  currentSchool: string;
  lastYearCompleted: string;
  academicResults: string;
  
  // Step 4: Programme of Interest
  programmeOfInterest: ProgramType | "";
  
  // Step 5: Supporting Docs
  documentFile: string;
}

export interface Testimonial {
  avatarInitials: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  source: string;
  sourceLink: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Educator {
  name: string;
  subject: string;
  achievement: string;
  avatarInitials: string;
}

export interface CampusArea {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  metadata: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  fullContent: string;
  readTime: string;
  author: string;
  badge?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  fullDetails: string;
  badge?: string;
}

export interface SchoolResult {
  year: string;
  examType: string; // e.g. PSLE (Standard VII) or SFNA (Standard IV)
  gpaOrRank: string;
  gradeAStudents: string;
  performanceBrief: string;
  divisionAnalysis: { label: string; count: number }[];
}
