"use client"; // ✅ make it a client component

import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="antialiased bg-[rgb(249_243_237)]
 w-screen max-w-full overflow-x-hidden overscroll-x-none">
        <SessionProvider>
          <div className="w-full max-w-full overflow-x-hidden">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
