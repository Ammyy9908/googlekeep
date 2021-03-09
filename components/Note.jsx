import React from "react";
import Archive from "../assets/Archive";

import DeleteIcon from "@material-ui/icons/Delete";

export default function Note({
  title,
  content,
  id,
  setNotes,
  notes,
  ...pageProps
}) {
  const { grid, setGrid } = pageProps;

  const handleDelete = () => {
    setNotes(notes.filter((item) => item.id != id));
  };
  return (
    <div className={`note ${!grid && "notes__fullWidth"}`}>
      <h3>{title}</h3>
      <p className="note__content">{content}</p>
      <div className="note__footer__control">
        <a href="#" className="note__delete__btn" onClick={handleDelete}>
          <DeleteIcon />
        </a>
        <a href="#" className="note__archive__btn">
          <Archive />
        </a>
      </div>
    </div>
  );
}
