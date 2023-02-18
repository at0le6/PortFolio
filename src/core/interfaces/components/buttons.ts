import type { ReturnCommonProps } from '@interfaces/utils';
import { LinkProps } from 'next/link';

export interface buttonTypes extends ReturnCommonProps, Partial<Pick<LinkProps, 'href'>> {
  variant?: 'text' | 'contained' | 'outlined';
  onClick?: () => void;
  disabled?: boolean;
  skipLocaleHandling?: true | false;
}
