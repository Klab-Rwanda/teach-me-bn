import { createContext, useState } from "react";
import { useJwt } from "react-jwt";

export const AuthContext = createContext({});

const AppProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  const [isLoged, setIsLoged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
