import { useState, useEffect } from 'react';
import { size, viewportDefaultState } from '@constants/device';
import { useViewportType } from '@interfaces/hooks/useViewport';

const isBrowser = () => typeof window !== 'undefined';

export default function useViewport(customSize: number | number = 0): useViewportType {
  const getViewportSizes = (): useViewportType => {
    if (isBrowser()) {
      let clientWidth = document.documentElement.clientWidth;
      let viewportSizes = {
        viewportWidth: clientWidth,
        isMobile: clientWidth <= size.mobile,
        isLaptop: clientWidth > size.mobile && clientWidth <= size.desktop,
        isDesktop: clientWidth > size.desktop,
        isCustom: customSize! > clientWidth
      };
      return viewportSizes;
    }
    return viewportDefaultState;
  };

  const [viewportSizes, setViewportSizes] = useState<useViewportType>(getViewportSizes());

  useEffect(() => {
    const handleWindowResize = () => setViewportSizes(getViewportSizes());
    window?.addEventListener('resize', handleWindowResize);
    return () => window?.removeEventListener('resize', handleWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewportSizes;
}
