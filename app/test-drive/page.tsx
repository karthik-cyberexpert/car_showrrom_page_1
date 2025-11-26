"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestDrivePage() {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    address: "",
    city: "",
    zipCode: "",
    message: "",
    termsAccepted: false
  });

  const models = [
    {
      id: "aether-gt",
      name: "Aether GT",
      tagline: "Pure performance. Electrified.",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop",
      price: "$89,999",
      specs: ["0-60 mph in 2.8s", "390 mi range", "AWD Dual Motors"]
    },
    {
      id: "lumia-s",
      name: "Lumia S",
      tagline: "Comfort meets precision.",
      img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop",
      price: "$64,999",
      specs: ["Panoramic roof", "Level 3 assist", "22\" Aero wheels"]
    },
    {
      id: "vanta-x",
      name: "Vanta X",
      tagline: "Bold design. Smart utility.",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
      price: "$74,999",
      specs: ["5,000 lb towing", "Tri-zone climate", "Adaptive air ride"]
    }
  ];

  const locations = [
    { id: "sf", name: "San Francisco", address: "1234 Market Street" },
    { id: "la", name: "Los Angeles", address: "5678 Sunset Boulevard" },
    { id: "ny", name: "New York", address: "9012 5th Avenue" },
    { id: "miami", name: "Miami", address: "3456 Ocean Drive" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Test drive booked:", {
      ...formData,
      selectedModel,
      selectedLocation,
      selectedDate,
      selectedTime
    });
    // Handle booking submission here
  };

  const selectedCar = models.find(m => m.id === selectedModel);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 shadow-lg" />
            <span className="text-xl tracking-wide font-semibold">Nova Motors</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a className="hover:text-white transition-colors" href="/models">Models</a>
            <a className="hover:text-white transition-colors" href="/showroom">Showroom</a>
            <a className="hover:text-white transition-colors" href="/features">Features</a>
            <a className="hover:text-white transition-colors" href="/contact">Contact</a>
            <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">
              Book a Test Drive
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
            alt="Test drive hero"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative h-[60vh] flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-white text-balance">
                Book Your Test Drive
              </h1>
              <p className="mt-6 text-lg text-zinc-200">
                Experience the future of driving. Schedule your personalized test drive at a Nova Motors showroom near you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Car Selection & Preview */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Select Your Model</h2>
              <div className="grid gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      selectedModel === model.id
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-32 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={model.img}
                          alt={model.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{model.name}</h3>
                        <p className="text-sm text-zinc-400 mb-2">{model.tagline}</p>
                        <p className="text-sm font-medium">{model.price}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {model.specs.map((spec) => (
                            <span key={spec} className="text-xs text-zinc-300 bg-white/10 px-2 py-1 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Car Preview */}
            {selectedCar && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-4">Your Test Drive Vehicle</h3>
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={selectedCar.img}
                    alt={selectedCar.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Model</span>
                    <span className="font-medium">{selectedCar.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Test Drive Duration</span>
                    <span className="font-medium">45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Route Type</span>
                    <span className="font-medium">City & Highway</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Requirements</span>
                    <span className="font-medium">Valid Driver's License</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Schedule Your Test Drive</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Select Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <option value="">Choose a showroom</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name} - {location.address}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/30"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Driver's License Number
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="License number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="94102"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Any specific features you'd like to test or questions you have..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/30 mt-1"
                  />
                  <label className="text-sm text-zinc-300">
                    I agree to the terms and conditions and confirm that I have a valid driver's license.
                    I understand that I must be at least 21 years old and provide proof of insurance.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors"
                >
                  Book Test Drive
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-12">What to Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <span className="text-xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pre-Drive Briefing</h3>
            <p className="text-zinc-300 text-sm">
              Our specialists will walk you through the vehicle's features and answer any questions before your drive.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <span className="text-xl">🛣️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">45-Minute Experience</h3>
            <p className="text-zinc-300 text-sm">
              Test the vehicle on city streets and highway routes to experience acceleration, handling, and comfort.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Consultation</h3>
            <p className="text-zinc-300 text-sm">
              After your drive, discuss configuration options, financing, and delivery timelines with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Nova Motors. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
