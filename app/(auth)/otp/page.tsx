"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { gsap } from "gsap";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Typing refs for Next.js TypeScript
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const animateInput = (index: number) => {
    gsap.fromTo(
      `.otp-box-${index}`,
      { scale: 0.9 },
      { scale: 1, duration: 0.3, ease: "back.out(3)" }
    );
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value) {
      animateInput(index);
      if (index < 3) {
        inputRefs[index + 1].current?.focus();
        setActiveIndex(index + 1);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
      setActiveIndex(index - 1);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full flex flex-col min-h-full items-center md:items-start justify-start"
    >
      {/* HEADER: Adjusted for Top-Alignment */}
      <header className="animate-item w-full flex items-center gap-2 mb-16 md:mb-24 pt-4 md:pt-0">
        <button 
          className="-ml-3 p-3 hover:bg-gray-100 rounded-full transition-all active:scale-90"
          aria-label="Go back"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight leading-none">
          OTP Code Verification
        </h1>
      </header>

      {/* CONTENT GROUP: Centered on mobile, Left-aligned on Desktop */}
      <div className="w-full flex flex-col items-center md:items-start space-y-12">
        <p className="animate-item text-center md:text-left text-gray-700 text-[17px] font-medium max-w-[280px] md:max-w-none leading-relaxed">
          Code has been sent to +91 111 ******99
        </p>

        {/* OTP INPUTS: Fixed Centering & Borderless Logic */}
        <div className="animate-item flex justify-center gap-4 md:gap-6">
          {otp.map((digit, index) => (
            <div key={index} className={`otp-box-${index} relative`}>
              <Input
                ref={inputRefs[index]}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => setActiveIndex(index)}
                className="w-16 h-16 md:w-20 md:h-20"
                variant="flat"
                radius="lg"
                classNames={{
                  inputWrapper: [
                    "h-full w-full p-0 flex items-center justify-center", // Force center content
                    "bg-[#E0F7FA] hover:bg-[#D1F2F9] focus-within:!bg-[#D1F2F9]",
                    "shadow-none border-none !border-0 outline-none ring-0", // No borders
                    "transition-all duration-200",
                    activeIndex === index ? "ring-2 ring-[#4CC2D9]/40 shadow-lg shadow-[#4CC2D9]/10" : "",
                  ].join(" "),
                  input: "text-center text-3xl font-bold text-black w-full h-full p-0",
                }}
              />
            </div>
          ))}
        </div>

        <div className="animate-item text-center md:text-left">
          <p className="text-gray-500 text-[16px]">
            Resend code in <span className="text-[#4285F4] font-semibold">55</span> s
          </p>
        </div>

        <div className="animate-item w-full pt-4">
          <Button 
            className="w-full h-[60px] bg-[#4CC2D9] text-white font-bold text-xl shadow-md uppercase tracking-wider"
            radius="sm"
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}