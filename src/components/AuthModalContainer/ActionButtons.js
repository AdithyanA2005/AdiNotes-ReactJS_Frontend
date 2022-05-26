import PropTypes from "prop-types";
import React from "react";

export default function ActionButtons({ closeHandle }) {
  return (
    <>
      {/* Form submit or cancel buttons */}
      <div className="flex justify-between items-center">
        {/* Submit Btn */}
        <button
          formNoValidate
          className="w-32 p-2.5 rounded-lg font-semibold text-white bg-emerald-500"
          type="submit"
        >
          Submit
        </button>

        {/* Cancel Btn */}
        <button
          formNoValidate
          onClick={closeHandle}
          className="pr-2 text-slate-500 dark:text-slate-400 font-medium dark:text"
        >
          Close
        </button>
      </div>
    </>
  );
}

ActionButtons.propTypes = {
  closeHandle: PropTypes.func.isRequired,
};
