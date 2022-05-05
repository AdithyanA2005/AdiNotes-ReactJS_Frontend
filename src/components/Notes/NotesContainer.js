import React from "react";

export default function NotesContainer(props) {
  return (
    <>
      <div className="p-4 flex flex-wrap justify-evenly  h-min max-h-fit gap-5">
        {props.children}
      </div>
    </>
  );
}
