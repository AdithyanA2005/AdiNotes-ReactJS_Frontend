import React, { useState } from "react";
import AuthFormContext from "./AuthFormContext";

const AuthFormState = (props) => {
  const [nameErr, setNameErr] = useState();
  const [usernameErr, setUsernameErr] = useState();
  const [passwordErr, setPasswordErr] = useState();
  const [rePasswordErr, setRePasswordErr] = useState();
  const [emailErr, setEmailErr] = useState();

  return (
    <AuthFormContext.Provider
      value={{
        nameErr,
        setNameErr,
        usernameErr,
        setUsernameErr,
        passwordErr,
        setPasswordErr,
        rePasswordErr,
        setRePasswordErr,
        emailErr,
        setEmailErr,
      }}
    >
      {props.children}
    </AuthFormContext.Provider>
  );
};

export default AuthFormState;
