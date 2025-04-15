"use client";

import { useEffect, useState } from "react";
import BookCard, { Book } from "./BookCard";
import { API_BASE } from "@/lib/api";
import { toast } from "sonner";

interface BookListProps {
  role: "Owner" | "Seeker";
}

export default function BookList({ role }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/books`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to fetch books", err);
      toast.error("Failed to fetch books");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${API_BASE}/api/books/${id}`, {
        method: "DELETE",
      });
      toast.success("Book deleted successfully");
      fetchBooks();
    } catch (err) {
      console.error("Failed to delete", err);
      toast.error("Failed to delete book");
    }
  };

  const handleToggleStatus = async (id: number) => {
    try {
      await fetch(`${API_BASE}/api/books/${id}/status`, {
        method: "PUT",
      });
      toast.success("Book status updated");
      fetchBooks();
    } catch (err) {
      console.error("Failed to update status", err);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex justify-start mb-6">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xl p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-start">
        {filteredBooks.map((book) => (
          <div key={book._id} className="w-full md:w-[48%]">
            <BookCard
              book={book}
              role={role}
              onDelete={role === "Owner" ? handleDelete : undefined}
              onStatusToggle={role === "Owner" ? handleToggleStatus : undefined}
              onImageUploaded={fetchBooks}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
