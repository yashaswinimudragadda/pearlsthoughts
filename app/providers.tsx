"use client";

import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {/* Wrapping everything in a main tag with 'light' or 'dark' text 
         colors helps HeroUI components inherit the right base styles.
      */}
      <main className="light text-foreground bg-background">
        {children}
      </main>
    </HeroUIProvider>
  );
}