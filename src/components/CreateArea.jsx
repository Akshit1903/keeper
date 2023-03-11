import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isUserNoting, setIsUserNoting] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsUserNoting(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isUserNoting && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={() => setIsUserNoting(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isUserNoting ? "3" : "1"}
        />
        <Zoom in={isUserNoting}>
          <Fab color="primary" aria-label="add" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        {/* <button>
          <AddIcon />
        </button> */}
      </form>
    </div>
  );
}

export default CreateArea;
