"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    Globe,
    Mail,
    User,
    Phone,
    CheckCircle,
    Loader2,
    ChevronDown,
    X
} from "lucide-react";

interface AppointmentFormProps {
    title?: string;
    subtitle?: string;
    tagText?: string;
    tagColor?: string;
    titleGradientFrom?: string;
    titleGradientTo?: string;
    buttonText?: string;
    successMessage?: string;
    successSubtitle?: string;
}

const AppointmentForm = ({
    title = "Book Fast & Professional Treatments",
    subtitle = "",
    tagText = "All India Toll Free No: 1800-11-7272",
    tagColor = "from-[#e3c19d]/10 to-[#815A93]/10 text-[#815A93]",
    titleGradientFrom = "from-[#815A93]",
    titleGradientTo = "to-[#e3c19d]",
    buttonText = "SUBMIT",
    successMessage = "Appointment Booked Successfully!",
    successSubtitle = "We will contact you within 24 hours to confirm your appointment details."
}: AppointmentFormProps) => {
    const [formData, setFormData] = useState({
        procedure: "",
        name: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        preferredDate: "",
        preferredTime: "",
        message: "",

    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const [calendarMonth, setCalendarMonth] = useState<number>(today.getMonth());
    const [calendarYear, setCalendarYear] = useState<number>(today.getFullYear());

    // Procedures list (expanded)
    const procedures = [
        "General Consultation (First visit)",
        "Basic Extractions",
        "Bonding",
        "Bridges",
        "Cavity Fillings",
        "Ceramic Veneers",
        "Complete Dentures",
        "Crowns",
        "Dental Implants (Immediate Function)",
        "Dental Implants (Two Stage)",
        "Gap Closures",
        "Gum Surgeries",
        "Implant Supported Dentures",
        "Instant Tooth Whitening",
        "Invisible Braces",
        "Partial Dentures",
        "Professional Clean Up",
        "Root Canal Treatment",
        "Smile Designing / Smile Enhancement / Smile Makeover",
        "Surgical Extraction of Impacted Teeth",
        "Orthodontics",
        "Teeth Whitening",
        "Dental Crowns",
        "Veneers",
        "Periodontal Treatment",
        "Oral Surgery",
        "Preventive Care",
        "Cosmetic Dentistry",
        "Full Mouth Rehabilitation"
    ];

    // Countries list
    const countries = [
        "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
        "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
        "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
        "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman",
        "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia",
        "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
        "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen",
        "Zambia", "Zimbabwe"
    ];

    // Time slots: generate every 30 minutes from 11:00 AM to 9:00 PM
    const generateTimeSlots = (startHour: number, endHour: number, intervalMinutes: number) => {
        const slots: string[] = [];
        const pad = (n: number) => n.toString().padStart(2, '0');

        for (let h = startHour; h <= endHour; h++) {
            for (let m = 0; m < 60; m += intervalMinutes) {
                // stop when hour === endHour and minute > 0 (to include endHour:00 only)
                if (h === endHour && m > 0) continue;
                const date = new Date();
                date.setHours(h, m, 0, 0);
                let hours = date.getHours();
                const minutes = pad(date.getMinutes());
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;
                slots.push(`${hours}:${minutes} ${ampm}`);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(11, 21, 30);

    // Get all dates for a given month/year (1..daysInMonth)
    const getDatesForMonth = (year: number, month: number) => {
        const days: Date[] = [];
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            days.push(new Date(year, month, d));
        }
        return days;
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const prevMonth = () => {
        if (calendarMonth === 0) {
            setCalendarMonth(11);
            setCalendarYear((y) => y - 1);
        } else setCalendarMonth((m) => m - 1);
    };

    const nextMonth = () => {
        if (calendarMonth === 11) {
            setCalendarMonth(0);
            setCalendarYear((y) => y + 1);
        } else setCalendarMonth((m) => m + 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setFormData(prev => ({
            ...prev,
            preferredDate: date.toLocaleDateString()
        }));
        setShowCalendar(false);
    };

    const handleTimeSelect = (time: string) => {
        setFormData(prev => ({
            ...prev,
            preferredTime: time
        }));
        setShowTimeDropdown(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const resp = await fetch('/api/appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const json = await resp.json();
            if (!resp.ok) {
                console.error('Appointment API error', json);
                alert(json.error || 'Failed to submit appointment. Please try again later.');
                setIsLoading(false);
                return;
            }

            // success
            setIsLoading(false);
            setIsSubmitted(true);
        } catch (err) {
            console.error('Submission error', err);
            alert('Something went wrong while submitting. Please try again later.');
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {successMessage}
                    </h3>
                    <p className="text-gray-600 mb-2">
                        {successSubtitle}
                    </p>
                    <p className="text-gray-600 mb-6 text-sm">
                        Our front-desk will call you at the phone number you provided (<strong>{formData.phone}</strong>) within 24 hours to confirm the appointment. If immediate help is needed, call +91 70071 45918.
                    </p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                procedure: "",
                                name: "",
                                phone: "",
                                email: "",
                                country: "",
                                city: "",
                                preferredDate: "",
                                preferredTime: "",
                                message: "",

                            });
                            setSelectedDate(null);
                        }}
                        className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                        Book Another Appointment
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#815A93] to-[#e3c19d] rounded-2xl shadow-lg p-8 border border-gray-100"
        >
            <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                    {title}
                </h2>
                <p className="text-white font-semibold text-lg">
                    ({tagText})
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row - Procedure, Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Procedure Selection */}
                    <div>
                        <select
                            name="procedure"
                            value={formData.procedure}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 appearance-none bg-white text-gray-700 text-base"
                        >
                            <option value="">Select a Procedure</option>
                            {procedures.map((procedure) => (
                                <option key={procedure} value={procedure}>
                                    {procedure}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 text-base"
                            placeholder="Enter Name*"
                        />
                    </div>
                </div>

                {/* Second Row - Phone, Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 text-base"
                            placeholder="Phone Number*"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 text-base"
                            placeholder="Enter Email*"
                        />
                    </div>
                </div>

                {/* Third Row - Country, City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Country Selection */}
                    <div>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 appearance-none bg-white text-gray-700 text-base"
                        >
                            <option value="">Select Country*</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* City Field */}
                    <div>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 text-base"
                            placeholder="City*"
                        />
                    </div>
                </div>

                {/* Fourth Row - Date, Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 bg-white text-left flex items-center justify-between text-base"
                        >
                            <span className={formData.preferredDate ? "text-gray-700" : "text-gray-500"}>
                                {formData.preferredDate || "Preferred Appointment Date"}
                            </span>
                            <Calendar className="w-5 h-5 text-gray-400" />
                        </button>

                        {/* Calendar Dropdown */}
                        {showCalendar && (
                            <div className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        <button type="button" onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-100">‹</button>
                                        <div className="font-semibold text-gray-900">{monthNames[calendarMonth]} {calendarYear}</div>
                                        <button type="button" onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-100">›</button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => setShowCalendar(false)}
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                                    <div className="font-semibold text-gray-600 p-2">Su</div>
                                    <div className="font-semibold text-gray-600 p-2">Mo</div>
                                    <div className="font-semibold text-gray-600 p-2">Tu</div>
                                    <div className="font-semibold text-gray-600 p-2">We</div>
                                    <div className="font-semibold text-gray-600 p-2">Th</div>
                                    <div className="font-semibold text-gray-600 p-2">Fr</div>
                                    <div className="font-semibold text-gray-600 p-2">Sa</div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                    {getDatesForMonth(calendarYear, calendarMonth).map((date, index) => {
                                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                                        const isToday = date.toDateString() === new Date().toDateString();

                                        return (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => handleDateSelect(date)}
                                                className={`p-3 rounded-lg transition-all duration-200 ${isSelected
                                                    ? 'bg-[#815A93] text-white shadow-md'
                                                    : isToday
                                                        ? 'bg-[#e3c19d] text-white shadow-md'
                                                        : 'hover:bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {date.getDate()}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Preferred Time */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 bg-white text-left flex items-center justify-between text-base"
                        >
                            <span className={formData.preferredTime ? "text-gray-700" : "text-gray-500"}>
                                {formData.preferredTime || "Preferred Appointment Time"}
                            </span>
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>

                        {/* Time Dropdown */}
                        {showTimeDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => handleTimeSelect(time)}
                                        className="w-full px-4 py-3 text-left hover:bg-[#e3c19d]/20 text-gray-700 border-b border-gray-100 last:border-b-0 transition-all duration-200"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Fifth Row - Message (Full Width) */}
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e3c19d] focus:border-[#e3c19d] transition-all duration-300 resize-none text-base"
                        placeholder="Message (Optional)"
                    />
                </div>

                {/* Sixth Row - Captcha and Submit */}
                <div className="flex items-center justify-end pt-4">


                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] hover:from-[#e3c19d]/90 hover:to-[#815A93]/90 text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center space-x-2 text-base"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <span>{buttonText}</span>
                        )}
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
};

export default AppointmentForm;
