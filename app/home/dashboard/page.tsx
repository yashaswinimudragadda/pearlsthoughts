'use client';

import { useRef } from 'react';
import { useRouter } from "next/navigation"; // 1. Added useRouter import
import { 
  Input, Card, CardBody, Avatar, Badge, Chip 
} from "@heroui/react";
import { 
  Search, Heart, MapPin, Calendar, FileText, User, Stethoscope 
} from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

// Mock Data
const DOCTORS = Array(9).fill({
  name: "Dr.Prakash das",
  specialty: "Sr. Psychologist",
  availability: "Available today",
  experience: "As Psychologist Dr das practices about 7+ years....",
  time: "09:30 AM-07:00 PM",
  image: "https://images.pexels.com/photos/8376221/pexels-photo-8376221.jpeg"
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
    <div ref={container} className="min-h-screen bg-[#F9FAFB] pb-24 lg:pb-12">
      
      {/* HEADER SECTION */}
      <header className="animate-nav sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 py-4 lg:px-20 lg:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="flex items-center justify-between w-full lg:w-auto">
            {/* User Profile Info */}
            <div className="flex items-center gap-4">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704a" className="w-12 h-12 border-2 border-white shadow-sm" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">Hello, Priya</h1>
                <div className="flex items-center text-gray-400 text-xs mt-0.5">
                  <MapPin size={12} className="mr-1 text-[#46C2DE]" />
                  Dombivali, Mumbai
                </div>
              </div>
            </div>
      
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 ml-16">
              <NavItem icon={<Stethoscope size={20}/>} label="Find a Doctor" active />
              <NavItem icon={<Calendar size={20}/>} label="Appointments" />
              <NavItem icon={<FileText size={20}/>} label="Records" />
              <NavItem icon={<User size={20}/>} label="Profile" />
            </nav>

            {/* Notification Bell */}
            <div className="lg:ml-8">
              <Badge 
                content="5" 
                shape="circle"
                placement="top-right"
                classNames={{
                  badge: "bg-[#FF5C5C] text-white text-[9px] font-bold min-w-[16px] h-[16px] border-[1.5px] border-white shadow-sm p-0 translate-x-[15%] -translate-y-[15%]",
                  base: "ml-4"
                }}
              >
                <div className=" hover:bg-gray-100 rounded-full transition-all duration-200 cursor-pointer group active:scale-95">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-700 group-hover:text-black transition-colors"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
              </Badge>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:max-w-md">
            <Input
              placeholder="Search Doctors, Specialties..."
              startContent={
                <Search className="text-gray-400 min-w-[18px]" size={18} />
              }
              classNames={{
                base: "w-full",
                inputWrapper: [
                  "bg-[#F3F4F6]",
                  "border-none",
                  "rounded-2xl",
                  "h-12",
                  "px-4",
                  "shadow-none",
                  "flex items-center gap-3",
                  "data-[hover=true]:bg-[#EDEDED]",
                  "group-data-[focus=true]:bg-[#F3F4F6]",
                ].join(" "),
                input: [
                  "bg-transparent",
                  "border-none",
                  "outline-none",
                  "focus:ring-0",
                  "text-sm",
                  "placeholder:text-gray-400",
                  "w-full",
                  "p-0",
                ].join(" "),
                innerWrapper: "flex items-center w-full gap-2",
              }}
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={i} doctor={doc} />
          ))}
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-8 py-4 flex justify-between items-center z-50 rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <MobileNavItem icon={<Search size={24}/>} label="Home" active />
        <MobileNavItem icon={<Calendar size={24}/>} label="Schedule" />
        <MobileNavItem icon={<FileText size={24}/>} label="Records" />
        <MobileNavItem icon={<User size={24}/>} label="Profile" />
      </nav>
    </div>
  );
}

/**
 * Modified Doctor Card with Routing
 */
function DoctorCard({ doctor }: { doctor: any }) {
  const router = useRouter(); // 2. Initialize Router hook

  return (
    <Card 
      isPressable // 3. Added isPressable for interaction
      onPress={() => router.push('/home/bookappointment')} // 4. Redirect action
      className="animate-card border-none shadow-sm hover:shadow-md transition-shadow rounded-[32px] overflow-hidden group"
    >
      <CardBody className="p-4 flex flex-row gap-5">
        <div className="relative w-1/3 aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="object-cover w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>

        <div className="flex-1 flex flex-col justify-between py-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
              <p className="text-[#46C2DE] text-xs font-semibold tracking-wide uppercase">{doctor.specialty}</p>
            </div>
            {/* Prevent navigation when clicking the heart specifically */}
            <div onClick={(e) => e.stopPropagation()}>
                <Heart size={20} className="text-gray-300 hover:text-red-500 hover:fill-red-500 cursor-pointer transition-all" />
            </div>
          </div>

          <Chip 
            size="sm" 
            variant="flat"
            className="bg-[#E8F8FB] text-[#34A853] font-bold text-[10px] px-2 h-6 border-none"
          >
            {doctor.availability}
          </Chip>

          <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">
            {doctor.experience}
          </p>

          <div className="bg-[#F9FAFB] rounded-full px-4 py-2 w-fit border border-gray-50">
            <p className="text-gray-900 font-bold text-[10px]">{doctor.time}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 cursor-pointer group transition-all ${active ? 'text-[#46C2DE]' : 'text-gray-400'}`}>
      <div className={`p-1 rounded-lg transition-colors ${active ? 'bg-[#E8F8FB]' : 'group-hover:bg-gray-50'}`}>
        {icon}
      </div>
      <span className="text-[11px] font-semibold">{label}</span>
    </div>
  );
}

function MobileNavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#46C2DE]' : 'text-gray-400'}`}>
      <div className={active ? "scale-110 transition-transform" : ""}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
    </div>
  );
}
