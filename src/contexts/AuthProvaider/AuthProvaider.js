import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirbase";
export const AuthContext = createContext(null);
const AuthProvaider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
