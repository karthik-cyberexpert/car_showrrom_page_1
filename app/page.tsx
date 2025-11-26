"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    model: "",
    message: "",
    preferredContact: "email",
    testDrive: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const locations = [
    {
      city: "San Francisco",
      address: "1234 Market Street",
      phone: "(415) 555-0123",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM"
    },
    {
      city: "Los Angeles",
      address: "5678 Sunset Boulevard",
      phone: "(310) 555-0124",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM"
    },
    {
      city: "New York",
      address: "9012 5th Avenue",
      phone: "(212) 555-0125",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM"
    },
    {
      city: "Miami",
      address: "3456 Ocean Drive",
      phone: "(305) 555-0126",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM"
    }
  ];

  const models = ["Aether GT", "Lumia S", "Vanta X"];

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
            <a
              href="/test-drive"
              className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold"
            >
              Book a Test Drive
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[60vh]">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
            alt="Contact hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-[60vh] flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-white text-balance">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-zinc-200">
                Our team is ready to help you find the perfect Nova. Reach out to schedule a test drive or learn more about our vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
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
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-zinc-300 mb-2">
                  Interested Model
                </label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="">Select a model</option>
                  {models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="testDrive"
                    name="testDrive"
                    checked={formData.testDrive}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/30"
                  />
                  <label htmlFor="testDrive" className="text-sm text-zinc-300">
                    I would like to schedule a test drive
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    {["email", "phone"].map((method) => (
                      <label key={method} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="h-4 w-4 border-white/20 bg-white/10 text-white focus:ring-white/30"
                        />
                        <span className="text-sm text-zinc-300 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Showroom Locations</h2>
            <div className="space-y-6">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
                  <div className="space-y-2 text-zinc-300">
                    <p className="flex items-start gap-2">
                      <span className="text-zinc-500">📍</span>
                      {location.address}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-zinc-500">📞</span>
                      {location.phone}
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-zinc-500">🕐</span>
                      {location.hours}
                    </p>
                  </div>
                  <button className="mt-4 rounded-full bg-white/10 text-white px-4 py-2 text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                    Get Directions
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-cyan-300/10 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-zinc-300 text-sm mb-4">Chat with our specialists 24/7</p>
              <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-zinc-300 text-sm mb-4">support@novamotors.com</p>
              <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                Send Email
              </button>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nova App</h3>
              <p className="text-zinc-300 text-sm mb-4">Manage your experience on the go</p>
              <button className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                Download App
              </button>
            </div>
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
