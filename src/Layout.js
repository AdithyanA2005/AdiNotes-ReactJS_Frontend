import { Outlet } from "react-router-dom";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoadingBar from "react-top-loading-bar";
import { useContext } from "react";
import LoaderContext from "./context/Loader/LoaderContext";

export default function Layout() {
  const { progress, setProgress } = useContext(LoaderContext);

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
    </>
  );
}
