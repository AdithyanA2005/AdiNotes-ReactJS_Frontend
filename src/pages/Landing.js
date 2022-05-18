import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import AuthContext from "../context/Auth/AuthContext";

export default function Landing() {
  const { loginModalActive, setLoginModalActive, signUpModalActive, setSignUpModalActive } =
    useContext(AuthContext);
  return (
    <>
      {loginModalActive && <LoginForm />}
      {signUpModalActive && <SignUpForm />}
      <div className="relative flex flex-col items-center px-1.5 mt-24 justify-center">
        <h1 className="text-green-500 dark:text-green-400 text-6xl sm:text-7xl text-center font-bold">
          Your Notes In The Cloud{" "}
          <span className="bg-clip-text lg:block text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            AdiNotes
          </span>
        </h1>
        <p className="dark:text-slate-200 text-slate-600 text-md sm:text-lg text-center max-w-2xl mt-2.5">
          This is a not a real product. This is a note taking application built by using ReactJS
          TailwindCSS and ExpressJS
        </p>
        <div className="max-w-3xl w-full mt-12 flex flex-wrap justify-center items-center gap-8">
          <button
            onClick={() => setSignUpModalActive(true)}
            className="text-white text-center text-md font-bold py-3.5 px-4 w-48 rounded-lg bg-purple-500 hover:bg-purple-600"
          >
            Create Account
          </button>
          <button
            onClick={() => setLoginModalActive(true)}
            className="text-white text-center text-md font-bold py-3 h-fit px-4 w-48 rounded-lg bg-green-500 hover:bg-green-600"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
