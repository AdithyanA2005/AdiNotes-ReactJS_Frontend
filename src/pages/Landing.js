import React, { useContext } from "react";
import Brand from "../components/Landing/Brand";
import LoginBtn from "../components/Landing/LoginBtn";
import NewAccountBtn from "../components/Landing/NewAccountBtn";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import AuthContext from "../context/Auth/AuthContext";

export default function Landing() {
  // Contexts
  const { loginModalActive, signUpModalActive } = useContext(AuthContext);

  return (
    <>
      {/* Authentication Modals If Required*/}
      {loginModalActive && <LoginForm />}
      {signUpModalActive && <SignUpForm />}

      <div className="relative flex flex-col items-center px-1.5 mt-24 justify-center">
        {/* Main Heading */}
        <Brand />

        {/* Login and Register Action Buttons */}
        <div className="max-w-3xl w-full mt-12 flex gap-4 flex-wrap justify-center items-center">
          <NewAccountBtn />
          <LoginBtn />
        </div>
      </div>
    </>
  );
}
