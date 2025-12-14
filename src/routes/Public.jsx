// =========== version 7 setup ============
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "../Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import Private from "./Private";

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route
        path="orders"
        element={
          <Private>
            <Orders />
          </Private>
        }
      />

      <Route
        path="profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />
    </Route>
  )
);

export default publicRouter;





// ===========version 6 setup ===================
// import { createBrowserRouter } from "react-router-dom";
// import Root from "../Root";
// import Home from "../components/Home";
// import Login from "../components/Login";
// import Register from "../components/Register";
// import Private from "./Private";
// import Orders from "../components/Orders";
// import Profile from "../components/Profile";

// const Public = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/register",
//         element: <Register></Register>,
//       },
//       {
//         path: "/orders",
//         element: (
//           <Private>
//             <Orders></Orders>
//           </Private>
//         ),
//       },
//       {
//         path: "/profile",
//         element: (
//           <Private>
//             <Profile></Profile>
//           </Private>
//         ),
//       },
//     ],
//   },
// ]);

// export default Public;
