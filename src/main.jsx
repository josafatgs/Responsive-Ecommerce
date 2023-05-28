import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Styles
import './index.css'

//Routes
import App from "./routes/App.jsx";
import Page404 from "./routes/Page404.jsx";
import ProductDescription from "./components/ProductDescription.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Page404 />,
  },
  {
    path: "/Products",
    element: <App></App>,
  },
  {
    path: "/Products/ProductDescription:name:price:src",
    element: <ProductDescription></ProductDescription>,
  },
  {
    path: "/About",
    element: <App></App>,
  },
  {
    path: "/ShoppingBag",
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
