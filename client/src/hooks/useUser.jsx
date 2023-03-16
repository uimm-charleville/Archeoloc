import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function useUser() {
  const { user, isLogged, login, logout } = useContext(UserContext);

  return { user, isLogged, login, logout };
}
