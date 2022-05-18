import React, { useState } from "react";
import SignUpInput from "./SignUpInput";

export default function Email() {
  const [email, setEmail] = useState(""); // Variable for storing the email
  const [emailErr, setEmailErr] = useState(""); // Variable to store the validation error

  // Onchange handle for enter-email
  const emailOnChange = (event) => {
    const value = event.target.value;

    // Regex for a valid email
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Sets the value to a useState
    setEmail(value);

    // Checks for validation errors
    if (!isEmail.test(value)) {
      return setEmailErr("Enter a valid email id");
    }
    return setEmailErr();
  };

  return (
    <>
      {/* Email Input */}
      <SignUpInput
        name="email"
        value={email}
        message={emailErr}
        onChange={emailOnChange}
        type="text"
        placeholder="Email"
      />
    </>
  );
}
