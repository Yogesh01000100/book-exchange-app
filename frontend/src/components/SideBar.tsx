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
    <aside className="hidden md:flex w-60 bg-orange-100 p-6 text-orange-900 flex-col gap-y-6 shadow-md">
      <nav className="flex flex-col gap-4 text-base font-medium">
        {role === "Owner" ? (
          <>
            <Link href="/dashboard/admin" className="hover:text-orange-600">
              📋 My Book Listings
            </Link>
            <Link href="/dashboard/admin/add" className="hover:text-orange-600">
              ➕ Add New Listing
            </Link>
            <Link
              href="/dashboard/user/profile"
              className="hover:text-orange-600"
            >
              👤 My Profile
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard/user" className="hover:text-orange-600">
              🔍 Browse Listings
            </Link>
            <Link
              href="/dashboard/user/profile"
              className="hover:text-orange-600"
            >
              👤 My Profile
            </Link>
          </>
        )}
      </nav>

      {role === "Seeker" && (
        <div className="w-full bg-orange-200 border border-orange-300 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-orange-700">Coupon Offer</h3>
            <span className="text-xs bg-white text-orange-700 border border-black border-dashed font-medium px-2 py-1 rounded">
              NEW10
            </span>
          </div>

          <p className="text-xs text-gray-700 mb-3 leading-snug">
            Use this coupon to get <strong>10% off</strong> on your first
            exchange!
          </p>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="w-full text-orange-700 bg-orange-300 p-2 rounded-md font-semibold hover:text-orange-600 text-sm"
      >
        Logout
      </button>
    </aside>
  );
}
