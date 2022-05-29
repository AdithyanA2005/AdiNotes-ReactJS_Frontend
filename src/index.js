import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./context/Auth/AuthState";
import AuthFormState from "./context/AuthForm/AuthFormState";
import LoaderState from "./context/Loader/LoaderState";
import NavigationState from "./context/Navigation/NavigationState";
import NoteState from "./context/Note/NoteState";
import NoteFormState from "./context/NoteForm/NoteFormState";
import ThemeState from "./context/Theme/ThemeState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeState>
      <NavigationState>
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
      </NavigationState>
    </ThemeState>
  </BrowserRouter>
  </React.StrictMode>
);
