import React from "react";

import data from "./data.json";
import ProductList from "./ProductList";

export default function ShoeStore() {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Shoe Shop</h1>

      <ProductList products={data} />
    </div>
  );
}
