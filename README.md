# 📚 Peer-to-Peer Book Exchange Portal

A full-stack book exchange web application connecting two user types:

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
- Login/Register handled via localStorage (auth)
- Redirect to `/dashboard/admin` or `/dashboard/user` based on role

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
- Role-based navigation
- Toast notifications using `sonner`
- Loading states

---

## 🔗 API Endpoints

```http
POST    /api/auth/register
POST    /api/auth/login
GET     /api/books
POST    /api/books
PUT     /api/books/:id/status
PUT     /api/:id/image
DELETE  /api/books/:id
```

Base Backend URL (render) : https://book-exchange-app-uo59.onrender.com


### 🛠️ How to Run the Project
#### 📦 Backend (Express + MongoDB)
### 1. Navigate to backend folder
```
cd backend
```

### 2. Install dependencies
```
npm install
```

### 3. Create .env file with the following:
```
PORT=
MONGO_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 4. Start server
```
npm run dev
```

### 5. 🌐 Frontend (Next.js)

### 1. Navigate to frontend folder
```
cd frontend
```

### 2. Install dependencies
```
npm install
```

### 3. Start dev server
```
npm run dev
```
