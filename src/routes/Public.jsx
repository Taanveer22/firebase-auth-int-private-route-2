import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Public = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Public;
