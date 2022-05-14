import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../context/Auth/AuthContext";
import AuthModalContainer from "../AuthModalContainer";

export default function LoginForm() {
  const { setLoginModalActive, loginToAccount } = useContext(AuthContext);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <AuthModalContainer
        onSubmitHandle={(event) => {
          event.preventDefault();
          if (!account) return toast.warn("Account field cant be blank");
          if (!password) return toast.warn("Password field cant be blank");
          loginToAccount(account, password);
        }}
        modalHeading="Login To Account"
        closeHandle={() => setLoginModalActive(false)}
      >
        <input
          type="text"
          value={account}
          placeholder="Username or Email"
          className="border-0 outline-0 p-3.5 rounded-lg font-normal text-base text-slate-600 dark:text-slate-300 placeholder:text-slate-600 dark:placeholder:text-slate-300 bg-slate-100 dark:bg-slate-700"
          onChange={(event) => setAccount(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="border-0 outline-0 p-3.5 rounded-lg font-normal text-base text-slate-600 dark:text-slate-300 placeholder:text-slate-600 dark:placeholder:text-slate-300 bg-slate-100 dark:bg-slate-700"
          onChange={(event) => setPassword(event.target.value)}
        />
      </AuthModalContainer>
    </>
  );
}
