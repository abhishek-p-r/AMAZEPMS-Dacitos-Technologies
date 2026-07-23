# Amaze Property Management Solutions (Amaze PMS) - Next-Gen Web Application

> **Dacitos Technologies - Web Developer / UI Developer Hiring Assignment Submission**

A modern, visually stunning, high-performance redesign and frontend web application for **Amaze Property Management Solutions Pvt. Ltd.** (Action Group Company). Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**. Inspired by high-end design systems like Stripe, Vercel, Framer, and Apple.

---

## 🌟 Key Features & Highlights

- **Modern Glassmorphism UI & Dark Theme**: Premium aesthetic featuring dark space gradients (`#050811`), ambient radial glows, glass-morphic cards (`glass-card`), and vivid accent highlights.
- **Interactive Facility ROI & Manpower Estimator**: Live calculator widget allowing prospective enterprise clients to select property type (IT Park, Commercial, Healthcare, Residential, Industrial), adjust square footage (20K to 1.5M Sq.Ft), choose shift coverage, and calculate instant recommended headcount, SLAs, and annual power optimization savings.
- **Interactive Services Explorer**: Filterable service verticals (Hard MEP Services, Soft Housekeeping & Security, Specialized Helpdesk & Pool Care) with detailed slide-over modals detailing SOP checklists and SLA metrics.
- **High-Impact Hero & Live Floating Stats**: Glowing background grid, live metrics cards (20M+ Sq.Ft, 15,000+ In-House Staff), video preview modal, and quick inquiry CTAs.
- **Enterprise Client Marquee & Social Proof**: Infinite scrolling marquee showcasing 200+ enterprise client partnerships across India.
- **Staff Welfare & Operational Excellence Matrix**: Interactive cards spotlighting 100% in-house workforce, ISO 9001 protocols, and staff welfare benefits (₹2L insurance, family education scholarships).
- **Filterable Operational Lightbox Gallery**: High-resolution operational photography showcasing real MEP switchgears, security command centers, mechanized cleaning, and ZLD STPs.
- **Interactive Recruitment & Careers Hub**: Live job openings (MEP Engineer, Security Operations Manager, Soft Services Executive) with a quick application modal.
- **Multi-Step Proposal Request Modal**: Interactive quotation flow with prefilled data transfer from the calculator, form validation, and confetti animation trigger.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS Keyframe Glows
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts ([Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Outfit](https://fonts.google.com/specimen/Outfit))
- **Interactive Visuals**: Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) installed on your system.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/abhishekr-dev/amaze-pms-redesign.git
   cd amaze-pms-redesign
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

4. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Project Folder Structure

```
├── app/
│   ├── globals.css        # Global styles, glassmorphism utilities & animations
│   ├── layout.tsx         # Root layout, Google Fonts, SEO metadata & Viewport
│   └── page.tsx           # Main landing page orchestrating all interactive modules
├── components/
│   ├── Navbar.tsx             # Floating glassmorphism header & mobile drawer
│   ├── Hero.tsx               # Hero section with glow backdrop & video modal
│   ├── ClientMarquee.tsx      # Infinite scrolling enterprise client logo marquee
│   ├── StatsCounter.tsx       # Company metrics & count-up statistics
│   ├── ServicesExplorer.tsx   # Filterable service cards & detail drawer
│   ├── FacilityCalculator.tsx # Interactive manpower & ROI calculator
│   ├── WhyChooseUs.tsx        # Operational excellence & staff welfare cards
│   ├── OperationalGallery.tsx # Filterable lightbox gallery
│   ├── Testimonials.tsx       # Client testimonials & rating cards
│   ├── CareersSection.tsx     # Job listings & application modal
│   ├── ContactQuoteModal.tsx  # Multi-step proposal request form with confetti
│   └── Footer.tsx             # Comprehensive footer with HQ info & links
├── lib/
│   ├── data.ts            # Structured data models, services, metrics, and jobs
│   └── utils.ts           # Class merging helper function (cn)
├── public/                # Static assets & favicon
├── package.json           # Dependencies and build scripts
└── README.md              # Documentation & setup instructions
```

---

## 📊 Evaluation Checklist & Submission Details

- [x] **UI/UX Design Quality**: Glassmorphic dark aesthetic inspired by Vercel & Stripe.
- [x] **Animation & Micro-interactions**: Smooth hover effects, modal drawers, infinite marquee, floating cards, confetti trigger.
- [x] **Responsive Design**: Tested across Mobile, Tablet, Desktop viewports.
- [x] **JavaScript / TS Logic**: Dynamic headcount & budget calculation formulas in `FacilityCalculator.tsx`.
- [x] **Clean Architecture**: Modular Next.js 15 App Router component structure.
- [x] **Performance & SEO**: Fully pre-rendered static pages, Google Fonts, metadata tags.

---

Designed & Developed for **Dacitos Technologies Pvt. Ltd.** Hiring Assessment.
