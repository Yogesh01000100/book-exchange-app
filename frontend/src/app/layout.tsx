import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Book Exchange App",
  description: "Peer-to-Peer Book Exchange Portal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-900 min-h-screen font-sans">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
