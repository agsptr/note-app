import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, createdAt, body, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      {/* <DeleteButton id={id} onDelete={onDelete} /> */}
    </div>
  );
}

export default NoteItem;
