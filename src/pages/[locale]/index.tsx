import type { NextPage } from 'next';
import { Theme, I18 } from '@providers';
import { InferGetServerSidePropsType } from 'next';
import { Title } from '@atoms';
import { getServerSideProps } from '@libs/getStatic';
import { useTranslation } from '@hooks';
import { useContext, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const SectionMe = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.size.medium};
`;

export { getServerSideProps };
const HomePage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation();
  const { setTheme, theme } = useContext(Theme.ThemeContext);
  const { lng, setLng } = useContext(I18.I18nContext);
  const router = useRouter();
  const { locale } = router.query;

  useEffect(() => {
    console.log(locale);
    if (theme != props.CookieCurrentTheme) setTheme(props.CookieCurrentTheme);
    if (lng != props.CookieCurrentlng) setLng(props.CookieCurrentlng);
  }, []);

  return (
    <main>
      <SectionMe>
        <Title as="h1">Gamaliel Gonzalez.</Title>
        <div style={{ paddingBottom: '4rem' }}>
          <Title as="h2" size="extraBig" color="blue_ligth">
            {t('presentation.SubHeader')}
          </Title>
        </div>
      </SectionMe>
    </main>
  );
};
console.log(HomePage);
export default HomePage;
