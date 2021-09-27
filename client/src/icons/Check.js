import React from 'react';
import StyledIcon from '../components/StyledIconHOC';

const Check = ({ className }) => {
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
        <path d="M8 12.5l3 3l5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default StyledIcon(Check);
