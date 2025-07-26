
# 📚 Minimal Library Management System

A clean and responsive client-side Library Management System built with **React**, **TypeScript**, **Redux Toolkit**, and **RTK Query**. It allows users to manage books and borrowing operations—completely public and without authentication.

---
### live link https://minimal-library-management-system-tawny.vercel.app

## 🚀 Features

### ✅ Public Routes
- All pages are accessible without login/authentication.

### 📖 Book Management
- View all books in a table.
- Add, edit, delete books.
- Borrow books with quantity and due date form.
- Conditional logic for availability based on copies.

### 📦 Borrow System
- Borrow a book with validations.
- Book becomes unavailable when no copies left.
- Redirect to a borrow summary page after successful borrow.

### 📊 Borrow Summary
- Aggregated list of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.

### 📝 Book Reviews
- Add and view book reviews.

---

## 🧱 Folder Structure

```

src/
├── assets/               # Static assets
├── components/           # Reusable components
├── Layout/               # Navbar, Footer, etc.
├── lib/                  # Utility libraries
├── pages/                # All route pages
│   ├── AddBooks.tsx
│   ├── AllBooks.tsx
│   ├── BorrowSummary.tsx
│   └── Home.tsx
├── provider/             # Provider wrappers (if any)
├── redux/                # Redux Toolkit setup
│   ├── api/
│   │   └── baseApi.ts    # RTK Query endpoints
│   └── hooks.ts          # Typed Redux hooks
├── Routes/               # React Router configuration
├── main.tsx              # Entry point
└── types.ts              # Type definitions

````

---

## 🔌 API Integration (RTK Query)

| Functionality         | Method | Endpoint             | RTK Query Hook                     |
|----------------------|--------|----------------------|------------------------------------|
| Get all books        | GET    | `/books`             | `useGetBooksQuery()`              |
| Add a book           | POST   | `/books`             | `useAddBookMutation()`            |
| Delete a book        | DELETE | `/books/:id`         | `useDeleteBookMutation()`         |
| Get single book      | GET    | `/books/:id`         | `useGetSingleBookQuery()`         |
| Update book          | PATCH  | `/books/:id`         | `useUpdateBookMutation()`         |
| Borrow a book        | POST   | `/borrow`            | `useBorrowBookMutation()`         |
| Get borrow summary   | GET    | `/borrow`            | `useGetBorrowSummaryQuery()`      |
| Get recent books     | GET    | `/recent-books`      | `useGetRecentBookQuery()`         |
| Add book review      | POST   | `/reviews`           | `useAddReviewMutation()`          |
| Get all reviews      | GET    | `/reviews`           | `useGetReviewsQuery()`            |

> 🔗 **Base URL:** `https://library-management-api-topaz.vercel.app/api`

---

## 💻 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/nayeem-miah/Minimal-Library-Management-client.git

# 2. Navigate to the project
cd library-management

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
````

---

## 🎨 UI/UX

* Clean and minimal layout using Tailwind CSS (or plain CSS).
* Easy-to-use navigation and intuitive forms.
* Fully responsive for mobile, tablet, and desktop.

---

## 📌 Pages Overview

| Route             | Description                     |
| ----------------- | ------------------------------- |
| `/books`          | List of all books with actions  |
| `/create-book`    | Add a new book                  |
| `/books/:id`      | View single book details        |
| `/edit-book/:id`  | Edit a book                     |
| `/borrow/:bookId` | Borrow form for a specific book |
| `/borrow-summary` | Summary of all borrowed books   |

---

## 🧪 Future Enhancements

* Authentication & user roles
* Filter books by category, author, or rating
* Pagination and sorting
* Payment integration for premium members

---
