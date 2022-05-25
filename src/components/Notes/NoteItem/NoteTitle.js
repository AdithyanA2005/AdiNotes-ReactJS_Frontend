import PropTypes from "prop-types";
import React from "react";

export default function NoteTitle({ text }) {
  return (
    <>
      <h1 className="text-green-400 dark:text-green-400 font-semibold text-lg break-words">
        {text}
      </h1>
    </>
  );
}

NoteTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
