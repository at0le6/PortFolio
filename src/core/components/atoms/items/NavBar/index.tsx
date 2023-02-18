import { ItemNavbar as ItemStyle } from './style';
import { ReturnCommonProps } from '@interfaces/utils';
import type { NavBarLinkProps } from '@interfaces/components/NavBar';
import { A } from '@components/atoms';

const ItemNavbar = ({ children, MediaQueryNavBar, onClick, ...propsAnchor }: NavBarLinkProps) => {
  return (
    <ItemStyle MediaQueryNavBar={Number(MediaQueryNavBar)}>
      <A {...propsAnchor} onClick={onClick}>
        {children}
      </A>
    </ItemStyle>
  );
};

export { ItemNavbar };
