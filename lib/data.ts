export interface ServiceItem {
  id: string;
  title: string;
  category: 'hard' | 'soft' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
  stats: { label: string; value: string };
}

export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  metric: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'mep' | 'security' | 'housekeeping' | 'landscape';
  imageUrl: string;
  location: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract';
  experience: string;
  description: string;
  skills: string[];
}

export const COMPANY_STATS = [
  { id: 'workforce', value: 15000, suffix: '+', label: 'Trained Workforce', subtext: 'In-house professionals PAN-India' },
  { id: 'area', value: 20, suffix: 'M+ Sq.Ft', label: 'Real Estate Managed', subtext: 'Commercial, IT Parks & Townships' },
  { id: 'clients', value: 200, suffix: '+', label: 'Enterprise Clients', subtext: 'Trusted by leading corporate brands' },
  { id: 'years', value: 25, suffix: '+ Years', label: 'Excellence Legacy', subtext: 'Founded in 2001 by Navy Veteran' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'housekeeping',
    title: 'Housekeeping & Hygiene',
    category: 'soft',
    shortDesc: 'Automated deep cleaning, mechanized floor scrubbing, and eco-certified sanitation.',
    fullDesc: 'We provide institutional-grade housekeeping solutions backed by industrial ride-on scrubbers, color-coded microfibers, and eco-friendly Taski chemicals. Designed for IT parks, hospital campuses, and corporate headquarters.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Mechanized floor care & polishing', 'Sterile healthcare & lab cleaning', 'Facade & window high-rise cleaning', 'Daily consumable replenishment'],
    stats: { label: 'Daily Clean Area', value: '8.5M Sq.Ft' },
  },
  {
    id: 'mep',
    title: 'MEP & Technical Operations',
    category: 'hard',
    shortDesc: 'Comprehensive Mechanical, Electrical, Plumbing, HVAC, & DG sync power management.',
    fullDesc: 'Round-the-clock technical operations managed by certified engineers. We handle HT/LT switchgears, transformers, centralized HVAC chillers, BMS automation, and emergency backup diesel generator systems.',
    iconName: 'Wrench',
    image: '/images/mep_operations.png',
    highlights: ['24/7 BMS & HVAC chiller monitoring', 'Transformer & HT panel maintenance', 'Plumbing & hydro-pneumatic pumps', 'Energy optimization audits'],
    stats: { label: 'Uptime Reliability', value: '99.98%' },
  },
  {
    id: 'security',
    title: 'Physical & Electronic Security',
    category: 'soft',
    shortDesc: 'Ex-servicemen led security personnel, perimeter defense, and AI CCTV surveillance.',
    fullDesc: 'Supervised by military veterans, our security team combines disciplined physical guarding with modern CCTV command centers, RFID access gates, visitor management, and rapid crisis response squads.',
    iconName: 'ShieldCheck',
    image: '/images/security_command.png',
    highlights: ['Military veteran leadership', 'CCTV monitoring & access control', 'VIP escort & crowd control', 'Fire safety & emergency drills'],
    stats: { label: 'Guards Deployed', value: '4,500+' },
  },
  {
    id: 'stp-wtp',
    title: 'STP & WTP Water Management',
    category: 'hard',
    shortDesc: 'Zero Liquid Discharge (ZLD) Sewage & Water Treatment plant operation and compliance.',
    fullDesc: 'Complete operation and chemical treatment for MBBR/MBR Sewage Treatment Plants and RO/UV Water Treatment Plants. We ensure full PCB compliance and recycled water utilization for gardening and cooling towers.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1200&auto=format&fit=crop',
    highlights: ['MBBR & MBR bioreactor maintenance', 'Reverse Osmosis (RO) plant management', 'Pollution Control Board compliance', 'Daily water purity testing'],
    stats: { label: 'Water Recycled', value: '50M L/Day' },
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Grounds Keeping',
    category: 'soft',
    shortDesc: 'Corporate horticulture, vertical indoor gardens, and automated drip irrigation.',
    fullDesc: 'Transforming corporate real estate into green sanctuaries. Our expert horticulturists design, plant, and maintain expansive lawns, indoor botanical accents, tree trimming, and smart drip irrigation.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Horticulture design & seasonal blooms', 'Vertical green walls & potted plants', 'Automated smart irrigation systems', 'Organic fertilizing & pest protection'],
    stats: { label: 'Green Acreage', value: '350+ Acres' },
  },
  {
    id: 'pest-control',
    title: 'Pest Management & Fumigation',
    category: 'soft',
    shortDesc: 'HACCP-compliant, herbal & odorless pest eradication for corporate facilities.',
    fullDesc: 'Scientifically engineered pest control preventing infestation of termites, rodents, mosquitoes, and roaches. Safe for employee health and compliant with global food-safety & corporate workplace norms.',
    iconName: 'Bug',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Anti-termite piping systems', 'Odorless herbal gel treatments', 'Rodent bait stations & monitoring', 'Fogging & vector control'],
    stats: { label: 'Premises Protected', value: '500+' },
  },
  {
    id: 'helpdesk',
    title: 'Helpdesk & Front Office Operations',
    category: 'specialized',
    shortDesc: 'Digital ticket resolution, visitor management, and concierge hospitality.',
    fullDesc: 'Seamless front desk experience with polite, bilingual receptionists, visitor kiosk administration, mailroom logistics, and automated facility ticketing software for prompt employee issue resolution.',
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Automated SLA-tracked ticketing', 'Professional concierge receptionists', 'Digital visitor sign-in kiosks', 'Mailroom & dispatch management'],
    stats: { label: 'Avg Ticket Resolution', value: '< 15 Mins' },
  },
  {
    id: 'parking-pool',
    title: 'Parking & Swimming Pool Care',
    category: 'specialized',
    shortDesc: 'ANPR parking automation, valet services, and chemical pool filtration.',
    fullDesc: 'Smart parking layout management with boom barrier controls and valet operations paired with commercial swimming pool chemical balancing, suction sweeping, and lifeguard deployment.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop',
    highlights: ['ANPR camera license detection', 'Valet drivers & traffic wardens', 'Daily pH & chlorine pool testing', 'Lifeguard & safety monitoring'],
    stats: { label: 'Parking Bays Managed', value: '45,000+' },
  },
];

