import React from "react";

export default function Typing() {
  return (
    <div className="Typing">
      <svg
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 58 24"
        enableBackground="new 0 0 0 0"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="12" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          ></animate>
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="12" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          ></animate>
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="12" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
