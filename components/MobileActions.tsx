import { Calendar } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


export default function MobileActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4 w-full">
        <a
          href="tel:+917007145918"
          className="flex flex-col items-center group"
        >
          <FaPhone className="bg-blue-500 text-white p-3 rounded-full w-12 h-12 group-hover:bg-blue-700 transition-colors shadow-xl " />

        </a>
        <a
          href="https://wa.me/917007145918?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20CLINICA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <FaWhatsapp className="bg-[#25D366] text-white p-3 rounded-full w-12 h-12 group-hover:bg-[#1ebe5d] transition-colors shadow-xl" />

        </a>
      </div>
      <Link
        href="https://cloud.pappyjoe.com/widget/index/VzcKMlAxUWwHZgdjAzEMZw%3D%3D"
        target="_blank"
        className="bg-gradient-to-r from-[#815A93] to-[#e3c19d] text-white px-5 py-3 rounded-full flex items-center justify-center space-x-2 hover:from-[#6d4c7c] hover:to-[#bfa16e] transition-colors shadow-xl font-semibold text-base"
      >
        <Calendar className="w-5 h-5" />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
