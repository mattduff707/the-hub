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
        <path
          d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Addition;
