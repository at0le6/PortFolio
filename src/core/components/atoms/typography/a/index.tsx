import React, { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { StyledLink } from './style';
import { ReturnCommonProps } from '@interfaces/utils';
import { useRouter } from 'next/router';
import { getHref } from '@utils/pathFormati18';

type extraOptions = {
  skipLocaleHandling?: true | false;
};

const A = forwardRef<
  HTMLAnchorElement,
  ReturnCommonProps & Partial<Pick<LinkProps, 'href'>> & extraOptions & { onClick: () => void }
>(({ href, children, skipLocaleHandling, onClick, ...props }, ref) => {
  const router = useRouter();
  let newHref = getHref(router, href, skipLocaleHandling);
  return (
    <Link href={newHref} passHref>
      <StyledLink {...props} ref={ref} onClick={onClick}>
        {children}
      </StyledLink>
    </Link>
  );
});

A.displayName = 'Link';

export { A };
