import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type AppPropsWithLayout = AppProps & {
  Component: Page;
};

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
