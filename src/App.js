import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/Auth/AuthContext";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

export default function App() {
  const { auth } = useContext(AuthContext);
  const UserRedirect = () => (!auth ? <Navigate to="/home" /> : <Navigate to="/notes" />);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect to page according to auth status */}
          <Route path="/" element={<UserRedirect />} />

          {/* Landing page for not logged in user */}
          {!auth && <Route path="home" element={<Landing />} />}

          {/* App page for logged in user */}
          {auth && <Route path="notes" element={<Main />} />}
        </Route>

        {/* If url is not fount go back to correct url */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
