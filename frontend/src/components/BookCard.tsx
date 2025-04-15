"use client";

import Image from "next/image";

export interface Book {
  _id: number;
  title: string;
  author: string;
  genre?: string;
  location: string;
  contact: string;
  status: string;
  imageUrl?: string;
}

interface BookCardProps {
  book: Book;
  role: "Owner" | "Seeker";
  onDelete?: (_id: number) => void;
  onStatusToggle?: (_id: number) => void;
}

export default function BookCard({
  book,
  role,
  onDelete,
  onStatusToggle,
}: BookCardProps) {
  return (
    <div className="bg-white border border-orange-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 mb-6 w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl font-bold text-orange-600">{book.title}</h3>
          <p className="text-sm text-gray-500">by {book.author}</p>

          {book.genre && (
            <p>
              <span className="font-semibold text-gray-800">Genre:</span>{" "}
              {book.genre}
            </p>
          )}
          <p>
            <span className="font-semibold text-gray-800">Contact:</span>{" "}
            {book.contact}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Location:</span>{" "}
            {book.location}
          </p>
          {role === "Owner" && (
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onStatusToggle?.(book._id)}
                className="bg-orange-400 text-white px-4 py-2 text-sm rounded-lg hover:bg-orange-500 transition"
              >
                Mark as {book.status === "Available" ? "Rented" : "Available"}
              </button>
              <button
                onClick={() => onDelete?.(book._id)}
                className="bg-red-200 text-red-700 px-4 py-2 text-sm rounded-lg hover:bg-red-300 transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="w-full sm:w-48 flex flex-col items-end gap-2">
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              book.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {book.status}
          </span>

          {book.imageUrl ? (
            <Image
              src={book.imageUrl}
              width={100}
              height={100}
              alt={`${book.title} cover`}
              className="w-full h-48 object-cover rounded-lg border border-orange-100"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-orange-50 text-orange-300 text-sm rounded-lg border border-dashed border-orange-300">
              No Image Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
