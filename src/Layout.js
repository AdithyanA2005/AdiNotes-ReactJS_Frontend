import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoadingBar from "react-top-loading-bar";
import { useContext } from "react";
import LoaderContext from "./context/Loader/LoaderContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "./context/Theme/ThemeContext";

export default function Layout() {
  const { progress, setProgress } = useContext(LoaderContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className=" bg-slate-50 dark:bg-slate-800 min-h-screen">
        <Sidebar />
        <div className="ml-16">
          <LoadingBar
            progress={progress}
            color="rgb(168 85 247)"
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <div className="pt-16 min-h-screen flex">
            <main className="py-4 w-full" id="main-app">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-left" hideProgressBar={true} theme={theme} />
    </>
  );
}
