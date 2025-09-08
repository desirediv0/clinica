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

    // Procedures list
    const procedures = [
        "General Consultation",
        "Dental Implants",
        "Root Canal Treatment",
        "Teeth Whitening",
        "Orthodontics",
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

    // Time slots
    const timeSlots = [
        "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
        "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM",
        "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"
    ];

    // Generate calendar dates for current and next month
    const generateCalendarDates = () => {
        const today = new Date();
        const dates = [];

        // Current month
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let day = today.getDate(); day <= daysInMonth; day++) {
            dates.push(new Date(currentYear, currentMonth, day));
        }

        // Next month
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        const daysInNextMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

        for (let day = 1; day <= daysInNextMonth; day++) {
            dates.push(new Date(nextYear, nextMonth, day));
        }

        return dates;
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

        // Console log all form data
        console.log("=== APPOINTMENT FORM SUBMISSION ===");
        console.log("Procedure:", formData.procedure);
        console.log("Name:", formData.name);
        console.log("Phone:", formData.phone);
        console.log("Email:", formData.email);
        console.log("Country:", formData.country);
        console.log("City:", formData.city);
        console.log("Preferred Date:", formData.preferredDate);
        console.log("Preferred Time:", formData.preferredTime);
        console.log("Message:", formData.message);

        console.log("=== END SUBMISSION ===");

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
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
                    <p className="text-gray-600 mb-6">
                        {successSubtitle}
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
                            <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-gray-900 text-lg">Select Date</h3>
                                    <button
                                        type="button"
                                        onClick={() => setShowCalendar(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                    <div className="font-semibold text-gray-600 p-2">Su</div>
                                    <div className="font-semibold text-gray-600 p-2">Mo</div>
                                    <div className="font-semibold text-gray-600 p-2">Tu</div>
                                    <div className="font-semibold text-gray-600 p-2">We</div>
                                    <div className="font-semibold text-gray-600 p-2">Th</div>
                                    <div className="font-semibold text-gray-600 p-2">Fr</div>
                                    <div className="font-semibold text-gray-600 p-2">Sa</div>

                                    {generateCalendarDates().slice(0, 35).map((date, index) => {
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
