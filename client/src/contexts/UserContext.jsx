import { createContext, useState, useEffect } from "react";
import { userData } from "../mocks/user";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = (user) => {
    setUser(user);
    setIsLogged(true);
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  useEffect(() => {
    login(userData);
  }, []);

  return (
    <UserContext.Provider value={{ user, isLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
