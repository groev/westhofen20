import React from "react";

export default function LinkedIn({ color }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="90px"
      height="90px"
      viewBox="0 0 90 90"
    >
      <g>
        <circle cx="45" cy="45" r="45" fill={color} />
      </g>
      <path
        fill="#FFF"
        id="path28_1_"
        d="M30.9,65.6V31.2H19.4v34.4H30.9z M25.1,26.5
	c4,0,6.5-2.6,6.5-5.9c-0.1-3.4-2.5-5.9-6.4-5.9c-3.9,0-6.5,2.6-6.5,5.9C18.7,23.8,21.2,26.5,25.1,26.5L25.1,26.5L25.1,26.5z"
      />
      <path
        fill="#FFF"
        id="path30_1_"
        d="M37.2,65.6h11.4V46.4c0-1,0.1-2.1,0.4-2.8
	c0.8-2.1,2.7-4.2,5.9-4.2c4.1,0,5.8,3.2,5.8,7.8v18.4h11.4V45.9c0-10.6-5.6-15.5-13.2-15.5c-6.2,0-8.9,3.5-10.4,5.8h0.1v-5H37.2
	C37.3,34.4,37.2,65.6,37.2,65.6L37.2,65.6z"
      />
    </svg>
  );
}

LinkedIn.defaultProps = {
  color: "#000",
};
