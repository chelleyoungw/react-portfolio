// Imports required imports from React.
import React from "react";
import ReactDOM from "react-dom/client";
// Imports required imports from 'react-router-dom' to set up application routing behavior.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports required imports from Bootstrap to apply CSS.
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

// Imports the App.jsx file which works with the router.
import App from "./App";

// Imports pages the router will use to conditionally show the appropriate views.
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

// Defines the accessible routes, and which components to respond to which URL.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Renders the RouterProvider component to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);