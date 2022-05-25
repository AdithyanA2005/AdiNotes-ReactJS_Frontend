import PropTypes from "prop-types";
import React from "react";

export default function NoteTag({ text }) {
  return (
    <>
      <div className="flex-1 ">
        <span className="bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-white rounded-lg py-[5px] px-2.5 text-xs  font-bold  =">
          {text}
        </span>
      </div>
    </>
  );
}

NoteTag.propTypes = {
  text: PropTypes.string.isRequired,
};
