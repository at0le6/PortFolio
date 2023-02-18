import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) =>
    theme.mode.current == 'ligth' ? theme.palette.white : theme.mode.contrastText};
  border: 1px solid
    ${({ theme }) =>
      theme.mode.current == 'ligth' ? theme.palette.extraAccent : theme.mode.contrastText};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  width: 6.3rem;
  height: 2.2rem;
  svg {
    height: auto;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      width: 2rem;
      transform: ${({ theme }) =>
        theme.mode.current == 'ligth' ? 'translateY(-8px)' : 'translateY(100px)'};
    }

    // moon icon
    &:nth-child(2) {
      width: 2.3rem;
      transform: ${({ theme }) =>
        theme.mode.current == 'ligth' ? 'translateY(-100px)' : 'translateY(-10px)'};
    }
  }
`;
