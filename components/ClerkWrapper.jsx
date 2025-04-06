'use client';

import { ClerkProvider } from '@clerk/nextjs';

export function ClerkWrapper({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
