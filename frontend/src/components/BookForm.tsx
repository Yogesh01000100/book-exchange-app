"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/lib/api";

export default function BookForm({ ownerId }: { ownerId: number }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    location: "",
    contact: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE}/api/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, ownerId }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Book listed successfully!");
      setTimeout(() => router.push("/dashboard/admin"), 1500);
    } else {
      setMessage(data.message || "Failed to list book");
    }
  };

  return (
    <div className="bg-white border border-orange-300 rounded p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">
        Add a New Book
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="location"
          placeholder="City/Location"
          value={form.location}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="contact"
          placeholder="Contact Email/Phone"
          value={form.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Add Book
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
