"use client";

import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const cartItem = cart.find((item) => item.id === book.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-full object-cover rounded-md"
      />

      <h2 className="mt-3 font-semibold text-lg text-gray-800 dark:text-white">
        {book.title}
      </h2>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        {book.author}
      </p>

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-blue-600">
          ₹{book.price}
        </span>
        <span>⭐ {book.rating}</span>
      </div>

      {!cartItem ? (
        <button
          onClick={() => addToCart(book)}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-3 flex justify-between items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-2">
          <button
            onClick={() => decreaseQty(book.id)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>

          <span className="font-semibold">
            {cartItem.quantity}
          </span>

          <button
            onClick={() => increaseQty(book.id)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}