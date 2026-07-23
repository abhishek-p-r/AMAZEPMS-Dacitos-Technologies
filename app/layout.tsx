import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Amaze Property Management Solutions | Next-Gen Integrated Facility Management",
  description:
    "Amaze PMS is India's leading Integrated Facility & Property Management Solutions company. Managing 20M+ sq.ft across 200+ enterprise clients with a 15,000+ strong professional workforce in MEP, Security, Housekeeping, STP/WTP, and Technical Operations.",
  keywords: [
    "Amaze PMS",
    "Property Management Solutions",
    "Facility Management India",
    "Cyberabad Property Management",
    "MEP Maintenance",
    "Corporate Security Services",
    "Commercial Housekeeping",
    "STP WTP Operations",
    "Landscaping Services",
    "Action Group",
  ],
  authors: [{ name: "Amaze PMS Pvt Ltd" }],
  openGraph: {
    title: "Amaze Property Management Solutions | Premier Integrated Facility Management",
    description:
      "Transforming facility operations with 15,000+ professionals across 20M+ sq.ft in India. Hard & Soft Facility Solutions.",
    url: "https://amazepms.com",
    siteName: "Amaze PMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze Property Management Solutions",
    description: "Next-gen facility management & technical operations for enterprise real estate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${plusJakarta.variable} ${outfit.variable} font-sans bg-[#050811] text-slate-100 antialiased selection:bg-sky-500 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
