'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Button, 
  Input, 
  Checkbox, 
} from "@heroui/react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

export default function LoginPage() {
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".animate-side", { x: -50, opacity: 0, duration: 1 })
      .from(".animate-up", { 
        y: 30, 
        opacity: 0, 
        stagger: 0.1 
      }, "-=0.5");

  }, { scope: container });

  const handleLogin = () => {
    gsap.to(container.current, { opacity: 0, duration: 0.4, onComplete: () => {
      router.push('/verify'); 
    }});
  };

  return (
    <main ref={container} className="min-h-screen flex items-center justify-center bg-white p-6 lg:p-0">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] items-center gap-12 lg:gap-20">
        
        {/* Left Side: Illustration */}
        <div className="animate-side hidden lg:flex flex-1 justify-center items-center">
          <div className="relative w-full aspect-square max-w-[550px]">
            <Image 
              src="/images/signup-illustration.png" 
              alt="Login Illustration"
              fill
              priority 
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-[450px] flex flex-col items-center lg:items-start">
          
          <div className="animate-up mb-10 lg:hidden w-48 h-48 bg-gray-50 rounded-[40px] flex items-center justify-center border border-gray-100 shadow-sm text-xl font-bold text-gray-800">
            Your Logo
          </div>

          <h1 className="animate-up text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Login</h1>
          
          <div className="animate-up w-full space-y-6 mt-8">
           <div className="space-y-2 w-full">
  <label className="text-sm font-semibold text-gray-700 ml-1">Mobile /Email</label>
 <Input
  type="text"
  placeholder="login with Mobile or Email"
  variant="bordered"
  classNames={{
    inputWrapper: [
      "bg-white",
      "border-1",
      "border-gray-200",
      "shadow-none",
      "h-14",
      "rounded-xl",
      "group-data-[focus=true]:border-[#46C2DE]",
    ].join(" "),
    input: [
      "bg-transparent",
      "border-none",      // Kills the inner black box
      "outline-none",     // Ensures no ring appears
      "focus:ring-0",     // Tailwind fix for extra rings
      "placeholder:text-gray-300",
      "text-base",
        "text-center",
        "py-4",
    ].join(" "),
  }}
/>
</div>

          {/* Replace your current Checkbox block with this exact code */}
<div className="animate-up flex items-center justify-between w-full px-1">
 <div className="items-center flex"> 
 <Checkbox 
  color="primary" 
  size="sm" // Keeps the actual box small
  classNames={{ 
    // 'base' controls the overall container layout
    base: "flex items-center m-0 p-0 gap-1", 
    // 'wrapper' is the blue box itself
    wrapper: [
      "w-4 h-4",      // Explicitly sets a small size for the blue box
      "m-0", 
      "after:content-none before:content-none"
    ].join(" "), 
    // Hides the ghost arrow without breaking layout
    input : "sr-only", 
    // Styles the text
    label: "text-gray-400 font-medium text-xs leading-none select-none" 
  }}
>
  
</Checkbox><span className="ml-1 text-xs font-medium">Remember Me</span></div>
  <Link href="#" className="text-[#FF5C5C] text-xs font-medium hover:underline">
    Forgot Password?
  </Link>
</div>
            <Button 
              onPress={handleLogin}
              className="animate-up w-full bg-[#46C2DE] text-white font-bold h-14 text-lg shadow-lg shadow-cyan-100/50"
              radius="lg"
            >
              Login
            </Button>

            <div className="animate-up relative flex py-3 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-300 text-xs font-medium">Or login With</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Google Button Styled like the Input for consistency */}
        <div className="flex justify-center items-center w-full"> 
  <Button
    variant="flat"
    // Added 'justify-center' and 'gap-2' to ensure perfect horizontal centering
    className="animate-up w-full border-1 border-gray-200 font-semibold text-gray-600 h-14 bg-white rounded-xl hover:bg-gray-50 transition-colors flex justify-center items-center gap-2"
    startContent={
     <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
    }
  >
    Continue with Google
  </Button>
</div>

            <div className="animate-up text-center pt-4 text-xs">
              <span className="text-gray-400">Don&apos;t have an account ? </span>
              <Link href="/signup" className="text-[#46C2DE] font-bold hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}