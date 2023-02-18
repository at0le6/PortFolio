import styled from 'styled-components';
import { MediaQuery } from '@interfaces/components/NavBar';
import { ReturnCommonProps } from '@interfaces/utils';

export const ItemNavbar = styled.li<Pick<ReturnCommonProps, 'color'> & MediaQuery>`
  display: inline-block;
  &:not(:last-child) {
    padding-right: 4rem;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
