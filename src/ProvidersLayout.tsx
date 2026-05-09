import type { PropsWithChildren } from 'react';

import SportFilterProvider from '@/components/providers/SportFilterContext/SportFilterProvider';

export default function ProvidersLayout({ children }: PropsWithChildren) {
  return <SportFilterProvider>{children}</SportFilterProvider>;
}
