import React from "react";

export default function Brand() {
  return (
    <>
      <h1 className="text-sky-500 dark:text-sky-400 text-6xl sm:text-7xl text-center font-bold">
        Your Notes In The Cloud{" "}
        <span className="bg-clip-text lg:block text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          AdiNotes
        </span>
      </h1>
      <p className="dark:text-slate-200 text-slate-600 text-md sm:text-lg text-center max-w-2xl mt-2.5">
        This is a not a real product. This is a note taking application built by using ReactJS
        TailwindCSS and ExpressJS
      </p>
    </>
  );
}
