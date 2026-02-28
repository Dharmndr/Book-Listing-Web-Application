"use client";
import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return ( 
    <div className="border rounded-lg p-4 shadow-md">
      <img src={book.image} alt={book.title} className="h-40 mx-auto" />
      <h2 className="font-bold mt-2">{book.title}</h2>
      <p>{book.author}</p>
      <p>₹{book.price}</p>
      <p>⭐ {book.rating}</p> 
      <button
        onClick={() => addToCart(book)}
        className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}