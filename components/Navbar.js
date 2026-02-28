"use client";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Book Store</h1>
      <div>Cart: {totalItems}</div>
    </div>
  );
}