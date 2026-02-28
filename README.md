# 📚 Book Listing Web Application

A responsive Book Listing Web Application built using Next.js 13 (App Router), React hooks, JavaScript, and Tailwind CSS.

The application allows users to browse books, search and filter them, and manage a shopping cart with quantity control.

## 🛠️ Technologies Used

- Next.js 13+ (App Router)

- React (Hooks & Context API)

- JavaScript (ES6+)

- Tailwind CSS

## 📌 Features
### 📖 Book Listing

- Displays books from static JSON data.

- Each book card includes:

  - Book Image

  - Title

  - Author

  - Price

  - Rating

### 🔍 Search Functionality

- Filter books by title or author

- Real-time filtering

### 🗂️ Category Filter

- Dropdown to filter books by category

- Combined filtering with search

### 📄 Pagination

- Minimum 4 books per page

- Dynamic page navigation

- Handles edge cases when filtering reduces items

### 🛒 Add to Cart (Context API)

- Add books to cart

- Increase quantity

- Decrease quantity

- Auto-remove item when quantity becomes 0

- Navbar displays total cart items dynamically

### ⚡ Performance Optimization

- useMemo used for optimized filtering logic

- Clean state management using React hooks

### 📱 Responsive Design

- Mobile-first layout

- Responsive grid using Tailwind

- Clean and modern UI

## 📂 Project Structure
```
book-store/
│
├── app/
│   ├── layout.js          # Root layout (CartProvider wrapped)
│   ├── page.js            # Main book listing page
│
├── components/
│   ├── Navbar.js          # Navbar with cart count
│   ├── BookCard.js        # Reusable book card component
│
├── context/
│   ├── CartContext.js     # Context API for cart management
│
├── data/
│   ├── books.js           # Static book data
│
├── public/books
│
└── README.md
```
## 🧠 Technical Implementation Details
### 🔹 Next.js App Router

- Uses app/ directory structure

- Proper separation of Server & Client Components

- use client directive where required

### 🔹 React Hooks Used

- useState → State management

- useEffect → Component lifecycle handling

- useContext → Global cart state

- useMemo → Optimized filtering

### 🔹 Context API Logic

- Centralized cart state

- Clean update logic

- Immutable state updates

- Quantity management handled efficiently

### 🔹 Clean JavaScript Logic

- No redundant re-renders

- Proper array methods (map, filter, reduce)

- Edge case handling (e.g., quantity = 0 removal)

##  ⚙️ Installation & Setup
1️⃣ Clone Repository
```
git clone 
cd book-store
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Run Development Server
```
npm run dev
```
Open in browser:
```
http://localhost:3000
```
## 🚀 Deployment

Deployed using Vercel.

Steps:

- Pushed project to GitHub

- Imported repository in Vercel

- Deployed

## ⏱️ Time Taken

Approximately 22–25 hours to complete including:

- Development

- Testing

- UI polishing

- Deployment

## 👨‍💻 Author

Dharmendra Kumar
