import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { signInWithGoogle, user } = useContext(AuthContext);

  const handleGoogleSingIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-medium text-green-500">
        Welcome to this website home
      </h1>
      <button onClick={handleGoogleSingIn} className="btn btn-accent">
        Sign in with google
      </button>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <img src={user?.photoURL} className="w-30"></img>
    </div>
  );
};

export default Home;
