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
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observe current user : ", currentUser);
      setUser(currentUser);
      // after getting user
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const authData = {
    createUser,
    signInUser,
    user,
    loading,
    signOutUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export { AuthContext };
export default AuthProvider;
