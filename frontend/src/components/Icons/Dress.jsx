import React from "react";

export default function EmojioneDress(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#ca2e56"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1}
      >
        <path d="m11.5 5.5l-3-2l-3 2l2.5 6l-6.5 10l4 2h12l4-2l-6.5-10l2.5-6l-3-2zm3-2v-3m-6 3v-3"></path>
        <path d="m15 11.5l-3.5.5l-3.5-.5"></path>
      </g>
    </svg>
  );
}
