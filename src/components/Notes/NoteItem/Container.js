import PropTypes from "prop-types";

export default function Container({
  children,
  mouseOverHandle,
  mouseLeaveHandle,
  openUpdateNoteHandle,
  specialBorder,
  onClickHandle,
}) {
  return (
    <>
      <div
        onClick={onClickHandle}
        onDoubleClick={openUpdateNoteHandle}
        className={`group overflow-hidden hover:scale-110 hover:z-10 relative w-full md:w-[49%] min-h-[13rem] md:max-w-[19.3rem] transition-all ease-in-out duration-500 rounded-md shadow-md hover:shadow-sky-300 dark:hover:shadow-sky-400 bg-white dark:bg-slate-700
          ${specialBorder ? "cursor-pointer" : "border border-slate-200 dark:border-slate-600"}
        `}
      >
        {/* A simple background div which will act as a border for the special card  */}
        <div
          className={`
          absolute -top-24 -bottom-24 -left-24 -right-24 group-hover:animate-spin
          ${specialBorder && "bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-400"}`}
        />

        {/* Main Card */}
        <div
          onMouseOver={mouseOverHandle}
          onMouseLeave={mouseLeaveHandle}
          className={`absolute p-2.5 gap-3 top-1 bottom-1 left-1 right-1 flex flex-col justify-center bg-inherit rounded-sm 
          ${
            specialBorder &&
            "group-hover:ease-in-out group-hover:duration-300 group-hover:top-1.5 group-hover:bottom-1.5 group-hover:left-1.5 group-hover:right-1.5"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  specialBorder: PropTypes.bool.isRequired,
  noteActive: PropTypes.bool.isRequired,
  mouseOverHandle: PropTypes.func,
  mouseLeaveHandle: PropTypes.func,
  openUpdateNoteHandle: PropTypes.func,
  onClickHandle: PropTypes.func,
};

Container.defaultProps = {
  noteActive: false,
  specialBorder: false,
};
