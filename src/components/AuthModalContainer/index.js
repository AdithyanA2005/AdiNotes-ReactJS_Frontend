import React, { useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import ActionButtons from "./ActionButtons";

export default function AuthModalContainer(props) {
  const modalRef = useRef();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "Escape") return props.closeHandle();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        onClick={(event) => !modalRef.current.contains(event.target) && props.closeHandle()}
        className="z-[1000] fixed top-0 left-0 right-0 h-screen dark:bg-opacity-50 dark:bg-slate-900"
      >
        <div ref={modalRef} className="max-w-2xl mt-28 mx-auto">
          <Slide
            duration={300}
            direction="down"
            className="w-full p-4 rounded-xl shadow-lg bg-white dark:bg-slate-800 "
          >
            <div>
              <h2 className="mb-4 font-bold text-2xl text-slate-700 dark:text-slate-300">
                {props.modalHeading}
              </h2>
              <form onSubmit={props.onSubmitHandle} className="flex flex-col gap-4">
                {props.children}
                <ActionButtons closeHandle={props.closeHandle} />
              </form>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
}
