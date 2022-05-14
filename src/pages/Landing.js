import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
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
      <div className="relative flex flex-col items-center mt-24 justify-center">
        <h1 className="text-green-500 dark:text-green-400 text-7xl font-bold">
          Your Notes In The Cloud{" "}
          <span className="bg-clip-text block text-center text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            AdiNotes
          </span>
        </h1>
        <p className="dark:text-slate-100 text-slate-500 text-lg text-center max-w-3xl mt-2">
          This is a not a real product. This is a note taking application built by using ReactJS
          TailwindCSS and ExpressJS
        </p>
        <div className="max-w-3xl w-full mt-12 flex justify-center items-center gap-8">
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
