import React, { createContext ,useContext,useState,useEffect} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Firebase";
const inforUser = createContext();
const UserContext = ({ children }) => {
  const [user, setuser] = useState(null);
  const googleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currenUser) => {
      setuser(currenUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  console.log(user); // thông tin người dùng
  return (
    <inforUser.Provider value={{ googleSign, user, logOut }}>
      {children}
    </inforUser.Provider>
  );
};

export default UserContext;
export {inforUser}
