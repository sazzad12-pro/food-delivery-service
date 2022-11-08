import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // sign up google
  const googleProvider = new GoogleAuthProvider();
  const googleSingUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Createuser
  const singUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login email and password
  const logInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user profile name an photo
  const updateNamePhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // sing out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // forget password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // side effect start
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        googleSingUp,
        singUpUser,
        logInEmailPassword,
        updateNamePhoto,
        forgetPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UseContext;
