"use client";

import { useState, useMemo } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4; 

  const filteredBooks = useMemo(() => {
    return booksData.filter((book) => {
      const matchSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "All" || book.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Navbar />

      <div className="p-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search books..."
          className="border p-2 w-full mb-4"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          className="border p-2 mb-4 text-gray-500"
          onChange={(e) => setCategory(e.target.value)}
        > 
          <option value="All">All</option>
          <option value="Self Help">Self Help</option>
          <option value="Finance">Finance</option>
        </select>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className="px-3 py-1 border"
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}