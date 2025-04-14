"use client";

interface ProfileCardProps {
  name: string;
  email: string;
  mobile: string;
  role: "Owner" | "Seeker";
}

export default function ProfileCard({
  name,
  email,
  mobile,
  role,
}: ProfileCardProps) {
  return (
    <div className="max-w-md mx-auto bg-white border border-orange-300 rounded p-6 shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">👤 My Profile</h2>
      <div className="space-y-2 text-gray-800">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Mobile:</strong> {mobile}
        </p>
        <p>
          <strong>Role:</strong> {role}
        </p>
      </div>
    </div>
  );
}
