/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NewsArticle, SchoolEvent, SchoolResult, ProgramType, Testimonial, FAQItem, Educator } from "../types";

export const CONTACT_INFO = {
  mrIsack: {
    name: "Mr. Isack",
    phone: "0754013886",
    role: "Head of Operations & Logistics"
  },
  mrKomba: {
    name: "Mr. Komba",
    phone: "0684253580",
    role: "Admissions Dean & Student Welfare Coordinator"
  },
  general: {
    email: "info@umojaschool.ac.tz",
    location: "Lupa Road, Mbeya, Tanzania",
    workingHours: "Mon - Sat: 7:30 AM - 4:30 PM"
  }
};

export const ADMISSION_CRITERIA = {
  minimumAge: "3.5 Years Old",
  tuitionFee: "900,000 TSh per year",
  transportFee: "400,000 TSh per year (with complete GPS route tracking)",
  passmark: "Above 61% overall score in the entry diagnostics assessment",
  mentalHealth: "Mentally fit and ready for interactive, child-centered learning",
  inclusion: "Absolute zero-tolerance on racism and religion bias. We welcome all children equally.",
  noRepetitionRule: "No automatic repetition of classes. Every student is uniquely supported to progress with their peers through specialized remedial modules."
};

export const PROGRAMS = [
  {
    type: ProgramType.Nursery,
    title: "Nursery School (3.5 - 4.5 Years Old)",
    brief: "Play-based sensory cognitive programs designed to build early speech, numeracy, and active coordination.",
    details: "Our Nursery program nurtures toddlers from 3.5 years of age. Utilizing beautiful physical learning kits and storytelling, we bridge the child’s natural curiosity with basic bilingual skills (English and polite conversational Swahili). No stressful testing, just pure structured growth.",
    achievements: "100% happy integration rate, early phonics mastery, cognitive sensory activities."
  },
  {
    type: ProgramType.PrePrimary,
    title: "Pre-Primary Foundation (4.5 - 5.5 Years Old)",
    brief: "A transition toward structured reading, basic arithmetic, creative environments, and social confidence.",
    details: "Focused on preparing children for the NECTA primary timeline. Students learn social collaboration, reading comprehension, writing basic vocabularies, and building simple arithmetic patterns using practical materials.",
    achievements: "Bilingual expression, confidence, foundation preparation for competitive exams."
  },
  {
    type: ProgramType.Primary,
    title: "Primary School (NECTA Standard I - VII)",
    brief: "Rigorous focus on the Tanzanian National Curriculum (NECTA) with deep English-medium core studies.",
    details: "Covering Standard 1 through Standard 7. We consistently prepare pupils for the National Standard IV Assessment (SFNA) and standard VII Primary School Leaving Examination (PSLE), achieving 100% grade transition rates. Specialized Focus on Science Classes, Mathematics, Social Studies, and ICT.",
    achievements: "Top ranking in southern highlands region, over 94% Division A results, science talent incubator."
  },
  {
    type: ProgramType.SportsAndArts,
    title: "Co-Curricular Sports & Art Program",
    brief: "Nurturing creative intelligence, physical stamina, football leagues, and traditional Tanzanian crafts.",
    details: "A comprehensive afternoon program featuring inter-school sports bonanzas, traditional and contemporary music, science exhibition clubs, painting, and public speaking clubs. Because true leaders are nurtured beyond books.",
    achievements: "Inter-school football champions, national art fair representation."
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "Umoja Primary Shines in Region: Standard VII NECTA PSLE Results Decoded",
    date: "June 2, 2026",
    category: "Academic Excellence",
    summary: "Our Standard VII pupils have once again registered exemplary Division A performances, securing top ranks across Mbeya. Read our complete performance analysis and core strategy.",
    fullContent: `We are extremely thrilled to announce another monumental achievement! Umoja Pre and Primary School has emerged as one of the leading private primary institutions in Mbeya following the official publication of the Primary School Leaving Examination (PSLE) results.

    With an average pass score of 89.4% overall, over 91% of our registered candidates scored direct 'A' grades in Science Class, Mathematics, and English Language. 
    
    School Director Mr. Isack declared: "This outcome is a direct reflection of our strict classroom discipline, modern educational teaching equipment, and our zero class repetition policy. Rather than demoting struggling pupils, we implemented intensive weekend tutoring groups. This boosted the average score from 58% to over 84% for pupils who entered with diagnostics concerns."
    
    Key Statistics of our NECTA results:
    - 42 Candidates Registered
    - 39 Candidates with Overall Grade 'A'
    - 3 Candidates with Overall Grade 'B'
    - Best performer in Science Class achieved 49 out of 50 marks!
    
    We congratulate Mr. Komba and the entire academic counseling team for guiding the extra study hours and student welfare with maximum devotion.`,
    readTime: "3 min read",
    author: "Admissions Desk",
    badge: "Official NECTA Report"
  },
  {
    id: "news-2",
    title: "Ensuring Student Health: Inside the Newly Upgraded Daily Nutrition & Fresh Lunch Program",
    date: "May 18, 2026",
    category: "Campus & Nutrition",
    summary: "From nutritious fresh farm produce to balanced hot lunch platters under Mr. Komba's welfare supervision, explore how we support maximum physical health and classroom focus.",
    fullContent: `Healthy minds live inside healthy bodies! This term, Umoja Pre and Primary School has successfully overhauled its nutrition guidelines and afternoon welfare programs to keep our day scholar students active, happy, and intellectually energized. 
    
    Our student welfare and nutritional services now feature:
    1. Farm-to-Table School Lunches: Balanced meals featuring proteins, fresh vegetables fetched daily from local Southern Highlands farms, delicious local fruits, glass of milk, and healthy grains.
    2. Pristine Campus Sanitation: Dedicated hygiene officers and sterile classroom routines to ensure our day campus environment remains clean, safe, and healthy for children.
    3. Warm Tea & Refreshments: Serving warm nutritional porridge and milk drinks during chilly Mbeya season days to keep spirits cozy and bright during breaks.
    4. Welfare Counseling & Group Play: Student welfare dean Mr. Komba supervises interactive recess play, soft-skills socialization coaching, moral orientation, and friendly peer-to-peer dialogues.
    
    Our school guidelines require every student to be mentally fit and ready to experience co-existing, sharing, and studying with classmates from various cultural backgrounds. We take pride in building a safe space free of religion biases and tribal discrimination.`,
    readTime: "4 min read",
    author: "Mr. Komba (Student Welfare Dean)",
    badge: "Student Welfare"
  },
  {
    id: "news-3",
    title: "New Transport Tour Route Added: Safe, GPS-Tracked School Bus Options for Mbeya Families",
    date: "April 12, 2026",
    category: "Services Update",
    summary: "Expanding our modern transit services! We have added custom GPS routing options for Soweto, Forest, Ruanda, and Uyole neighborhoods at just 400,000 TSh yearly.",
    fullContent: `Safe transit represents one of the most critical concerns for busy parents. We are excited to announce our new "Mbeya City Transport Tour" route map. We have taken delivery of two brand new low-emission, highly cushioned school buses to make travel relaxing and secure.
    
    Starting this semester, Umoja Pre and Primary School bus tour covers:
    - Uyole Gate & Soweto Center
    - Sisimba, Forest Hill Area, and Lupa Road
    - Ruanda & Jacaranda Suburbs
    - Iyunga, Block T, and Mwanjelwa Markets
    
    The yearly transportation fee is set at a highly subsidized rate of 400,000 TSh per student. Each bus is accompanied by a certified school matron who ensures children are buckled up, helps them disembark safely, and coordinates direct arrival calls to parents. 
    
    To enroll your pupil in the transport tour program, contact Mr. Isack on 0754013886.`,
    readTime: "3 min read",
    author: "Mr. Isack (Logistics Head)",
    badge: "Transport & Safety"
  }
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: "event-1",
    title: "Annual Science Class Exhibition & Innovation Bonanza",
    date: "July 12, 2026",
    time: "08:30 AM - 04:30 PM",
    location: "Umoja Main Science & Arts Pavilion",
    summary: "Pupils showcase creative physics simulators, biological slides, and simple water filtration models designed entirely on campus.",
    fullDetails: "Our flagship academic event! Parents are warmly invited to witness primary school pupils explain practical scientific concepts. Over 15 active booths will demonstrate Standard IV and VII NECTA concepts, from photosynthesis to simple electronic circuits and renewable energy. Come test the experiments yourself!"
  },
  {
    id: "event-2",
    title: "Term 2 Intake - Entrance Diagnostics & In-Person Interview Day",
    date: "July 24, 2026",
    time: "07:30 AM - 02:00 PM",
    location: "Admissions Center (Block B)",
    summary: "Diagnostic interview evaluation for prospective pupils aged 3.5 years old and above. Requires overall score > 61%.",
    fullDetails: "Welcome to Umoja Family! We are hosting our diagnostic assessment day for nursery, pre-primary, and primary entry. Candidates must be mentally fit, age 3.5 years old and above. The assessment tests broad cognitive readiness and friendly interactive responses. Bring original birth certificates and any former progress files."
  },
  {
    id: "event-3",
    title: "Umoja Grand Sports, Arts & Traditional Culture Carnival",
    date: "August 15, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Mbeya Memorial Ground / Campus Pitches",
    summary: "Inter-house athletic cups, traditional Swahili spelling bees, traditional dance, and watercolor exhibitions.",
    fullDetails: "An all-day high-energy athletic and expressive showcase! Witness our inter-house soccer finals, track championships, clay sculpting contests, and traditional storytelling. Here at Umoja, physical growth and active confidence are nurtured on par with rigorous academic grades!"
  }
];

