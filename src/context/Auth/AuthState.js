import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const [auth, setAuth] = useState(true);
  return <AuthContext.Provider value={{ auth, setAuth }}>{props.children}</AuthContext.Provider>;
};

export default AuthState;
