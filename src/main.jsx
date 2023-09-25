import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from "./Home";
import Donation from "./Donation";
import DonationDetails from "./DonationDetails";
import Statistics from "./Statistics";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/donation.json"), // warning: only load the data you need. do not load all the data
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: () => fetch("/donation.json"), // do not load all data. load only what you need
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-h-screen">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <Toaster />
  </div>
);
