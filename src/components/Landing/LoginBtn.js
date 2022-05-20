import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

export default function LoginBtn() {
  const { setLoginModalActive } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={() => setLoginModalActive(true)}
        className="text-white text-center text-md font-bold py-3 h-fit px-4 w-48 rounded-lg bg-green-500 hover:bg-green-600"
      >
        Login
      </button>
    </>
  );
}
