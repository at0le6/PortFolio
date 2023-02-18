import { Fragment, useEffect, useState } from 'react';
import type { AppPropsWithLayout } from '@interfaces/pages/_app';
import { Theme, I18 } from '@providers';
import { appWithTranslation } from 'next-i18next';
import { Work_Sans } from '@next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

import GlobalStyle from '@styles/GlobalStyle';

import { WrapperPage } from '@layouts';
import { variants } from '@constants/motion';

const WorkSans = Work_Sans({
  weight: ['200', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: 'normal'
});
export function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <WrapperPage>{page}</WrapperPage>);
  const Layout = Component.layout ?? Fragment;

  return (
    <Theme.ThemeProvider>
      <I18.I18nProvider>
        <div className={WorkSans.className}>
          <GlobalStyle />
          <Layout>
            {getLayout(
              <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => {
                  console.log('EXIT COMPLETE', router.asPath);
                }}
              >
                <motion.div
                  layout
                  layoutRoot
                  variants={variants} // Pass the variant object into Framer Motion
                  initial="hidden" // Set the initial state to variants.hidden
                  animate="enter" // Animated state to variants.enter
                  exit="exit" // Exit state (used later) to variants.exit
                  key={router.pathname}
                >
                  <Component {...pageProps} key={router.asPath} />
                </motion.div>
              </AnimatePresence>
            )}
          </Layout>
        </div>
      </I18.I18nProvider>
    </Theme.ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
