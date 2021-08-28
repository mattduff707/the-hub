import styled from 'styled-components';

const StyledIcon = (WrappedIcon) => {
  const hocComponent = ({ ...props }) => <StyledWrappedIcon {...props} />;

  const StyledWrappedIcon = styled(WrappedIcon)`
    height: 24px;
    width: 24px;
    fill: var(--color-text);
    filter: drop-shadow(var(--shadow-icon));
  `;
  return hocComponent;
};

export default StyledIcon;
