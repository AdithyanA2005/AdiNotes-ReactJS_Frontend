import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/Auth/AuthContext";
import AuthFormContext from "../../context/AuthForm/AuthFormContext";
import AuthModalContainer from "../AuthModalContainer";
import Email from "./Email";
import NameUsername from "./NameUsername";
import Password from "./Password";
import SignUpInput from "./SignUpInput";

export default function LoginForm() {
  const { setSignUpModalActive } = useContext(AuthContext);
  const { nameErr, usernameErr, passwordErr, rePasswordErr, emailErr } =
    useContext(AuthFormContext);

  const fieldErrHandle = (inputElement, message = "Please complete the form to continue") => {
    inputElement.focus();
    toast.warning(message, {
      hideProgressBar: false,
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty Field Error
    if (!e.target.name.value) return fieldErrHandle(e.target.name);
    if (!e.target.username.value) return fieldErrHandle(e.target.username);
    if (!e.target.password.value) return fieldErrHandle(e.target.password);
    if (!e.target.repassword.value) return fieldErrHandle(e.target.repassword);

    // Validation Errors
    if (nameErr) return fieldErrHandle(e.target.name, nameErr);
    if (usernameErr) return fieldErrHandle(e.target.username, usernameErr);
    if (passwordErr) return fieldErrHandle(e.target.password, passwordErr);
    if (rePasswordErr) return fieldErrHandle(e.target.repassword, rePasswordErr);
    if (emailErr) return fieldErrHandle(e.target.email, emailErr);

    console.log("hai");
  };

  return (
    // PASSWORD_MINIMUM_LENGTH=8
    // PASSWORD_MAXIMUM_LENGTH=100

    <>
      <AuthModalContainer
        onSubmitHandle={handleSubmit}
        modalHeading="Create New Account"
        closeHandle={() => setSignUpModalActive(false)}
      >
        <NameUsername />
        <Password />
        <Email />
      </AuthModalContainer>
    </>
  );
}
