import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export type I18Type = 'en' | 'es' | string;

export type ChangeI18ContextType = {
  toggleLng: () => void;
  setLng: (lng: I18Type) => void;
  lng: I18Type;
  loandingI18: {
    loanding: boolean;
    setLoanding: Dispatch<SetStateAction<boolean>>;
  };
};
