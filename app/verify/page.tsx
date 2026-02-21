'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Input, Checkbox } from "@heroui/react";
import { gsap } from "../lib/gsap";
import { useGSAP } from "@gsap/react";

export default function OtpVerification() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  // Initialize with empty strings instead of default values
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Staggered Entry Animation for high-end feel
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    tl.from(".animate-up", { 
      y: 40, 
      opacity: 0, 
      stagger: 0.1,
      clearProps: "all"
    });
  }, { scope: container });

  // Handle typing and auto-focus move forward
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace and auto-focus move backward
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <main ref={container} className="min-h-screen flex items-center justify-center bg-[#E8F0FE] p-4 sm:p-6 lg:p-0">
      <div className="animate-up w-full max-w-[480px] bg-white rounded-[40px] p-8 md:p-14 shadow-sm relative">
        
        {/* Header Section */}
        <div className="animate-up flex items-center mb-8 md:mb-10">
          <button onClick={() => router.back()} className="mr-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">OTP Code Verification</h1>
        </div>

        <div className="animate-up text-center mb-10">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Code has been sent to +91 111 ******99
          </p>
        </div>

        {/* OTP Input Grid */}
        <div className="animate-up grid grid-cols-4 gap-3 md:gap-4 mb-10">
          {otp.map((val, i) => (
            <Input
              key={i}
              ref={(el) => (inputRefs.current[i] = el as unknown as HTMLInputElement)}
              type="text"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              variant="bordered"
              classNames={{
                inputWrapper: [
                  "h-14 md:h-16 w-full border-1 transition-all duration-200 rounded-2xl shadow-none",
                  // Dynamically changes to blue theme ONLY when user types
                  val !== "" ? "border-[#46C2DE] bg-[#E8F8FB]" : "border-gray-100 bg-[#F9FAFB]",
                  "group-data-[focus=true]:border-[#46C2DE] group-data-[focus=true]:bg-[#E8F8FB]",
                ].join(" "),
                // Fix for centered text and removing "inner box"
                input: "text-center text-xl font-bold text-gray-800 !border-none !outline-none !ring-0",
                innerWrapper: "bg-transparent border-none shadow-none",
              }}
            />
          ))}
        </div>

        <div className="animate-up text-center mb-10 md:mb-12">
          <p className="text-gray-500 text-sm font-medium">
            Resend code in <span className="text-[#46C2DE] font-semibold">55</span> s
          </p>
        </div>

        <Button 
          className="animate-up w-full bg-[#46C2DE] text-white font-bold h-14 text-lg rounded-2xl shadow-lg shadow-cyan-100/50"
        >
          Verify
        </Button>
      </div>
    </main>
  );
}