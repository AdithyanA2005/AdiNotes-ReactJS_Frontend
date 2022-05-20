import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/Auth/AuthContext";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

export default function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    // Add smooth scroll feature to html
    document.documentElement.classList.add("scroll-smooth");

    // Looks if user is already logged in
    if (localStorage.authToken) setAuth({ authToken: localStorage.authToken });
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
