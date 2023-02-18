import { useRouter } from 'next/router';
import { LinkProps } from 'next/link';

type Href = LinkProps['href'];

export const getHref = (
  router: ReturnType<typeof useRouter>,
  href: Href,
  skipLocaleHandling: boolean = false
): Href => {
  const locale = router.query.locale || '';
  let newHref = href || router.asPath;
  if (newHref.toString().indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    newHref = href ? `/${locale}${newHref}` : router.pathname.replace('[locale]', `${locale}`);
  }
  return newHref;
};