export const SCHOOL_RESULTS: SchoolResult[] = [
  {
    year: "2025 PSLE (National VII Exam)",
    examType: "NECTA Standard VII",
    gpaOrRank: "Ranked 3rd in Mbeya City out of 118 Schools",
    gradeAStudents: "92.8% achieved Grade A",
    performanceBrief: "Maintained a spotless zero-fail status since founding. Clean Science Class excellence with the Southern Highlands top general scores.",
    divisionAnalysis: [
      { label: "Grade A", count: 39 },
      { label: "Grade B", count: 3 },
      { label: "Grade C", count: 0 },
      { label: "Grade D / F", count: 0 }
    ]
  },
  {
    year: "2024 SFNA (National IV Exam)",
    examType: "NECTA Standard IV",
    gpaOrRank: "Ranked 1st in Sisimba District",
    gradeAStudents: "96.5% achieved Grade A",
    performanceBrief: "Extraordinary scores in Basic Mathematics, Eng & Kiswahili compositions, and Elementary Science Class assays.",
    divisionAnalysis: [
      { label: "Grade A", count: 31 },
      { label: "Grade B", count: 1 },
      { label: "Grade C / Below", count: 0 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    avatarInitials: "MM",
    name: "Mama Mwajuma",
    role: "Parent of Standard V & Nursery Pupils",
    rating: 5,
    text: "At first, I was worried about sending my 3.5-year-old child to school, but Umoja’s warm nursery teachers are like parents. My elder child is in Standard V, scoring above 82% in every NECTA mock exam! The school buses are exceptionally punctual.",
    source: "Google Reviews",
    sourceLink: "#"
  },
  {
    avatarInitials: "BT",
    name: "Dr. Benitho Temu",
    role: "Physician & Parent of Day Pupil (Std VII)",
    rating: 5,
    text: "Mr. Komba’s day student welfare care is fantastic. My son gets healthy fresh lunch meals, beautifully clean classrooms, and constant academic focus without stress or fear. The fact that they don't force class repetition and instead tutor individually is the best educational ethics in Tanzania.",
    source: "Parent Teachers Association",
    sourceLink: "#"
  },
  {
    avatarInitials: "LK",
    name: "Laeticia Kiondo",
    role: "Primary Alumna (Class of 2023 - Standard VII)",
    rating: 5,
    text: "Thanks to the high-performance NECTA Science Class and outstanding mathematics tuition at Umoja, I scored an A in my PSLE national exams. I was admitted to a top national secondary high-school thanks to my high scores. Umoja builds true confidence and sound values!",
    source: "Verified Alumna",
    sourceLink: "#"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "What is your school fee structure and admission requirements?",
    answer: "Our school fee is outstandingly competitive: TSh 900,000 per year, which covers full high-end classroom studies and learning resources under NECTA guidelines. The admission requirements are: Age 3.5 years old and above, mentally fit, and scoring above 61% overall on our friendly entrance diagnostic interview. We operate strictly as a co-educational Day School."
  },
  {
    id: 2,
    question: "How is the Transport Tour managed and what is the yearly cost?",
    answer: "The Transport Tour is priced at TSh 400,000 per year. Our high-comfort school buses cover all prominent locations in Mbeya, including Uyole, Soweto, Sisimba, Forest, Ruanda, Iyunga, and Lupa Road. Every bus has GPS tracking and a certified matron onboard for complete peace of mind. For inquiries, contact Mr. Isack at 0754013886."
  },
  {
    id: 3,
    question: "How does the 'No Repetition of Classes' policy work?",
    answer: "We strongly believe that repeating a class damages a child's psychological self-esteem and triggers a sense of academic failure. Therefore, we ensure every pupil moves forward alongside their age group. For struggling pupils, we provide intensive weekend remedial groups and individualized tutoring at no extra tuition cost."
  },
  {
    id: 4,
    question: "Do you have any religion limits or denomination biases?",
    answer: "No. Umoja Pre and Primary School has a strict policy of zero racism and zero religion bias. We respect and cherish every child’s background. Pupils of all faiths study and live together in deep harmony, respecting each other's religious beliefs and traditions."
  },
  {
    id: 5,
    question: "Who can I contact for urgent transit route and registration issues?",
    answer: "You can talk directly to our top administration: Mr. Isack on 0754013886 for transport, fee schedules, and registration details; and Mr. Komba on 0684253580 for student health plans, lunch programs, and student welfare support."
  }
];

export const EDUCATORS: Educator[] = [
  {
    name: "Mr. Isack",
    subject: "Managing Director",
    achievement: "Led logistical and fee administration since inception. Passionate about affordable high-quality education.",
    avatarInitials: "MI"
  },
  {
    name: "Mr. Komba",
    subject: "Dean of Student Welfare & Senior Teacher",
    achievement: "Supervises standard hygiene, meal balanced diets, and student counseling routines with zero stress.",
    avatarInitials: "MK"
  },
  {
    name: "Madame Happiness",
    subject: "Nursery & Pre-Primary Coordinator",
    achievement: "Brought 12+ years of sensory growth development. Expert at early child Swahili/English phonics.",
    avatarInitials: "MH"
  }
];
