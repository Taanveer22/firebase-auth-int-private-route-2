import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <p className="text-9xl font-bold text-red-500 text-center">loading....</p>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to="/login"></Navigate>
    </>
  );
};

export default Private;
