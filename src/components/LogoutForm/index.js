import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/Auth/AuthContext";
import AuthModalContainer from "../AuthModalContainer";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

export default function LogoutForm() {
  const { setLogoutModalActive, logoutFromAccount } = useContext(AuthContext);
  return (
    <>
      <AuthModalContainer
        onSubmitHandle={(event) => {
          event.preventDefault();
          logoutFromAccount();
        }}
        modalHeading="Logout From Your Account"
        closeHandle={() => setLogoutModalActive(false)}
      >
        <div className="h-24 w-24 mx-auto dark:text-slate-400">
          <InfoIcon />
        </div>
        <p className="mx-auto mb-4 text-center text-lg dark:text-slate-400">
          Are you sure that you want to logout of your account?
        </p>
      </AuthModalContainer>
    </>
  );
}
