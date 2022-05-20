import React, { useContext } from "react";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";
import AuthContext from "../../context/Auth/AuthContext";
import AuthModalContainer from "../AuthModalContainer";

export default function LogoutForm() {
  const { setLogoutModalActive, logoutFromAccount } = useContext(AuthContext);

  // Handle Logout submit
  const handleSubmit = (e) => {
    e.preventDefault();
    logoutFromAccount();
  };

  return (
    <>
      <AuthModalContainer
        onSubmitHandle={handleSubmit}
        modalHeading="Logout From Your Account"
        closeHandle={() => setLogoutModalActive(false)}
      >
        {/* Warning icon */}
        <div className="h-24 w-24 mx-auto dark:text-slate-400">
          <InfoIcon />
        </div>

        {/* Warning Message */}
        <p className="mx-auto mb-4 text-center text-lg dark:text-slate-400">
          Are you sure that you want to logout of your account?
        </p>
      </AuthModalContainer>
    </>
  );
}
