"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { API_BASE } from "@/lib/api";

interface Book {
  id: number;
  title: string;
  author: string;
  genre?: string;
  location: string;
  contact: string;
  status: string;
}

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
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${API_BASE}/api/books/${id}`, {
        method: "DELETE",
      });
      fetchBooks();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const handleToggleStatus = async (id: number) => {
    try {
      await fetch(`${API_BASE}/api/books/${id}/status`, {
        method: "PUT",
      });
      fetchBooks();
    } catch (err) {
      console.error("Failed to update status", err);
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
      <input
        type="text"
        placeholder="Search by title or location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-6 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {filteredBooks.length === 0 ? (
        <p className="text-orange-700 text-center">No books found.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id}>
            <BookCard
              book={book}
              role={role}
              onDelete={role === "Owner" ? handleDelete : undefined}
              onStatusToggle={role === "Owner" ? handleToggleStatus : undefined}
            />
          </div>
        ))
      )}
    </div>
  );
}
