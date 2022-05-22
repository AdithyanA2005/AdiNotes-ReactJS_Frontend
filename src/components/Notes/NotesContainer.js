import PropTypes from "prop-types";
import React from "react";

export default function NotesContainer({ children }) {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-evenly h-min max-h-fit mx-5 gap-5">
        {children}
      </div>
    </>
  );
}

NotesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
