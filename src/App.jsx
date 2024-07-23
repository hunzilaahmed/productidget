import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/detail/Detail";
import Product from "./components/product/Product";
import Login from "./components/login/Login";
import SignIn from "./components/Signin/Signin";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/detail/:productId",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
