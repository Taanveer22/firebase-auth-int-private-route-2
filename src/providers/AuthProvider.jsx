import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const name = "react";

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    name,
    createUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export { AuthContext };
export default AuthProvider;
