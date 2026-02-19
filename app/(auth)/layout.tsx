import React from "react";

/**
 * AuthLayout serves as a wrapper for all pages inside the (auth) group
 * (e.g., login, signup, forgot-password).
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Main container ensuring the background is white and content is centered
    <section className="min-h-screen w-full bg-white flex flex-col justify-center items-center">
      
      {/* The 'main' tag acts as a flexible container that centers 
          the login or signup card both vertically and horizontally.
      */}
      <main className="w-full flex-1 flex justify-center items-center px-4">
        {children}
      </main>

      {/* Optional footer for branding or copyright information */}
      <footer className="py-6 text-zinc-400 text-xs">
        © 2026 Your Brand Name. All rights reserved.
      </footer>
    </section>
  );
}