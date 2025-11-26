"use client";

import Image from "next/image";
import { useState } from "react";

export default function ShowroomPage() {
  const [selectedView, setSelectedView] = useState("exterior");
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [selectedWheels, setSelectedWheels] = useState("aero");

  const views = [
    { id: "exterior", name: "Exterior" },
    { id: "interior", name: "Interior" },
    { id: "360", name: "360° View" },
    { id: "features", name: "Features" }
  ];

  const colors = [
    { id: "midnight", name: "Midnight Black", hex: "#0a0a0a" },
    { id: "pearl", name: "Pearl White", hex: "#f8f8f8" },
    { id: "silver", name: "Liquid Silver", hex: "#c0c0c0" },
    { id: "blue", name: "Deep Blue", hex: "#1e3a8a" },
    { id: "red", name: "Racing Red", hex: "#dc2626" }
  ];

  const wheels = [
    { id: "aero", name: "Aero Wheels", size: "19\"" },
    { id: "sport", name: "Sport Wheels", size: "20\"" },
    { id: "performance", name: "Performance", size: "21\"" }
  ];

  const features = [
    {
      title: "Panoramic Glass Roof",
      description: "UV-blocking glass with adjustable opacity",
      icon: "🌟"
    },
    {
      title: "Premium Audio System",
      description: "22-speaker immersive sound experience",
      icon: "🎵"
    },
    {
      title: "Autopilot Suite",
      description: "Level 3 autonomous driving capabilities",
      icon: "🤖"
    },
    {
      title: "Wireless Charging",
      description: "Multiple device charging pads throughout",
      icon: "🔋"
    }
  ];

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
          <Image
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1920&auto=format&fit=crop"
            alt="Showroom hero"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative h-[60vh] flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-white text-balance">
                Virtual Showroom
              </h1>
              <p className="mt-6 text-lg text-zinc-200">
                Explore every angle, customize your perfect Nova, and experience the future of automotive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showroom */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Car Display */}
          <div className="lg:col-span-2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
              <Image
                src={
                  selectedView === "exterior"
                    ? "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop"
                    : selectedView === "interior"
                    ? "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop"
                }
                alt="Car view"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setSelectedView(view.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedView === view.id
                        ? "bg-white text-black"
                        : "bg-black/50 text-white backdrop-blur"
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors text-left">
                <div className="text-2xl mb-2">🎮</div>
                <div className="font-semibold">Test Drive Simulator</div>
                <div className="text-sm text-zinc-400 mt-1">Experience the drive virtually</div>
              </button>
              <button className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors text-left">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">AR View</div>
                <div className="text-sm text-zinc-400 mt-1">See it in your space</div>
              </button>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-8">
            {/* Color Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Exterior Color</h3>
              <div className="space-y-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      selectedColor === color.id
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className="h-8 w-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-left">
                      <div className="font-medium">{color.name}</div>
                      <div className="text-sm text-zinc-400">Included</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Wheel Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Wheels</h3>
              <div className="space-y-3">
                {wheels.map((wheel) => (
                  <button
                    key={wheel.id}
                    onClick={() => setSelectedWheels(wheel.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                      selectedWheels === wheel.id
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-medium">{wheel.name}</div>
                      <div className="text-sm text-zinc-400">{wheel.size}</div>
                    </div>
                    <div className="text-sm text-zinc-400">
                      {wheel.id === "aero" ? "Included" : "+$2,000"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Save Configuration */}
            <button className="w-full rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors">
              Save Configuration
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-12">Interior Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-cyan-300/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready for the Real Experience?</h3>
          <p className="text-zinc-100 mb-8 max-w-2xl mx-auto">
            Schedule a test drive at your nearest Nova Motors location and feel the performance firsthand.
          </p>
          <div className="flex justify-center gap-4">
            <button className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors">
              Book Test Drive
            </button>
            <button className="rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Find Locations
            </button>
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
