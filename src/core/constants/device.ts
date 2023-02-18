import { Return_ObjectString, Return_ObjectNumber } from '@interfaces/utils';

export const MAX_WIDTH_LAYOUT: string = '1680px';

export const size: Return_ObjectNumber = {
  mobile: 550,
  desktop: 1200
};

export const device: Return_ObjectString = {
  mobile: `(max-width: ${size.mobile}px)`,
  laptop: `(min-width: ${size.mobile}px) and (max-width:${size.desktop}px)`,
  desktop: `(min-width: ${size.desktop}px)`
};

export const viewportDefaultState = {
  viewportWidth: 0,
  isMobile: 0,
  isLaptop: 0,
  isDesktop: 0,
  isCustom: 0
} as const;
export type viewportDefaultState = (typeof viewportDefaultState)[keyof typeof viewportDefaultState];

export const MediaQueryCollapse = 840;
