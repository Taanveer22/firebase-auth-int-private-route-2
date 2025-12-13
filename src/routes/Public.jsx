import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Private from "./Private";
import Orders from "../components/Orders";
import Profile from "../components/Profile";

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
      {
        path: "/orders",
        element: (
          <Private>
            <Orders></Orders>
          </Private>
        ),
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile></Profile>
          </Private>
        ),
      },
    ],
  },
]);

export default Public;
