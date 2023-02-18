import { useContext } from 'react';
import { Loaders } from '@atoms';
import { Page } from '@interfaces/pages/_app';
import { motion, AnimatePresence } from 'framer-motion';
import { I18 } from '@providers';
import { variants } from '@constants/motion';
import { useRouter } from 'next/router';

export const Redirect: Page = () => {
  const { loandingI18 } = useContext(I18.I18nContext);
  setTimeout(() => {
    loandingI18.setLoanding(true);
    console.log('hola desde redirecvt');
  }, 2000);
  return <Loaders.PageLoanding />;
};

Redirect.getLayout = function getLayout(page) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        key={router.pathname}
        transition={{
          delay: 0.2
        }}
      >
        {page}
      </motion.div>
    </AnimatePresence>
  );
};
