"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Award,
  Users,
  Shield,
  Zap,
  Heart,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Expertise",
      description:
        "Decades of combined experience in advanced medical procedures",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Technology",
      description:
        "State-of-the-art equipment and cutting-edge treatment methods",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Comfort",
      description: "Patient-first approach ensuring comfort and peace of mind",
      icon: Heart,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Results",
      description:
        "Proven track record of exceptional outcomes and patient satisfaction",
      icon: Star,
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const timeline = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Comprehensive assessment and personalized treatment planning",
      icon: Users,
    },
    {
      step: "02",
      title: "Diagnosis & Planning",
      description: "Advanced diagnostics and customized treatment approach",
      icon: Shield,
    },
    {
      step: "03",
      title: "Treatment Execution",
      description: "Expert care with precision and attention to detail",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Follow-up Care",
      description: "Ongoing support and maintenance for lasting results",
      icon: Heart,
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "5000+", label: "Happy Patients", icon: Users },
    { number: "100%", label: "Patient Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              About CLINICA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6">
              Excellence in Esthetics & Dentistry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind CLINICA's commitment to providing
              world-class skin and dental care with personalized treatments and
              exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Transforming Lives Through Advanced Care
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At CLINICA, our mission is to enhance your natural beauty and
                  restore your confidence through advanced medical procedures
                  and exceptional patient care. We believe that everyone
                  deserves to feel confident in their skin and smile.
                </p>
                <p>
                  Our team of experienced professionals combines cutting-edge
                  technology with personalized treatment plans to deliver
                  results that exceed expectations. We focus on customized
                  treatments, utilize high-end technology, and maintain a
                  patient-first approach in everything we do.
                </p>
                <p>
                  From the moment you walk through our doors, you'll experience
                  the difference that expertise, technology, and personalized
                  care make. Our commitment to excellence ensures that every
                  visit is comfortable, safe, and effective.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  To provide the highest quality care with the most advanced
                  technology in a comfortable, welcoming environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              The Foundation of Our Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, ensuring that every
              patient receives the highest quality care and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mb-6 shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              Your Journey to Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive approach to ensure the best possible
              outcomes for every patient, from initial consultation to follow-up
              care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={item.title} className="relative text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of satisfied patients who have experienced the
            CLINICA difference. Book your consultation today and take the first
            step towards your transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <Calendar className="w-6 h-6 inline mr-2" />
              Book Consultation
            </Link>
            <Link
              href="tel:+15551234567"
              className="text-white hover:text-blue-100 font-semibold transition-all duration-300"
            >
              <Phone className="w-6 h-6 inline mr-2" />
              Call Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Visit Us
              </h3>
              <p className="text-lg text-gray-600">
                123 Medical Center Dr, Suite 100
                <br />
                City, State 12345
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Call Us
              </h3>
              <p className="text-lg text-gray-600">
                (555) 123-4567
                <br />
                Available 24/7 for emergencies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Email Us
              </h3>
              <p className="text-lg text-gray-600">
                info@clinica.com
                <br />
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
