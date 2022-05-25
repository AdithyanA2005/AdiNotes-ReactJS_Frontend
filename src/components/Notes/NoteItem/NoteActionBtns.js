import PropTypes from "prop-types";
import { ReactComponent as BinIcon } from "../../../assets/bin.svg";
import { ReactComponent as EditIcon } from "../../../assets/edit.svg";

export default function NoteActionBtns({ deleteHandle, openUpdateNoteHandle }) {
  return (
    <>
      <div className="flex gap-3">
        {/* Edit Button */}
        <button
          onClick={openUpdateNoteHandle}
          className="group-hover:scale-100 scale-0 w-4 hover:w-[18px] transition-all duration-300 opacity-70 hover:opacity-100 text-slate-500 hover:text-purple-500"
        >
          <EditIcon />
        </button>

        {/* DeleteButton */}
        <button
          onClick={deleteHandle}
          className="group-hover:scale-100 scale-0 w-3.5 hover:w-4 transition-all duration-300 opacity-70 hover:opacity-100 text-slate-500 hover:text-red-500"
        >
          <BinIcon />
        </button>
      </div>
    </>
  );
}

NoteActionBtns.propTypes = {
  deleteHandle: PropTypes.func.isRequired,
  openUpdateNoteHandle: PropTypes.func.isRequired,
};
