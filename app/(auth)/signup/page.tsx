"use client";
import React, { useRef } from "react";
import { Input, Button, Checkbox, Link } from "@heroui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SignupPage() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".anim-item", { 
      y: 20, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.08, 
      ease: "power2.out" 
    });
  }, { scope: container });

  return (
    // Main wrapper uses flex-col and items-center to keep everything centered horizontally on all screens
    <div ref={container} className="flex flex-col items-center justify-start min-h-screen bg-white pt-8 sm:pt-16 pb-10 px-4">
      
      {/* 1. Logo Section - Fixed size box, centered */}
      <div className="anim-item mb-12 sm:mb-16">
        <div className="w-[200px] h-[130px] sm:w-[240px] sm:h-[150px] bg-[#F1F3F4] rounded-[50px] flex items-center justify-center transition-all">
          <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">Your Logo</span>
        </div>
      </div>

      {/* Container for the form - max-width ensures it doesn't get too wide on Desktop */}
      <div className="w-full max-w-[380px] sm:max-w-[400px] flex flex-col">
        
        {/* 2. Login Header */}
        <div className="anim-item mb-8">
          <h1 className="text-3xl font-bold text-black tracking-tight">Login</h1>
        </div>

        {/* 3. Form Fields */}
        <div className="flex flex-col gap-6">
          <div className="anim-item space-y-2">
            <label className="text-[15px] font-semibold text-black ml-1">Mobile /Email</label>
            <Input 
              placeholder="login with Mobile or Email" 
              variant="bordered"
              radius="sm"
              classNames={{
                inputWrapper: "h-14 border-zinc-200 group-data-[focus=true]:border-[#46C7E0] shadow-sm",
                input: "placeholder:text-zinc-300 text-[15px]"
              }}
            />
          </div>

          {/* 4. Remember & Forgot Password - Balanced Spacing */}
          <div className="anim-item flex justify-between items-center px-1">
            <Checkbox 
              size="sm" 
              radius="sm"
              classNames={{ 
                wrapper: "after:bg-[#46C7E0]",
                label: "text-[#94A3B8] font-medium text-[14px]" 
              }}
            >
              Remember Me
            </Checkbox>
            <Link href="#" className="text-[#FF5A5F] text-[14px] font-bold hover:opacity-80 transition-opacity">
              Forgot Password
            </Link>
          </div>

          {/* 5. Action Button */}
          <Button 
            className="anim-item w-full bg-[#46C7E0] text-white font-bold h-14 text-[16px] mt-2 shadow-md active:scale-[0.98] transition-transform"
            radius="sm"
          >
            Login
          </Button>

          {/* 6. Divider - Perfectly Aligned Line */}
          <div className="anim-item flex items-center gap-4 my-3">
            <div className="h-[1px] bg-zinc-100 flex-1"></div>
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Or login With</span>
            <div className="h-[1px] bg-zinc-100 flex-1"></div>
          </div>

          {/* 7. Google Button */}
          <Button 
            variant="bordered" 
            className="anim-item w-full border-zinc-200 text-black font-bold h-14 text-[15px] bg-white hover:bg-zinc-50 transition-colors"
            radius="sm"
            startContent={
              <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            }
          >
            Continue with Google
          </Button>
        </div>

        {/* 8. Footer Link - Uses Margin Auto to push to bottom if desired, or fixed MT */}
        <div className="anim-item mt-20 sm:mt-32 mb-10 text-center text-[#94A3B8] text-[15px] font-medium">
          Don’t have an account ?{" "}
          <Link href="/signup" className="text-[#46C7E0] font-bold hover:underline underline-offset-4 decoration-2 transition-all">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}