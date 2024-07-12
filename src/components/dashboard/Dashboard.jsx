import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  navigation = useNavigate();
  const goToDetail = () => {
    navigation("/Product");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-7xl w-80  text-center font-serif text-white mb-8">
        Welcome To Dashboard
      </h1>
      <button
        onClick={goToDetail}
        className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 transition duration-150 ease-in-out"
      >
        Go To Products
      </button>
    </div>
  );
}
export default Dashboard;
