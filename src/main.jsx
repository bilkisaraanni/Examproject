import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import PageTesty from "./Pages/PageTesty.jsx";
import PageAwward from "./Pages/PageAwward.jsx";
import PageMemory from "./Pages/PageMemory.jsx";
import PageWorking from "./Pages/PageWorking.jsx";
import PageFrom from "./Pages/PageFrom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,       
        element: <App />,  
      },
      {
        path: "testy",
        element: <PageTesty />, 
      },

      {
        path: "awwards",
        element: <PageAwward />, 
      },

      {
        path: "memory",
        element: <PageMemory />, 
      },

      {
        path: "working",
        element: <PageWorking />, 
      },

      {
        path: "from",
        element: <PageFrom />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
