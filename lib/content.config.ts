// =============================================================================
// RAIIDIUS Content Configuration
// =============================================================================
// This file contains all editable content for the RAIIDIUS symposium website.
// Non-developers can easily update this file to change content across the site.
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

export interface Partner {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  logo?: string;
  url?: string;
}

export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  title?: string;
  role: 'keynote' | 'panelist' | 'breakout-lead' | 'presenter' | 'organizer' | 'moderator';
  bio: string;
  keywords: string[];
  headshot?: string;
  email?: string;
}

export interface Session {
  id: string;
  title: string;
  format: 'registration' | 'keynote' | 'breakout' | 'panel' | 'poster' | 'session' | 'roundtable' | 'reception' | 'break' | 'lunch' | 'remarks';
  startTime: string;
  endTime: string;
  description: string;
  track?: string;
  speakers?: string[]; // Speaker IDs
  location?: string;
}

export interface BreakoutTrack {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ImportantDate {
  label: string;
  date: string;
  description?: string;
  isPast?: boolean;
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Edition {
  year: number;
  slug: string;
  themeTitle: string;
  themeShortTitle: string;
  themeDescription: string;
  date: string;
  dateFormatted: string;
  timezone: string;
  venue: string;
  venueRoom: string;
  address: string;
  city: string;
  state: string;
  fullAddress: string;
  mapUrl?: string;
  partners: Partner[];
  sponsorName: string;
  sponsorUrl?: string;
  registrationUrl: string;
  submissionUrl: string;
  contactEmail: string;
  isActive: boolean;
  isUpcoming: boolean;
  agenda: Session[];
  breakoutTracks: BreakoutTrack[];
  speakers: Speaker[];
  importantDates: ImportantDate[];
  themes: Theme[];
  faqs: FAQ[];
}

// -----------------------------------------------------------------------------
// Series Configuration
// -----------------------------------------------------------------------------

export const siteConfig = {
  seriesName: 'Responsible AI for Infectious Disease Understanding & Surveillance',
  seriesAcronym: 'RAIIDIUS',
  seriesDescription: 'RAIIDIUS is an annual symposium series advancing responsible AI and informatics for infectious diseases across prevention, diagnosis, surveillance, treatment, clinical decision support, and implementation in clinical and public health settings.',
  seriesTagline: 'Responsible AI for Infectious Diseases using Data Science & Informatics for Understanding & Surveillance',
  defaultEditionYear: 2026,
  socialLinks: {
    twitter: '#',
    linkedin: '#',
  },
  codeOfConductEmail: 'conduct@raiidius.org',
} as const;

// -----------------------------------------------------------------------------
// Partners (shared across editions or per-edition)
// -----------------------------------------------------------------------------

const partners2026: Partner[] = [
  {
    id: 'cuimc-id',
    name: 'CUIMC Division of Infectious Diseases',
    shortName: 'CUIMC ID',
    description: 'The Division of Infectious Diseases at Columbia University Irving Medical Center provides expert clinical care and conducts cutting-edge research in infectious disease prevention and treatment.',
    url: 'https://www.cuimc.columbia.edu/',
  },
  {
    id: 'dbmi',
    name: 'Columbia Department of Biomedical Informatics',
    shortName: 'DBMI',
    description: 'The Department of Biomedical Informatics advances the science of biomedical data and information to improve human health.',
    url: 'https://www.dbmi.columbia.edu/',
  },
  {
    id: 'ai-vps',
    name: 'AI@VP&S Initiative',
    shortName: 'AI@VP&S',
    description: 'The AI@VP&S Initiative at Columbia Vagelos College of Physicians and Surgeons promotes the responsible integration of artificial intelligence in medical education and clinical practice.',
    url: 'https://www.vagelos.columbia.edu/',
  },
];

// -----------------------------------------------------------------------------
// Speakers for 2026
// -----------------------------------------------------------------------------

const speakers2026: Speaker[] = [
  {
    id: 'speaker-1',
    name: 'Dr. Sarah Chen',
    affiliation: 'Stanford University',
    title: 'Professor of Medicine & Computer Science',
    role: 'keynote',
    bio: 'Dr. Chen is a leading expert in clinical AI applications with over 15 years of experience developing machine learning systems for infectious disease diagnosis.',
    keywords: ['Clinical AI', 'Diagnostics', 'Machine Learning', 'STI Detection'],
  },
  {
    id: 'speaker-2',
    name: 'Dr. Marcus Williams',
    affiliation: 'CDC Division of STD Prevention',
    title: 'Chief Epidemiologist',
    role: 'keynote',
    bio: 'Dr. Williams leads national surveillance efforts for sexually transmitted infections and has pioneered AI-driven approaches to outbreak detection.',
    keywords: ['Epidemiology', 'Surveillance', 'Public Health', 'AI Implementation'],
  },
  {
    id: 'speaker-3',
    name: 'Dr. Priya Sharma',
    affiliation: 'Johns Hopkins Bloomberg School of Public Health',
    title: 'Associate Professor',
    role: 'panelist',
    bio: 'Dr. Sharma specializes in health equity research and examines how AI tools can reduce or exacerbate health disparities in STI care.',
    keywords: ['Health Equity', 'Ethics', 'Bias in AI', 'Community Health'],
  },
  {
    id: 'speaker-4',
    name: 'Dr. James Rodriguez',
    affiliation: 'New York City Department of Health',
    title: 'Director of Digital Health Innovation',
    role: 'panelist',
    bio: 'Dr. Rodriguez oversees the implementation of AI-powered public health tools across NYC clinics and community health centers.',
    keywords: ['Public Health', 'Implementation', 'Digital Health', 'Urban Health'],
  },
  {
    id: 'speaker-5',
    name: 'Maria Santos',
    affiliation: 'Community Health Action Network',
    title: 'Executive Director',
    role: 'panelist',
    bio: 'Maria is a community advocate with extensive experience ensuring that health technologies serve marginalized populations effectively and ethically.',
    keywords: ['Community Advocacy', 'Patient Engagement', 'Health Access', 'Ethics'],
  },
  {
    id: 'speaker-6',
    name: 'Dr. David Kim',
    affiliation: 'MIT Lincoln Laboratory',
    title: 'Senior Research Scientist',
    role: 'breakout-lead',
    bio: 'Dr. Kim develops computer vision algorithms for medical imaging and leads research on AI-assisted STI diagnostics.',
    keywords: ['Computer Vision', 'Medical Imaging', 'Diagnostics', 'Deep Learning'],
  },
];

// -----------------------------------------------------------------------------
// Agenda for 2026
// -----------------------------------------------------------------------------

const agenda2026: Session[] = [
  {
    id: 'registration',
    title: 'Registration & Breakfast',
    format: 'registration',
    startTime: '8:00 AM',
    endTime: '8:30 AM',
    description: 'Check in, pick up your badge, and enjoy breakfast while networking with fellow attendees.',
    location: 'VEC 401 Lobby',
  },
  {
    id: 'opening',
    title: 'Welcome & Opening Remarks',
    format: 'remarks',
    startTime: '8:30 AM',
    endTime: '8:45 AM',
    description: 'Dr. Reyes Nieva presents the vision and key objectives for RAIIDIUS 2026; acknowledges ASTDA support.',
    speakers: [],
  },
  {
    id: 'keynote-1',
    title: 'Keynote 1: AI at the Point of Care',
    format: 'keynote',
    startTime: '8:45 AM',
    endTime: '9:30 AM',
    description: 'Expert clinician-technologist presents case examples demonstrating AI applications in STI diagnosis and treatment decision support.',
    speakers: ['speaker-1'],
  },
  {
    id: 'keynote-2',
    title: 'Keynote 2: Surveillance in the AI Era',
    format: 'keynote',
    startTime: '9:30 AM',
    endTime: '10:15 AM',
    description: 'Epidemiologist shares AI-driven opportunities and implementation concerns for STI surveillance and outbreak response.',
    speakers: ['speaker-2'],
  },
  {
    id: 'break-morning',
    title: 'Morning Coffee Break & Networking',
    format: 'break',
    startTime: '10:15 AM',
    endTime: '10:30 AM',
    description: 'Refreshments and informal networking.',
    location: 'VEC 401 Atrium',
  },
  {
    id: 'breakout-sessions',
    title: 'Concurrent Breakout Sessions',
    format: 'breakout',
    startTime: '10:30 AM',
    endTime: '11:45 AM',
    description: 'Choose from three parallel tracks exploring different aspects of AI for STI prevention and control.',
    track: 'all',
  },
  {
    id: 'panel',
    title: 'Panel Discussion & Q&A',
    format: 'panel',
    startTime: '11:45 AM',
    endTime: '12:45 PM',
    description: '"Implementing AI in Clinical and Public Health STI Practice" — Panel includes clinicians, public health leaders, and community advocates discussing real-world implementation challenges and opportunities.',
    speakers: ['speaker-3', 'speaker-4', 'speaker-5'],
  },
  {
    id: 'lunch-poster',
    title: 'Boxed Lunch & Poster Session',
    format: 'lunch',
    startTime: '12:45 PM',
    endTime: '1:45 PM',
    description: 'Enjoy lunch while viewing poster presentations showcasing AI-based STI research by trainees.',
    location: 'VEC 401 Gallery',
  },
  {
    id: 'poster-afternoon',
    title: 'Poster Session: AI and Informatics-based Methods and Applications for Infectious Disease Research',
    format: 'poster',
    startTime: '1:45 PM',
    endTime: '3:15 PM',
    description: 'Dedicated poster viewing time featuring trainee research on AI and informatics methods for infectious disease applications.',
    location: 'VEC 401 Gallery',
  },
  {
    id: 'break-afternoon',
    title: 'Afternoon Coffee Break & Networking',
    format: 'break',
    startTime: '3:15 PM',
    endTime: '3:30 PM',
    description: 'Refreshments and continued networking.',
    location: 'VEC 401 Atrium',
  },
  {
    id: 'patient-engagement',
    title: 'Session: AI-Powered Patient Engagement Tools',
    format: 'session',
    startTime: '3:30 PM',
    endTime: '4:15 PM',
    description: 'Presentations on sexual-health chatbots, adherence apps, and patient outreach tools leveraging AI to improve engagement and outcomes.',
    speakers: [],
  },
  {
    id: 'roundtable',
    title: 'Roundtable Discussion: Next Steps',
    format: 'roundtable',
    startTime: '4:15 PM',
    endTime: '5:00 PM',
    description: '"Next Steps: Collaborations, Pilots & Policy" — Planning future initiatives and multidisciplinary partnerships to advance responsible AI in STI prevention.',
  },
  {
    id: 'closing',
    title: 'Closing Remarks',
    format: 'remarks',
    startTime: '5:00 PM',
    endTime: '5:15 PM',
    description: 'Summary takeaways, thank ASTDA for sponsorship, and next steps for the RAIIDIUS community.',
  },
  {
    id: 'reception',
    title: 'Networking Reception',
    format: 'reception',
    startTime: '5:15 PM',
    endTime: '6:15 PM',
    description: 'Join us for refreshments and continued conversation to close out RAIIDIUS 2026.',
    location: 'VEC 401 Atrium',
  },
];

// -----------------------------------------------------------------------------
// Breakout Tracks for 2026
// -----------------------------------------------------------------------------

const breakoutTracks2026: BreakoutTrack[] = [
  {
    id: 'track-a',
    label: 'A',
    title: 'Diagnostics & Imaging',
    description: 'Explore AI applications in STI diagnostics including computer vision for lesion identification, automated lab result interpretation, and point-of-care testing innovations.',
  },
  {
    id: 'track-b',
    label: 'B',
    title: 'Surveillance & Predictive Modeling',
    description: 'Discuss AI-driven approaches to STI surveillance, outbreak prediction, contact tracing optimization, and population-level trend analysis.',
  },
  {
    id: 'track-c',
    label: 'C',
    title: 'Ethics, Bias & Equity in AI for STIs',
    description: 'Examine ethical considerations, potential biases in AI systems, and strategies for ensuring equitable outcomes across diverse populations.',
  },
];

// -----------------------------------------------------------------------------
// Important Dates for 2026
// -----------------------------------------------------------------------------

const importantDates2026: ImportantDate[] = [
  {
    label: 'Abstract Submission Opens',
    date: 'March 1, 2026',
    description: 'Submit your abstracts for oral or poster presentations.',
  },
  {
    label: 'Early Registration Opens',
    date: 'March 15, 2026',
    description: 'Early bird registration rates available.',
  },
  {
    label: 'Abstract Submission Deadline',
    date: 'April 15, 2026',
    description: 'Final deadline for abstract submissions.',
  },
  {
    label: 'Notification of Acceptance',
    date: 'May 1, 2026',
    description: 'Authors notified of abstract acceptance.',
  },
  {
    label: 'Early Registration Deadline',
    date: 'May 15, 2026',
    description: 'Last day for early bird registration rates.',
  },
  {
    label: 'RAIIDIUS 2026 Symposium',
    date: 'June 9, 2026',
    description: 'Join us at Columbia University Irving Medical Center.',
  },
];

// -----------------------------------------------------------------------------
// Themes for 2026
// -----------------------------------------------------------------------------

const themes2026: Theme[] = [
  {
    id: 'diagnostics',
    title: 'Diagnostics & Point-of-Care Testing',
    description: 'AI-powered diagnostic tools, computer vision for lesion identification, automated lab result interpretation.',
    icon: 'microscope',
  },
  {
    id: 'surveillance',
    title: 'Surveillance & Outbreak Detection',
    description: 'Real-time monitoring systems, predictive modeling for outbreak response, contact tracing optimization.',
    icon: 'activity',
  },
  {
    id: 'predictive',
    title: 'Predictive Modeling & Risk Stratification',
    description: 'Machine learning models for risk prediction, treatment response forecasting, resource allocation.',
    icon: 'trending-up',
  },
  {
    id: 'ethics',
    title: 'Ethics, Bias & Equity',
    description: 'Algorithmic fairness, addressing health disparities, ensuring equitable access to AI-powered tools.',
    icon: 'scale',
  },
  {
    id: 'implementation',
    title: 'Clinical & Public Health Implementation',
    description: 'Real-world deployment challenges, workflow integration, scalability in resource-limited settings.',
    icon: 'building',
  },
  {
    id: 'engagement',
    title: 'Patient Engagement & Digital Tools',
    description: 'Chatbots for sexual health, adherence apps, privacy-preserving patient outreach solutions.',
    icon: 'users',
  },
];

// -----------------------------------------------------------------------------
// FAQs for 2026
// -----------------------------------------------------------------------------

const faqs2026: FAQ[] = [
  {
    question: 'Who should attend RAIIDIUS 2026?',
    answer: 'RAIIDIUS welcomes researchers, clinicians, public health professionals, data scientists, trainees, and community advocates interested in the intersection of AI/informatics and infectious disease prevention.',
  },
  {
    question: 'What types of abstracts are you accepting?',
    answer: 'We accept abstracts for oral presentations and poster sessions. Topics should align with our themes: diagnostics, surveillance, predictive modeling, ethics/equity, implementation, or patient engagement tools.',
  },
  {
    question: 'Is there a reduced rate for trainees?',
    answer: 'Yes! We offer discounted registration for students, residents, fellows, and postdoctoral researchers. Please select the trainee option during registration.',
  },
  {
    question: 'Will presentations be recorded?',
    answer: 'Select sessions may be recorded with speaker permission. Registered attendees will receive access to available recordings after the event.',
  },
  {
    question: 'How can I request accessibility accommodations?',
    answer: 'Please indicate any accessibility needs during registration or contact us at the email provided. We are committed to making RAIIDIUS accessible to all attendees.',
  },
  {
    question: 'Can I present virtually?',
    answer: 'RAIIDIUS 2026 is an in-person event. However, we may offer limited virtual presentation options for extenuating circumstances. Contact us to discuss your situation.',
  },
];

// -----------------------------------------------------------------------------
// Editions
// -----------------------------------------------------------------------------

export const editions: Edition[] = [
  {
    year: 2026,
    slug: '2026',
    themeTitle: 'Sexually Transmitted Infections (STIs)',
    themeShortTitle: 'STIs',
    themeDescription: 'RAIIDIUS 2026 focuses on responsible AI and informatics for the prevention and control of sexually transmitted infections. This edition brings together researchers, clinicians, public health professionals, and technologists to explore how AI can enhance STI diagnostics, surveillance, treatment support, and patient engagement while addressing critical concerns around ethics, equity, and real-world implementation.',
    date: '2026-06-09',
    dateFormatted: 'June 9, 2026',
    timezone: 'Eastern Time (ET)',
    venue: 'Vagelos Education Center',
    venueRoom: 'VEC 401',
    address: '104 Haven Ave',
    city: 'New York',
    state: 'NY',
    fullAddress: '104 Haven Ave, New York, NY',
    mapUrl: 'https://maps.google.com/?q=104+Haven+Ave,+New+York,+NY',
    partners: partners2026,
    sponsorName: 'American Sexually Transmitted Diseases Association (ASTDA)',
    sponsorUrl: 'https://www.astda.org/',
    registrationUrl: '#register',
    submissionUrl: '#submit',
    contactEmail: 'raiidius2026@columbia.edu',
    isActive: true,
    isUpcoming: true,
    agenda: agenda2026,
    breakoutTracks: breakoutTracks2026,
    speakers: speakers2026,
    importantDates: importantDates2026,
    themes: themes2026,
    faqs: faqs2026,
  },
  {
    year: 2027,
    slug: '2027',
    themeTitle: 'Theme To Be Announced',
    themeShortTitle: 'TBD',
    themeDescription: 'RAIIDIUS 2027 will continue our mission of advancing responsible AI for infectious diseases. The specific disease domain focus will be announced in late 2026. Potential topics include respiratory viruses, antimicrobial resistance, emerging pathogens, or other areas of pressing public health concern.',
    date: '2027-06-01',
    dateFormatted: 'June 2027',
    timezone: 'Eastern Time (ET)',
    venue: 'To Be Announced',
    venueRoom: 'TBD',
    address: 'TBD',
    city: 'New York',
    state: 'NY',
    fullAddress: 'Location to be announced',
    partners: [],
    sponsorName: 'To Be Announced',
    registrationUrl: '',
    submissionUrl: '',
    contactEmail: 'raiidius@columbia.edu',
    isActive: false,
    isUpcoming: true,
    agenda: [],
    breakoutTracks: [],
    speakers: [],
    importantDates: [],
    themes: [],
    faqs: [],
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

export function getEdition(year: number): Edition | undefined {
  return editions.find((e) => e.year === year);
}

export function getDefaultEdition(): Edition {
  return editions.find((e) => e.year === siteConfig.defaultEditionYear) || editions[0];
}

export function getActiveEditions(): Edition[] {
  return editions.filter((e) => e.isActive);
}

export function getSpeaker(edition: Edition, speakerId: string): Speaker | undefined {
  return edition.speakers.find((s) => s.id === speakerId);
}

export function getSessionSpeakers(edition: Edition, session: Session): Speaker[] {
  if (!session.speakers) return [];
  return session.speakers.map((id) => getSpeaker(edition, id)).filter((s): s is Speaker => !!s);
}

// -----------------------------------------------------------------------------
// Navigation Configuration
// -----------------------------------------------------------------------------

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/abstracts', label: 'Abstracts' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/venue', label: 'Venue' },
  { href: '/about', label: 'About' },
  { href: '/editions', label: 'Editions' },
];

// -----------------------------------------------------------------------------
// What to Expect Cards
// -----------------------------------------------------------------------------

export const whatToExpectCards = [
  {
    title: 'Keynote Presentations',
    description: 'Hear from leading experts at the intersection of AI, infectious diseases, and public health.',
    icon: 'presentation',
  },
  {
    title: 'Breakout Sessions',
    description: 'Dive deep into specialized topics with interactive, focused discussions.',
    icon: 'users',
  },
  {
    title: 'Panel & Q&A',
    description: 'Engage with diverse perspectives from clinicians, researchers, and advocates.',
    icon: 'messages',
  },
  {
    title: 'Poster Showcase',
    description: 'Explore cutting-edge trainee research in AI and informatics for infectious diseases.',
    icon: 'layout',
  },
  {
    title: 'Methods & Implementation',
    description: 'Learn practical approaches for deploying AI in clinical and public health settings.',
    icon: 'code',
  },
  {
    title: 'Networking Reception',
    description: 'Connect with peers and build collaborations over refreshments.',
    icon: 'wine',
  },
];

// -----------------------------------------------------------------------------
// Submission Guidelines
// -----------------------------------------------------------------------------

export const submissionGuidelines = {
  formats: ['Oral Presentation (15 minutes)', 'Poster Presentation'],
  wordLimit: 300,
  categories: [
    'Diagnostics & Point-of-Care Testing',
    'Surveillance & Outbreak Detection',
    'Predictive Modeling & Risk Stratification',
    'Ethics, Bias & Equity',
    'Clinical & Public Health Implementation',
    'Patient Engagement & Digital Tools',
  ],
  reviewCriteria: [
    'Scientific merit and innovation',
    'Relevance to symposium themes',
    'Clarity of methodology and results',
    'Potential for real-world impact',
    'Quality of presentation materials',
  ],
};

// -----------------------------------------------------------------------------
// Anticipated Outcomes
// -----------------------------------------------------------------------------

export const anticipatedOutcomes = [
  {
    title: 'Cross-Disciplinary Dialogue',
    description: 'Foster collaboration between AI researchers, clinicians, epidemiologists, and public health professionals.',
  },
  {
    title: 'Early-Career Development',
    description: 'Provide exposure to AI/informatics methods and professional development resources for trainees.',
  },
  {
    title: 'White Paper & Recommendations',
    description: 'Develop a summary document outlining key findings, recommendations, and next steps for the field.',
  },
  {
    title: 'Community Building',
    description: 'Establish a network of stakeholders committed to responsible AI adoption in infectious disease prevention.',
  },
];
