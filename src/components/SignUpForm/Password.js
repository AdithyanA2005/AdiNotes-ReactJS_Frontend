import React, { useState, useEffect, useContext } from "react";
import AuthFormContext from "../../context/AuthForm/AuthFormContext";
import SignUpInput from "./SignUpInput";

export default function Password() {
  // Lengths allowed for inputs
  const passwordMaxLen = process.env.REACT_APP_PASSWORD_MAXIMUM_LENGTH;
  const passwordMinLen = process.env.REACT_APP_PASSWORD_MINIMUM_LENGTH;

  // Variables for storing the inputs
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Variables to store the validation errors
  const { passwordErr, setPasswordErr } = useContext(AuthFormContext);
  const { rePasswordErr, setRePasswordErr } = useContext(AuthFormContext);

  // Onchange handle for enter-password
  const passwordOnChange = (event) => {
    const value = event.target.value;
    // Sets the value to a useState
    setPassword(value);

    // Reset the repeat-password input on password change
    setRePassword("");
    setRePasswordErr("");

    // Checks for validation errors
    if (value.length === 0) return setPasswordErr("Password shouldn't remain empty");
    if (value.length < passwordMinLen)
      return setPasswordErr(`Password should at least be ${passwordMinLen} characters long`);
    return setPasswordErr();
  };

  // Onchange handle for re-enter-password
  const rePasswordOnChange = (event) => {
    const value = event.target.value;

    // Sets the value to a useState
    setRePassword(value);

    // Checks for validation errors
    if (value !== password) return setRePasswordErr("Passwords doesn't match");
    return setRePasswordErr();
  };

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
        {/* Password Input */}
        <SignUpInput
          autoComplete="new-password"
          name="password"
          value={password}
          message={passwordErr}
          onChange={passwordOnChange}
          currentLen={password.length}
          maxLen={passwordMaxLen}
          maxLength={passwordMaxLen}
          type="password"
          placeholder="Enter Password"
        />

        {/* Re Enter Password Input */}
        <SignUpInput
          autoComplete="password"
          disabled={!(password && !passwordErr)}
          name="repassword"
          value={rePassword}
          message={rePasswordErr}
          onChange={rePasswordOnChange}
          currentLen={rePassword.length}
          maxLen={passwordMaxLen}
          maxLength={passwordMaxLen}
          type="password"
          placeholder="Re-Enter Password"
        />
      </div>
    </>
  );
}
