import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    default: "CLINICA - Top Dental & Skin Care Excellence",
    template: "%s | CLINICA",
  },
  description:
    "Discover the best dental and skin care treatments at CLINICA. Leading-edge technology, expert doctors, and personalized care for your smile and beauty. Book your consultation today.",
  keywords: [
    "best dental clinic",
    "top skin treatments",
    "cosmetic dentistry",
    "dental implants",
    "skin care clinic",
    "medical spa",
    "beauty treatments",
    "oral health",
    "dermatology",
    "esthetic dentistry",
    "dental surgery",
    "skin rejuvenation",
    "teeth whitening",
    "acne treatment",
    "anti-aging",
    "dental hygiene",
    "facial treatments",
    "orthodontics",
    "pediatric dentistry",
    "emergency dental care",
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
    title: "CLINICA - Top Dental & Skin Care Excellence",
    description:
      "Discover the best dental and skin care treatments at CLINICA. Leading-edge technology, expert doctors, and personalized care for your smile and beauty.",
    siteName: "CLINICA",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "CLINICA - Dental and Skin Care Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLINICA - Top Dental & Skin Care Excellence",
    description:
      "Discover the best dental and skin care treatments at CLINICA. Leading-edge technology and expert care.",
    images: ["/images/logo.jpg"],
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main id="main-content" className="min-h-screen overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />

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
