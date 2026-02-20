"use client";

import React, { useEffect, useRef } from "react";
import { Input, Button, Checkbox, Link } from "@heroui/react";
import { gsap } from "gsap";

export default function SignupPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={formRef} className="w-full flex flex-col">
      <header className="animate-item mb-8 md:mb-12">
        <h1 className="text-[38px] md:text-[48px] font-bold text-black leading-none">
          Login
        </h1>
      </header>

      <form className="flex flex-col gap-5 md:gap-6" onSubmit={(e) => e.preventDefault()}>
        {/* Input Field: Optimized for the exact design height and border */}
        <div className="animate-item space-y-2.5">
          <label className="text-[15px] font-semibold text-black ml-0.5">
            Mobile /Email
          </label>
   <Input
  placeholder="Login with mobile /Email"
  variant="bordered"
  radius="sm"
  classNames={{
    inputWrapper: [
      "h-auto py-5 px-6", 
      "border-gray-300 hover:border-[#4CC2D9] hover:bg-gray-50 transition-all",
      // This line removes the default browser outline and ring
      "focus-within:!border-[#4CC2D9] outline-none ring-0 focus:ring-0",
      "shadow-sm bg-white"
    ].join(" "),
    // Centering the text inside
    input: "text-[16px] placeholder:text-gray-300   text-center font-normal outline-none border-none focus:ring-0",
  }}
/>
        </div>
{/* Action Row: Removed animation and fixed alignment */}
{/* Action Row: Exact design alignment */}
<div className="animate-item flex items-center justify-between w-full px-0 mt-2">
  <div className="flex items-center">
  <Checkbox 
    defaultSelected 
    size="sm"
    disableAnimation
    classNames={{
      // 'gap-1.5' provides that small visible space between box and text
      base: "p-0 m-0 max-w-full flex items-center gap-1.5", 
      label: "text-gray-500 text-[14px] font-medium p-0 m-0 leading-none",
      wrapper: [
        "relative mx-0", 
        "after:content-none", // REMOVES the blue background "pop" block
        "before:border-gray-300 before:border-[1.5px]", // Clean border only
        "rounded-[4px] w-[18px] h-[18px]", // Fixed small size
        "transition-none",
        "group-data-[selected=true]:after:opacity-0",
      ].join(" "),
      // Tick color matches the cyan brand color
      icon: "text-[#4CC2D9] w-3 h-3 stroke-[3.5px]", 
    }}
  >
   
  </Checkbox>Remember Me</div>
  
  <Link 
    href="#" 
    className="text-[#FF6B6B] text-[14px] font-medium hover:opacity-80 transition-opacity"
  >
    Forgot Password ?
  </Link>
</div>

        {/* Primary CTA: Matching the cyan blue from the mobile design */}
        <div className="animate-item mt-2">
          <Button 
            className="w-full h-[58px] bg-[#4CC2D9] text-white font-bold text-xl tracking-[0.05em] shadow-md hover:brightness-105 transition-all"
            radius="sm"
          >
            Login
          </Button>
        </div>

        {/* Or Login With: Centered Divider Section */}
        <div className="animate-item flex items-center justify-center gap-4 py-4">
          <div className="h-[1px] w-full bg-gray-100" />
          <span className="text-gray-400 text-[14px] font-medium whitespace-nowrap px-2">
            Or login With
          </span>
          <div className="h-[1px] w-full bg-gray-100" />
        </div>

        {/* SSO Button */}
       <div className="animate-item">
  <Button
    variant="bordered"
    radius="sm"
    // 'flex items-center justify-center gap-3' ensures the icon and text stay together at the center
    className="w-full h-[58px] border-gray-300 font-semibold text-[17px] text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
  >
    <img 
      src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" 
      className="w-6 h-6" 
      alt="Google icon" 
    />
    <span>Continue with Google</span>
  </Button>
</div>

        {/* Responsive Footer: Increased top margin for desktop */}
        <footer className="animate-item text-center mt-12 md:mt-24">
          <p className="text-gray-500 text-[15px] font-medium">
            Don’t have an account ?{" "}
            <Link 
              href="/signup" 
              className="text-[#4CC2D9] text-[15px] font-bold hover:underline ml-1"
            >
              Sign Up
            </Link>
          </p>
        </footer>
      </form>
    </div>
  );
}