import React from 'react';
import StyledIcon from '../components/StyledIconHOC';

const UpArrow = ({ className }) => {
  return (
    <svg className={className} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <g>
        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </g>
    </svg>
  );
};

export default StyledIcon(UpArrow);
