'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation'; // Added for router method
import { Button, Card, CardBody } from "@heroui/react";
import { ArrowLeft, Users, TrendingUp, Star, MessageSquare } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

export default function DoctorProfile() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize router

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    
    tl.from(".animate-header", { opacity: 0, y: -20 })
      .from(".animate-profile-card", { opacity: 0, y: 40, scale: 0.95 }, "-=0.4")
      .from(".animate-stats", { opacity: 0, scale: 0.8, stagger: 0.1 }, "-=0.2")
      .from(".animate-text", { opacity: 0, x: -20, stagger: 0.1 }, "-=0.4")
      .from(".animate-footer", { opacity: 0, y: 20 }, "-=0.2");
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white pb-24 lg:pb-12">
      {/* TEAL HEADER SECTION */}
      <div className="bg-[#46C2DE] h-[220px] pt-12 px-6 lg:px-20 rounded-b-[40px] lg:rounded-b-[60px] relative">
        <div className="max-w-4xl mx-auto flex items-center gap-4 animate-header">
          {/* Use router.push to navigate to dashboard */}
          <button 
            onClick={() => router.push('/home/dashboard')} 
            className="p-1 hover:bg-white/20 rounded-full transition-all active:scale-90 outline-none"
          >
            <ArrowLeft className="text-white" size={28} />
          </button>
          <h1 className="text-white text-2xl font-bold tracking-wide">Book Appointment</h1>
        </div>

        {/* FLOATING DOCTOR CARD */}
        <div className="absolute left-1/2 -translate-x-1/2 top-32 w-[92%] lg:w-full max-w-4xl px-4 lg:px-0">
          <Card 
            className="animate-profile-card border-none shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[24px] bg-white overflow-visible"
          >
            {/* Set bg-white on CardBody to ensure a flat, single-layer look */}
            <CardBody className="flex flex-row items-center justify-between p-5 lg:p-8 gap-4 bg-white rounded-[24px]">
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827] leading-tight">
                  Dr.Kumar Das
                </h2>
                <p className="text-[#6B7280] text-sm font-medium mt-1">
                  Ophthalmologist
                </p>
                <p className="text-[#46C2DE] font-bold text-sm lg:text-md mt-1">
                  MBBS, MS (Surgeon)
                </p>
                <p className="text-[#9CA3AF] text-xs lg:text-sm mt-1 font-medium">
                  Fellow of Sanskara netralaya, chennai
                </p>
              </div>

              <div className="relative shrink-0">
                <img 
                  src="/images/doctor-kumar.jpg" 
                  alt="Dr. Kumar Das" 
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-[20px] object-cover shadow-md border-2 border-white"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-4xl mx-auto px-6 mt-40 lg:mt-48 flex flex-col gap-10">
        
        {/* STATS ROW */}
        <div className="grid grid-cols-4 gap-2 lg:gap-8">
          <StatBox icon={<Users className="text-[#46C2DE]" />} value="5,000+" label="patients" />
          <StatBox icon={<TrendingUp className="text-[#46C2DE]" />} value="10+" label="years exper.." />
          <StatBox icon={<Star className="text-[#46C2DE]" />} value="4.8" label="rating" />
          <StatBox icon={<MessageSquare className="text-[#46C2DE]" />} value="4,942" label="reviews" />
        </div>

        {/* ABOUT & SERVICE SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section className="animate-text">
            <h3 className="text-xl font-bold text-gray-800 mb-3">About Doctor</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              15+ years of experience in all aspects of cardiology, including non-invasive and interventional procedures.
            </p>
          </section>

          <section className="animate-text">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Service & Specialization</h3>
            <div className="flex justify-between border-b border-gray-100 pb-2 mb-2">
              <span className="text-gray-400 font-medium">Service</span>
              <span className="text-gray-500 font-bold">Medicare</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium">Specialization</span>
              <span className="text-gray-600 font-bold">Cardiology</span>
            </div>
          </section>
        </div>

        {/* AVAILABILITY SECTION */}
        <section className="animate-text">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Availability For Consulting</h3>
          <div className="flex justify-between items-center max-w-lg mx-auto bg-gray-50/50 p-4 rounded-2xl">
            <p className="text-gray-500 font-semibold">Monday to Friday</p>
            <p className="text-gray-700 font-extrabold">10 PM To 5 PM</p>
          </div>
        </section>

        {/* FOOTER CTA */}
        <div className="animate-footer lg:static fixed bottom-0 left-0 right-0 p-6 bg-white lg:bg-transparent z-50">
          <Button 
            className="w-full h-14 bg-[#46C2DE] text-white text-lg font-bold rounded-2xl shadow-lg shadow-[#46C2DE]/30 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Book appointment
          </Button>
        </div>
      </main>
    </div>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="animate-stats flex flex-col items-center group">
      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#E8F8FB] flex items-center justify-center transition-transform group-hover:scale-110 mb-2">
        {icon}
      </div>
      <span className="text-[#46C2DE] font-bold text-sm lg:text-base">{value}</span>
      <span className="text-gray-500 font-bold text-[10px] lg:text-xs uppercase tracking-tight text-center">{label}</span>
    </div>
  );
}
