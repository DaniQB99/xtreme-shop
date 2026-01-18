import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../supabase/supabase.config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (session) => {
      if (session == null) {
        setUser(null);
      } else {
        setUser(session?.user);
        console.log("session", session);
      }
    });
    return () => {
      data.subscription;
    };
  }, []);

  // Retorna el proveedor de autenticación
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
