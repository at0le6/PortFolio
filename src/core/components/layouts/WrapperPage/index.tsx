import { useEffect, useState, useRef, useContext } from 'react';
import type { Return_ChildrenReactNode } from '@interfaces/utils';
import { Header, NavBar, Paper, ContainerNavBarItems } from './style';
import { FaCode } from 'react-icons/fa';
import { size } from '@constants/size';
import { Items, Buttons } from '@atoms';
import { useTranslation, useViewport } from '@hooks';
import { getTopNav } from '@data/NavBar';
import { MediaQueryCollapse } from '@constants/device';
import { Theme, I18 } from '@providers';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export const WrapperPage = ({ children }: Return_ChildrenReactNode) => {
  const { toggleDark, theme } = useContext(Theme.ThemeContext);
  const { lng, toggleLng } = useContext(I18.I18nContext);
  const ContainerHambuerguerMenu = useRef(null);
  const select = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation();
  const [toggle, setToggle] = useState<Boolean>(false);
  const router = useRouter();
  const { isLaptop, isCustom, isMobile } = useViewport(MediaQueryCollapse);

  useEffect(() => {
    select.current.selectedIndex = lng == 'en' ? 0 : 1;
  }, [lng]);

  const onToggle = () => setToggle(!toggle);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      key="header"
      transition={{
        stiffness: 260,
        damping: 20,
        default: { ease: 'easeInOut' }
      }}
    >
      <Header>
        {/* <NavBar toggle={toggle} setToggle={setToggle}> */}
        <NavBar>
          <ContainerNavBarItems>
            <FaCode size={size.extraBig} />
          </ContainerNavBarItems>
          <ContainerNavBarItems>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {getTopNav.map((e, i) => (
                <Items.ItemNavbar
                  href={`${e.href}`}
                  MediaQueryNavBar={MediaQueryCollapse}
                  key={`NavBarItem${i}`}
                  size={isLaptop ? 'small' : 'big'}
                  weight="400"
                >
                  {t(`${e.label}`)}
                </Items.ItemNavbar>
              ))}
            </motion.ul>
          </ContainerNavBarItems>
          <ContainerNavBarItems>
            <Buttons.Toggle onClick={() => toggleDark()} />
            <select ref={select} onChange={() => toggleLng()}>
              <option value="es">Ingles</option>
              <option value="en">Español</option>
            </select>
          </ContainerNavBarItems>
        </NavBar>
      </Header>
      <Paper>{children}</Paper>
      <h2>Footer</h2>
    </motion.div>
  );
};
