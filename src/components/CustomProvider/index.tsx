import React, { createContext, ReactNode } from 'react';
import useRoomCustomState from '../../hooks/useRoomCustomState/useRoomCustomState';

export interface ICustomContext {
  extendMinutes: number;
  setExtendMinutes: Function;
}

interface VideoProviderProps {
  children: ReactNode;
}

export const CustomContext = createContext<ICustomContext>(null!);

export function CustomProvider({ children }: VideoProviderProps) {
  console.log('custom/children', children);
  const [extendMinutes, setExtendMinutes] = useRoomCustomState();

  return <CustomContext.Provider value={{ extendMinutes, setExtendMinutes }}>{children}</CustomContext.Provider>;
}
