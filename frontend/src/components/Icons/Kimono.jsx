import React from "react";

export default function Kimono(props) {
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
        strokeWidth={0.8}
      >
        <path d="M8 4c0 1.1 1.8 2 4 2s4-.9 4-2V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1Z"></path>
        <path d="M8 4c0 2 4 5 4 10v8m0-8c0-5 4-8 4-10M6 19H3c-.6 0-1-.4-1-1V7c0-1.1.8-2.3 1.9-2.6L8 3"></path>
        <path d="M18 9v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
        <path d="m16 3l4.1 1.4C21.2 4.7 22 5.9 22 7v11c0 .6-.4 1-1 1h-3M2 15h4l2-2"></path>
        <path d="M22 15h-4l-2-2M6 18h12"></path>
      </g>
    </svg>
  );
}
