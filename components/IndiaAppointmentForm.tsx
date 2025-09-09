"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, CheckCircle } from "lucide-react";

export default function IndiaAppointmentForm() {
    const [formData, setFormData] = useState({
        procedure: "",
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [k: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedInfo, setSubmittedInfo] = useState<Record<string, string> | null>(null);

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

    const generateTimeSlots = (startHour: number, endHour: number, intervalMinutes: number) => {
        const slots: string[] = [];
        for (let h = startHour; h <= endHour; h++) {
            for (let m = 0; m < 60; m += intervalMinutes) {
                if (h === endHour && m > 0) continue;
                const date = new Date();
                date.setHours(h, m, 0, 0);
                let hours = date.getHours();
                const minutes = date.getMinutes().toString().padStart(2, "0");
                const ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12 || 12;
                slots.push(`${hours}:${minutes} ${ampm}`);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(11, 21, 30);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const err: { [k: string]: string } = {};
        if (!formData.procedure) err.procedure = "Please select a procedure";
        if (!formData.name) err.name = "Name is required";
        if (!formData.phone) err.phone = "Phone is required";
        if (!formData.email) err.email = "Email is required";
        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setErrors((prev) => ({ ...prev, submit: "" }));

        try {
            const res = await fetch("/api/appointment-india", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const json = await res.json();
            if (!res.ok) {
                console.error('API error', json);
                setErrors((prev) => ({ ...prev, submit: json.error || 'Failed to submit. Please try again later.' }));
                setIsSubmitting(false);
                return;
            }
            setIsSubmitting(false);
            // preserve submitted info for success panel
            setSubmittedInfo({
                procedure: formData.procedure,
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                preferredDate: formData.preferredDate || '-',
                preferredTime: formData.preferredTime || '-',
                message: formData.message || '-',
            });
            setIsSubmitted(true);
            setFormData({ procedure: "", name: "", phone: "", email: "", preferredDate: "", preferredTime: "", message: "" });
        } catch (err) {
            console.error(err);
            setErrors((prev) => ({ ...prev, submit: 'Network error. Please check your connection and try again.' }));
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#815A93] to-[#e3c19d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Appointment Request Received</h3>
                <p className="text-gray-700 mb-2">Thank you, {submittedInfo?.name || 'Guest'}. We have received your request.</p>
                <div className="text-sm text-gray-600 mb-4">
                    <p><strong>Procedure:</strong> {submittedInfo?.procedure}</p>
                    <p><strong>Preferred Date:</strong> {submittedInfo?.preferredDate}</p>
                    <p><strong>Preferred Time:</strong> {submittedInfo?.preferredTime}</p>
                    <p className="mt-2">Our team will call you at <strong>{submittedInfo?.phone || 'the number you provided'}</strong> within 24 hours to confirm the appointment.</p>
                </div>
                <motion.button onClick={() => { setIsSubmitted(false); setSubmittedInfo(null); }} whileHover={{ scale: 1.03 }} className="bg-gradient-to-r from-[#e3c19d] to-[#815A93] text-white font-semibold px-6 py-3 rounded-lg">Done</motion.button>
            </motion.div>
        );
    }

    const todayISO = new Date().toISOString().split("T")[0];

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Procedure</label>
                <select name="procedure" value={formData.procedure} onChange={handleChange} className="w-full mt-2 p-3 border rounded-md">
                    <option value="">Select a procedure</option>
                    {procedures.map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>
                {errors.procedure && <p className="text-red-500 text-sm">{errors.procedure}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input name="name" value={formData.name} onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full mt-2 p-3 border rounded-md" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full mt-2 p-3 border rounded-md" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
            </div>

            <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full mt-2 p-3 border rounded-md" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                    <input name="preferredDate" type="date" min={todayISO} value={formData.preferredDate} onChange={handleChange} className="w-full mt-2 p-3 border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full mt-2 p-3 border rounded-md">
                        <option value="">Select time</option>
                        {timeSlots.map((t) => (<option key={t} value={t}>{t}</option>))}
                    </select>
                </div>
            </div>

            <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Any additional details or questions"
                    className="w-full mt-2 p-3 border rounded-md" />
            </div>

            <div className="mt-4">
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#e3c19d] to-[#815A93] text-white font-semibold py-3 px-6 rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Requesting...</span>
                        </>
                    ) : (
                        <>
                            <Calendar className="w-4 h-4" />
                            <span>Request Appointment</span>
                        </>
                    )}
                </motion.button>
            </div>
        </form>
    );
}
