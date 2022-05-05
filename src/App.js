import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NoteState from "./context/Note/NoteState";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      <NoteState>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </NoteState>
    </>
  );
}
