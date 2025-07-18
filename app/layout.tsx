import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileActions from "@/components/MobileActions";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default:
      "Best Dental Clinic In Dwarka | Best Dentist In Dwarka | Best Skin Clinic In Dwarka",
    template: "%s | CLINICA",
  },
  description:
    "Discover the best dental care and skin treatments at CLINICA. Leading-edge dental technology, expert dentists, and personalized care for your perfect smile. Book your dental consultation today. Best Dental Clinic In Dwarka | Best Dentist In Dwarka | Best Skin Clinic In Dwarka",
  keywords: [
    "best dental clinic",
    "dental implants",
    "cosmetic dentistry",
    "teeth whitening",
    "smile makeover",
    "orthodontics",
    "dental surgery",
    "oral health",
    "dental hygiene",
    "emergency dental care",
    "pediatric dentistry",
    "root canal treatment",
    "dental crowns",
    "dental veneers",
    "top skin treatments",
    "skin care clinic",
    "medical spa",
    "beauty treatments",
    "dermatology",
    "skin rejuvenation",
    "best dental clinic in dwarka",
    "best dentist in dwarka",
    "best skin clinic in dwarka",
    "best dental clinic in dwarka",
    "best dental clinic in dwarka",
    "best dental in dwarka",
    "best dental clinic in dwarka",
  ],
  authors: [{ name: "CLINICA Team" }],
  creator: "CLINICA",
  publisher: "CLINICA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clinicadentalandskin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clinicadentalandskin.com",
    title:
      "Best Dental Clinic In Dwarka | Best Dentist In Dwarka | Best Skin Clinic In Dwarka",
    description:
      "Discover the best dental care and skin treatments at CLINICA. Leading-edge dental technology, expert dentists, and personalized care for your perfect smile.",
    siteName: "CLINICA",
    images: [
      {
        url: "/images/logo2.jpeg",
        width: 1200,
        height: 630,
        alt: "CLINICA - Premier Dental Care Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Dental Clinic In Dwarka | Best Dentist In Dwarka | Best Skin Clinic In Dwarka",
    description:
      "Discover the best dental care and skin treatments at CLINICA. Leading-edge dental technology and expert care.",
    images: ["/images/logo2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#e3c19d] text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main
          id="main-content"
          className="min-h-screen overflow-x-hidden pb-16 md:pb-0"
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Actions */}
        <MobileActions />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
