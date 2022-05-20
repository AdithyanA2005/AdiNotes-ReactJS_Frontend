import PropTypes from "prop-types";
import React from "react";

export default function NotesContainer({ children }) {
  return (
    <>
      <div className="flex flex-wrap justify-evenly h-min max-h-fit gap-5">{children}</div>
    </>
  );
}

NotesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
