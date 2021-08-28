import React from 'react';
import StyledIcon from '../components/StyledIconHOC';

const Delete = ({ className }) => {
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
        <path d="M15 15L9 9m6 0l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
      </g>
    </svg>
  );
};

export default StyledIcon(Delete);
