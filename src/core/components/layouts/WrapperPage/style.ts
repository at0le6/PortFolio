import { ReturnCommonProps } from '@interfaces/utils';
import styled from 'styled-components';

export const Header = styled.header<ReturnCommonProps>`
  z-index: 100;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  background-color: ${props => {
    if (props.color && props.theme.palette[props.color]) {
      return props.theme.palette[props.color];
    } else if (props.color) return props.color;
    else if (props.theme.mode.current == 'ligth') {
      return props.theme.palette.gray;
    }
    return 'transparent';
  }};
  width: 100%;
  height: ${props => props.theme.size.extraBig};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  width: 85%;
`;
export const Paper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerNavBarItems = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
`;
