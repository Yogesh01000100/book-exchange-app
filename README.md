# 📚 Peer-to-Peer Book Exchange Portal

A modern full-stack book exchange web application connecting two user types:

- **📘 Book Owners** – Can list and manage their books
- **📗 Book Seekers** – Can browse available books and contact owners

Built with **Next.js (App Router + TypeScript)** for the frontend and **Express.js** for the backend.

## 🔧 Tech Stack

| Layer        | Tech                                      |
|--------------|-------------------------------------------|
| Frontend     | Next.js (App Router, TypeScript)          |
| Styling      | Tailwind CSS                              |
| Backend      | Node.js, Express                          |
| Image Upload | Cloudinary (via URL)                      |
| Deployment   | Vercel (Frontend), Render (Backend)       |

---

## ✨ Features

### 👤 Authentication & Roles
- Role-based login for **Owner** and **Seeker**
- Login/Register handled via localStorage (mock auth)
- Redirect to `/dashboard/owner` or `/dashboard/seeker` based on role

### 📖 Book Listings
- Book Owners can:
  - Add listings with Title, Author, Genre, Location, Contact
  - Upload a cover image via URL (Cloudinary-supported)
  - Mark books as `Available` or `Rented`
  - Delete books
- Book Seekers can:
  - Browse all book listings

### 💻 UI & UX
- Modern UI built with Tailwind CSS
- Image preview and status badge
- Role-based Sidebar navigation
- Toast notifications using `sonner`
- Loading states and protected route redirects

---

## 🔗 API Endpoints

```http
POST    /api/auth/register
POST    /api/auth/login
GET     /api/books
POST    /api/books
PUT     /api/books/:id/status
DELETE  /api/books/:id
```

Base URL : https://book-exchange-app-uo59.onrender.com

