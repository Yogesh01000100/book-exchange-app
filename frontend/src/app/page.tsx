import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-orange-50 px-4">
      <div className="bg-white p-8 rounded shadow-lg border border-orange-200 text-center max-w-md">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          📚 Welcome to Book Exchange
        </h1>
        <p className="mb-6 text-gray-700">
          A platform to lend, rent, and exchange books easily.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="border border-orange-500 text-orange-600 px-4 py-2 rounded hover:bg-orange-100 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
