import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ contacts, onDelete }) {
  return (
    <div className="note-list">
      {contacts.map((contact) => (
        <NoteItem
          key={note.id}
          id={note.id}
          //   onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
