"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-orange-500 text-white shadow-md">
      <Link href="/" className="text-2xl font-bold">
        📚 Book Exchange
      </Link>
    </nav>
  );
}
