import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvaider/AuthProvaider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
