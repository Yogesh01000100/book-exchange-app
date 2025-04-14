"use client";

import Link from "next/link";

interface SidebarProps {
  role: "Owner" | "Seeker";
}

export default function Sidebar({ role }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-orange-100 p-6 text-orange-900 flex flex-col justify-between shadow-md">
      <div>
        <nav className="flex flex-col gap-4 text-base font-medium">
          {role === "Owner" ? (
            <>
              <Link href="/dashboard/admin" className="hover:text-orange-600">
                📋 My Book Listings
              </Link>
              <Link href="/dashboard/admin" className="hover:text-orange-600">
                ➕ Add New Listing
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard/user" className="hover:text-orange-600">
                🔍 Browse Listings
              </Link>
              <Link href="/profile" className="hover:text-orange-600">
                👤 My Profile
              </Link>
            </>
          )}
        </nav>
      </div>

      <div className="pt-6">
        <Link
          href="/"
          className="text-red-600 font-semibold hover:underline text-sm"
        >
          ⬅ Logout
        </Link>
      </div>
    </aside>
  );
}
