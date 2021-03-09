import React from "react";
import Bulb from "../assets/Bulb";
import Label from "../assets/Label";
import Archive from "../assets/Archive";
import Bin from "../assets/Bin";
import Option from "./Option";
import ContentEditable from "react-contenteditable";
import Note from "./Note";

export default function Body({ grid, setGrid, notes, setNotes }) {
  const options = [
    {
      id: 1,
      text: "Notes",
      Icon: Bulb,
    },
    {
      id: 2,
      text: "Labels",
      Icon: Label,
    },
    {
      id: 3,
      text: "Archive",
      Icon: Archive,
    },
    {
      id: 4,
      text: "Trash",
      Icon: Bin,
    },
  ];

  const [title, setTitle] = React.useState("Title");
  const [content, setContent] = React.useState("Take a note...");
  const contentEditable = React.createRef();
  const contentEditableContent = React.createRef();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleNoteSave = () => {
    if (title !== "Title" || content !== "Take a note...") {
      setNotes([...notes, { id: new Date().getTime(), title, content }]);
      setTitle("Title");
      setContent("Take a note...");
    }
  };
  return (
    <div className="body">
      <div className="sidenav">
        <div className="sidenav__wrapper">
          {options.map((option) => {
            return (
              <Option text={option.text} Icon={option.Icon} key={option.id} />
            );
          })}
        </div>
      </div>
      <div className="notes__container">
        <div className="notes__wrapper">
          <div className="note__input">
            <h3>
              <ContentEditable
                innerRef={contentEditable}
                html={title} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={handleChange} // handle innerHTML change
                tagName="article" // Use a custom HTML tag (uses a div by default)
              />
            </h3>
            <p>
              <ContentEditable
                innerRef={contentEditableContent}
                html={content} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={handleChangeContent} // handle innerHTML change
                tagName="content" // Use a custom HTML tag (uses a div by default)
              />
            </p>
            <div className="note__footer">
              <a href="#" className="submit__button" onClick={handleNoteSave}>
                Save Note
              </a>
            </div>
          </div>
          <div
            className={`all_notes__container ${
              grid ? "notes_grid" : "notes_flex"
            }`}
          >
            {notes.map((note) => (
              <Note
                title={note.title}
                content={note.content}
                key={note.id}
                id={note.id}
                setNotes={setNotes}
                notes={notes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
