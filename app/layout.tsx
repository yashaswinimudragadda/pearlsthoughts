import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import your new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Modern Login/Signup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Keep it here to handle theme/attribute changes on html
    <html lang="en" suppressHydrationWarning>
      <body 
        className={inter.className} 
        // ADD THIS LINE to tell React to ignore attributes injected by extensions
        suppressHydrationWarning={true} 
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}