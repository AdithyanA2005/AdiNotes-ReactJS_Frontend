import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAxios from "../../axios";
import AuthContext from "./AuthContext";
import LoaderContext from "../Loader/LoaderContext";

const AuthState = (props) => {
  const [auth, setAuth] = useState(null);
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [signUpModalActive, setSignUpModalActive] = useState(false);
  const [logoutModalActive, setLogoutModalActive] = useState(false);
  const { setProgress } = useContext(LoaderContext);
  const axios = getAxios();

  useEffect(() => {
    // Sets the authToken in localstorage to the recently logged in users authToken
    if (auth) localStorage.authToken = auth.authToken;
  }, [auth]);

  const logoutFromAccount = () => {
    setProgress(10);
    localStorage.removeItem("authToken");
    setLogoutModalActive(false);
    setAuth(null);
    toast.info("Logout Success", {
      autoClose: 1500,
    });
    setProgress(100);
  };

  const loginToAccount = (account, password) => {
    setProgress(20);
    axios
      .post("/auth/login", {
        account: account,
        password: password,
      })
      .then((res) => {
        setProgress(70);
        setLoginModalActive(false);
        setAuth({ authToken: res.data.authToken });
        toast.success("Login Success", {
          position: "top-center",
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-center",
          hideProgressBar: false,
          autoClose: 2000,
        });
      })
      .finally(() => {
        setProgress(100);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loginToAccount,
        loginModalActive,
        logoutFromAccount,
        setLoginModalActive,
        logoutModalActive,
        setLogoutModalActive,
        signUpModalActive,
        setSignUpModalActive,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
