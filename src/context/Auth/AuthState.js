import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAxios from "../../axios";
import AuthFormContext from "../AuthForm/AuthFormContext";
import LoaderContext from "../Loader/LoaderContext";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const axios = getAxios();
  const [auth, setAuth] = useState(null);
  const [signUpModalActive, setSignUpModalActive] = useState(false);
  const [logoutModalActive, setLogoutModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);
  const { setUsernameErr, setNameErr, setEmailErr, setPasswordErr } = useContext(AuthFormContext);
  const { setProgress } = useContext(LoaderContext);

  useEffect(() => {
    // Looks for a logged in user in localStorage
    if (localStorage.authToken) setAuth({ authToken: localStorage.authToken });
  }, []);

  useEffect(() => {
    // Sets the authToken in localstorage on user login
    if (auth) localStorage.authToken = auth.authToken;
  }, [auth]);

  useEffect(() => {
    if (!signUpModalActive) {
      setUsernameErr();
      setNameErr();
      setEmailErr();
      setPasswordErr();
    }
  // eslint-disable-next-line
  }, [signUpModalActive]);

  const handleNewAccountApiErrors = (form, errors) => {
    console.log(errors);
    errors.forEach((error, index) => {
      if (error.param === "username") setUsernameErr(error.msg);
      if (error.param === "name") setNameErr(error.msg);
      if (error.param === "email") setEmailErr(error.msg);
      if (error.param === "password") setPasswordErr(error.msg);
      if (index === 0) form[error.param].focus();
    });
  };

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

  const createNewAccount = ({ form, name, username, email, password }) => {
    setProgress(20);
    axios
      .post("/auth/signup", {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        setProgress(70);
        setAuth({ authToken: res.data.authToken });
        setSignUpModalActive(false);
        toast.success("User Successfully Created", {
          position: "top-center",
          autoClose: 1000,
        });
      })
      .catch((err) => {
        setProgress(70);
        handleNewAccountApiErrors(form, err.response.data.errors);
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
        createNewAccount,
        logoutFromAccount,
        loginModalActive,
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
