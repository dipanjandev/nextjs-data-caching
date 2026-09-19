import Link from "next/link";
import React from "react";

const BooksCard = ({ book }) => {
  const { id, title, description } = book;
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>

          <Link href={`/books/${id}`}>
            <button className="btn">View Book Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
