// lib/gsap.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register plugins on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// These are the named exports the error is looking for
export { gsap, ScrollTrigger };