import PropTypes from "prop-types";

export default function Tooltip({ text }) {
  return (
    <>
      <span className="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max left-14 rounded-md text-white dark:bg-slate-700 bg-slate-500 text-xs font-bold transition-all duration-100 scale-0 origin-left">
        {text}
      </span>
    </>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};
