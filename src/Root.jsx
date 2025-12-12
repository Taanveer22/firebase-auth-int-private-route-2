import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
