import React from "react";
import AuthProvider from "./provider";
import authCtx from "./context";

function useAuth() {
  return React.useContext(authCtx);
}

export { useAuth };

export default AuthProvider;
