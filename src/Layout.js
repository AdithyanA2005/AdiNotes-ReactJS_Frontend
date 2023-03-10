import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import JumbToMainContent from "./components/JumbToMainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoaderContext from "./context/Loader/LoaderContext";
import NavigationContext from "./context/Navigation/NavigationContext";
import ThemeContext from "./context/Theme/ThemeContext";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const { progress, setProgress } = useContext(LoaderContext);
  const { navigationRef } = useContext(NavigationContext)
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className=" bg-slate-50 dark:bg-slate-800 min-h-screen">
        {/* A Accesseblity button which apperes on first tab press to go to the main content */}
        <JumbToMainContent />

        {/* Top loading bar */}
        <LoadingBar
          progress={progress}
          color="rgb(168 85 247)"
          onLoaderFinished={() => setProgress(0)}
        />

        {/* Navigation */}
        <div ref={navigationRef}>
          <Navbar />
          <Sidebar />
        </div>

        {/* MAIN APP */}
        <div className="sm:ml-16">
          <div className="pt-16 min-h-screen flex">
            <main className="py-4 px-2 w-full" id="main-app">
              <Outlet />
            </main>
          </div>
        </div>

        {/* The Container to show toast from entire application */}
        <ToastContainer position="bottom-left" hideProgressBar={true} theme={theme} />
      </div>
    </>
  );
}
