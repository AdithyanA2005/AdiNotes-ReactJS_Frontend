import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

export default function NewAccountBtn() {
  const { setSignUpModalActive } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={() => setSignUpModalActive(true)}
        className="text-white text-center text-md font-bold py-3.5 px-4 w-48 rounded-lg bg-purple-500 hover:bg-purple-600"
      >
        Create Account
      </button>
    </>
  );
}
