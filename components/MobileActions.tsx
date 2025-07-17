import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex w-full">
        <a
          href="tel:+917007145918"
          className="flex-1 bg-[#815A93] text-white py-4 flex items-center justify-center space-x-2 hover:bg-[#6a4a7a] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-[#e3c19d] text-white py-4 flex items-center justify-center space-x-2 hover:bg-[#c9a987] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}
