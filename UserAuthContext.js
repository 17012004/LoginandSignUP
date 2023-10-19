import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./FirebaseSDK"; // Import your Firebase configuration
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth,email, password);   
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  };

  // Other authentication functions like signUp, password reset, etc.

  return (
    <UserAuthContext.Provider
      value={{
        user,
        logIn,
        signOut,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
