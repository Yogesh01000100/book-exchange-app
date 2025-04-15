"use client";

import BookForm from "@/components/BookForm";
import { useAuth } from "@/context/AuthContext";

export default function AddBookPage() {

  const { user } = useAuth();

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <BookForm ownerId={user.id} />
    </div>
  );
}
