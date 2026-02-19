"use client";
import React, { useRef } from "react";
import { Button, Link } from "@heroui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LandingPage() {
  const container = useRef(null);

  // GSAP Animation: Hero text and button entrance
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title", { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      ease: "power4.out" 
    })
    .from(".hero-subtitle", { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.5") // Starts 0.5s before title finishes
    .from(".hero-btn", { 
      scale: 0.8, 
      opacity: 0, 
      duration: 0.5, 
      ease: "back.out(1.7)" 
    }, "-=0.3");
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen flex flex-col items-center justify-center bg-white p-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#46C7E0]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF5A5F]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Main Heading */}
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-black tracking-tight mb-6">
          Build faster with <span className="text-[#46C7E0]">HeroUI</span>
        </h1>

        {/* Sub-heading */}
        <p className="hero-subtitle text-zinc-500 text-lg md:text-xl mb-10 leading-relaxed">
          Experience the power of Next.js 15 combined with beautiful components 
          and smooth GSAP animations. Ready to get started?
        </p>

        {/* Action Buttons */}
        <div className="hero-btn flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as={Link}
            href="/signup"
            size="lg"
            className="bg-[#46C7E0] text-white font-bold px-10 h-14 text-lg shadow-xl shadow-cyan-200"
            radius="full"
          >
            Get Started
          </Button>
          
          <Button 
            as={Link}
            href="/signup"
            variant="bordered"
            size="lg"
            className="border-zinc-200 text-black font-semibold px-10 h-14 text-lg"
            radius="full"
          >
            Log In
          </Button>
        </div>
      </div>

      {/* Footer Branding */}
      <p className="hero-subtitle absolute bottom-10 text-zinc-400 text-sm font-medium">
        Powered by Next.js & Tailwind CSS v4
      </p>
    </main>
  );
}