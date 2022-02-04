import cookie from "js-cookie";
import { useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(null);
  const token = cookie.get("token");
  if (token) setAuth(token);

  const logout = () => cookie.remove("token");
  return {
    auth,
    setAuth,
    logout,
  };
};

export default useAuth;
