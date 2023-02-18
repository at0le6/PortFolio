import { Dispatch, SetStateAction } from 'react';
import { ReturnCommonProps } from '../utils';
import { LinkProps } from 'next/link';

export interface NavBarProps extends Partial<Pick<ReturnCommonProps, 'children' | 'className'>> {
  MediaQueryCollapse: number;
}

export type NavBar_Interface = {
  label: String;
  href: string;
};
//CSS props
export type MediaQuery = {
  MediaQueryNavBar: Boolean | Number;
};
export type isMobile = {
  ChangeMobile: Boolean | Number;
};
export interface HamBurguerProps extends MediaQuery {
  ChangeInterface: Boolean | Number;
}
//config props
export interface NavBarConfig extends NavBarProps {
  toggle: boolean | Boolean;
  setToggle: Dispatch<SetStateAction<Boolean>>;
  refContainerHambuerguerMenu: React.MutableRefObject<HTMLDivElement>;
}
//NavLinks props
export type NavBarLinkProps = Partial<Pick<LinkProps, 'href'>> &
  MediaQuery &
  ReturnCommonProps & {
    onClick?: () => void;
  };
