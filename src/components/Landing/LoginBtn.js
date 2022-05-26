import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

export default function LoginBtn() {
  const { setLoginModalActive } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={() => setLoginModalActive(true)}
        className="text-white text-center text-md font-bold py-3 h-fit px-4 w-full min-w-[1rem] max-w-[18rem] sm:max-w-[13rem] rounded-lg bg-sky-500 hover:bg-sky-600"
      >
        Login
      </button>
    </>
  );
}
