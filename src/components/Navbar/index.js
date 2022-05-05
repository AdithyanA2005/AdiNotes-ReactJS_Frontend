import NavBrand from "./NavBrand";
import StartButton from "./StartButton";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 pl-16 dark:border-slate-700 border-b bg-white dark:bg-slate-900 h-16 grid place-items-center fixed top-0 right-0 left-0 shadow-sm">
        <div className="container px-10 flex items-center justify-center md:justify-between">
          <NavBrand />
          <StartButton />
        </div>
      </nav>
    </>
  );
}
