'use client';

import { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { QueryProvider } from './QueryProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <StoreProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </StoreProvider>
  );
}