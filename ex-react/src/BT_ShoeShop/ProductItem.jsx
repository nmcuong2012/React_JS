import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";

export default function ProductItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <img className="card-img" src={product.image} alt="product" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark" onClick={openModal}>
          View Detail
        </button>
      </div>
      {isModalOpen && <Modal product={product} closeModal={closeModal} />}
    </div>
  );
}
