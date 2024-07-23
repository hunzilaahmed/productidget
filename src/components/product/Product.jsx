import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, Setproducts] = useState([]);
  const [date, Setdate] = useState(null);
  const navigation = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => Setproducts(json));
    const date = new Date().toISOString().slice(0, 10);
    Setdate(date);
  }, []);
  const goToCart = (productId) => {
    console.log(productId);
    navigation(`/Detail/${productId}`).catch((error) =>
      console.error("Error:", error)
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="text-center text-white pt-6 ">
          <h1 className="text-4xl font-semibold">Products</h1>
        </div>

        <div className="flex flex-wrap justify-center mt-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 shadow-lg rounded-lg p-6 w-full md:w-80 lg:w-80 mx-4 mb-8"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain mr-4 rounded-lg"
              />

              <div className="text-center">
                <div className="col-span-2">
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                </div>

                <div >
                  <p className="text-lg  mb-4">${item.price}</p>
                  <button
                    onClick={() => goToCart(item.id)}
                    className="bg-blue-500 text-white py-2 px-4  rounded hover:bg-blue-700 mr-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Product;
