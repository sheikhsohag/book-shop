import { books } from "@/app/Constant/TotalBook";
import React from "react";

interface BookDetailsProps {
  id: number;
}

function BookDetails({ id }: BookDetailsProps) {
  // Convert id to number (params are usually strings in Next.js)
  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <div className="p-4 text-red-500">❌ Book not found</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{book.name}</h1>
      <p className="text-gray-600 mt-2">👨‍💻 Author: {book.author}</p>
      <p className="text-gray-700 mt-1">📚 Category: {book.category}</p>
      <p className="text-green-600 font-semibold mt-2">
        💲 Price: ${book.price.toFixed(2)}
      </p>
    </div>
  );
}

export default BookDetails;
