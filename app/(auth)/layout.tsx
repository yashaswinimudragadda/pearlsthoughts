"use client";

import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'h-screen' or 'min-h-screen' ensures the container fills the viewport
    // 'items-stretch' ensures both child <section> tags take up 100% of the parent height
    <main className="min-h-screen w-full flex flex-col md:flex-row bg-white overflow-x-hidden items-stretch">
      
      {/* LEFT SIDE: Image/Logo Area */}
      {/* 'flex-1' and 'justify-center' keeps the illustration dead-center vertically */}
      <section className="w-full md:w-[55%] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20 bg-[#FBFDFF]">
        {/* Mobile Header */}
        <div className="md:hidden w-full max-w-[280px] aspect-[4/3] bg-[#F3F4F6] rounded-[45px] flex items-center justify-center mb-10 border border-gray-100 shadow-sm">
          <span className="text-2xl font-bold text-black tracking-tight">Your Logo</span>
        </div>

        {/* Desktop Illustration */}
        <div className="hidden md:flex items-center justify-center w-full max-w-2xl px-8 transition-all duration-500 hover:scale-[1.02]">
          <img 
            src="/signup-illustration.png" 
            alt="Security Illustration" 
            className="w-full h-auto object-contain max-h-[80vh]" // Added max-h to prevent overflow
          />
        </div>
      </section>

      {/* RIGHT SIDE: Content Area */}
      {/* Using the same flex-col and justify-center as the left side ensures the heights match */}
      <section className="w-full md:w-[45%] flex flex-col items-center md:items-start justify-center px-6 md:px-12 lg:px-24 bg-white border-l border-gray-50">
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </section>
    </main>
  );
}