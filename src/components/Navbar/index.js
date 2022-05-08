import NavBrand from "./NavBrand";
import StartButton from "./StartButton";

export default function Navbar() {
  return (
    <>
      <nav className="z-50 pl-16 h-16 fixed top-0 right-0 left-0 transition-all ease-in-out duration-300 shadow-sm">
        <div className="h-full w-full grid place-items-center border-b dark:border-slate-700 bg-white dark:bg-slate-900 ">
          <div className="container px-10 flex items-center justify-center md:justify-between">
            <NavBrand />
            <StartButton />
          </div>
        </div>
      </nav>
    </>
  );
}
