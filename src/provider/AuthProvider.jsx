import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { AuthContext } from "./../contexts/AuthContext";
import useAxios from "./../hooks/useAxios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const api = useAxios();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = async (email, password, displayName, photoURL) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName,
        photoURL,
      });

      setUser({
        ...result.user,
        displayName,
        photoURL,
      });
      const x = await api.post("/check", { email: result.user.email });
      console.log(x);
      toast.success("🎉 Your account has been successfully created!");
      return result;
    } catch (error) {
      switch (error.code) {
        case "auth/user-disabled":
          toast.error(
            "Your account has been disabled. Please contact support."
          );
          break;
        case "auth/popup-closed-by-user":
          toast.error("Sign-in cancelled. Please try again.");
          break;
        case "auth/network-request-failed":
          toast.error("Network error. Check your connection and try again.");
          break;
        case "auth/email-already-in-use":
          toast.error(
            "This email is already registered. Please log in or use a different email."
          );
          break;
        default:
          toast.error(error.message);
          break;
      }
      return false;
    }
  };

  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await api.post("/check", { email: result.user.email });
      setUser(user);
      return result;
    } catch (error) {
      switch (error.code) {
        case "auth/user-disabled":
          toast.error(
            "Your account has been disabled. Please contact support."
          );
          break;
        case "auth/popup-closed-by-user":
          toast.error("Sign-in cancelled. Please try again.");
          break;
        case "auth/network-request-failed":
          toast.error("Network error. Check your connection and try again.");
          break;
        default:
          toast.error("An unexpected error occurred. Please try again later.");
          break;
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    setUser,
    loading,
    handleSignout,
    handleRegister,
    handleSignin,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
