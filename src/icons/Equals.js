import React from "react";

const Addition = ({ className }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="M5 9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z" fill="currentColor" />
        <path d="M5 13a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default Addition;