export const CLIENTS_MARQUEE = [
  { name: 'Tech Park Hyderabad', logoText: 'CYBER TOWER' },
  { name: 'Fortune 500 Campus', logoText: 'NEXUS TECH' },
  { name: 'Prestige Commercial', logoText: 'PRESTIGE GROUP' },
  { name: 'Mindspace IT Hub', logoText: 'MINDSPACE' },
  { name: 'Apex Hospitals', logoText: 'APEX HEALTHCARE' },
  { name: 'DLF Cybercity', logoText: 'DLF INFRA' },
  { name: 'GMR Aero Plaza', logoText: 'GMR REALTORS' },
  { name: 'Provident Housing', logoText: 'PROVIDENT' },
];

export const WHY_CHOOSE_POINTS = [
  {
    icon: 'Building2',
    title: 'Managing 20M+ Sq.Ft',
    desc: 'Deep operational expertise handling massive IT parks, high-rise commercial towers, and gated residential communities.',
  },
  {
    icon: 'Users',
    title: '100% In-House Staff',
    desc: 'No third-party sub-contracting. All 15,000+ professionals are directly on Amaze payroll with full verification and training.',
  },
  {
    icon: 'ShieldAlert',
    title: '24/7 Emergency Backup',
    desc: 'Dedicated rapid response squads on standby to handle MEP breakdowns, monsoon waterlogging, or power outages.',
  },
  {
    icon: 'Award',
    title: 'Staff Welfare Pioneers',
    desc: 'Industry-leading employee benefits including ₹2L insurance, family education scholarships, festival rewards, and performance bonuses.',
  },
  {
    icon: 'FileCheck',
    title: 'Site-Specific SOPs',
    desc: 'Tailor-made checklists and ISO-standard auditing protocols updated quarterly by our internal quality control teams.',
  },
  {
    icon: 'Zap',
    title: 'Energy & Cost Optimization',
    desc: 'Proactive equipment risk assessments and power-saving strategies designed to trim your utility bills by up to 18%.',
  },
];

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Varma',
    role: 'Vice President - Infrastructure',
    company: 'Cyberabad Tech Park',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'Amaze PMS transformed our 4 Million Sq.Ft campus. Their MEP engineers maintained 99.9% uptime during peak summer load, and their housekeeping standards are world-class.',
    rating: 5,
    metric: '18% Power Savings',
  },
  {
    id: 't2',
    name: 'Ananya Deshmukh',
    role: 'Head of Workplace Solutions',
    company: 'Global Financial Hub',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    quote: 'What sets Amaze apart is their military-grade discipline. Led by ex-Navy leadership, their security and front-desk team deliver an effortless experience for our 8,000 employees.',
    rating: 5,
    metric: '99.8% SLA Score',
  },
  {
    id: 't3',
    name: 'Ketan Patel',
    role: 'Director of Property Operations',
    company: 'Apex Commercial Towers',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: 'Having all services in-house makes communication seamless. One contact person for MEP, STP, security, and cleaning saves us hundreds of operational hours monthly.',
    rating: 5,
    metric: '100% In-house Execution',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    title: 'High Voltage HT Substation Operations',
    category: 'mep',
    imageUrl: '/images/mep_operations.png',
    location: 'Cyberabad IT Corridor',
    description: '24/7 monitoring of 33KV substation transformer units by certified electrical engineers.',
  },
  {
    id: 'g2',
    title: 'Command Center Security & Access Control',
    category: 'security',
    imageUrl: '/images/security_command.png',
    location: 'Financial District, Hyderabad',
    description: 'Centralized CCTV monitoring wall tracking access gates, parking bays, and perimeter fences.',
  },
  {
    id: 'g3',
    title: 'Mechanized Floor Scrubbing & Sanitation',
    category: 'housekeeping',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    location: 'Corporate HQ, Bengaluru',
    description: 'Ride-on heavy duty scrubbers executing daily marble floor polishing and anti-bacterial coating.',
  },
  {
    id: 'g4',
    title: 'Lush Botanical Gardens & Lawn Maintenance',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
    location: 'Apex Realty Township',
    description: 'Lawn manicuring, tree sculpting, and organic fertilizer administration for green certification.',
  },
  {
    id: 'g5',
    title: 'MBBR Sewage Treatment Plant Operation',
    category: 'mep',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop',
    location: 'Gachibowli Tech Campus',
    description: '500 KLD sewage recycling plant outputting crystal clear water for campus irrigation.',
  },
  {
    id: 'g6',
    title: 'Ex-Military Security Guard Inspection',
    category: 'security',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    location: 'Cyberabad HQ',
    description: 'Daily morning briefing and uniform drill inspection conducted by retired Navy officer.',
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'j1',
    title: 'Senior MEP Facility Engineer',
    department: 'Engineering & Technical Ops',
    location: 'Cyberabad, Hyderabad',
    type: 'Full-time',
    experience: '4 - 7 Years',
    description: 'Oversee 11KV HT switchgears, chillers, and DG sync panels across a 2M Sq.Ft commercial tower.',
    skills: ['HVAC Chillers', 'HT/LT Panels', 'BMS Automation', 'DG Sync'],
  },
  {
    id: 'j2',
    title: 'Security Operations Manager (Ex-Serviceman)',
    department: 'Physical Security',
    location: 'Bengaluru / Hyderabad',
    type: 'Full-time',
    experience: '5+ Years (Defence Background)',
    description: 'Manage 250+ security personnel, VIP protocols, perimeter monitoring, and liaison with authorities.',
    skills: ['Defence / Military BG', 'Crisis Response', 'CCTV Analytics', 'Staff Training'],
  },
  {
    id: 'j3',
    title: 'Soft Services & Housekeeping Executive',
    department: 'Facility Management',
    location: 'Chennai / Hyderabad',
    type: 'Full-time',
    experience: '2 - 5 Years',
    description: 'Supervise mechanized cleaning schedules, chemical inventory, Taski audit checklists, and client SLAs.',
    skills: ['Taski Chemicals', 'Team Leadership', 'SLA Tracking', 'Audit SOPs'],
  },
];
