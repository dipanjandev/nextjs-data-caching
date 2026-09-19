import React from "react";
import ProductCard from "../components/ProductCard";

const getData = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  return res.json();
};

const ProductsPage = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-5">
        Here is Products : {data.length}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
