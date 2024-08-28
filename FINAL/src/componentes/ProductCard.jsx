import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/productos")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card bg-white shadow-md rounded-lg p-4 text-center"
        >
          <img
            src={`/images/${product.id}.png`}
            alt={product.nombre}
            className="w-[100px] mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.nombre}</h2>
          <p className="text-gray-700 mb-4">{product.descripcion}</p>
          <p className="text-lg font-semibold mb-4">${product.precio}</p>
        </div>
      ))}
    </div>
  );
};

const handleRemove = (id) => {
  // Aquí puedes manejar la lógica para eliminar el producto
  console.log(`Producto con id ${id} eliminado`);
};

export default ProductCard;
