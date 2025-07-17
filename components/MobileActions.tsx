import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        href="tel:+917007145918"
        className="bg-[#815A93] text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#6a4a7a] transition-colors shadow-lg"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        className="bg-[#e3c19d] text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#c9a987] transition-colors shadow-lg"
      >
        <Calendar className="w-5 h-5" />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
