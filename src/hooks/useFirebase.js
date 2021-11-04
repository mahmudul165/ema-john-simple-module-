import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setuser] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //sign out
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };
  //special observer whether user state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);

  // log out
  const logOut = () => {
    signOut(auth).then(() => {
      setuser({});
    });
    //special observer whether user state change or not
    // useEffect(() => {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       setuser(user);
    //     }
    //   });
    // }, []);
  };
  return { user, googleSignin, logOut };
};

export default useFirebase;
