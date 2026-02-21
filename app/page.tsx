'use client'

import { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Added this import
import { Button } from "@heroui/react";
import { gsap } from "./lib/gsap"; // Use @ alias for cleaner pathing
import { useGSAP } from "@gsap/react";

export default function AppointmentPage() {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);

  // --- Fixed handleLogin function ---
  const handleLogin = () => {
    gsap.to(".page-container", { 
      opacity: 0, 
      x: -20, 
      duration: 0.3, 
      onComplete: () => {
        router.push('/signin');
      } 
    });
  }; // <--- This closing brace was missing

  // --- GSAP Entrance Animation ---
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    // Note: We animate the content inside the container 
    // to avoid conflict with the page-container class itself
    tl.from(".header-content", { 
      y: -30, 
      opacity: 0 
    });

    tl.from(".form-item", { 
      y: 20, 
      opacity: 0, 
      stagger: 0.1 
    }, "-=0.4");

  }, { scope: container });

  return (
    <main 
      ref={container} 
      className="page-container min-h-screen bg-content1 p-8 flex flex-col items-center justify-center"
    >
      {/* Header Section */}
      <div className="header-content text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Book an <span className="text-[#46C2DE]">Appointment</span>
        </h1>
        <p className="text-default-500 mt-3 text-sm md:text-base lg:text-lg max-w-xs md:max-w-md mx-auto">
          Choose your doctor at a preferred date and time
        </p>
      </div>

      {/* Button Section */}
      <div className="form-item mt-4 overflow-hidden w-full max-w-xs"> 
        <Button 
          radius="lg" 
          onPress={handleLogin}
          className="w-full font-bold bg-[#46C2DE] px-11 py-2 rounded-xl text-white shadow-md active:scale-95 transition-transform"
          size="lg"
        >
          Login
        </Button>
      </div>
    </main>
  );
}