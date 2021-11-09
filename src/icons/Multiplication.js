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
      <path
        d="M13.4 12l6.3-6.3c.4-.4.4-1 0-1.4c-.4-.4-1-.4-1.4 0L12 10.6L5.7 4.3c-.4-.4-1-.4-1.4 0c-.4.4-.4 1 0 1.4l6.3 6.3l-6.3 6.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l6.3-6.3l6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Addition;
