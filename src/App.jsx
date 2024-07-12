import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/detail/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/product/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/Product",
      element: <Product />,
    },
    {
      path: "/Detail/:productId",
      element: <Detail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
