import React from "react";
import PinIcon from "./PinIcon.jsx";

const AiResponseBlock = ({ message, onPinToggle }) => {
  const { id, content, isPinned } = message;

  const blockClass = isPinned
    ? "ai-response-block ai-response-pinned"
    : "ai-response-block ai-response-default";

  return (
    <div className={blockClass}>
      <div className="ai-response-header">
        <p className="text-semibold text-gray-800">AI Response:</p>
        <button onClick={() => onPinToggle(id)} className="pin-button">
          <PinIcon isPinned={isPinned} />
        </button>
      </div>
      <p className="text-sm" style={{ marginTop: "4px" }}>
        {content}
      </p>
    </div>
  );
};

export default AiResponseBlock;
