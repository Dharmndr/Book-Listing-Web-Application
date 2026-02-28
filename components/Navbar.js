"use client";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

 return (
  <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
      📚 Book Store
    </h1>

    <div className="relative text-gray-700 dark:text-gray-200 font-medium">
      🛒 Cart
      <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
        {totalItems}
      </span>
    </div>
  </nav>
);
}