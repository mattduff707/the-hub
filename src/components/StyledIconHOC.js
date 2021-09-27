import styled from 'styled-components';

const StyledIcon = (WrappedIcon) => {
  const hocComponent = ({ ...props }) => <StyledWrappedIcon {...props} />;

  const StyledWrappedIcon = styled(WrappedIcon)`
    height: 30px;
    width: 30px;
    fill: var(--color-text);
    filter: drop-shadow(var(--shadow-icon));
  `;
  return hocComponent;
};

export default StyledIcon;
