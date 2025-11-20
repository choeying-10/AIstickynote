import React from "react";

const PinIcon = ({ isPinned }) => (
  <span className={isPinned ? "text-red-600 text-semibold" : "text-gray-700"}>
    {isPinned ? "📌 PINNED" : "◻️ PIN"}
  </span>
);

export default PinIcon;
