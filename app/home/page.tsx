'use client';

import { useRef } from 'react';
import { 
  Input, 
  Card, 
  CardBody, 
  Avatar, 
  Badge, 
  Button, 
  Chip 
} from "@heroui/react"; // Combined all HeroUI imports into one block
import { 
  Search, 
  Heart, 
  MapPin, 
  Calendar, 
  FileText, 
  User, 
  Stethoscope 
} from "lucide-react";
import { gsap } from "../lib/gsap";
import { useGSAP } from "@gsap/react";

const DOCTORS = Array(9).fill({
  name: "Dr.Prakash das",
  specialty: "Sr. Psychologist",
  availability: "Available today",
  experience: "As Psychologist Dr das practices about 7+ years....",
  time: "09:30 AM-07:00 PM",
  image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
});

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    
    tl.from(".animate-nav", { y: -20, opacity: 0 })
      .from(".animate-card", { 
        y: 30, 
        opacity: 0, 
        stagger: 0.1 
      }, "-=0.4");
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-[#F9FAFB] pb-24 lg:pb-8">
      
      {/* HEADER SECTION */}
      <header className="animate-nav sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 lg:px-20 lg:py-8">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* User Profile Info */}
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704a" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Hello, Priya</h1>
                <div className="flex items-center text-gray-400 text-xs">
                  <MapPin size={12} className="mr-1" />
                  Dombivali, Mumbai
                </div>
              </div>
            </div>
      
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-12 ml-20">
              <NavItem icon={<Stethoscope size={20}/>} label="Find a Doctor" active />
              <NavItem icon={<Calendar size={20}/>} label="Appoint.." />
              <NavItem icon={<FileText size={20}/>} label="Records" />
              <NavItem icon={<User size={20}/>} label="Profile" />
            </nav>

            {/* Notification Badge */}
            <Badge 
              content="5" 
              shape="circle"
              placement="top-right"
              classNames={{
                // Red background with white border ring as seen in image
                badge: "bg-[#FF5C5C] text-white text-[11px] font-bold min-w-[18px] h-[18px] border-2 border-white shadow-sm p-0",
                base: "ml-4"
              }}
            >
              <div className="p-2.5 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
            </Badge>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:max-w-md">
            <Input
              placeholder="Search Doctors"
              startContent={<Search className="text-gray-400" size={18} />}
              className="w-full"
              classNames={{
                inputWrapper: "bg-[#F3F4F6] border-none rounded-2xl h-12 px-4 shadow-none"
              }}
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT: DOCTOR LIST */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doc, i) => (
            <Card key={i} className="animate-card border-none shadow-sm rounded-[32px] overflow-hidden">
              <CardBody className="p-4 flex flex-row gap-4">
                <div className="relative w-1/3 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="object-cover w-full h-full grayscale-[0.5]" />
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{doc.name}</h3>
                      <p className="text-[#46C2DE] text-xs font-semibold">{doc.specialty}</p>
                    </div>
                    <Heart size={18} className="text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>

                  <Chip size="sm" className="bg-[#E8F8FB] text-[#34A853] font-bold text-[10px] px-2 h-6">
                    {doc.availability}
                  </Chip>

                  <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2">
                    {doc.experience}
                  </p>

                  <div className="bg-[#F9FAFB] rounded-full px-3 py-1.5 w-fit">
                    <p className="text-gray-900 font-bold text-[10px]">{doc.time}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <MobileNavItem icon={<Search size={22}/>} label="Find a Doctor" active />
        <MobileNavItem icon={<Calendar size={22}/>} label="Appoint.." />
        <MobileNavItem icon={<FileText size={22}/>} label="Records" />
        <MobileNavItem icon={<User size={22}/>} label="Profile" />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-[#46C2DE]' : 'text-gray-400'}`}>
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function MobileNavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#46C2DE]' : 'text-gray-400'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}