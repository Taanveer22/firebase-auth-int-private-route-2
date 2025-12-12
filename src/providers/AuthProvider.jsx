import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observe current user : ", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const authData = {
    createUser,
    signInUser,
    user,
    signOutUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export { AuthContext };
export default AuthProvider;
