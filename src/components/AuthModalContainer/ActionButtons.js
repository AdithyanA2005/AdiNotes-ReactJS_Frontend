import React from "react";

export default function ActionButtons(props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <button
          className="w-32 p-2.5 rounded-lg font-semibold text-white bg-purple-500"
          type="submit"
        >
          Submit
        </button>
        <button
          onClick={props.closeHandle}
          className="pr-2 text-slate-500 dark:text-slate-400 font-medium dark:text"
        >
          Close
        </button>
      </div>
    </>
  );
}
