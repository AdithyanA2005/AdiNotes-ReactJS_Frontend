import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./context/Auth/AuthState";
import AuthFormState from "./context/AuthForm/AuthFormState";
import LoaderState from "./context/Loader/LoaderState";
import NoteState from "./context/Note/NoteState";
import NoteFormState from "./context/NoteForm/NoteFormState";
import SidebarState from "./context/Sidebar/SidebarState";
import ThemeState from "./context/Theme/ThemeState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeState>
      <SidebarState>
        <LoaderState>
          <AuthFormState>
            <AuthState>
              <NoteState>
                <NoteFormState>
                  <App />
                </NoteFormState>
              </NoteState>
            </AuthState>
          </AuthFormState>
        </LoaderState>
      </SidebarState>
    </ThemeState>
  </BrowserRouter>
);
