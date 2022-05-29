import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import ActionButtons from "./ActionButtons";

export default function AuthModalContainer({
  closeHandle,
  onSubmitHandle,
  modalHeading,
  children,
}) {
  const modalRef = useRef();

  useEffect(() => {
    // Close Modal On Escape Press
    const handleKeyDown = (event) => {
      if (event.key === "Escape") return closeHandle();
    };

    // Escape key press handle
    document.addEventListener("keydown", handleKeyDown);

    // Disable the whole page default scoll. Only the modals container is allowed to scroll
    document.documentElement.style.overflowY = "hidden";

    // Remove Listeners and Scroll disable on modal unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      {/* Container With Bg change */}
      <div
        onClick={(event) => !modalRef.current.contains(event.target) && closeHandle()}
        className="z-50 fixed top-0 left-0 overflow-y-auto right-0 bottom-0 h-screen dark:bg-opacity-50 dark:bg-slate-900"
      >
        {/* Main Modal */}
        <div ref={modalRef} className="max-w-2xl mt-[10vh] mb-7 mx-auto">
          <Slide
            duration={300}
            direction="down"
            className="mb-4 p-4 mx-2 rounded-xl shadow-lg bg-white dark:bg-slate-800 "
          >
            <>
              {/* Modal Title */}
              <h1 className="mb-4 font-bold text-2xl text-slate-700 dark:text-slate-300">
                {modalHeading}
              </h1>

              {/* Form */}
              <form onSubmit={onSubmitHandle} className="flex flex-col gap-4">
                {/* The form body such as inputs */}
                {children}

                {/* Form Submit and close buttons */}
                <ActionButtons closeHandle={closeHandle} />
              </form>
            </>
          </Slide>
        </div>
      </div>
    </>
  );
}

AuthModalContainer.protoTypes = {
  closeHandle: PropTypes.func.isRequired,
  onSubmitHandle: PropTypes.func.isRequired,
  modalHeading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
