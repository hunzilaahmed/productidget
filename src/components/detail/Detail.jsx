import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white text-gray-800 w-full md:w-2/3 lg:w-1/2 shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-auto mb-4 rounded-lg"
        />
        <p className=" mb-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default Detail;
