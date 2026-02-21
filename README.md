# 🏥 Healthcare Dashboard & Auth System

A high-fidelity, pixel-perfect medical application built with **Next.js 15**, **HeroUI**, and **GSAP**. This project features a seamless responsive architecture, transitioning from a sophisticated Desktop dashboard to a thumb-friendly Mobile interface.

---

## 📂 Project Architecture

```text
my-project/
├── app/
│   ├── home/
│   │   └── page.tsx          # Doctor Listing & Dashboard logic
│   ├── verify/
│   │   └── page.tsx          # Advanced OTP Verification UI
│   ├── layout.tsx            # Global Providers (HeroUI, GSAP)
│   └── globals.css           # Tailwind & UI Overrides
├── lib/
│   └── gsap.ts               # GSAP Plugin & Ease configurations
├── public/
│   └── images/               # Optimized Avatars & Doctor assets
├── tailwind.config.ts        # Design Tokens & HeroUI Integration
└── package.json              # Project Metadata


#📦 Dependencies Installed
To achieve the functionality and styling seen in the project, the following libraries were used:

Core Framework & UI
Next.js 15: React framework for building the application.

@heroui/react: Used for core UI components like Badge, Input, Card, Avatar, and Button.

framer-motion: Required for HeroUI's smooth component transitions.

Animations
gsap: The GreenSock Animation Platform used for staggered entry effects on page load.

@gsap/react: Official React wrapper for GSAP to handle safe animation cleanup via useGSAP.

Icons & Assets
lucide-react: Lightweight icon library for navigation and UI indicators.

🛠️ Installation & Setup
If you are setting this up for the first time, run these commands in your terminal:

Bash
# 1. Install HeroUI and motion dependencies
npm install @heroui/react framer-motion

# 2. Install Animation libraries
npm install gsap @gsap/react

# 3. Install Icon library
npm install lucide-react
Development
Bash
npm run dev
