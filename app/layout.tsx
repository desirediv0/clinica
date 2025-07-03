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
    default: "CLINICA - Premium Dental & Skin Care Excellence",
    template: "%s | CLINICA",
  },
  description:
    "Experience world-class dental and skin care treatments at CLINICA. Advanced technology, expert professionals, and personalized care for your natural beauty and oral health.",
  keywords: [
    "dental care",
    "skin treatments",
    "cosmetic dentistry",
    "dental implants",
    "skin care",
    "medical clinic",
    "beauty treatments",
    "oral health",
    "dermatology",
    "esthetic dentistry",
  ],
  authors: [{ name: "CLINICA Team" }],
  creator: "CLINICA",
  publisher: "CLINICA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clinica.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clinica.com",
    title: "CLINICA - Premium Dental & Skin Care Excellence",
    description:
      "Experience world-class dental and skin care treatments at CLINICA. Advanced technology, expert professionals, and personalized care.",
    siteName: "CLINICA",
    images: [
      {
        url: "/images/company logo.jpg",
        width: 1200,
        height: 630,
        alt: "CLINICA - Dental and Skin Care Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLINICA - Premium Dental & Skin Care Excellence",
    description:
      "Experience world-class dental and skin care treatments at CLINICA.",
    images: ["/images/company logo.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "CLINICA",
              description:
                "Premium dental and skin care clinic providing world-class treatments",
              url: "https://clinica.com",
              logo: "https://clinica.com/images/company logo.jpg",
              image: "https://clinica.com/images/company logo.jpg",
              telephone: "+1-555-123-4567",
              email: "info@clinica.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Medical Center Dr, Suite 100",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
              priceRange: "$$",
              medicalSpecialty: ["Dentistry", "Dermatology"],
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Dental Implants",
                  description:
                    "Permanent tooth replacement with natural-looking results",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Skin Treatments",
                  description:
                    "Advanced skin care treatments for natural beauty",
                },
              ],
              sameAs: [
                "https://facebook.com/clinica",
                "https://instagram.com/clinica",
                "https://twitter.com/clinica",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
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
        <main id="main-content" className="min-h-screen">
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
