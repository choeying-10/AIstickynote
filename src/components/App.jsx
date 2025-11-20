import React, { useState } from "react";
import AiResponseBlock from "./AiResponseBlock.jsx";
import NoteSidebar from "./NoteSidebar.jsx";

const INITIAL_MESSAGES = [
  { id: "m1", role: "user", content: "Initial research query." },
  {
    id: "m2",
    role: "ai",
    content:
      "Key concept 1: Destructuring and Spread operator for state updates.",
    isPinned: false,
  },
  {
    id: "m3",
    role: "user",
    content: "Follow-up question about computed properties.",
  },
  {
    id: "m4",
    role: "ai",
    content:
      "Computed Property Names ([name]: value) allows dynamic object key setting.",
    isPinned: false,
  },
];

const App = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const pinnedNotes = messages.filter(
    (msg) => msg.role === "ai" && msg.isPinned
  );

  const handlePinToggle = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isPinned: !msg.isPinned } : msg
      )
    );
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <h1 className="title">Simple Chat Log Blueprint</h1>

        {messages.map((msg) =>
          msg.role === "user" ? (
            <div key={msg.id} className="user-query">
              <p className="text-semibold text-blue-800">User:</p>
              <p className="text-sm">{msg.content}</p>
            </div>
          ) : (
            <AiResponseBlock
              key={msg.id}
              message={msg}
              onPinToggle={handlePinToggle}
            />
          )
        )}
      </div>

      <NoteSidebar pinnedNotes={pinnedNotes} onPinToggle={handlePinToggle} />
    </div>
  );
};

export default App;
