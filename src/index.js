import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./context/Auth/AuthState";
import NoteFormState from "./context/NoteForm/NoteFormState";
import NoteState from "./context/Note/NoteState";
import "./index.css";
import LoaderState from "./context/Loader/LoaderState";
import ThemeState from "./context/Theme/ThemeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeState>
    <LoaderState>
      <AuthState>
        <NoteState>
          <NoteFormState>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </NoteFormState>
        </NoteState>
      </AuthState>
    </LoaderState>
  </ThemeState>
);
