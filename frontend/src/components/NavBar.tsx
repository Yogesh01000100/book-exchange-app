"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function NavBar() {
  const { user } = useAuth();

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-orange-400 text-white shadow-md">
      <Link href="/" className="text-xl font-bold ">
        📚 Book Exchange
      </Link>

      {user && (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 font-bold flex items-center justify-center text-lg shadow-sm">
            {getInitial(user.name)}
          </div>
          <div className="text-sm shadow-sm leading-tight bg-orange-100 rounded-lg text-orange-500 p-1 px-2">
            <p className="font-semibold text-md">{user.name}</p>
            <p className="text-xs">{user.role}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
