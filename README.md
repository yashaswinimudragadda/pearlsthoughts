# Modern Auth System: High-Fidelity UI 🚀

A premium Login and Signup experience built with the latest **Next.js 16** and **Tailwind CSS v4** stack. This project demonstrates advanced UI/UX principles, smooth motion design, and a robust project architecture.

---

## 🛠 Tech Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Compiler**: [Turbopack](https://turbo.build/pack) (Rust-based)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
- **UI Components**: [HeroUI](https://heroui.com/) (Accessible & Modern primitives)
- **Motion**: [GSAP](https://gsap.com/) with `@gsap/react` for optimized staggers.

---

## 📂 Project Architecture

The project follows the **Next.js App Router** pattern with **Route Grouping** to keep the codebase clean and scalable.



```text
my-app/
├── app/
│   ├── (auth)/                 # Route Group (doesn't affect URL)
│   │   ├── layout.tsx          # Shared Auth Layout (Auth providers/wrappers)
│   │   └── signup/             # Signup Route
│   │       └── page.tsx        # Responsive Signup UI (GSAP Animated)
│   ├── globals.css             # Tailwind v4 Entry & Theme Variables
│   ├── layout.tsx              # Root Layout (Hydration Patch applied)
│   └── providers.tsx           # HeroUI & GSAP Client Context
├── public/                     # Static assets (Brand assets/Icons)
├── postcss.config.mjs          # Tailwind v4 PostCSS Bridge
└── package.json                # Project Manifest
