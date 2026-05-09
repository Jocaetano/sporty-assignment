'use client';

import { createContext, useContext } from 'react';

export const SportFilterContext = createContext<{
  sportFilter: string | undefined;
  setSportFilter: (sportFilter: string | undefined) => void;
}>({
  sportFilter: undefined,
  setSportFilter: () => {},
});

export function useSportFilter() {
  return useContext(SportFilterContext);
}
