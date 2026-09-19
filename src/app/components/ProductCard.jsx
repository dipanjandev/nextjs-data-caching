import React from "react";

const ProductCard = ({ product }) => {
  const { name, description } = product;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ProductCard;
