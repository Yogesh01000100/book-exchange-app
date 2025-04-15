"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function NavBar() {
  const { user } = useAuth();

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <nav className="bg-orange-400 text-white shadow-md px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      {/* Left: Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="text-2xl font-bold hover:opacity-90">
          📚 Book Exchange
        </Link>
      </div>

      {/* 👇 Mobile-only nav links (show only on screens < md) */}
      {user && (
        <div className="md:hidden flex flex-wrap items-center gap-3 text-sm mt-2">
          {user.role === "Owner" ? (
            <>
              <Link href="/dashboard/admin" className="hover:underline">
                📋 My Listings
              </Link>
              <Link href="/dashboard/admin/add" className="hover:underline">
                ➕ Add
              </Link>
              <Link href="/dashboard/user/profile" className="hover:underline">
                👤 Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard/user" className="hover:underline">
                🔍 Browse
              </Link>
              <Link href="/dashboard/user/profile" className="hover:underline">
                👤 Profile
              </Link>
            </>
          )}
        </div>
      )}

      {/* Avatar Info (all screen sizes) */}
      {user && (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 font-bold flex items-center justify-center text-lg shadow">
            {getInitial(user.name)}
          </div>
          <div className="text-sm bg-orange-100 text-orange-500 rounded px-2 py-1 shadow">
            <p className="font-semibold text-md">{user.name}</p>
            <p className="text-xs">{user.role}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
