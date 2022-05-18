import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/Auth/AuthContext";
import AuthModalContainer from "../AuthModalContainer";
import Email from "./Email";
import NameUsername from "./NameUsername";
import Password from "./Password";
import SignUpInput from "./SignUpInput";

export default function LoginForm() {
  const { setSignUpModalActive } = useContext(AuthContext);
  const blankFieldHandle = (inputElement, message = "Please complete the form to continue") => {
    inputElement.focus();
    toast.warning(message, {
      hideProgressBar: false,
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value) return blankFieldHandle(e.target.name);
    if (!e.target.username.value) return blankFieldHandle(e.target.username);
    if (!e.target.password.value) return blankFieldHandle(e.target.password);
    if (!e.target.repassword.value) return blankFieldHandle(e.target.repassword);
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
