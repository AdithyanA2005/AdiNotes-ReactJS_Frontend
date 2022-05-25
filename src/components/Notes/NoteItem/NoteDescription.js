import PropTypes from "prop-types";
import React from "react";

export default function NoteDescription({ text }) {
  return (
    <>
      <p className="dark:text-slate-300 transition-all text-slate-600 text-md break-words">
        {text}
      </p>
    </>
  );
}

NoteDescription.propTypes = {
  text: PropTypes.string.isRequired,
};
