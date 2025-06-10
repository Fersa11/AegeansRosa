import React from "react";

export default function HosenIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.8em"
      height="2.8em"
      viewBox="5 0 50 50"
      {...props}
    >
      <g
        fill="none"
        stroke="#ca2e56"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m16 12l2-8h12l2 8v12l4 17l-12 3l-12-3l4-17zm8 32V16"></path>
        <path d="m12 41l12 3l12-3"></path>
      </g>
    </svg>
  );
}
