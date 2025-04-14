"use client";

import Sidebar from "@/components/SideBar";
import BookList from "@/components/BookList";

export default function SeekerDashboard() {
  return (
    <div className="flex min-h-screen bg-orange-50">
      {/* Sidebar */}
      <Sidebar role="Seeker" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-orange-700 mb-6">
          🔍 Browse Available Books
        </h1>
        <BookList role="Seeker" />
      </main>
    </div>
  );
}
