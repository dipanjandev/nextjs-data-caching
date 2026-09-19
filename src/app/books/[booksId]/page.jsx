import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books/");
  const books = await res.json();
  return books.map((book) => ({ booksId: book.id }));
};

const BooksId = async ({ params }) => {
  const { booksId } = await params;

  const res = await fetch(`http://localhost:5000/books/${booksId}`);
  const book = await res.json();

  return (
    <div>
      <h1>Book Information</h1>

      <div>
        <h1>{book.title}</h1>
        <h1>{book.description}</h1>
        <h1>{book.author}</h1>
        <h1>$ {book.price}</h1>
      </div>
    </div>
  );
};

export default BooksId;
