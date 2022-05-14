import { useEffect, useState } from "react";
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import React, { useContext } from "react";
import AuthContext from "./context/Auth/AuthContext";
import Main from "./pages/Main";

export default function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    if (localStorage.authToken) {
      setAuth({ authToken: localStorage.authToken });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={!auth ? <Landing /> : <Main />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
