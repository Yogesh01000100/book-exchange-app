"use client";

import { useAuth } from "@/context/AuthContext";
import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <ProfileCard
        name={user.name}
        email={user.email}
        mobile={user.mobile}
        role={user.role}
      />
    </div>
  );
}
