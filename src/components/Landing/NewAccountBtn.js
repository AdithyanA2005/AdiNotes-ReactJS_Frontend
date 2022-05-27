import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

export default function NewAccountBtn() {
  const { setSignUpModalActive } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={() => setSignUpModalActive(true)}
        className="text-white text-center text-md font-bold py-3.5 px-4 w-full min-w-[1rem] max-w-[18rem] sm:max-w-[13rem] rounded-lg bg-teal-500 hover:bg-teal-600"
      >
        Create Account
      </button>
    </>
  );
}
