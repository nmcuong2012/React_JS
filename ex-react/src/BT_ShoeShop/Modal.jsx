import React from "react";
import "./modal.css";

export default function Modal({ product, closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={product.image} alt="product" />
        <p>{product.description}</p>
        <p>Price: {product.price}$</p>
      </div>
    </div>
  );
}
