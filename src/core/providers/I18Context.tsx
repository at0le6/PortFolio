import React, { FC, createContext, useEffect, useState } from 'react';
import CookieCutter from 'cookie-cutter';
import { Return_ChildrenReactNode } from '@interfaces/utils';
import type { I18Type, ChangeI18ContextType } from '@interfaces/providers/I18Context';
import languageDetector from '@libs/languageDetector';
import { useTranslation } from '@hooks';
import { getHref } from '@utils/pathFormati18';
import { NextRouter, useRouter } from 'next/router';
import { useRedirect } from '@hooks';

export const I18nContext = createContext<ChangeI18ContextType | null>(null);

export const I18nProvider: FC<Return_ChildrenReactNode> = ({
  children
}: Return_ChildrenReactNode) => {
  const getDefault = () => {
    try {
      const exist: string = CookieCutter.get('lng');
      if (exist) return exist;
    } catch (error) {
      console.log(error);
      return languageDetector.detect();
    }
  };
  const [lng, setLng] = useState<I18Type>(getDefault() || languageDetector.detect());
  const [loanding, setLoanding] = useState(false);

  const toggleLng = () => {
    const toggle = lng == 'es' ? 'en' : 'es';
    setLng(toggle);
    CookieCutter.set('lng', toggle, { path: '/' });
    console.log(toggle);
    useRedirect(null, toggle);
  };
  useEffect(() => {
    if (loanding == true) {
      setLoanding(false);
      useRedirect(null, lng); //rework:comes from other page ? redirect + lng  : router.push(lng)
    }
  }, [loanding]);
  return (
    <I18nContext.Provider
      value={{ setLng, lng, toggleLng, loandingI18: { loanding, setLoanding } }}
    >
      {children}
    </I18nContext.Provider>
  );
};
