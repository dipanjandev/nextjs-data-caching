import React from "react";
import BooksCard from "../components/BooksCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 20 },
  });
  return res.json();
};

const BooksPage = async ({ book }) => {
  const books = await getBooks();

  return (
    <div className="container mx-auto">
      <h1 className="text-center py-8 font-bold text-3xl">
        Books Length is : {books.length}
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
