import React, { useContext } from "react";
import { Zoom } from "react-awesome-reveal";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import NoteContext from "../../context/Note/NoteContext";

export default function DeleteModal(props) {
  const { deleteNote } = useContext(NoteContext);
  const handleDelete = () => {
    deleteNote(props.id);
    props.closeModal();
  };
  return (
    <>
      <div className="bg-opacity-10 z-[1000000000] h-full flex items-center bg-slate-800 fixed top-0 left-0 right-0">
        <Zoom duration={300} className="mx-auto">
          <div className="relative p-4 mb-[10vh] w-full max-w-md">
            <div className="relative border border-slate-200 shadow-lg dark:border-slate-600 bg-white rounded-lg dark:bg-slate-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 p-1.5 ml-auto text-sm rounded-lg inline-flex items-center bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-600 dark:hover:text-white"
                onClick={props.closeModal}
              >
                <CloseIcon />
              </button>
              <div className="p-6 text-center">
                <InfoIcon className="mx-auto mb-4 w-14 h-14 text-slate-600 dark:text-slate-200" />
                <h3 className="mb-5 text-lg font-normal text-slate-600 dark:text-slate-300">
                  Are you sure you want to delete this Note?
                </h3>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="px-5 py-2.5 mr-2 font-bold text-sm text-center rounded-lg inline-flex items-center text-white bg-red-500 hover:bg-red-600"
                >
                  Yes, I'm sure
                </button>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-600 hover:text-slate-900 dark:text-slate-50 dark:hover:text-white bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500"
                  onClick={props.closeModal}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
}
