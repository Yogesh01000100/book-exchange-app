"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

interface SidebarProps {
  role: "Owner" | "Seeker";
}

export default function Sidebar({ role }: SidebarProps) {
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <aside className="w-60 h-screen bg-orange-100 p-6 text-orange-900 flex flex-col shadow-md">
      <div>
        <nav className="flex flex-col gap-4 text-base font-medium">
          {role === "Owner" ? (
            <>
              <Link href="/dashboard/admin" className="hover:text-orange-600">
                📋 My Book Listings
              </Link>
              <Link
                href="/dashboard/admin/add"
                className="hover:text-orange-600"
              >
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

      <button
        onClick={handleLogout}
        className="text-orange-700 bg-orange-300 p-2 rounded-md mt-5 font-semibold hover:text-orange-600 text-sm"
      >
        Logout
      </button>
    </aside>
  );
}
