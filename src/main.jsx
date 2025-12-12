import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Public from "./routes/Public";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Public}></RouterProvider>
  </StrictMode>
);
