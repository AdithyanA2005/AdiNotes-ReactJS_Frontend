import React, { useState } from "react";
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
  const [nameErr, setNameErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  // Onchange handle for name input
  const nameOnChange = (event) => {
    const value = event.target.value;
    setName(value);

    if (value.length < nameMinLen) {
      return setNameErr(`Name should atleast contain ${nameMinLen} characters`);
    }

    return setNameErr();
  };

  // Onchange handle for username input
  const usernameOnChange = (event) => {
    const value = event.target.value;
    setUsername(value);

    if (value.length < usenameMinLen) {
      return setUsernameErr(`Username should atleast contain ${usenameMinLen} characters`);
    }

    if (!/^\w+$/.test(value)) {
      return setUsernameErr("Username should only contain letters, digits & underscores");
    }

    return setUsernameErr();
  };

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
        {/* Name */}
        <SignUpInput
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
