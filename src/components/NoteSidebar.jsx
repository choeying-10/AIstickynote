import React from "react";

const NoteSidebar = ({ pinnedNotes, onPinToggle }) => {
  return (
    <div className="sidebar-container">
      <h2 className="title" style={{ marginBottom: "16px" }}>
        📌 Pinned Notes ({pinnedNotes.length})
      </h2>
      {pinnedNotes.length === 0 ? (
        <p className="text-sm" style={{ color: "#6b7280" }}>
          No notes pinned yet.
        </p>
      ) : (
        pinnedNotes.map((note) => (
          <div key={note.id} className="note-item">
            <p
              className="text-xs"
              style={{ fontStyle: "italic", color: "#4b5563" }}
            >
              {note.content}
            </p>
            <button
              onClick={() => onPinToggle(note.id)}
              className="unpin-button"
            >
              Unpin
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteSidebar;
