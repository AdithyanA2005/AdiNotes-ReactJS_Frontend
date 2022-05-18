import React, { useContext, useEffect, useState } from "react";
import AuthFormContext from "../../context/AuthForm/AuthFormContext";
import SignUpInput from "./SignUpInput";

export default function NameUsername() {
  // Input available length configuration
  const nameMinLen = 3;
  const nameMaxLen = process.env.REACT_APP_NAME_MAXIMUM_LENGTH;
  const usenameMinLen = process.env.REACT_APP_USERNAME_MINIMUM_LENGTH;
  const usernameMaxLen = process.env.REACT_APP_USERNAME_MAXIMUM_LENGTH;

  // Variable to store input data
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // Variables to store input validation errors
  const { nameErr, setNameErr } = useContext(AuthFormContext);
  const { usernameErr, setUsernameErr } = useContext(AuthFormContext);

  // Onchange handle for name input
  const nameOnChange = (event) => {
    const value = event.target.value;
    setName(value);

    if (value.length === 0) return setNameErr("Name shouldn't remain empty");
    if (!/^[A-Za-z\s]*$/.test(value))
      return setNameErr("Name should only contain letters and space");
    if (value.length < nameMinLen)
      return setNameErr(`Name should atleast contain ${nameMinLen} characters`);
    return setNameErr();
  };

  // Onchange handle for username input
  const usernameOnChange = (event) => {
    const value = event.target.value;
    setUsername(value);

    if (value.length === 0) return setUsernameErr("Username shouldn't remain empty");
    if (value.length < usenameMinLen)
      return setUsernameErr(`Username should atleast contain ${usenameMinLen} characters`);
    if (!/^\w+$/.test(value))
      return setUsernameErr("Username should only contain letters, digits & underscores");
    return setUsernameErr();
  };

  useEffect(() => {}, [nameErr, usernameErr]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
        {/* Name */}
        <SignUpInput
          autoComplete="name"
          name="name"
          value={name}
          message={nameErr}
          onChange={nameOnChange}
          currentLen={name.length}
          maxLen={nameMaxLen}
          maxLength={nameMaxLen}
          type="text"
          placeholder="Name"
        />

        {/* UserName */}
        <SignUpInput
          autoComplete="username"
          name="username"
          value={username}
          message={usernameErr}
          onChange={usernameOnChange}
          currentLen={username.length}
          maxLen={usernameMaxLen}
          maxLength={usernameMaxLen}
          type="text"
          placeholder="Username"
        />
      </div>
    </>
  );
}
