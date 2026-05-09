'use client';

import { type ReactNode, useState } from 'react';

import { SportFilterContext } from '.';

type SportFilterProviderProps = {
  children?: ReactNode | undefined;
};

export default function SportFilterProvider({
  children,
}: SportFilterProviderProps) {
  const [sportFilter, setSportFilter] = useState<string | undefined>(undefined);

  return (
    <SportFilterContext.Provider value={{ sportFilter, setSportFilter }}>
      {children}
    </SportFilterContext.Provider>
  );
}
