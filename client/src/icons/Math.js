import React from 'react';
import StyledIcon from '../components/StyledIconHOC';

const Math = ({ className }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
    >
      <path
        d="M112 184a8 8 0 0 1-8 8H80v24a8 8 0 0 1-16 0v-24H40a8 8 0 0 1 0-16h24v-24a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8zm-8-120H40a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16zm48 112.066h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16zm64 15.868h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16zm-61.657-90.277a8 8 0 0 0 11.314 0L184 83.313l18.343 18.344a8 8 0 1 0 11.314-11.314L195.313 72l18.344-18.343a8 8 0 0 0-11.314-11.314L184 60.687l-18.343-18.344a8 8 0 0 0-11.314 11.314L172.687 72l-18.344 18.343a8 8 0 0 0 0 11.314z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StyledIcon(Math);
