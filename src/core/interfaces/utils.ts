import { ReactElement, ReactNode } from 'react';

export type Return_ObjectString = {
  [key: string]: string;
};
export type Return_ObjectNumber = {
  [key: string]: number;
};

export type Return_ChildrenReactNode = {
  children?: React.ReactNode | ReactElement;
};
export type ReturnCommonProps = Return_ChildrenReactNode & {
  color?:
    | `#${string}`
    | `rgba(${string})`
    | `rgb(${string})`
    | 'black'
    | 'white'
    | 'blue_dark'
    | 'blue_ligth'
    | 'accent'
    | 'extraAccent'
    | 'gray'
    | 'blue_background';
  className?: string;
  size?: 'big' | 'extraBig' | 'medium' | 'small' | 'huge';
  weight?: '200' | '400' | '600' | '700' | '800' | '900';
};
const IColor: Pick<ReturnCommonProps, 'color'>['color'] = 'accent';
export type IColor = (typeof IColor)[keyof typeof IColor];
// export type color = (typeof color)[keyof typeof color];
