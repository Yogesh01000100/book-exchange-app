"use client";

interface Book {
  id: number;
  title: string;
  author: string;
  genre?: string;
  location: string;
  contact: string;
  status: string;
}

interface BookCardProps {
  book: Book;
  role: "Owner" | "Seeker";
  onDelete?: (id: number) => void;
  onStatusToggle?: (id: number) => void;
}

export default function BookCard({
  book,
  role,
  onDelete,
  onStatusToggle,
}: BookCardProps) {
  return (
    <div className="bg-white border border-orange-200 rounded p-4 shadow-md mb-4">
      <h3 className="text-xl font-semibold text-orange-700 mb-2">
        {book.title}
      </h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      {book.genre && (
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
      )}
      <p>
        <strong>Location:</strong> {book.location}
      </p>
      <p>
        <strong>Contact:</strong> {book.contact}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            book.status === "Available" ? "text-green-600" : "text-gray-500"
          }
        >
          {book.status}
        </span>
      </p>

      {role === "Owner" && (
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onStatusToggle?.(book.id)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Mark as {book.status === "Available" ? "Rented" : "Available"}
          </button>
          <button
            onClick={() => onDelete?.(book.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
