"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/lib/api";
import { toast } from "sonner";

export default function BookForm({ ownerId }: { ownerId: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    location: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ownerId }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Book listed successfully!");
        setTimeout(() => router.push("/dashboard/admin"), 1200);
      } else {
        toast.error(data.message || "Failed to list book");
      }
    } catch (err) {
      console.error("Failed to list book", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-orange-300 rounded-xl p-6 max-w-lg mx-auto shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">
        📘 Add a New Book
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border border-orange-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
          className="border border-orange-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="genre"
          placeholder="Genre (optional)"
          value={form.genre}
          onChange={handleChange}
          className="border border-orange-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="location"
          placeholder="City/Location"
          value={form.location}
          onChange={handleChange}
          required
          className="border border-orange-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="contact"
          placeholder="Contact Email/Phone"
          value={form.contact}
          onChange={handleChange}
          required
          className="border border-orange-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className={`py-2 px-4 rounded text-white font-semibold transition ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}
