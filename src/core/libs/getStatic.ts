import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../../../next-i18next.config';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';
import type { Theme, Theme as TypeTheme } from '@interfaces/providers/ThemeContext';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map(lng => ({
    params: {
      locale: lng
    }
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale;
  console.log(locale);
  let props = {
    ...(await serverSideTranslations(locale, ns, null, ['common']))
  };
  return props;
}

export const getServerSideProps: GetServerSideProps = async (ctx, ns = ['common']) => {
  const cookies = new Cookies(ctx.req, ctx.res);
  const CookieTheme = cookies.get('theme');
  const Cookielng = cookies.get('lng');
  console.log('getServerSideProps', Cookielng);
  const CookieCurrentTheme: TypeTheme = !CookieTheme ? 'ligth' : CookieTheme;
  const CookieCurrentlng: 'en' | 'es' = !Cookielng ? i18nextConfig.i18n.defaultLocale : Cookielng;
  console.log('CookieCurrentlng', CookieCurrentlng);
  cookies.set('theme', CookieCurrentTheme, {
    httpOnly: false,
    path: '/'
  });
  cookies.set('lng', CookieCurrentlng, {
    httpOnly: false,
    path: '/'
  });
  return {
    props: { ...(await getI18nProps(ctx, ns)), CookieCurrentTheme, CookieCurrentlng }
  };
};
