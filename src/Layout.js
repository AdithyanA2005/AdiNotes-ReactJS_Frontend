import { Outlet } from "react-router-dom";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  return (
    <>
      <div className=" bg-slate-50 dark:bg-slate-800 min-h-screen">
        <Sidebar />
        <div className="ml-16">
          <Navbar />
          <main className="mt-16">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
