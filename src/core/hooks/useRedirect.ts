import Router from 'next/router';
import languageDetector from '../libs/languageDetector';

export const useRedirect = (to?, lng?) => {
  to = to || '/';
  // language detection
  if (to.startsWith('/' + lng) && Router.route === '/404') {
    // prevent endless loop
    Router.replace('/' + lng + Router.route, undefined, { shallow: true });
    return;
  }
  languageDetector.cache(lng);
  Router.replace('/' + lng + to, undefined, { shallow: false, locale: lng });
};
