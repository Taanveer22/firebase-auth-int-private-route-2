import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const name = "react";
  const authInfo = {
    name,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export { AuthContext };
export default AuthProvider;
