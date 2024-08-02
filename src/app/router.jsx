import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import AppLayout from "./app-layout";
import ProductItemPage from "./product-item";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductItemPage />,
      },
    ],
  },
]);
