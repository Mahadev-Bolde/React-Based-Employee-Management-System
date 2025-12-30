import React, { createContext, useEffect, useState } from "react";
import { gettLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  // localStorage.clear();
  useEffect(() => {
    setLocalStorage();
    const { employees } = gettLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
